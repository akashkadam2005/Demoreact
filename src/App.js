import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardHeader, Carousel, Col, Container, Row } from 'react-bootstrap';
import { Fa42Group } from 'react-icons/fa6';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import Index from './Componads/Index';
import Header from './Componads/Header';
import Master from './Componads/Master';
import List from './Pages/List';
import Details from './Pages/Details';
import Booking from './Pages/Booking';
import Profile from './Pages/Profile';
import Ticket from './Pages/Ticket';

function App() {
  
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Master Comp={Index}/>} />
  <Route path='/list' element={<Master Comp={List}/>} />
  <Route path='/detais' element={<Master Comp={Details}/>} />
  <Route path='/booking' element={<Master Comp={Booking}/>} />
  <Route path='/profile' element={<Master Comp={Profile}/>} />
  <Route path='/tiket' element={<Master Comp={Ticket}/>} />
  
</Routes>
</BrowserRouter>
   



    </ >
  );
}

export default App;
