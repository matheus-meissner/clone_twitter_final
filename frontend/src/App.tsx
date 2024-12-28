import './App.css';
import Login from './logins/login_component';
import Feed from './feeds/feed_component';
import { BrowserRouter, Routes, Route } from "react-router";
import Teste from './feeds/teste';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/perfil" element={<Feed />} />
          <Route path="/teste" element={<Teste />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
