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
      <h1>Contact us!</h1>;
      <img src={props.contact} />
    </>
  );
};

export default index;

export async function getStaticProps() {
  const contact =
    "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  return {
    props: {
      contact,
    },
  };
}
