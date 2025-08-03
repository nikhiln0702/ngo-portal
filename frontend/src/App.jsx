import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/view" element={<Admin />} />
      </Routes>
      <Toaster position="top-right" />
    </BrowserRouter>
  );
}
