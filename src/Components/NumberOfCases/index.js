import React, { useState, useEffect } from 'react';


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
      <section className="number-of-cases">
        <h1>Número de Casos</h1>
        <h3>{numberOfCases}</h3>
      </section>
    );
  }
  
  export default NumberOfCases;
  