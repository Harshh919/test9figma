import { useMemo } from "react";
import styles from "./choose-container.module.css";
const ChooseContainer = ({
  rectangle21Top,
  rectangle21Left,
  rectangle21Cursor,
  onGroupContainer2Click,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      top: rectangle21Top,
      left: rectangle21Left,
      cursor: rectangle21Cursor,
    };
  }, [rectangle21Top, rectangle21Left, rectangle21Cursor]);

  return (
    <div
      className={styles.usernameInputParent}
      style={groupDiv1Style}
      onClick={onGroupContainer2Click}
    >
      <div className={styles.usernameInput}>
        <div className={styles.usernameInputChild} />
        <div className={styles.choose}>Choose</div>
      </div>
      <img className={styles.groupChild} alt="" src="/rectangle-21.svg" />
    </div>
  );
};

export default ChooseContainer;
