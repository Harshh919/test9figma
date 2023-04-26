import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./welcome-back-container.module.css";
const WelcomeBackContainer = () => {
  const router = useRouter();

  const onSignInTextClick = useCallback(() => {
    router.push("/dashboard-mobile");
  }, [router]);

  return (
    <div className={styles.registerCard}>
      <div className={styles.signUpFormCard} />
      <div className={styles.welcomeBackToContainer}>
        <span className={styles.welcomeBackToContainer1}>
          <span>{`Welcome back to `}</span>
          <span className={styles.advizer}>ADVIZER</span>
        </span>
      </div>
      <div className={styles.emailInputParent}>
        <div className={styles.emailInput}>
          <div className={styles.emailInputChild} />
          <div className={styles.rounik1020gmaicom}>rounik1020@gmai.com</div>
        </div>
        <div className={styles.passwordInput}>
          <div className={styles.emailInputChild} />
          <div className={styles.password}>Password</div>
        </div>
      </div>
      <div className={styles.registerBtn}>
        <div className={styles.registerBtnChild} />
        <div className={styles.signIn} onClick={onSignInTextClick}>
          Sign In
        </div>
      </div>
    </div>
  );
};

export default WelcomeBackContainer;
