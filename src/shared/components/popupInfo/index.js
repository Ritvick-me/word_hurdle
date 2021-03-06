import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import { LetterBox } from "../index";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./index.module.css";
import {
  DUMMY_CELL_CONTENT_HEART,
  DUMMY_CELL_CONTENT_SLICE,
  DUMMY_CELL_CONTENT_ABSENT,
} from "../../utils/gridBody";
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

export function PopupInfo(props) {
  const handleClose = () => {
    props.setOpenInfoModal(false);
  };

  return (
    <BootstrapDialog
      onClose={() => props.setOpenInfoModal(false)}
      aria-labelledby="customized-dialog-title"
      open={props.openInfoModal}
      fullWidth
      maxWidth="sm"
    >
      <div className={styles.popup}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <h3 className={styles.headerTitle}>HOW TO PLAY</h3>
          <Divider />
        </BootstrapDialogTitle>
        <div className={styles.contentContainer}>
          <p className={styles.boldText}>
            Guess the Health Word in eight tries.
          </p>
          <p>
            Each guess must be a valid word. Hit the enter button to submit.
          </p>
          <p>
            After each guess, the color of the tiles will change to show how
            close your guess was to the word.
          </p>
          <Divider />
          <p className={styles.boldText}>Examples</p>
          <p>
            The letter <span className={styles.boldText}>H</span> is in the word
            and in the correct spot.
          </p>
          <div className={"gameGrid-row gamegrid-col-count-5"}>
            {DUMMY_CELL_CONTENT_HEART.map((body, index) => (
              <LetterBox key={body.text} type={body.type}>
                {body.text}
              </LetterBox>
            ))}
          </div>

          <p>
            The letter <span className={styles.boldText}>I</span> is in the word
            but in the wrong spot.
          </p>
          <div className={"gameGrid-row gamegrid-col-count-5"}>
            {DUMMY_CELL_CONTENT_SLICE.map((body, index) => (
              <LetterBox key={body.text} type={body.type}>
                {body.text}
              </LetterBox>
            ))}
          </div>
          <p>The letter T is not in the word in any spot.</p>
          <div className={"gameGrid-row gamegrid-col-count-5"}>
            {DUMMY_CELL_CONTENT_ABSENT.map((body, index) => (
              <LetterBox key={body.text} type={body.type}>
                {body.text}
              </LetterBox>
            ))}
          </div>
          <div className={styles.customMargin} />
          <Divider />
          <p className={styles.boldText}>
            A new word will be available each day!
          </p>
        </div>
      </div>
    </BootstrapDialog>
  );
}

export default PopupInfo;
