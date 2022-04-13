import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NavbarLogIn from "../../components/NavbarLogIn";
import { userAccessToken } from "../utils/fetchUserDetails";

const index = (props) => {
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
      <h1>Pricing</h1>;
      <img src={props.prices} />
    </>
  );
};

export default index;
export async function getStaticProps() {
  const prices =
    "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  return {
    props: {
      prices,
    },
  };
}
