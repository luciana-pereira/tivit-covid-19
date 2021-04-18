import React from "react";
import MenuAdmin from "../Components/Menu/MenuAdmin";
import Logo from "../assets/DataCov.png";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import { Footer } from "../Components/Footer/Footer";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";

const PanelControl = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: 15,
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
      border: "1px solid gray",
    },
    fixedHeight: {
      height: 445,
    },
    logo: {
        height: 440,
      },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MenuAdmin title={"Dashboard"} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Paper className={classes.paper}>
                <img src={Logo} alt="Logo DataCov" className={classes.logo}/>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
};
export default PanelControl;
