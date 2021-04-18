/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import NumberOfCases from "../NumberOfCases";
import NumberOfDeath from "../NumberOfDeath";
import NumberOfRecovered from "../NumberOfRecovered";
import { useStyles } from "./HomeStyle";
import { Copyright } from "../Copyright/Copyright";
import Graphic from "../Dashboard/Graphic/Chart";
import Table1 from "../Dashboard/Tabela/Table";
import Text from './Text';
import MenuAdmin from '../Menu/MenuAdmin';


export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <MenuAdmin />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        < Text />
          <p>Informações gerais</p>
          <Grid container spacing={3}>
            <Grid item xs={12} md={2} lg={2}>
              <Paper >
                <NumberOfCases />
              </Paper>
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <Paper >
                <NumberOfDeath />
              </Paper>
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <Paper >
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
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
