import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react"; 
import products from "./data";
import ProductCard from "./ProductCard";

export default function Products() {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const [nameFilter, setNameFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      (categoryFilter === "" || product.category === categoryFilter) &&
      (availabilityFilter === "" || product.availability === availabilityFilter)
    );
  });

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto p-4 gap-4">

          <h1 className="text-2xl font-extrabold text-green-600 tracking-tight cursor-pointer">
            Shopping
          </h1>

          {/* Barre de recherche */}
          <div className="flex-1 max-w-xl">
            <input
              type="text"
              placeholder="🔍 Rechercher des produits..."
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-5 py-2 shadow-sm focus:ring-2 focus:ring-green-400"
            />
          </div>

        {/* Profil et déconnexion */}
        
        <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
            <img src="/images/ava.jpg" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-green-400"/>

            <span className="hidden sm:block text-lg font-semibold text-gray-700">
            {username}
            </span>
        </div>

        <div className="relative group">
            <button
            onClick={handleLogout}
            className="p-2 rounded-full bg-gray-100 hover:bg-red-100 text-red-500 transition"
            >
            <LogOut size={22} />
            </button>
            
            <span className="absolute bottom-[-35px] left-1/2 -translate-x-1/2 
                            bg-gray-800 text-white text-xs px-3 py-1 rounded-md opacity-0 
                            group-hover:opacity-100 transition whitespace-nowrap shadow-lg">
            Déconnexion
            </span>
        </div>
        </div>

        </div>
      </header>

      {/* champs permettant de filtrer les produits */}

      <div className="max-w-7xl mx-auto mt-6 bg-white p-6 rounded-2xl shadow-md flex flex-wrap gap-4 justify-between">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="flex-1 min-w-[200px] border border-gray-300 rounded-full px-4 py-2 shadow-sm focus:ring-2 focus:ring-green-400">
          <option value="">Toutes catégories</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={availabilityFilter}
          onChange={(e) => setAvailabilityFilter(e.target.value)}
          className="flex-1 min-w-[200px] border border-gray-300 rounded-full px-4 py-2 shadow-sm focus:ring-2 focus:ring-green-400">
          <option value="">Toutes disponibilités</option>
          <option value="IN_STOCK">En stock</option>
          <option value="OUT_OF_STOCK">Terminé</option>
        </select>
      </div>
      <br/> <br/>

      {/* Grille produits */}
      <div className="w-full px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))
        ) : (
            <p className="col-span-full text-center text-gray-600">
            Aucun produit trouvé
            </p>
        )}
        </div>
    </div>
  );
}
