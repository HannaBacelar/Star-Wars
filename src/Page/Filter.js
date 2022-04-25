import React, { useContext, useState } from 'react';
import planetsContext from '../context/planetsContext';

function Filter() {
  const [name, setName] = useState('');
  const { filterNamePlanet } = useContext(planetsContext);

  const nameInput = ({ target: { value } }) => {
    setName(value);
    filterNamePlanet(value);
  };

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        value={ name }
        onChange={ nameInput }
      />
    </form>

  );
}

export default Filter;
