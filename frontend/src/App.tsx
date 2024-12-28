import './App.css';
import Login from './logins/login_component';
import Feed from './feeds/feed_component';
import { BrowserRouter, Routes, Route } from "react-router";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/perfil" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
