import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./advize-question-flow11.module.css";
const AdvizeQuestionFlow11 = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/advize-question-flow10");
  }, [router]);

  const onGroupContainer1Click = useCallback(() => {
    router.push("/advize-question-flow12");
  }, [router]);

  return (
    <div className={styles.advizeQuestionFlow}>
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
      </div>
      <div className={styles.whichBusinessDo}>Which business do you own?</div>
      <form className={styles.usernameInput}>
        <div className={styles.usernameInputChild} />
        <div className={styles.enterYourAnswer}>Enter your answer here</div>
      </form>
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.next}>Next</div>
      </div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer1Click}>
        <div className={styles.groupItem} />
        <div className={styles.back}>Back</div>
      </div>
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

export default AdvizeQuestionFlow11;
