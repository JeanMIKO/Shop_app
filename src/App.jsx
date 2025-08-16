import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Products from "./Products";
import ProductDetails from "./ProductDetails";

function App() {

  //identifiants enregistrés dans localStorage comme un compte existant

  localStorage.setItem("email", "mikojean@gmail.com");
  localStorage.setItem("password", "softcare1");
  localStorage.setItem("username", "Falconnet MIKO"); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
