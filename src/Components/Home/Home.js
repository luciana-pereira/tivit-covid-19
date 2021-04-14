/* eslint-disable no-unused-vars */
import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import NumberOfCases from "../NumberOfCases"
import NumberOfDeath from "../NumberOfDeath";
import NumberOfRecovered from "../NumberOfRecovered";
import { useStyles } from "./HomeStyle";
import { Copyright } from "../Copyright/Copyright";
import Graphic from "../Dashboard/Grafico/Chart"
import Table1 from "../Dashboard/Tabela/Table"

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const newDate = new Date();
  const date = newDate.getDate();
  const month = (newDate.getMonth() + 1);
  const year = newDate.getFullYear();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
      >
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <h1><b>COVID-19</b></h1>
        <p>`Números relacionados a quantidade de casos identificados até  o dia:{date}/{month}/{year}`</p>

        <Container maxWidth="lg" className={classes.container}>
              <p>Informações gerais</p>
          <Grid container spacing={3}>
            <Grid item xs={12} md={2} lg={2}>
              <Paper>
                <NumberOfCases />
              </Paper>
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <Paper>
                <NumberOfDeath />
              </Paper>
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <Paper>
                <NumberOfRecovered />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
            </Grid>
            <Grid item xs={12} md={10} lg={6}>
                <Table1 />
            </Grid>
            <Grid item xs={12} md={10} lg={6}>
              <p>Casos confirmados por Continente</p>
              <Paper><Graphic /></Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}