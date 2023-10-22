import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Herosection from './components/Herosection';
function App() {
  return (
    <>
    <div className="App">
    <NavbarComp/>
    </div>
    <div>
    <Herosection/>
    </div>
    
    </>
  );
}

export default App;
