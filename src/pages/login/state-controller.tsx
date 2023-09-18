import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { showMessage } from "utils/notification";
import { showErrorMessage } from "utils/notification";
import UserModel from "models/user/user";
import { getAuth, signInWithEmailAndPassword   } from "firebase/auth";

const useStateController = () => {
    const [payload, setPayload] = useState({
        username: "",
        password: ""
    })
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

    const setUsername = (val: string) => {
        setPayload({...payload, username: val});
    }

    const setPassword = (val: string) => {
        setPayload({...payload, password: val});
    }

    const setDisability = () => {
        setIsDisabled( !payload.username );
    }

    const login = async () => {
        setIsDisabled(true);

        const auth = getAuth();
        const user = auth.currentUser;
        const email = payload.username;
        const password = payload.password;
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const userModel = new UserModel();
            const userData = userCredential.user as any;
            const email = userData.email;
            const accessToken = userData.accessToken;
            userModel.setCredential(accessToken, email);
            setIsDisabled(false);
            showMessage("User signed-in succesfully");
            navigate("/")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message.replace("Firebase:", "");
            showErrorMessage(errorMessage);
            setIsDisabled(false);
          });
    }

    useEffect(() => {
        setDisability();
    }, [payload])

    return { payload, isDisabled, login, setUsername, setPassword }
}

export default useStateController;