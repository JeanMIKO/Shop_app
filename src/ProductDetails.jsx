import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import productsData from "./data";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen flex items-center justify-center text-gray-700 text-xl">
        Produit introuvable
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="w-full h-[500px] bg-gray-100">
          <img
            src={product.image_url} alt={product.name} className="w-full h-full object-cover"/>
        </div>

        <div className="p-8 space-y-4">
          <button
            onClick={() => navigate("/products")}
            className="flex items-center gap-2 mb-6 text-gray-600 hover:text-green-600 transition">
            <ArrowLeft size={20} /> Retour aux produits
          </button>

          <h1 className="text-3xl font-extrabold text-gray-900">
            {product.name}
          </h1>

          <p className="text-gray-500">Catégorie : {product.category}</p>

          <p className="text-2xl font-semibold text-green-600">
            {product.price} €
          </p>

          <p className="text-yellow-500">
            {"★".repeat(product.stars) + "☆".repeat(5 - product.stars)}
          </p>

          <span
            className={`inline-block px-5 py-2 text-sm font-medium rounded-full
            ${product.availability === "IN_STOCK" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {product.availability === "IN_STOCK" ? "En stock" : "Terminé"}
          </span>

          <p className="text-gray-700 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
