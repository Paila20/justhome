import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <div className='container-fluid-lg'>
      <Header/>
      <Main/>
      
    </div>
  )
}

export default App
