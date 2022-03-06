import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import { Button } from "../";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./index.module.css";
import Profile from "../../../assets/img/profile.webp";
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

  const handleClose = () => {
    props.setToggleModal(false);
  };

  return (
    <BootstrapDialog
      onClose={props.setToggleModal}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth
      maxWidth="md"
    >
      <div className={styles.popup}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <h3 className={styles.headerTitle}>Perfect Game!</h3>
        </BootstrapDialogTitle>
        <div className={styles.contentContainer}>
          <Grid container>
            <Grid item lg={6} md={isPhone ? 12 : 6} sm={12}>
              <p className={styles.correctWord}>
                The correct word was: <span>Sassier</span>
              </p>
              <p className={styles.meaning}>
                <span>Meaning:</span> Lorem ipsum dolor sit amet, consectetur
                adipiscing elit ut aliquam, purus sit amet luctus
              </p>
              {!props.guest && (
                <div className={styles.profileContainer}>
                  <img src={Profile} alt="profile" />
                  <div className={styles.profileDetails}>
                    <p className={styles.name}>Ritvick V. Pandey</p>
                    <p className={styles.id}>@ritvick_culous</p>
                  </div>
                </div>
              )}
            </Grid>
            <Grid item lg={6} md={isPhone ? 12 : 6} sm={12}>
              <div className={styles.stats}>
                <p className={styles.statsTitle}>Personal Statistics:</p>
                <div
                  className={`${styles.statsContainer} ${
                    props.guest && styles.blurContainer
                  }`}
                >
                  <div className={styles.statsGroup}>
                    <p className={`${styles.item} ${styles.itemOne}`}>
                      <span>Rank: </span>#67
                    </p>
                    <p className={`${styles.item} ${styles.itemTwo}`}>
                      <span>Score: </span>55775
                    </p>
                  </div>
                  <div className={styles.statsGroup}>
                    <p className={`${styles.item} ${styles.itemThree}`}>
                      <span>Highest Streak: </span>77 days
                    </p>
                    <p className={`${styles.item} ${styles.itemFour}`}>
                      <span>Current Streak: </span>4 days
                    </p>
                  </div>
                </div>
                {props.guest && (
                  <div className={styles.guestContainer}>
                    <p className={styles.guestScore}>
                      <span>Score: </span>560
                    </p>
                    <p className={styles.guestSignIn}>
                      Please <span>sign in</span> for more stats
                    </p>
                  </div>
                )}
              </div>
              <div className={styles.btnContainer}>
                <div className={styles.dialogBtn}>
                  <Button type="secondary" size="dialogBtn">
                    Refer a friend
                  </Button>
                </div>
                <div className={styles.dialogBtn}>
                  <Button type="primary" size="dialogBtn">
                    Next Round
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </BootstrapDialog>
  );
}

export default Popup;
