import { useCallback } from "react";
import { useRouter } from "next/router";
import UsernameSelector from "../components/username-selector";
import styles from "./advize-question-flow3.module.css";
const AdvizeQuestionFlow3 = () => {
  const router = useRouter();

  const onUsernameInputClick = useCallback(() => {
    router.push("/advize-question-flow2");
  }, [router]);

  const onGroupContainerClick = useCallback(() => {
    router.push("/advize-question-flow1");
  }, [router]);

  const onGroupContainer1Click = useCallback(() => {
    router.push("/advize-question-flow4");
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
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.submit}>Submit</div>
      </div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer1Click}>
        <div className={styles.groupItem} />
        <div className={styles.back}>Back</div>
      </div>
      <UsernameSelector onUsernameInputContainer4Click={onUsernameInputClick} />
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
        <div className={styles.groupChild4} />
        <div className={styles.groupChild5} />
        <div className={styles.groupChild6} />
      </div>
    </div>
  );
};

export default AdvizeQuestionFlow3;
