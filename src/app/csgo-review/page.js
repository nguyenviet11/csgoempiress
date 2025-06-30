'use client'
import styles from "./page.module.css";
import circel from "../../../public/R-tron.png";
import image from "../../../public/image.png";
import Image from "next/image";

export default function Home() {
  const handleClick = () => {
      window.location.href = "/csgoempires-connecting"; 
  }

  return (
    <div
      // onMouseMove={handleClick}
      // onClick={handleClick}
    >
      <main className={styles.main}>
       As a global specialist in the logistics industry for more than 20 years, we will help to optimize your supply chain in terms of financial, operational and information flows. We provide a comprehensive range of services delivering your efficiency and the best satisfaction.

      </main>
    </div>
    
  );
}