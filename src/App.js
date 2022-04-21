import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './Page/Table';

function App() {
  return (
    <PlanetsProvider>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
