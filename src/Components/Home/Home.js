/* eslint-disable no-unused-vars */
import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import NumberOfCases from "../NumberOfCases";
import NumberOfDeath from "../NumberOfDeath";
import NumberOfRecovered from "../NumberOfRecovered";
import { makeStyles } from "@material-ui/core/styles";
import { Footer } from "../Footer/Footer";
import Graphic from "../Dashboard/Graphic/Chart";
import Table1 from "../Dashboard/Tabela/Table";
import Text from './Text';
import clsx from "clsx";
import MenuAdmin from '../Menu/MenuAdmin';
const drawerWidth = 240;

export default function Dashboard() {
  const useStyles = makeStyles((theme) => ({
    
    root: {
    display: "flex"
    },
    toolbar: {
    paddingRight: 24 
    },
    toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 0px",
    ...theme.mixins.toolbar
    },
    appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
    })
    },
    appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
    })
    },
    menuButton: {
    marginRight: 36
    },
    menuButtonHidden: {
    display: "none"
    },
    title: {
    flexGrow: 1
    },
    drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
    })
    },
    drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
    width: theme.spacing(9)
    }
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
    },
    container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
    },
    paper: {
    padding: 15,
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    border: "1px solid gray"
    },
    fixedHeight: {
    height: 445
    }
    }));
const classes = useStyles();
const fixedHeightPaper = clsx(classes.paper);
  return (
    <div className={classes.root}>
      <MenuAdmin title={'Dashboard'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        < Text />
          <p>Informações gerais</p>
          <Grid container spacing={3}>
            <Grid item xs={12} md={2} lg={2}>
              <Paper className={fixedHeightPaper} >
                <NumberOfCases />
              </Paper>
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <Paper className={fixedHeightPaper}>
                <NumberOfDeath />
              </Paper>
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <Paper className={fixedHeightPaper}>
                <NumberOfRecovered />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}></Grid>
            <Grid item xs={12} md={10} lg={6}>
              <Table1 />
            </Grid>
            <Grid item xs={12} md={10} lg={6}>
              <p>Casos confirmados por Continente</p>
              <Paper>
                <Graphic />
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
}
