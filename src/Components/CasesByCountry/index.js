import React, { useState, useEffect } from 'react';


function CasesByCountry() {
    const [casesByCountry, setCountry] = useState([]);

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/jhucsse', {
          method: 'GET',
          mode:"cors"
        })
          .then((resp) => resp.json())
          .then((json) => setCountry(json))
          .catch((error) => console.log(error));
      }, []);
    
    return (
        <section className='cases-by-country'>
        {casesByCountry.map((data) => (
          <div key={data.id}>
            <h3>{data.country}:</h3>
            <h3>Casos Confirmados:</h3>
            <h3>{data.stats.confirmed}</h3>
            <h3>Atualizado em:</h3>
            <h3>{data.updatedAt}</h3>
          </div>
        ))}
      </section>
    );
  }
  
  export default CasesByCountry;
  