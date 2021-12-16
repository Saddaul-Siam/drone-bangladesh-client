import { Routes, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import Cart from "./Pages/Dashboard/Cart/Cart";
import CartDetails from "./Pages/Dashboard/Cart/CartDetails";
import ContactInformation from "./Pages/Dashboard/Cart/ContactInformation";
import Payment from "./Pages/Dashboard/Cart/Payment";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Home/Login/Login/Login";
import Register from "./Pages/Home/Login/Register/Register";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cartDetails" element={<PrivateRoute>< CartDetails /></PrivateRoute>} />
          <Route path="/contactInformation" element={<PrivateRoute>< ContactInformation /></PrivateRoute>} />
          <Route path="/payment" element={<PrivateRoute>< Payment /></PrivateRoute>} />

          
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} >
            <Route path="/dashboard" element={<PrivateRoute><DashboardHome /></PrivateRoute>} />
            <Route path="/dashboard/cart" element={<PrivateRoute>< Cart /></PrivateRoute>} />

          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
