import React, { useState, useEffect } from 'react';


function NumberOfRecovered() {
    const [numberOfRecovered, setRecovered] = useState([]);

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all', {
          method: 'GET',
          mode:"cors"
        })
          .then((resp) => resp.json())
          .then((json) => setRecovered(json.cases))
          .catch((error) => console.log(error));
      }, []);
    
    return (
      <section className="number-of-death">
        <h1>Número de Recuperados:</h1>
        <h3>{numberOfRecovered}</h3>
      </section>
    );
  }
  
  export default NumberOfRecovered;
  