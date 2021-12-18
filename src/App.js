import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import AddProducts from "./Pages/Dashboard/Admin/AddProducts/AddProducts";
import MakeAdmin from "./Pages/Dashboard/Admin/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./Pages/Dashboard/Admin/ManageAllOrders/ManageAllOrders";
import ManageAllProducts from "./Pages/Dashboard/Admin/ManageAllProducts/ManageAllProducts";
import Cart from "./Pages/Dashboard/Cart/Cart";
import CartDetails from "./Pages/Dashboard/Cart/CartDetails";
import ContactInformation from "./Pages/Dashboard/Cart/ContactInformation";
import Payment from "./Pages/Dashboard/Cart/Payment";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import Explores from "./Pages/Explore/Explores";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Home/Login/Login/Login";
import Register from "./Pages/Home/Login/Register/Register";
import AdminRoute from "./Pages/PrivateRoute/AdminRoute";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home handleOpen={handleOpen} handleClose={handleClose} open={open}/>} />
          <Route path="/home" element={<Home handleOpen={handleOpen} handleClose={handleClose} open={open}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cartDetails" element={<PrivateRoute>< CartDetails /></PrivateRoute>} />
          <Route path="/contactInformation/:id" element={<PrivateRoute>< ContactInformation /></PrivateRoute>} />
          <Route path="/payment/:id" element={<PrivateRoute>< Payment /></PrivateRoute>} />
          <Route path="/explore" element={<PrivateRoute>< Explores  handleOpen={handleOpen} handleClose={handleClose} open={open}/></PrivateRoute>} />
          
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} >
            <Route path="/dashboard" element={<PrivateRoute><DashboardHome /></PrivateRoute>} />
            <Route path="/dashboard/cart" element={<PrivateRoute>< Cart /></PrivateRoute>} />
            <Route path="/dashboard/myOrder" element={<PrivateRoute>< MyOrder /></PrivateRoute>} />
            <Route path="/dashboard/addReview" element={<PrivateRoute>< AddReview /></PrivateRoute>} />

            <Route path="/dashboard/makeAdmin" element={<AdminRoute>< MakeAdmin /></AdminRoute>} />
            <Route path="/dashboard/addProducts" element={<AdminRoute>< AddProducts /></AdminRoute>} />
            <Route path="/dashboard/manageAllOrders" element={<AdminRoute>< ManageAllOrders /></AdminRoute>} />
            <Route path="/dashboard/manageAllProducts" element={<AdminRoute>< ManageAllProducts /></AdminRoute>} />
          </Route>
          
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
