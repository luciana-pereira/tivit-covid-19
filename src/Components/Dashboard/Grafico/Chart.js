import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";

const data = [
  { continent: "ÁFRICA", totalcases: 2.525 },
  { continent: "ÁSIA", totalcases: 3.018 },
  { continent: "EUROPA", totalcases: 3.682 },
  { continent: "OCEANIA", totalcases: 4.44 },
  { continent: "AMERICA DO SUL", totalcases: 5.31 },
  { continent: "AMERICA DO NORTE", totalcases: 6.127 },
  { continent: "AMERICA DO CENTRAL", totalcases: 6.127 },
  { continent: "ANTARTIDA", totalcases: 6.93 }
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart data={chartData}>
          <ArgumentAxis />

          <BarSeries valueField="totalcases" argumentField="continent" />
          <Title text="Total de Casos" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}