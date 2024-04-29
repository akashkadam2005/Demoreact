
import './App.css';
import Top from './Componads/Top';
import Header from './Componads/Header';
import Slider from './Componads/Slider';
import Service from './Componads/Service';
import Adhar from './Componads/Adhar';
import Card from './Componads/Card';
import Logo from './Componads/Logo';
import Footer from './Componads/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

   

<BrowserRouter>
<Top/>
    <Header/>
    <Slider/>
    <Service/>
    <Adhar/>
    <Card/>
    <Logo/>
<Routes>
  {/* <Route path='/service' element={<Service/>}></Route> */}
</Routes>
<Footer/>
</BrowserRouter>

    </div>
  );
}

export default App;
