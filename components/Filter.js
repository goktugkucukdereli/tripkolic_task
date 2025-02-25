import React from "react";

const Filter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex justify-center gap-3 my-4">
      <button
        onClick={() => setSelectedCategory("Hepsi")}
        className={`px-4 py-2 rounded-md transition-all duration-300 ${
          selectedCategory === "Hepsi"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Hepsi
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;