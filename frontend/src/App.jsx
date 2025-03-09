import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import ProductDashboard from "./pages/productdashboard";
import ProductDetail from "./pages/productspage";


function App() {
 

  return (
    <div id="root">
    <Router>
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />    
        <Route path="/auth/signup" element={<SignupPage />} />    
        <Route path="/user/dashboard" element={< ProductDashboard/>} />     
        <Route path="/product/:id" element={<ProductDetail />} />  
      </Routes>
    </Router>
    </div>
  );
}

export default App;
