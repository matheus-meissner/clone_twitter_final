import './App.css';
import Login from './logins/login_component';
import Feed from './feeds/feed_component';
import Register from './logins/register_component';
import Profile from './perfil/profile_component';
import Message from './mensagens/message_components';
import { BrowserRouter, Routes, Route} from "react-router";
import ProtectedRoute from './logins/ProtectRoute';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/feed" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
                    <Route path="/perfil" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                    <Route path="/mensagem" element={<ProtectedRoute><Message /></ProtectedRoute>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
