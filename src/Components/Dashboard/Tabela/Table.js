/* eslint-disable no-lone-blocks */ 
import { Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const drawerWidth = 240;

const Filter = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    toolbar: {
      paddingRight: 24,
    },
    toolbarIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 0px",
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: "none",
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
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
  }));
  const [data, setData] = useState([]);
  const [sumCases, setSumCases] = useState();
  const [sumDeaths, setSumDeaths] = useState([]);
  const [sumRecovered, setSumRecovered] = useState([]);

  const [modal, setModal] = useState("Número de casos");
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  useEffect(() => {
    fetch(
      "https://disease.sh/v3/covid-19/countries?yesterday=1&twoDaysAgo=0&sort=cases&allowNull=0",
      {
        method: "GET",
        mode: "cors",
      }
    )
      .then((resp) => resp.json())
      .then((json) => {
        const dataBase = json;
        const dataCases = dataBase.map((cases) => cases.cases);
        const dataDeaths = dataBase.map((deaths) => deaths.deaths);
        const dataRecovered = dataBase.map((recovered) => recovered.recovered);
        const sumCs = dataCases.reduce(
          (accumulator, currentValue) => accumulator + currentValue
        );
        const sumDth = dataDeaths.reduce(
          (accumulator, currentValue) => accumulator + currentValue
        );
        const sumRec = dataRecovered.reduce(
          (accumulator, currentValue) => accumulator + currentValue
        );
        setSumCases(sumCs);
        setSumDeaths(sumDth);
        setSumRecovered(sumRec);
        setData(json);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSelect = (e) => {
    setModal(e.target.value);
  };

  return (
    <>
      <div>
        Filtrar por:{" "}
        <select value={modal} onChange={handleSelect}>
          <option>Número de casos</option>
          <option>Número de mortes</option>
          <option>Número de recuperados</option>
        </select>
      </div>{" "}
      <br />
      <Paper className={fixedHeightPaper}>
        <div>
          {modal === "Número de casos" ? (
            <table>
              <tbody>
                <tr>
                  <th>País</th>
                  <th>Total de Casos</th>
                </tr>
                {data.map((data) => (
                  <tr>
                    <td>{data.country}</td>
                    <td>{data.cases.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
              <tbody>
                <tr>
                  <td><b>Total:</b></td>
                  <td><b>{sumCases}</b></td>
                </tr>
              </tbody>
            </table>
          ) : modal === "Número de mortes" ? (
            <table>
              <tbody>
                <tr>
                  <th>País</th>
                  <th>Número de Mortes</th>
                </tr>
                {data.map((data) => (
                  <tr>
                    <td>{data.country}</td>
                    <td>{data.deaths.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
              <tbody>
                <tr>
                  <td><b>Total:</b></td>
                  <td><b>{sumDeaths}</b></td>
                </tr>
              </tbody>
            </table>
          ) : modal === "Número de recuperados" ? (
            <table>
              <tbody>
                <tr>
                  <th>País</th>
                  <th>Número de Recuperados</th>
                </tr>
                {data.map((data) => (
                  <tr>
                    <td>{data.country}</td>
                    <td>{data.recovered.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
              <tbody>
                <tr>
                  <td><b>Total:</b></td>
                  <td><b>{sumRecovered}</b></td>
                </tr>
              </tbody>
            </table>
          ) : (
            <></>
          )}
        </div>
      </Paper>
    </>
  );
};

export default Filter;
