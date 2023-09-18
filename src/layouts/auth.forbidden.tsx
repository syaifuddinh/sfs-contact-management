import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import UserService from "services/UserService";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthForbidden = ({ children }: { children: any }) => {
    const user = new UserService();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const updateAuth = async () => {

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            navigate("/")
            // ...
          } else {
            setIsLoading(false)
            // User is signed out
            // ...
          }
        });
        // if(isAuth === false) navigate("/login");
        // else 
        //     setIsLoading(false);
    }

    useEffect(() => {
        updateAuth();
    }, []);

    return <>
        { isLoading === true && (
            <h1 style={{position: "fixed", left: "45%", top: "5rem"}}>
                Loading....
            </h1>
        )}
        { isLoading === false && (
            <>
                { children }
            </>
        )}
    </>
}

export default AuthForbidden;