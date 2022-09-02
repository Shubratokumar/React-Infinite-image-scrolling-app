import { Route, Routes, Navigate } from "react-router";
import Login from './components/Auth/Login';
import RequireAuth from './components/Auth/RequireAuth';
import Register from './components/Auth/Register';
import Home from './components/Home';


function App() {
  return (
    <Routes>
      <Route path="/home" 
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } 
        />
      <Route path="/" element={<Navigate to='/home'/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
