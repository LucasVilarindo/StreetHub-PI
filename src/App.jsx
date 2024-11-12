import { useState } from 'react';
import Tenis from './pages/Tenis';
import NavBar from './components/navbar';
import "./style.css";
import { Routes, Route } from 'react-router-dom';
import Roupas from './pages/Roupas';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Acessorios from './pages/Acessorios';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tenis" element={<Tenis />} />
        <Route path="/Roupas" element={<Roupas />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Acessorios" element={<Acessorios />} />
      </Routes>
    </>
  );
}

export default App;


