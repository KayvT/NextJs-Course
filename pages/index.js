import Head from "next/head";
import Banner from "../components/Banner/Banner";
import styles from "../styles/Home.module.css";

export default function Home() {
  const handleClick = () =>{
    console.log("Whoop, I was clicked!")
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Finder App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner buttonText={"Discover Shops around you!"} handleOnClick={handleClick}/>
      </main>
    </div>
  );
}
