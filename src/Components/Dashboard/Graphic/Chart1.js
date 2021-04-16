/* eslint-disable no-lone-blocks */
import { Paper } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useStyles } from "../../Home/HomeStyle";
import clsx from "clsx";
import "../../../App.css"

const Continent = () => {
  const [filterByCountry, setFilter] = useState([]);
  // const [data, setData] = useState([]);
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/continents', {
      method: 'GET',
      mode: 'cors',
    })
      .then((resp) => resp.json())
      .then((json) => setFilter(json))
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <>
     
      <h2>Informações específicas por Continente:</h2>
      <div>
      <Paper className={fixedHeightPaper}>

      <div className='container-table'>
              {filterByCountry.map((data) => (
                <tr>
                  <td>{data.continent}</td>
                  <td>{(data.recovered).toLocaleString()}</td>
                </tr>
              )
        )}
      </div>
      </Paper>
      </div>
    </>
  );
};

export default Continent;
