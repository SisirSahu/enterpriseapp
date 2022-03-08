import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

function App() {
  return (
    <div className="App">
      <Customer firstName={'Sisir'} lastName={'Sahu'} age={0} isLegal={false}></Customer>
    </div>
  );
}

export default App;
