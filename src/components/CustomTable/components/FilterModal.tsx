import { Box, Dialog, DialogContent, DialogTitle, Button, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

interface IFilterModalProps {
  open: boolean,
  handleClose: () => void,
  title?: string
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FilterModal: React.FC<IFilterModalProps> = ({ handleClose, open, title }) => {

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      // keepMounted
      onClose={handleClose}
      PaperProps={{sx: {minWidth: 300}}}
    >
      <Box sx={{ display: "flex", p: "0 1rem", alignItems: "center" }}>
        <DialogTitle sx={{pl: 0}}>{title}</DialogTitle>
        <Button color="inherit" sx={{ ml: "auto", p: ".2rem 0", minWidth: 32 }} onClick={handleClose}>
          x
        </Button>
      </Box>
      <DialogContent>
        
      </DialogContent>
    </Dialog>
    // <Modal
    //   open={open}
    //   onClose={handleClose}
    // // aria-labelledby="filterModal-title"
    // // aria-describedby="filterModal-description"
    // >
    //   <Container>
    //     <Box sx={{ display: "flex", alignItems: "center" }}>
    //       <Typography>{title}</Typography>
    //       <IconButton sx={{ ml: "auto" }} onClick={handleClose}>
    //         x
    //       </IconButton>
    //     </Box>
    //     <Paper>
    //       <Typography>Contetnt</Typography>
    //       <Typography>Contetnt</Typography>
    //       <Typography>Contetnt</Typography>
    //       <Typography>Contetnt</Typography>
    //       <Typography>Contetnt</Typography>
    //       <Typography>Contetnt</Typography>
    //       <Typography>Contetnt</Typography>
    //       <Typography>Contetnt</Typography>
    //     </Paper>
    //   </Container>
    // </Modal>
  );
}

export default FilterModal;