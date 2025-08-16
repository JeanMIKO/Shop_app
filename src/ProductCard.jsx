import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer 
                 hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                    
      {/* Image produit */}
      <div className="h-57 bg-gray-100 flex justify-center items-center overflow-hidden">
        <img
          src={product.image_url}
          alt={product.name}
          className="h-full w-full object-cover"/>
      </div>

      {/* Infos produit */}
      <div className="p-4">
        <h2 className="font-bold text-lg text-gray-800 truncate">{product.name}</h2>

        <div className="flex justify-between items-center mt-1 text-sm text-gray-500">
          <span>{product.category}</span>
          <span className="font-semibold text-gray-900">{product.price} €</span>
        </div>

        {/* Étoiles */}
        <div className="mt-2 text-yellow-400 text-sm">
          {"★".repeat(product.stars) + "☆".repeat(5 - product.stars)}
        </div>

        {/* Disponibilité */}
        <div
          className={`mt-3 inline-block px-3 py-1 text-xs font-semibold rounded-full 
          ${product.availability === "IN_STOCK" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {product.availability === "IN_STOCK" ? "En stock" : "Terminé"}
        </div>
      </div>
    </div>
  );
}
