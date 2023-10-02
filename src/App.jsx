import React from 'react';
import Hero from './component/Hero';
import './App.css'
import Demo from './component/Demo';

const App = () => {
  return (
   <main>
    <div className="main">
      <div className='gradient'/>
    </div>
    <div className="app">
      <Hero/>
      <Demo/>
    </div>
   </main>
  )
}

export default App 