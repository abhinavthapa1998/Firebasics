import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NavbarLogIn from "../../components/NavbarLogIn";
import { userAccessToken } from "../utils/fetchUserDetails";
const index = () => {
  const router = useRouter();
  useEffect(() => {
    const accessToken = userAccessToken();
    //CHECKING FOR AUTHENTICATION
    if (!accessToken) {
      router.push("/login");
    }
  }, []);
  return (
    <>
      <NavbarLogIn />
      <h1>Contact us!</h1>;
    </>
  );
};

export default index;
