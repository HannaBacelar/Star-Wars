import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

function Table() {
  const { data } = useContext(planetsContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              climated
            </th>
            <th>
              created
            </th>
            <th>
              diameter
            </th>
            <th>
              edited
            </th>
            <th>
              films
            </th>
            <th>
              gravity
            </th>
            <th>
              name
            </th>
            <th>
              orbital period
            </th>
            <th>
              population
            </th>
            <th>
              rotation period
            </th>
            <th>
              surface water
            </th>
            <th>
              terrain
            </th>
            <th>
              url
            </th>
          </tr>
        </thead>
        <tbody>
          {
            data.length <= 0 ? (
              data.map((planetas) => {
                const { climate, created, diameter, edited, films,
                  gravity, name, population, terrain, url } = planetas;
                const filmes = films.map((filme, index) => (
                  <td key={ index }>{filme}</td>
                ));
                return (
                  <tr role="row" key={ name }>
                    <td>{ climate }</td>
                    <td>{ created }</td>
                    <td>{ diameter }</td>
                    <td>{ edited }</td>
                    <td>{ filmes }</td>
                    <td>{ gravity }</td>
                    <td>{ name }</td>
                    <td>{ planetas.orbital_period }</td>
                    <td>{ population }</td>
                    <td>{ planetas.rotation_period }</td>
                    <td>{ planetas.surface_water }</td>
                    <td>{ terrain }</td>
                    <td>{ url }</td>
                  </tr>
                );
              })
            ) : (data.map((element) => {
              const { climate, created, diameter, edited, films,
                gravity, name, population, terrain, url } = element;
              const filmsss = films.map((filme, index) => (
                <td key={ index }>{filme}</td>
              ));
              return (
                <tr role="row" key={ name }>
                  <td>{ climate }</td>
                  <td>{ created }</td>
                  <td>{ diameter }</td>
                  <td>{ edited }</td>
                  <td>{ filmsss }</td>
                  <td>{ gravity }</td>
                  <td>{ name }</td>
                  <td>{ element.orbital_period }</td>
                  <td>{ population }</td>
                  <td>{ element.rotation_period }</td>
                  <td>{ element.surface_water }</td>
                  <td>{ terrain }</td>
                  <td>{ url }</td>
                </tr>
              );
            })
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
