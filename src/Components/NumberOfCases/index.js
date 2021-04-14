import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function NumberOfCases() {
    const [numberOfCases, setCases] = useState([]);

    useEffect(() => {
      fetch('https://disease.sh/v3/covid-19/all', {
        method: 'GET',
        mode:"cors"
      })
        .then((resp) => resp.json())
        .then((json) => setCases(json.cases))
        .catch((error) => console.log(error));
    }, []);
    
    return (
      <CardContent>
        <section className="number-of-cases">
          <Typography variant="center" component="center">
            <h3>Número de Casos</h3>
          </Typography>
          <Typography variant="center" component="center">
            <h3>{numberOfCases}</h3>
          </Typography>
        </section>
      </CardContent>
    );
  }
  
  export default NumberOfCases;
  