import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { firebaseApp } from "./config/firebase.config";
import { useRouter } from 'next/router';

const login = () => {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider;
  const router = useRouter();
  const signIn = async () =>{
        const {user} = await signInWithPopup(firebaseAuth, provider);
        const {refreshToken, providerData} = user;
        localStorage.setItem("user", JSON.stringify(providerData));
        localStorage.setItem("accessToken", JSON.stringify(refreshToken));
        router.push("/");

  }
    return (
    <>
    <h1>Log In Page</h1>
    <button onClick={signIn}>Sign-in</button>
    </>
  )
}

export default login;