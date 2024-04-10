import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { red, grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Components } from "@mui/material/styles";

export const AppBarOverrides: Components = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        height: 70,
        color: red[700],
        backgroundColor: grey[50],
        width: "100%",
        //'&:hover': {
        //  backgroundColor: red[700],
        //},
      },
    },
  },
};

export const TopBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar elevation={0} position="static">
        <Toolbar>
          <Grid container>
            <Grid
              item
              sm={6}
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Typography variant="h2" sx={{ flexGrow: 1 }}>
                Put That On The T-Shirt
              </Typography>
            </Grid>
            <Grid
              item
              sm={6}
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Button variant="outlined" onClick={handleClickOpen}>
                <Typography variant="h3">What's This?</Typography>
              </Button>
            </Grid>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"What this Site suppose to be?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  It's a little fun project to build a vite app with Mui, React
                  and React Spring. It is still under construction. The content
                  is a homage to the times Shaq asked to put something funny
                  happening on Inside the NBA on TnT on a Tshirt. It will be
                  continued the more Art is created and avalaible to be put on a
                  Tshirt. Also checkout my other Projects in my Repo:{" "}
                  <a href="https://github.com/derSaeed99">
                    github.com/derSaeed99
                  </a>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button variant="contained" onClick={handleClose}>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
