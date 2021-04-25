import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  ArgumentAxis
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";


export const Demo = () => {
  const [ filter, setFilter] = useState({});


  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/continents', {
      method: 'GET',
      mode: 'cors',
    })
      .then((resp) => resp.json())
      .then((json) => setFilter(json))
      .catch((error) => console.log(error));
  }, []);
  //const [continent, setContinent] = useState([]);
  const continent = [];
  const cases = []

  for (let i in filter) {
      continent.push(filter[i].continent);
      cases.push(filter[i].cases);
  }


  const data = [
    { continent: continent[0], totalcases: cases[0] },
    { continent: continent[1], totalcases: cases[1] },
    { continent: continent[2], totalcases: cases[2] },
    { continent: continent[3], totalcases: cases[3] },
    { continent: continent[4], totalcases: cases[4] },
    { continent: continent[5], totalcases: cases[5] },

  ];

    return (
      <Paper>
        <Chart data={data}>
          <ArgumentAxis />

          <BarSeries valueField="totalcases" argumentField="continent" />
          <Animation />
        </Chart>
      </Paper>
    );
}
export default Demo;