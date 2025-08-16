import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      setError("");
      navigate("/products");
    } else {
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#A3D5C3] to-[#6BBF9C] min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl p-10 w-full max-w-md shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Connexion</h1>
        <p className="text-gray-600 text-sm mb-6 text-center">
          Connectez-vous pour accéder à vos produits et profiter de nos services.
        </p>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6BBF9C]" />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6BBF9C]"/>

          <button
            type="submit"
            className="w-full bg-[#6BBF9C] text-white font-semibold py-3 rounded-lg hover:bg-[#58a986] transition">
            Login
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6 text-center">
          Pas encore de compte ?{" "}
          <a href="#" className="text-[#6BBF9C] font-medium hover:underline">Créer un compte</a>
        </p>
      </div>
    </div>
  );
}
