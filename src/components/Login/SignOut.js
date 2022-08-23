import React from "react";

import { auth, signOut } from "./firebase";
import { useNavigate } from "react-router-dom";


function SignOut() {
    let navigate = useNavigate();
    signOut(auth).then(() => {
        console.log("Logged Out!")
        navigate('/');
    }).catch((error) => {
        // An error happened.
    })
}

export default SignOut