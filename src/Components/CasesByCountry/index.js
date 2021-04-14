import React, { useState, useEffect } from 'react';


function CasesByCountry() {
    // const [casesByCountry, setCountry] = useState([]);
    const [casesConfirmed, setCasesConfirmed] = useState([]);
    const [casesDeaths, setCasesDeaths] = useState([]);
    const [casesRecovered, setCasesRecovered] = useState([]);
    const [totalConfirmed, setTotalConfirmed] = useState([]);
    const [totalDeaths, setTotalDeaths] = useState([]);
    const [totalRecovered, setTotalRecovered] = useState([]);
    const [newDate, setNewDate] = useState([]);


    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/jhucsse', {
          method: 'GET',
          mode:"cors"
        })
          .then((resp) => resp.json())
          .then((json) => {
            const dataCases = json;
            const confirmedCases = dataCases.filter((cases) => cases.stats.confirmed.includes('confirmed'));
            const deathsCases = dataCases.filter((cases) => cases.stats.deaths.includes('deaths'));
            const recoveredCases = dataCases.filter((cases) => cases.stats.recovered.includes('recovered'));
            const date = dataCases.filter((cases) => cases.updatedAt[0].includes('updatedAt'));
            setCasesConfirmed(confirmedCases);
            setCasesDeaths(deathsCases);
            setCasesRecovered(recoveredCases);
            setNewDate(date);
          })
          .catch((error) => console.log(error));
      }, [setNewDate]);

      const handleTotalSum = () => {
        setTotalConfirmed(casesConfirmed.reduce((total, num) => total + num, 0));
        setTotalDeaths(casesDeaths.reduce((total, num) => total + num, 0));
        setTotalRecovered(casesRecovered.reduce((total, num) => total + num, 0));

        console.log(totalConfirmed)
        console.log(totalDeaths)
        console.log(totalRecovered)
      }
      handleTotalSum();
    
    return (
        <section className='cases-by-country'>
          <div>
            <h3>Nº de Casos:</h3>
            <h3>{casesConfirmed}</h3>
            <h3>Infectados Recuperados:</h3>
            <h3>{casesRecovered}</h3>
            <h3>Mortes:</h3>
            <h3>{casesDeaths}</h3>
            <h3>Atualizado em:</h3>
            <h3>{newDate}</h3>
          </div>
      </section>
    );
  }
  
  export default CasesByCountry;
  