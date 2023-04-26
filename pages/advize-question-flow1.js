import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./advize-question-flow1.module.css";
const AdvizeQuestionFlow1 = () => {
  const router = useRouter();

  const onGroupButton2Click = useCallback(() => {
    router.push("/advize-question-flow");
  }, [router]);

  const onGroupButton3Click = useCallback(() => {
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
      <Button
        className={styles.advizeQuestionFlowChild}
        sx={{ width: 141 }}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
        <div className={styles.groupChild4} />
      </div>
      <Button
        className={styles.advizeQuestionFlowItem}
        sx={{ width: 141 }}
        variant="contained"
        color="primary"
      >
        Back
      </Button>
      <div className={styles.advizeQuestionFlowInner} />
      <div className={styles.usernameInput}>
        <div className={styles.usernameInputChild} />
        <div className={styles.choose}>Choose</div>
        <img
          className={styles.usernameInputItem}
          alt=""
          src="/rectangle-21.svg"
        />
      </div>
      <div className={styles.advizeQuestionFlowChild1} />
      <div className={styles.awesomeRounik}>
        <span>{`Awesome, `}</span>
        <span className={styles.rounik}>Rounik!</span>
      </div>
      <div className={styles.youMadeItContainer}>
        <span className={styles.youMadeItContainer1}>
          <span>{`You made it to the end! Do your want to submit the answers and get `}</span>
          <span className={styles.advized}>ADVIZED</span>
        </span>
      </div>
      <Button
        className={styles.groupButton}
        sx={{ width: 277 }}
        variant="contained"
        color="primary"
        onClick={onGroupButton2Click}
      >
        Yes, Submit
      </Button>
      <Button
        className={styles.advizeQuestionFlowChild2}
        sx={{ width: 277 }}
        variant="contained"
        color="primary"
        onClick={onGroupButton3Click}
      >
        Cancel
      </Button>
    </div>
  );
};

export default AdvizeQuestionFlow1;
