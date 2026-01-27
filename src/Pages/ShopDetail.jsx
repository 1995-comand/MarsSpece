import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CiBitcoin } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const ShopDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-2xl">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-2xl">Product not found</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[30px] p-8 w-full max-w-md relative flex flex-col items-center">
        {/* Close Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
        >
          <IoClose size={24} className="text-gray-500" />
        </button>

        {/* Product Image */}
        <div className="mb-6 h-48 flex items-center justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-full object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          {product.title}
        </h2>

        {/* Price */}
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-yellow-400 rounded-full p-1">
            <CiBitcoin className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-gray-800">
            {product.price}
          </span>
        </div>

        {/* Password Input */}
        <div className="w-full relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Nomer kiriting"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-gray-600"
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Buy Button */}
        <button className="bg-[#ffcec2] text-[#ff6b6b] hover:bg-[#ffb6a3] w-full py-3 rounded-xl font-semibold mb-6 transition-colors">
          Sotib olish
        </button>

        {/* Ask Martian Link */}
        <Link
          to="/contact"
          className="flex items-center gap-2 text-[#4f46e5] font-medium hover:underline"
        >
          <BsStars className="text-[#818cf8]" />
          Marsianadan so'rang
        </Link>
      </div>
    </div>
  );
};

export default ShopDetail;