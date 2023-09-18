import { useState } from 'react';
import { useEffect } from 'react';
import { showMessage } from "utils/notification";
import { showErrorMessage } from "utils/notification";
import UserService from "services/UserService";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const useStateController = () => {
    const [payload, setPayload] = useState({
        fullname: "",
        username: "",
        password: ""
    })
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

    const setFullname = (val: string) => {
        setPayload({...payload, fullname: val});
    }

    const setUsername = (val: string) => {
        setPayload({...payload, username: val});
    }

    const setPassword = (val: string) => {
        setPayload({...payload, password: val});
    }

    const setDisability = () => {
        setIsDisabled( !payload.username || !payload.password );
    }

    const register = async () => {
        setIsDisabled(true);
        const auth = getAuth();
        const email = payload.username;
        const password = payload.password;
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            setIsDisabled(false);
            showMessage("User registered successfully");
            navigate("/login")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message.replace("Firebase:", "");
            showErrorMessage(errorMessage)
            setIsDisabled(false);
            // ..
          });
    }

    useEffect(() => {
        setDisability();
    }, [payload])

    return { payload, register, setUsername, setPassword, setFullname, isDisabled }
}

export default useStateController;