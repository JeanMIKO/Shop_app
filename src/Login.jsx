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
      navigate("/welcome");
    } else {
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="bg-[#A3D5C3] min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-[30px] p-10 w-full max-w-md shadow-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Create An Account</h1>
        <p className="text-gray-600 text-sm mb-6">
          Create an account to enjoy all the services<br />without any ads for free!
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A3D5C3]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A3D5C3]"
          />
          <button
            type="submit"
            className="w-full bg-[#A3D5C3] text-white font-semibold py-3 rounded-md hover:bg-[#91c9b3] transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6">
          Already Have An Account?
          <a href="#" className="text-gray-700 font-medium underline">Sign In</a>
        </p>
      </div>
    </div>
  );
}
