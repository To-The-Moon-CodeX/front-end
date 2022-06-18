import React from "react";
import Head from "next/head";
import { Dashboard } from "../../containers";
import styles from "../../styles/Dashboard.module.css";

const DashboardPage = () => {
  return (
    <div>
      <Head>
        <title>Welcome to daily wallet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
