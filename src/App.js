import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Herosection from './components/Herosection';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <div className="App">
    <NavbarComp/>
    </div>
    <Herosection/>
    <Footer/>
    
    
    </>
  );
}

export default App;
