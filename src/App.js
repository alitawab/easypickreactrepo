import { Routes, Route } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/register' element={ <Register />} />
        <Route path='/login' element={ <Login />} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </>
  );
}

export default App;
