import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const notify = () => toast.warning("Wow so easy!");
  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=8")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 space-y-4">
      <div className="bg-white rounded-2xl p-4 shadow">
        <div className="h-48 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center text-white text-2xl font-bold"></div>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow">
        <h2 className="font-semibold mb-3">Qo'shimcha dars</h2>
        <div className="grid grid-cols-7 gap-2 text-center text-sm">
          {["Dush", "Sesh", "Chor", "Pay", "Jum", "Shan", "Yak"].map((day) => (
            <div
              key={day}
              className="bg-gray-100 rounded-lg py-3 flex flex-col items-center"
            >
              <span>{day}</span>
              <span className="text-2xl text-gray-400">+</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="font-semibold">Typing</h3>
          <p className="text-sm text-gray-500 mb-2">
            Typing tezligini aniqlaymiz
          </p>
          <button className="text-blue-500 font-medium">Play →</button>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="font-semibold">Online kurs</h3>
          <p className="text-sm text-gray-500 mb-2">Online kurs boshlanmagan</p>
          <button className="text-blue-500 font-medium">Boshlash →</button>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="font-semibold">Dars</h3>
          <p className="text-sm text-gray-500 mb-2">Dars topilmadi</p>
          <button
            onClick={() => notify()}
            className="text-blue-500 font-medium"
          >
            Boshlash →
          </button>
        </div>
      </div>

      <div className="bg-green-400 text-white rounded-2xl p-6 shadow">
        <h2 className="text-2xl font-bold mb-1">SEASON #6</h2>
        <p className="text-sm mb-4">
          Reytingda yetakchi bo'ling va coinlarga ega bo'ling
        </p>

        <div className="flex gap-6 text-sm font-medium">
          <span>#1 → 300 💰</span>
          <span>#2 → 200 💰</span>
          <span>#3 → 70 💰</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="font-semibold mb-4">Reyting</h2>

        {loading ? (
          <p className="text-gray-500">Yuklanmoqda...</p>
        ) : (
          <ul className="space-y-3">
            {users.map((user, index) => (
              <li
                key={user.id}
                className="flex items-center justify-between bg-yellow-100 rounded-xl px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="font-bold w-5">{index + 1}</span>

                  <img
                    src={user.image}
                    alt={user.firstName}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div>
                    <p className="font-medium">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {user.company?.title}
                    </p>
                  </div>
                </div>

                <span className="font-semibold text-yellow-600">
                  {Math.floor(Math.random() * 2000 + 2000)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
