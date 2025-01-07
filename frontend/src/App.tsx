import './App.css';
import Login from './logins/login_component';
import Feed from './feeds/feed_component';
import Register from './logins/register_component';
import { BrowserRouter, Routes, Route} from "react-router";
import ProtectedRoute from './logins/ProtectRoute';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/perfil" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
