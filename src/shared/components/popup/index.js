import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "../";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./index.module.css";
import UserContext from "../../contexts/userContext";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export function Popup(props) {
  const isPhone = useMediaQuery("(max-width:1024px)");
  // useEffect(() => {
  //   setIsMobile(isPhone);
  // }, [isPhone]);
  // const [isMobile, setIsMobile] = useState(isPhone);
  const [open, setOpen] = React.useState(false);

  const { user } = useContext(UserContext);
  // console.log(user);

  const handleClose = () => {
    props.resetGame();
    props.setToggleModal(false);
  };

  return (
    <BootstrapDialog
      onClose={() => props.setToggleModal(false)}
      aria-labelledby="customized-dialog-title"
      open={props.toggleModal}
      fullWidth
      maxWidth="sm"
    >
      <div className={styles.popup}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <h3 className={styles.headerTitle}>{props.gameCompleted}Hey! you won</h3>
        </BootstrapDialogTitle>
        <div className={styles.contentContainer}>
              <p className={styles.correctWord}>
                The correct word was: <span>{props.newWord}Apple</span>
              </p>
              <div>
                    <p className={styles.guestScore}>
                      <span>Your Score: </span>
                      {props.score}
                    </p>
              </div>
              <div className={styles.btnContainer}>
                <div className={styles.dialogBtn}>
                  <Button type="secondary" size="dialogBtn">
                    Share it
                  </Button>
                </div>
                <div className={styles.dialogBtn}>
                  <Button type="primary" size="dialogBtn" onClick={handleClose}>
                    Read more
                  </Button>
                </div>
              </div>
        </div>
      </div>
    </BootstrapDialog>
  );
}

export default Popup;
