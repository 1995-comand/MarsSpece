import { useParams } from "react-router-dom";

const lessons = [
  { id: 1, title: "Tanishuv", time: "3:20" },
  { id: 2, title: "Elektron pochta va Canva", time: "7:45" },
  { id: 3, title: "Canva - vizitka", time: "6:10" },
  { id: 4, title: "Klaviatura va Telegram", time: "5:30" },
  { id: 5, title: "Photopea bilan ishlash", time: "8:00" },
];

function CourseDetail() {
  const { id } = useParams(); 

  return (
    <div className="p-6 w-250">
     
      <div className="bg-[#00CC81] rounded-2xl p-5 shadow-sm mb-6 flex ">
        <h2 className="text-lg font-semibold text-white " >
          MODUL 1 · BLOK 1
        </h2>
        <p className="text-sm text-gray-400 mt-1 text-white ml-41">
          Kurs: <span className="capitalize">{id}</span>
        </p>

        <div className="mt-3 text-sm ml-120 text-white">
          O'rtacha ball: <span className="font-semibold">0 BALL</span>
        </div>
      </div>

      <div className="space-y-3">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white rounded-xl px-4 py-3 flex items-center justify-between shadow-sm hover:shadow-md transition"
          >
            <div>
              <p className="text-sm font-medium">
                {lesson.id}. {lesson.title}
              </p>
              <span className="text-xs text-gray-400">
                ⏱ {lesson.time}
              </span>
            </div>

            <button className="bg-indigo-600 text-white text-xs px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Start
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDetail;
