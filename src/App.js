import './App.css';
import NavbarCylon from './components/Navbar';
import HeroImage from './components/Hero';
import Carosello from './components/Carosello';
import About from './components/Aboutus';
import Footer from './components/Footer';
import Team from './components/Team';
import CylonFAQ from './components/Faq';

function App() {
  return (
    <div className="App">
      <NavbarCylon />
      <HeroImage />
      <div className='contentBG'>
        <Carosello />
        <About />
        <Team />
        <CylonFAQ />    
      </div>
      <Footer />
      </div>
  );
}

export default App;
