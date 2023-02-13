import React from 'react';

// importing navigation bar component
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css'

// world map component
import Map from './components/Worldmap/Worldmap'
import './components/Worldmap/Worldmap.css'

// left side data of world map component
import Asidedata from './components/Asidedata/Aside'
import './components/Asidedata/Aside.css'

// chart below world map (this part is not implemented)
import  Chart  from './components/Chart/Chart';
import './App.css';

// footer component
import Footer from './components/Footer/Footer';
import './components/Footer/Footer.css'



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
