import React from "react";

const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Do not render if modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-blue-900 opacity-60"></div> {/* Updated background color */}
      <div className="bg-blue-50 rounded-xl shadow-lg p-6 w-11/12 md:w-1/2 max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-blue-500 hover:text-blue-700"
        >
          ✕
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Fruit.AI</h2> {/* Updated title color */}
          <p className="text-center text-blue-700">
            Whether you're looking to discover new fruits, understand their
            nutritional values, or find the perfect fruit for your diet, our
            AI-driven chatbot is here to assist. We provide personalized fruit
            recommendations tailored to your health needs, making it easier for
            you to integrate the best fruits into your daily routine.
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
