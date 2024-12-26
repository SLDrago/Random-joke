import { useEffect, useState } from "react";
import "./App.css";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import logo from "./assets/logo.png";

function App() {
  const [data, setData] = useState([]);
  const [isRotating, setIsRotating] = useState(false);

  const getJoke = async () => {
    setIsRotating(true);
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );
      setData(response.data);
      setIsRotating(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsRotating(false);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  const handleClick = () => {
    getJoke();
  };

  return (
    <>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8"
          >
            <div className="flex lg:flex-1">
              <a className="-m-1.5 p-1.5">
                <span className="sr-only">SL Drago</span>
                <img alt="" src={logo} className="h-12 w-auto" />
              </a>
            </div>
            <div className="flex flex-1 justify-end">
              <button
                className="text-sm/6 font-semibold text-gray-900 rounded-full bg-slate-100 hover:bg-slate-200 p-3"
                onClick={handleClick}
              >
                <ArrowPathRoundedSquareIcon
                  className={`h-6 w-6 text-gray-700 ${
                    isRotating ? "rotate-animation" : ""
                  }`}
                />
              </button>
            </div>
          </nav>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-full py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h2 className="text-balance text-2xl font-semibold tracking-wider text-gray-700 sm:text-4xl mb-9">
                Wanna hear a joke?
              </h2>
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                {data.setup}
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                {data.punchline}
              </p>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
