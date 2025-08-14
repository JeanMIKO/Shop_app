import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Welcome from "./Welcome";

function App() {

  //identifiants enregistrés dans localStorage comme un compte existant

  localStorage.setItem("email", "mikojean@gmail.com");
  localStorage.setItem("password", "softcare1");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
