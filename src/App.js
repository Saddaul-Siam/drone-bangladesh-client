import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Home/Login/Login/Login";
import Register from "./Pages/Home/Login/Register/Register";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
