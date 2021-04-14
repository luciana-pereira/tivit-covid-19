import { Paper } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useStyles } from "../../Home/HomeStyle";
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import clsx from "clsx";


const Filter = () => {
  const [filterByCountry, setFilter] = useState([]);
  // const [data, setData] = useState([]);
  const [modal, setModal] = useState('Número de casos');
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/jhucsse', {
      method: 'GET',
      mode: 'cors',
    })
      .then((resp) => resp.json())
      .then((json) => setFilter(json))
      .catch((error) => console.log(error));
  }, []);

  const handleSelect = (e) => {
    setModal(e.target.value);
  };

{ /* let perPage = 5;
  const state = {
    page: 1,
    perPage: perPage,
    totalPage: Math.ceil(filterByCountry.length/perPage),
  }

  const html = {
    get(element) {
      return document.querySelector(element)
    }
  }

  const controls = {
    next() {
      state.page++
      const lastPage = state.page > state.totalPage;
      if(lastPage){
        state.page--
      }
    },
    prev() {
      state.page--
      if(state.page < 1) {
        state.page++
      }
    },
    goTo() {
      html.get('.fist').addEventListener('click', () => {
        controls.goTo(1)
        update()
      })
      html.get('.last').addEventListener('click', () => {
        controls.goTo(state.totalPage)
        update()
      })
      html.get('.next').addEventListener('click', () => {
        controls.next()
        update()
      })
      html.get('.prev').addEventListener('click', () => {
        controls.prev()
        update()
      })
    },
  }

  const list = {
    create(item) {},
    update() {
      let page = state.page -1;
      let start = page * state.perPage;
      let end = start + state.perPage;
      const paginateItems = filterByCountry.slice(start, end) // Limitar
      //setData(paginateItems)
      console.log(data);
    }
  }
  const update = () => {
    list.update()
  }

  const init = () => {
    list.update()
  }
init()*/}
  return (
    <>
     <div>
        <h2>Filtrar por:</h2>
        <select value={modal} onChange={handleSelect} className='select'>
          <option>Número de casos</option>
          <option>Número de mortes</option>
          <option>Número de recuperados</option>
        </select>
      </div>
      <br/>
      

      <h2>Casos confirmados por países:</h2>
      <Paper className={fixedHeightPaper}>

      <div className='container-table'>
            <InputAdornment position="start">
                <SearchIcon />
            </InputAdornment>
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
      <div class="controls">
            <div class="first">&#171;</div>
            <div class="prev">&lt;</div>
            <div class="numbers">
                <div>1</div>
            </div>
            <div class="next">&gt;</div>
            <div class="last">&#187;</div>
        </div>
      </Paper>
      </>
  );
};

export default Filter;
