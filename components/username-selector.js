import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import styles from "./username-selector.module.css";
const UsernameSelector = ({ onUsernameInputContainer4Click }) => {
  const [usernameInputAnchorEl, setUsernameInputAnchorEl] = useState(null);
  const usernameInputOpen = Boolean(usernameInputAnchorEl);
  const handleUsernameInputClick = (event) => {
    setUsernameInputAnchorEl(event.currentTarget);
  };
  const handleUsernameInputClose = () => {
    setUsernameInputAnchorEl(null);
  };

  return (
    <div
      className={styles.usernameInput}
      onClick={onUsernameInputContainer4Click}
    >
      <Button
        sx={{ width: 970 }}
        id="button-Choose"
        aria-controls="menu-Choose"
        aria-haspopup="true"
        aria-expanded={usernameInputOpen ? "true" : undefined}
        onClick={handleUsernameInputClick}
        color="primary"
      >
        Choose
      </Button>
      <Menu
        anchorEl={usernameInputAnchorEl}
        open={usernameInputOpen}
        onClose={handleUsernameInputClose}
      />
    </div>
  );
};

export default UsernameSelector;
