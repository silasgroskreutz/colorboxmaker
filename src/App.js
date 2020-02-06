import React from 'react';
import BoxList from './BoxList';
import './App.css';

//<Box height={10} width={20} color='blue' />
//<Box height={20} width={15} color='green' />

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <BoxList />
      </header>
    </div>
  );
}

export default App;
