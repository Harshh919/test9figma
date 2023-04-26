import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./register-container.module.css";
const RegisterContainer = () => {
  const router = useRouter();

  const onRegisterBtnContainerClick = useCallback(() => {
    router.push("/dashboard");
  }, [router]);

  return (
    <div className={styles.registerCard}>
      <div className={styles.signUpFormCard} />
      <div className={styles.welcomeBackToContainer}>
        <span>{`Welcome back to `}</span>
        <span className={styles.a}>A</span>
        <span className={styles.dvizer}>DVIZER</span>
      </div>
      <div className={styles.registerBtn} onClick={onRegisterBtnContainerClick}>
        <div className={styles.registerBtnChild} />
        <div className={styles.signIn}>Sign In</div>
      </div>
      <div className={styles.emailInputParent}>
        <div className={styles.emailInput}>
          <div className={styles.emailInputChild} />
          <div className={styles.email}>Email</div>
        </div>
        <div className={styles.passwordInput}>
          <div className={styles.emailInputChild} />
          <div className={styles.password}>Password</div>
        </div>
      </div>
    </div>
  );
};

export default RegisterContainer;
