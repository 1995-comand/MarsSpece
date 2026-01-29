import React, { useEffect, useState } from "react";
import { CiBitcoin } from "react-icons/ci";
import { FaTshirt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SlEarphones } from "react-icons/sl";

const Heroshop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getbase = async () => {
    try {
      let res = await fetch("https://dummyjson.com/products");
      let data = await res.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.log("Xatolik:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getbase();
  }, []);

  return (
    <div className="bg-gray-200">
      <div className=" flex gap-4 mb-6 justify-center">
        <Link
          to="/dashboard/Shop"
          className="bg-white flex items-center gap-[10px] px-6 py-2 rounded-xl border border-orange-500 text-orange-500 font-semibold
                   hover:bg-orange-500 hover:text-white
                   transition-all duration-300 ease-in-out
                   shadow-sm hover:shadow-lg"
        >
          <FaTshirt />
          Shop
        </Link>

        <Link
          to="/dashboard/Heroshop"
          className="bg-white flex items-center gap-[10px] px-6 py-2 rounded-xl border border-orange-500 text-orange-500 font-semibold
                   hover:bg-orange-500 hover:text-white
                   transition-all duration-300 ease-in-out
                   shadow-sm hover:shadow-lg"
        >
          <SlEarphones />
          Hero Shop
        </Link>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <Link
            to={`/dashboard/Heroshop/${item.id}`}
            key={item.id}
            className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition block flex flex-col justify-between"
          >
            <div>
              <div className="h-48 flex items-center justify-center mb-4 bg-gray-100 rounded-xl p-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <h2 className="text-lg font-normal text-gray-800 mb-1">{item.title}</h2>
            </div>

            <div className="mt-2">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span className="text-black font-semibold text-lg">{item.price}</span>
                <CiBitcoin className="text-yellow-400 w-5 h-5" />
                <span className="text-gray-300">|</span>
                <span>{item.stock} ta qoldi</span>
              </div>

              <div className="text-blue-500 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors">
                Sotib olish &gt;
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Heroshop;
