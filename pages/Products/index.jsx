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
      <h1>Products</h1>;
      <div>
        <img src={props.articles} />
      </div>
    </>
  );
};

export default index;

export async function getServerSideProps() {
  let data = "https://picsum.photos/200/300";
  return {
    props: {
      articles: data,
    },
  };
}
