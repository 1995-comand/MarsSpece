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
        to="/Shop"
        className="bg-white flex items-center gap-[10px] px-6 py-2 rounded-xl border border-orange-500 text-orange-500 font-semibold
                   hover:bg-orange-500 hover:text-white
                   transition-all duration-300 ease-in-out
                   shadow-sm hover:shadow-lg"
      >
        <FaTshirt />
        Shop
      </Link>
    
      <Link
        to="/Heroshop"
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
           <div
             key={item.id}
             className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition"
           >
             <img
               src={item.thumbnail}
               alt={item.title}
               className="w-full h-40 object-cover rounded-lg mb-3"
             />
   
             <h2 className="text-lg font-semibold mb-1">
               {item.title}
             </h2>
   
             <p className="text-gray-600 text-sm mb-2">
               {item.description.slice(0, 60)}...
             </p>
   
             <div className="flex justify-between items-center">
               <span className="font-bold text-green-600">
                  <CiBitcoin color="black"/>
   {item.price}
               </span>
   
               <button className="border border-green-500 text-green-500 px-4 py-1 rounded-lg hover:bg-green-500 hover:text-white transition">
                 sotib olish
               </button>
             </div>
           </div>
         ))}
         </div>
       </div>
  );
};

export default Heroshop;
