import { useCallback } from "react";
import { FormControlLabel, Radio } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./advize-question-flow6.module.css";
const AdvizeQuestionFlow6 = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/advize-question-flow5");
  }, [router]);

  const onGroupContainer1Click = useCallback(() => {
    router.push("/advize-question-flow8");
  }, [router]);

  return (
    <div className={styles.advizeQuestionFlow}>
      <div className={styles.nav}>
        <div className={styles.navBg} />
        <div className={styles.advizerAi}>ADVIZER AI</div>
      </div>
      <div className={styles.chooseThePlatforms}>
        Choose the platforms for your ADs
      </div>
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.next}>Next</div>
      </div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer1Click}>
        <div className={styles.groupItem} />
        <div className={styles.back}>Back</div>
      </div>
      <img
        className={styles.advizeQuestionFlowChild}
        alt=""
        src="/group-28.svg"
      />
      <img
        className={styles.advizeQuestionFlowItem}
        alt=""
        src="/group-30.svg"
      />
      <img
        className={styles.advizeQuestionFlowInner}
        alt=""
        src="/group-28.svg"
      />
      <div className={styles.google}>Google</div>
      <div className={styles.facebook}>Facebook</div>
      <FormControlLabel
        className={styles.groupFormcontrollabel}
        label=""
        control={<Radio color="primary" />}
      />
      <div className={styles.instagram}>Instagram</div>
      <FormControlLabel
        className={styles.advizeQuestionFlowChild1}
        label=""
        labelPlacement="end"
        control={<Radio color="primary" />}
      />
      <div className={styles.twitter}>Twitter</div>
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

export default AdvizeQuestionFlow6;
