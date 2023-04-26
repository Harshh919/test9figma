import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./welcome-card.module.css";
const WelcomeCard = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/dashboard-mobile");
  }, [router]);

  return (
    <div className={styles.registerCard}>
      <div className={styles.signUpFormCard} />
      <div className={styles.welcomeToAdvizerContainer}>
        <span className={styles.welcomeToAdvizerContainer1}>
          <span>{`Welcome to `}</span>
          <span className={styles.advizerAi}>ADVIZER AI</span>
        </span>
      </div>
      <div className={styles.registerBtn}>
        <div className={styles.registerBtnChild} onClick={onRectangleClick} />
        <div className={styles.register}>Register</div>
      </div>
      <div className={styles.usernameInputParent}>
        <div className={styles.usernameInput}>
          <div className={styles.usernameInputChild} />
          <div className={styles.username}>Username</div>
        </div>
        <div className={styles.emailInput}>
          <div className={styles.usernameInputChild} />
          <div className={styles.email}>Email</div>
        </div>
        <div className={styles.passwordInput}>
          <div className={styles.usernameInputChild} />
          <div className={styles.password}>Password</div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
