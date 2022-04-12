import React from "react";
import { Button, Box } from "@mui/material";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "./config/firebase.config";
import { useRouter } from "next/router";

const login = () => {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  //GOOGLE SIGN IN WITH STORING LOGIN LOCALLY
  const signIn = async () => {
    const { user } = await signInWithPopup(firebaseAuth, provider);
    const { refreshToken, providerData } = user;
    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));
    router.push("/");
  };
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <h1>Log In Page</h1>
      <Button variant="contained" onClick={signIn}>
        Sign-in
      </Button>
    </Box>
  );
};

export default login;
