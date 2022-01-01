import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import { ApiEndpoints } from "../../config";

interface IProps {
  ssn: string;
  open: boolean;
  handleClose: () => void;
}

const ConfirmationDialog = ({ open, ssn, handleClose }: IProps) => {
  const navigate = useNavigate();

  const handleConfirm = async () => {
    try {
      await axios.delete(ApiEndpoints.singleEmployee(ssn));
      handleClose();
      navigate(0);
    } catch (e) {
      console.error(e);
      handleClose();
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Confirm to delete employee :: {ssn}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleConfirm} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationDialog;
