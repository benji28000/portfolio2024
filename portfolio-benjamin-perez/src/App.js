import React from 'react';
import './assets/styles/index.css';
import Navbar from './components/common/Navbar'; // Assurez-vous que le chemin d'importation est correct
import Competences from "./components/Competences";
import FormationsExperiences from './components/Formations&Experiences';
import Presentation from "./components/presentation";
import Footer from "./components/common/Footer";


function App() {
  return (
      <div>
          <div className="App">
              <Navbar/>
              <section id="presentation" > <Presentation/> </section>

              <section id="competences"><Competences/></section>
              <section id="formations"><FormationsExperiences/></section>
                <Footer/>
          </div>
      </div>

  );
}

export default App;