
import './App.css'
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div>
      <div className='main-container'>
      <Navbar/>
      <Contact/>
   
      </div>
      <Footer/>
   
    </div>
  );
}

export default App;
