import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { Button } from "@material-ui/core";
import EventForm from "./EventForm"

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function NewEvent({refreshEvents}) {
const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return(
        <div>
             <Button onClick={handleClickOpen}>➕</Button>
        <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
          <EventForm closeDialog={handleClose} refreshEvents={refreshEvents} />
          </Dialog>
        </div>
    )
}