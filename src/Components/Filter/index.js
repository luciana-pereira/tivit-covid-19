import React, { useState, useEffect } from 'react';
import 'filter.css';

const Filter = () => {
  const [filterByCountry, setFilter] = useState([]);
  const [modal, setModal] = useState('');
  const [searchByCountry, setSearch] = useState([]);
  const [country, setCountry] = useState('');

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/jhucsse', {
      method: 'GET',
      mode: 'cors',
    })
      .then((resp) => resp.json())
      .then((json) => setFilter(json))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/historical/', {
      method: 'GET',
      mode: 'cors',
    })
      .then((resp) => resp.json())
      .then((json) => setSearch(json))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/historical/', {
      method: 'GET',
      mode: 'cors',
    })
      .then((resp) => resp.json())
      .then((json) => setSearch(json))
      .catch((error) => console.log(error));
  }, []);

  const handleSelect = (event) => {
    setModal(event.target.value);
  };

  const handleSearch = (event) => {
    setCountry(event.target.value);
  };

  const submitSearch = (event) => {
    console.log(country);
    setSearch(event.target.value);
  };

  return (
    <section className='App'>
      <div>
        <h2>Filtrar por:</h2>
        <input type='text'></input>
        <select value={modal} onChange={handleSelect} className='select'>
          <option>Número de casos</option>
          <option>Número de mortes</option>
          <option>Número de recuperados</option>
        </select>
      </div>
      <input type='text' value={country} onChange={handleSearch}></input>{' '}
      <button onClick={submitSearch}>OK</button>
      <h2>Casos confirmados por países:</h2>
      <div className='container-table'>
        {modal === 'Número de casos' ? (
          <table className='table-filter'>
            <tbody>
              <tr>
                <th>País</th>
                <th>Total de Casos</th>
              </tr>
              {filterByCountry.map((data) => (
                <tr>
                  <td>{data.country}</td>
                  <td>{data.stats.confirmed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : modal === 'Número de mortes' ? (
          <table className='table-filter'>
            <tbody>
              <tr>
                <th>País</th>
                <th>Número de Mortes</th>
              </tr>
              {filterByCountry.map((data) => (
                <tr>
                  <td>{data.country}</td>
                  <td>{data.stats.deaths}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : modal === 'Número de recuperados' ? (
          <table className='table-filter'>
            <tbody>
              <tr>
                <th>País</th>
                <th>Número de Recuperados</th>
              </tr>
              {filterByCountry.map((data) => (
                <tr>
                  <td>{data.country}</td>
                  <td>{data.stats.recovered}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Filter;
