import React from "react";
import Head from "next/head";
import { SignIn } from "../../containers";
import styles from "../../styles/SignIn.module.css";
const SignInPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign into your account</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignIn />
    </div>
  );
};

export default SignInPage;