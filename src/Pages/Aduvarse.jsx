import React, { useState, useEffect } from "react";
import db from "../db.json";
import { FaUser } from "react-icons/fa6";
import { HiVideoCamera } from "react-icons/hi";

const Aduvarse = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("ALL"); // default hammasi

  useEffect(() => {
    if (Array.isArray(db.Curses)) {
      setData(db.Curses);
    } else {
      console.error("db.Curses array emas!", db.Curses);
    }
  }, []);

  const filteredData =
    filter === "ALL" ? data : data.filter((item) => item.category === filter);

  return (
    <div className="w-[85%] mx-auto justify-start items-start m-15">
      <div className="flex gap-2 mb-8 flex-wrap justify-start">
        <button onClick={() => setFilter("ALL")} className="btn btn-outline btn-primary">ALL</button>
        <button onClick={() => setFilter("HTML")} className="btn btn-outline btn-primary">HTML</button>
        <button onClick={() => setFilter("CSS")} className="btn btn-outline btn-primary">CSS</button>
        <button onClick={() => setFilter("PYTHON")} className="btn btn-outline btn-primary">PYTHON</button>
        <button onClick={() => setFilter("BLENDER")} className="btn btn-outline btn-primary">BLENDER</button>
        <button onClick={() => setFilter("C#")} className="btn btn-outline btn-primary">C#</button>
        <button onClick={() => setFilter("C++")} className="btn btn-outline btn-primary">Creating a C++ game</button>
        <button onClick={() => setFilter("Unity")} className="btn btn-outline btn-primary">Unity</button>
      </div>

      <div className="flex flex-wrap items-start justify-start gap-4">
        {Array.isArray(filteredData) &&
          filteredData.map((item) => (
            <div
              key={item.id}
              className="card bg-base-100 w-96 shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
            >
              <figure className="px-10 pt-10">
                <img
                  src={item.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"}
                  alt={item.title}
                  className="rounded-3xl"
                />
              </figure>

              <div className="card-body items-center text-center">
                <p className="card-title">{item.title}</p>
                <p>{item.rating}⭐️⭐️⭐️⭐️⭐️</p>
                <p className="flex justify-between items-center gap-2">
                  <FaUser /> {item.students} <HiVideoCamera /> {item.videosCount}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Aduvarse;