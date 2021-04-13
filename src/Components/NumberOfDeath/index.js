import React, { useState, useEffect } from 'react';


function NumberOfDeath() {
    const [numberOfDeath, setDeath] = useState([]);

    useEffect(() => {
      fetch('https://disease.sh/v3/covid-19/all', {
        method: 'GET',
        mode:"cors"
      })
        .then((resp) => resp.json())
        .then((json) => setDeath(json.cases))
        .catch((error) => console.log(error));
    }, []);
   
    return (
      <section className="number-of-death">
        <h1>Número de Mortes:</h1>
        <h3>{numberOfDeath}</h3>
      </section>
    );
  }
  
  export default NumberOfDeath;
  