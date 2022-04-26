import React, { useContext, useState } from 'react';
import planetsContext from '../context/planetsContext';

function Filter() {
  const [planetName, setPlanetName] = useState('');
  const [selectedColum, setSelectedColum] = useState(['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0 });

  const { filterNamePlanet, data, setData } = useContext(planetsContext);

  const nameInput = ({ target: { value } }) => {
    setPlanetName(value);
    filterNamePlanet(value);
  };
  const handleChanges = ({ target: { name, value } }) => {
    setFilterByNumericValues({ ...filterByNumericValues, [name]: value });
  };

  const handleClick = () => {
    const { column, comparison, value } = filterByNumericValues;
    switch (comparison) {
    case 'maior que':
      return setData(data.filter((planetas) => +planetas[column] > +value));
    case 'menor que':
      return setData(data.filter((planetas) => +planetas[column] < +value));
    case 'igual a':
      return setData(data.filter((planetas) => +planetas[column] === +value));
    default: return data;
    }
  };

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        value={ planetName }
        onChange={ nameInput }
      />
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleChanges }
      >
        {
          selectedColum.map((colum) => (
            <option
              value={ colum }
              key={ colum }
            >
              {colum}

            </option>))
        }

      </select>

      <label htmlFor="comparison-filter">
        Operador
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleChanges }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        value={ filterByNumericValues.value }
        onChange={ handleChanges }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filter
      </button>
    </form>

  );
}

export default Filter;
