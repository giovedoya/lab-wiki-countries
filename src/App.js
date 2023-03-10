import React, { useState } from 'react';
import CountriesDB from '`../src/countries.json'


import './App.css';

function App() {

  const [countries, setCountries] = useState(CountriesDB)

  return (
    <div className="App">

    </div>
  );
}

export default App;
