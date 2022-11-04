import React from 'react';
import './App.css';
import CardSection from './Components/CardSection/CardSection';
import LineChart from './Components/Cart/LineChart';
import TempState from './Context/TempState';

import Navbar from './Components/Navbar/Navbar';

function App() {
  
  
 
  return (
  
    <>
     <TempState>
      <Navbar/>
      <LineChart/>
      <CardSection/>
      </TempState>
    </>
  );
}

export default App;
