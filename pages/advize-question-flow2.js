import Head from "next/head";
import { useCallback } from "react";
import { useRouter } from "next/router";
import UsernameSelector from "../components/username-selector";
import styles from "./advize-question-flow2.module.css";
const AdvizeQuestionFlow2 = () => {
  const router = useRouter();

  const onUsernameInputClick = useCallback(() => {
    router.push("/advize-question-flow3");
  }, [router]);

  return (
    <div className={styles.advizeQuestionFlow}>
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
      </div>
      <div className={styles.whatDoYou}>
        What do you want to achieve from your marketing campaign?
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.back}>Back</div>
      </div>
      <div className={styles.usernameInputParent}>
        <div className={styles.usernameInput}>
          <div className={styles.usernameInputChild} />
          <div className={styles.costEfficient}>Cost efficient</div>
        </div>
        <div className={styles.usernameInput1}>
          <div className={styles.usernameInputItem} />
          <div className={styles.costEfficient}>Strictly conversion</div>
        </div>
        <div className={styles.usernameInput2}>
          <div className={styles.usernameInputItem} />
          <div className={styles.costEfficient}>More brand awareness</div>
        </div>
        <div className={styles.usernameInput3}>
          <div className={styles.usernameInputItem} />
          <div className={styles.costEfficient}>
            More traffic on the website
          </div>
        </div>
      </div>
      <UsernameSelector onUsernameInputContainer4Click={onUsernameInputClick} />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
        <div className={styles.groupChild4} />
        <div className={styles.groupChild5} />
        <div className={styles.groupChild6} />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild7} />
        <div className={styles.submit}>Submit</div>
      </div>
    </div>
  );
};

export default AdvizeQuestionFlow2;
