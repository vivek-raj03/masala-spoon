import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import About from './pages/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Upload from './pages/Upload';
import Display from './pages/Display';
function App() {
  return (
   // <>
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/upload" element={<Upload/>}/>
          <Route path='/display' element={<Display/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    // </>
  );
}

export default App;
