import React from "react";

const Code = () => {
  return <div>

   <div className="ml-10">
    <h1 className="text-2xl font-medium">Top Kompaniyalar</h1>
    <img className="w-200 mt-2" src="https://space.marsit.uz/img/editor-ads.08b4da43.webp" alt="" />

    <div>
          
       <div className="w-105 h-35 rounded-xl shadow-xl ">
   

          <div className="w-105 h-35 rounded-xl shadow-xl relative flex items-center justify-between bg-white p-5 border border-gray-100">
          
          <div className="absolute top-4 right-4">
            <span className="inline-flex h-6 w-6 items-center justify-start rounded-md  text-yellow-500 ">
              <img src="https://cdn-icons-png.freepik.com/256/12438/12438587.png?semt=ais_white_label" alt="" />
            </span>
          </div>

          <div className="flex items-center gap-4">
           <img className="w-20" src="https://lab.marsit.uz/media/quiz_theme_images/Amazon/Amazon-512.webp" alt="" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Amazon</h3>
              <p className="text-sm text-gray-500">10 задач | 0% выполнено</p>
            </div>
          </div>

          <button className="text-blue-600 text-sm font-medium hover:underline mt-8">
        <a href="https://www.amazon.com/"> Войти →</a>   
          </button>
        </div>

         
       </div>

    </div>

   </div>

  </div>;
};

export default Code;