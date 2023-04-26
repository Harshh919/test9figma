import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./a-d-v-i-z-e-r-container.module.css";
const ADVIZERContainer = () => {
  const router = useRouter();

  const onRegisterTextClick = useCallback(() => {
    router.push("/dashboard");
  }, [router]);

  return (
    <div className={styles.registerCard}>
      <div className={styles.signUpFormCard} />
      <div className={styles.welcomeToAdvizerContainer}>
        <span>{`Welcome to `}</span>
        <span className={styles.advizer}>ADVIZER</span>
      </div>
      <div className={styles.registerBtn}>
        <div className={styles.registerBtnChild} />
        <div className={styles.register} onClick={onRegisterTextClick}>
          Register
        </div>
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
          <div className={styles.username}>Password</div>
        </div>
      </div>
    </div>
  );
};

export default ADVIZERContainer;
