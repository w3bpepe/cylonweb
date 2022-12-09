import './App.css';
import NavbarCylon from './components/Navbar';
import HeroImage from './components/Hero';
import Carosello from './components/Carosello';
import About from './components/Aboutus';
import Footer from './components/Footer';
import Team from './components/Team';
import FaqTwo from './components/FaqTwo';
import Divider from './components/Divider';

function App() {
  return (
    <div className="App">
      <div className='wrapper'></div>
      <NavbarCylon />
      <HeroImage />
      <Divider />
      <div className='contentBG'>
        <Carosello />
        <About />
        <Team />
        <FaqTwo />  
      </div>
      <Footer />
    </div>
  );
}

export default App;
