import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import { Button } from "../";
import styles from "./index.module.css";
// import Profile from "../../../../public/profile.webp";
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

export function Popup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
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
              <Grid item xs={6}>
                <p className={styles.correctWord}>
                  The correct word was: <span>Sassier</span>
                </p>
                <p className={styles.meaning}>
                  <span>Meaning:</span> Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit ut aliquam, purus sit amet luctus
                </p>
                <div className="profile">
                  {/* <img src={Profile} alt="profile" height="20px" width="20px" /> */}
                  <p>Ritvick V. Pandey</p>
                  <p>@ritvick_culous</p>
                </div>
              </Grid>
              <Grid item xs={6}>
                <p>Personal Statistics:</p>
                <p>Rank:#67</p>
                <p>Highest Streak:77 days</p>
                <p>Current Streak:4 days</p>
                <Button type="secondary">Refer a friend</Button>
                <Button type="primary">Next Round</Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </BootstrapDialog>
    </div>
  );
}

export default Popup;
