import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "../";
import styles from "./index.module.css";
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
            right: 16,
            top: 16,
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
  const handleClose = () => {
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
          <span
            className={
              styles.headerTitle +
              " " +
              (props.gameCompleted === "Oops! You Lost!" && styles.headerLose)
            }
          >
            {props.gameCompleted}
          </span>
        </BootstrapDialogTitle>
        <div className={styles.contentContainer}>
          <p className={styles.correctWord}>
            The correct word was: <span>{props.newWord}</span>
          </p>
          <div>
            <p className={styles.guestScore}>
              <span>Your Score: </span>
              {props.score}
            </p>
          </div>
          <div className={styles.btnContainer}>
            <div className={styles.dialogBtn}>
              <a
                href={`https://api.whatsapp.com/send?text=Hey! I have got a score of ${props.score} in Bajaj Health Word Challenge! Beat me to it in here! https://www.google.com`}
                data-action="share/whatsapp/share"
                target="_blank"
              >
                <Button type="secondary" size="dialogBtn">
                  Share it
                </Button>
              </a>
            </div>
            <div className={styles.dialogBtn}>
              <a href={props.wordMeaning} target="_blank">
                <Button type="primary" size="dialogBtn">
                  Read more
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </BootstrapDialog>
  );
}

export default Popup;
