import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const linkApi = 'https://swapi-trybe.herokuapp.com/api/planets/';
  console.log(data);

  useEffect(() => {
    const ApiPlanets = async () => {
      const api = await fetch(linkApi).then((response) => response.json());
      setData(api.results);
    };
    ApiPlanets();
  }, []);

  return (
    <planetsContext.Provider value={ { setData, data } }>
      { children }
    </planetsContext.Provider>
  );
}
PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PlanetsProvider;
