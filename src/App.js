import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './Page/Table';
import Filter from './Page/Filter';

function App() {
  return (
    <PlanetsProvider>
      <Filter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
