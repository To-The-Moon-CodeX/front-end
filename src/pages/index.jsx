import Head from "next/head";
import { Dashboard, Landing } from "../containers";
import styles from "../styles/Landing.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to daily wallet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </div>
  );
}
