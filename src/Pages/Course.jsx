import { Link } from "react-router-dom";

const courses = [
  {
    id: "beginner",
    title: "Beginner",
    code: "BG-1877",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "html",
    title: "Front-End (HTML & CSS)",
    code: "F1-1995",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "js",
    title: "Front-End (JavaScript)",
    code: "F2-2515",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "react",
    title: "Front-End (React)",
    code: "F3-3017",
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: "online",
    title: "Beginner+ (Online)",
    code: "BG+2025",
    color: "bg-green-100 text-green-600",
  },
];

function Course() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-5">Davom eting...</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl p-5 flex gap-4 items-center shadow-sm hover:shadow-md transition"
          >
         
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold ${course.color}`}
            >
              ⚛️
            </div>

    
            <div className="flex-1">
              <h3 className="text-sm font-semibold">{course.title}</h3>
              <p className="text-xs text-gray-400 mt-1">{course.code}</p>

              <Link
                to={`/Course/${course.id}`}
                className="text-indigo-600 text-sm font-medium mt-2 inline-block"
              >
                Kirish →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
