import React, { useState } from "react";
import Header from "../components/Header";

const initialFaqs = [
  {
    id: 1,
    title: "How is Tangerine healthy?",
    content:
      "Tangerine is a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
  },
  {
    id: 2,
    title: "How does Tangerine support skin health?",
    content:
      "Tangerine's vitamin C helps in maintaining skin elasticity and hydration.",
  },
];

function Faq() {
  const [faqs, setFaqs] = useState(initialFaqs);
  const [newFaq, setNewFaq] = useState({ title: "", content: "" });

  // Add a new FAQ
  const addFaq = () => {
    if (newFaq.title && newFaq.content) {
      setFaqs([
        ...faqs,
        { id: faqs.length + 1, title: newFaq.title, content: newFaq.content },
      ]);
      setNewFaq({ title: "", content: "" });
    }
  };

  // Delete an FAQ
  const deleteFaq = (id) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  // Update an FAQ
  const updateFaq = (id) => {
    const updatedTitle = prompt(
      "Enter new title:",
      faqs.find((faq) => faq.id === id).title
    );
    const updatedContent = prompt(
      "Enter new content:",
      faqs.find((faq) => faq.id === id).content
    );
    setFaqs(
      faqs.map((faq) =>
        faq.id === id
          ? { ...faq, title: updatedTitle, content: updatedContent }
          : faq
      )
    );
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-purple-200 via-blue-200 to-pink-200 p-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-purple-700 mb-6">
            FAQ Section
          </h2>

          {/* FAQ List */}
          <div className="space-y-4 mb-8">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white p-4 shadow-md rounded-md hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold text-purple-600">
                  {faq.title}
                </h3>
                <p className="text-gray-700 mt-2">{faq.content}</p>
                <div className="flex space-x-4 mt-4">
                  <button
                    onClick={() => updateFaq(faq.id)}
                    className="text-white bg-blue-400 px-4 py-2 rounded hover:bg-blue-500 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteFaq(faq.id)}
                    className="text-white bg-pink-400 px-4 py-2 rounded hover:bg-pink-500 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add FAQ Section */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Add FAQ</h3>
            <input
              type="text"
              placeholder="Enter title"
              value={newFaq.title}
              onChange={(e) => setNewFaq({ ...newFaq, title: e.target.value })}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Enter content"
              value={newFaq.content}
              onChange={(e) =>
                setNewFaq({ ...newFaq, content: e.target.value })
              }
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <button
              onClick={addFaq}
              className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition"
            >
              Add FAQ
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
