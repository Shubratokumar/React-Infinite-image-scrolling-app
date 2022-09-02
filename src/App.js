import { Home } from "@mui/icons-material";
import { Route, Routes } from "react-router";
import Login from './components/Auth/Login';
import RequireAuth from './components/Auth/RequireAuth';
import Register from './components/Auth/Register';


function App() {
  return (
    <Routes>
      <Route path="/" 
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } 
        />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
