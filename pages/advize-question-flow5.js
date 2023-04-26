import { useCallback } from "react";
import AIAdvizerContainer from "../components/a-i-advizer-container";
import { useRouter } from "next/router";
import styles from "./advize-question-flow5.module.css";
const AdvizeQuestionFlow5 = () => {
  const router = useRouter();

  const onGroupContainer1Click = useCallback(() => {
    router.push("/advize-question-flow4");
  }, [router]);

  const onGroupContainer2Click = useCallback(() => {
    router.push("/advize-question-flow6");
  }, [router]);

  return (
    <div className={styles.advizeQuestionFlow}>
      <AIAdvizerContainer />
      <div className={styles.yourTargetCountry}>Your target country?</div>
      <div className={styles.rectangleParent} onClick={onGroupContainer1Click}>
        <div className={styles.groupChild} />
        <div className={styles.next}>Next</div>
      </div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer2Click}>
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

export default AdvizeQuestionFlow5;
