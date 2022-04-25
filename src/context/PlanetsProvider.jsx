import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState([]);
  const linkApi = 'https://swapi-trybe.herokuapp.com/api/planets/';
  console.log(data);

  useEffect(() => {
    const ApiPlanets = async () => {
      const api = await fetch(linkApi).then((response) => response.json());
      setData(api.results);
      setFilterName(api.results);
    };
    ApiPlanets();
  }, [setFilterName]);

  const filterNamePlanet = (letra) => {
    const filter = filterName.filter(({ name }) => name.includes(letra));
    setData(filter);
  };
  return (
    <planetsContext.Provider value={ { setData, data, filterNamePlanet } }>
      { children }
    </planetsContext.Provider>
  );
}
PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PlanetsProvider;
