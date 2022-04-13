import "../styles/index.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FireBasics</title>
        <link
          rel="icon"
          href="https://cdn-icons.flaticon.com/png/512/2403/premium/2403711.png?token=exp=1649849411~hmac=9deee6e4945ce03eb6ef1a0711623d20"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
