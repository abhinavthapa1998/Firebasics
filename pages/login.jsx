import React from "react";
import { Button, Box } from "@mui/material";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "./config/firebase.config";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Background from "../components/Background";

function login() {
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
    <>
      <Navbar />
      <Box
        display="flex"
        marginTop="10%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <h1>Welcome!</h1>
        <Button variant="contained" onClick={signIn}>
          Sign-in
        </Button>
      </Box>
      <Background />
    </>
  );
}

export default login;
