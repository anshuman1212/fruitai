import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
  const [activeTab, setActiveTab] = useState("Chat");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 via-blue-100 to-purple-100">
      <Header />
      <div className="flex flex-col justify-center items-center w-full max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 lg:mb-4 text-purple-700">
          Fruit.AI
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-8 lg:mb-12">
          "Be Healthy!"
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full px-4 sm:px-0">
          <Link to="/ChatBot" className="w-full">
            <button
              onClick={() => handleTabClick("Chat")}
              className={`w-full py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-10 rounded-xl shadow-md text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold transition ${
                activeTab === "Chat"
                  ? "bg-yellow-400 text-purple-900"
                  : "bg-yellow-200 text-purple-700 hover:bg-yellow-300"
              }`}
            >
              Chat.
            </button>
          </Link>

          <Link to="/anonymous" className="w-full">
            <button
              onClick={() => handleTabClick("Anonymous")}
              className={`w-full py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-10 rounded-xl shadow-md text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold transition ${
                activeTab === "Anonymous"
                  ? "bg-blue-300 text-pink-600"
                  : "bg-blue-200 text-pink-500 hover:bg-blue-300"
              }`}
            >
              Anonymous
            </button>
          </Link>

          <Link to="/Faq" className="w-full">
            <button
              onClick={() => handleTabClick("FAQs")}
              className={`w-full py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-10 rounded-xl shadow-md text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold transition ${
                activeTab === "FAQs"
                  ? "bg-purple-300 text-blue-900"
                  : "bg-purple-200 text-blue-900 hover:bg-purple-300"
              }`}
            >
              FAQs
            </button>
          </Link>

          <Link to="/about" className="w-full">
            <button
              onClick={() => handleTabClick("About")}
              className={`w-full py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-10 rounded-xl shadow-md text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold transition ${
                activeTab === "About"
                  ? "bg-pink-300 text-purple-600"
                  : "bg-pink-200 text-purple-600 hover:bg-pink-300"
              }`}
            >
              About
            </button>
          </Link>

          <Link to="/services" className="w-full">
            <button
              onClick={() => handleTabClick("Translator")}
              className={`w-full py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-10 rounded-xl shadow-md text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold transition ${
                activeTab === "Translator"
                  ? "bg-green-300 text-purple-700"
                  : "bg-green-200 text-purple-600 hover:bg-green-300"
              }`}
            >
              Translator
            </button>
          </Link>

          <Link to="/contact" className="w-full">
            <button
              onClick={() => handleTabClick("Contact")}
              className={`w-full py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-10 rounded-xl shadow-md text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold transition ${
                activeTab === "Contact"
                  ? "bg-red-300 text-purple-600"
                  : "bg-red-200 text-purple-600 hover:bg-red-300"
              }`}
            >
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
