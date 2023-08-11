import React from 'react';
import { AdviceComponent } from './components/Frase';
import background from './asset/background.PNG';
import { Footer } from "./components/Footer";
import './App.css';

const App = () => {
  return (
    <div>
      <div>
        <img src={background} className="background" alt="background app" />
      </div>
      <h1>My Advice App</h1>
      <div className="container">
        <AdviceComponent />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
