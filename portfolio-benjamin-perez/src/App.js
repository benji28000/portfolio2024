import React from 'react';
import './assets/styles/index.css';
import Navbar from './components/common/Navbar'; // Assurez-vous que le chemin d'importation est correct
import Competences from "./components/Competences";
import Formations from './components/Formations';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import presentation from "./components/presentation";
import Presentation from "./components/presentation";
import Footer from "./components/common/Footer";

function App() {
  return (
      <div>
          <div className="App">
              <Navbar/>
              <section id="presentation" > <Presentation/> </section>
              <section id="competences"><Competences/></section>
              <section id="formations"><Formations/></section>
              <section id="experiences"><Experiences/></section>
              <section id="contact"><Contact/></section>
                <Footer/>
          </div>
      </div>

  );
}

export default App;