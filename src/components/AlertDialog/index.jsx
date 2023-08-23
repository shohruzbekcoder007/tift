import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({open_alert, callback1, callback2, alertText}) {

  const handleClickClose = () => {
    callback1()
    callback2()
  }



  return (
    <div>
      <Dialog
        open={open_alert}
        onClose={callback2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {alertText}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            O'chirilgan ma'lumotlar qayta tiklanmaydi
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={callback2}>O'tkazish</Button>
          <Button onClick={handleClickClose} autoFocus>
            Roziman
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}