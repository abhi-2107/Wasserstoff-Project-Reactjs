import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css'
import Map from './components/Worldmap/Worldmap'
import './components/Worldmap/Worldmap.css'
import Asidedata from './components/Asidedata/Aside'
import './components/Asidedata/Aside.css'
import Footer from './components/Footer/Footer';
import './components/Footer/Footer.css'
import  Chart  from './components/Chart/Chart';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <Map />
      <Asidedata />
      <Chart/>
      <Footer />
    </div>
  );
}

export default App;
