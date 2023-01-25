import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './components/Navbar';
import Slider from './components/Slider';
import Navigate from './components/Navigation';
import AfterSlide from './components/Afterslide';




function App() {
  return (
    <div>
      
        <Navb />
      
      
        <Navigate/>

      
        <Slider />

       <AfterSlide/>
      
    </div>

  );
}

export default App;
