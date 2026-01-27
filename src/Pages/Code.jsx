import React from "react";

const Code = () => {
  return (
    <div>
      <div className="ml-30">
        <h1 className="text-xl ml-11">Top Kompaniyalar</h1>
        <img
          className="w-255 ml-11"
          src="https://space.marsit.uz/img/editor-ads.08b4da43.webp"
          alt=""
        />

        <div className="min-h-screen bg-gray-50 p-6 mr-50">
          <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative flex items-center justify-between rounded-xl bg-white p-5 shadow-sm border border-gray-100">
              <div className="absolute top-4 right-4">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-yellow-100 text-yellow-500 text-sm">
                  👑
                </span>
              </div>

              <div className="flex items-center gap-4">
                <img
                  className="w-17"
                  src="https://lab.marsit.uz/media/quiz_theme_images/Amazon/Amazon-512.webp"
                  alt=""
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Amazon
                  </h3>
                  <p className="text-sm text-gray-500">
                    10 задач | 0% выполнено
                  </p>
                  <button className="text-blue-600 text-sm font-medium hover:underline  flex justify-start">
                    <a href="https://www.amazon.com/"> Войти →</a>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between rounded-xl bg-white p-5 shadow-sm border border-gray-100">
              <div className="absolute top-4 right-4">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-yellow-100 text-yellow-500 text-sm">
                  👑
                </span>
              </div>

              <div className="flex items-center gap-4">
                <img
                  className="w-17"
                  src="https://lab.marsit.uz/media/quiz_theme_images/Google/Google_icon.png"
                  alt=""
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Google
                  </h3>
                  <p className="text-sm text-gray-500">
                    11 задач | 0% выполнено
                  </p>
                  <button className="text-blue-600 text-sm font-medium hover:underline">
                    <a href="https://www.google.com/?hl=ru"> Войти →</a>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between rounded-xl bg-white p-5 shadow-sm border border-gray-100">
              <div className="absolute top-4 right-4">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-yellow-100 text-yellow-500 text-sm">
                  👑
                </span>
              </div>

              <div className="flex items-center gap-4">
                <img
                  className="w-17"
                  src="https://lab.marsit.uz/media/quiz_theme_images/Netflix/Netflix_icon.jpeg"
                  alt=""
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Netflix
                  </h3>
                  <p className="text-sm text-gray-500">
                    10 задач | 0% выполнено
                  </p>
                  <button className="text-blue-600 text-sm font-medium hover:underline">
                    <a href="https://www.netflix.com/uz-ru/"> Войти →</a>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between rounded-xl bg-white p-5 shadow-sm border border-gray-100">
              <div className="absolute top-4 right-4">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-yellow-100 text-yellow-500 text-sm">
                  👑
                </span>
              </div>

              <div className="flex items-center gap-4">
                <img
                  className="w-17"
                  src="https://lab.marsit.uz/media/quiz_theme_images/Facebook/Facebook_f_logo_2021.svg.png"
                  alt=""
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Facebook
                  </h3>
                  <p className="text-sm text-gray-500">
                    12 задач | 0% выполнено
                  </p>
                  <button className="text-blue-600 text-sm font-medium hover:underline">
                    <a href="https://www.facebook.com/?locale=ru_RU">
                      {" "}
                      Войти →
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
