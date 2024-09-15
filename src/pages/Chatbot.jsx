import React from "react";
import Header from "../components/Header"; // if it's in a parent folder

function Chatbot() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen bg-blue-50 p-4">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-blue-100 border-b border-blue-200">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="rounded-full"
              />
              <div>
                <h2 className="text-lg font-bold text-blue-900">John Doe</h2>
                <p className="text-sm text-blue-600">Online</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="text-blue-700 hover:text-blue-900">
                <i className="fas fa-cog"></i>
              </button>
              <button className="text-blue-700 hover:text-blue-900">
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
          </div>

          <div className="p-4 space-y-4 overflow-auto h-96">
            <div className="text-center text-sm text-blue-500">
              14 October, Sunday
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="https://via.placeholder.com/30"
                alt="Profile"
                className="rounded-full"
              />
              <div className="bg-blue-100 p-4 rounded-xl max-w-xs">
                <p>This is a sample big message with a longer text paragraph.</p>
                <span className="text-xs text-blue-500 block mt-2">
                  10:08 AM
                </span>
              </div>
            </div>

            <div className="flex justify-end items-start space-x-4">
              <div className="bg-blue-600 text-white p-4 rounded-xl max-w-xs">
                <div className="flex items-center space-x-2">
                  <button className="focus:outline-none">
                    <i className="fas fa-play"></i>
                  </button>
                  <div className="flex-grow">
                    <div className="h-2 bg-white rounded-lg w-full"></div>
                  </div>
                  <span className="text-sm">0:30</span>
                </div>
                <span className="text-xs text-blue-200 block mt-2">
                  10:08 AM
                </span>
              </div>
              <img
                src="https://via.placeholder.com/30"
                alt="Profile"
                className="rounded-full"
              />
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="https://via.placeholder.com/30"
                alt="Profile"
                className="rounded-full"
              />
              <div className="bg-blue-100 p-4 rounded-xl max-w-xs">
                <div className="flex items-center space-x-2">
                  <button className="focus:outline-none">
                    <i className="fas fa-play"></i>
                  </button>
                  <div className="flex-grow">
                    <div className="h-2 bg-blue-400 rounded-lg w-full"></div>
                  </div>
                  <span className="text-sm">1:20</span>
                </div>
                <span className="text-xs text-blue-500 block mt-2">
                  10:09 AM
                </span>
              </div>
            </div>

            <div className="flex justify-end items-start space-x-4">
              <div className="bg-blue-600 text-white p-4 rounded-xl max-w-xs">
                <p>This is a sample message for a chat.</p>
                <span className="text-xs text-blue-200 block mt-2">
                  10:10 AM
                </span>
              </div>
              <img
                src="https://via.placeholder.com/30"
                alt="Profile"
                className="rounded-full"
              />
            </div>
          </div>

          <div className="flex items-center p-4 bg-blue-50 border-t border-blue-200">
            <input
              type="text"
              className="flex-grow bg-white p-3 rounded-full border border-blue-300 focus:outline-none focus:border-blue-500"
              placeholder="Message..."
            />
            <button className="ml-4 text-blue-600 hover:text-blue-700">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
