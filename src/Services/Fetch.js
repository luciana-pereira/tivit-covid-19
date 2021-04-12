import React, { useState, useEffect } from 'react';

const Fetch = () => {
  const [numberOfCases, setCases] = useState([]);
  const [numberOfDeaths, setDeath] = useState([]);
  const [numberOfRecovered, setRecovered] = useState([]);
  const [numberCasesByCountry, setCountry] = useState([]);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then((resp) => resp.json())
      .then((json) => setCases(json.cases))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then((resp) => resp.json())
      .then((json) => setDeath(json.deaths))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then((resp) => resp.json())
      .then((json) => setRecovered(json.recovered))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/jhucsse')
      .then((resp) => resp.json())
      .then((json) => setCountry(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className='App'>
      <section>
        <h1>Número de Casos</h1>
        <h3>{numberOfCases}</h3>
      </section>
      <section>
        <h1>Número de Mortes</h1>
        <h3>{numberOfDeaths}</h3>
      </section>
      <section>
        <h1>Número de Recuperados</h1>
        <h3>{numberOfRecovered}</h3>
      </section>
      <section className='container-menu'>
        {numberCasesByCountry.map((data) => (
          <div key={data.id}>
            <h3>{data.country}:</h3>
            <h3>Casos Confirmados:</h3>
            <h3>{data.stats.confirmed}</h3>
            <h3>Atualizado em:</h3>
            <h3>{data.updatedAt}</h3>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Fetch;
