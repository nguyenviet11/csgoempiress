import { redirect } from "next/navigation";
import styles from "./page.module.css";
import { FcOk } from "react-icons/fc";

export const metadata = {
  title: 'Redirecting...',
  description: 'Checking connection security...',
  robots: 'noindex, nofollow',
}

export default function page() {
    redirect('https://blogreview.pro/skins/review-csgoempire');
  
  return (
    <div>
      <main className={styles.main}>
        <h3 className={styles.text}>
        CSGOEmpires Official Site{""}
          <span
            style={{ transform: "translate(0px)", display: "inline-block" }}
          >
          </span>
        </h3>
        <p className={styles.text2}>
          Checking if the site connection is secure
        </p>
        <p className={styles.text3}>
          We needs to review the security of your connection before proceeding
          CSGOEmpires
        </p>
        <div style={{ marginTop: 30 }}>
          <span style={{display: 'inline-block', transform: 'translateY(8px)'}}><FcOk fontSize={30}/></span><span style={{marginLeft: 5}}>Sucure connection</span>
        </div>
        <p className={styles.text4}>Proceeding....</p>
      </main>
    </div>
  );
}
