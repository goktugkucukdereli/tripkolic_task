import React from "react";

const Filter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex justify-center gap-3 my-4">
      {/* Hepsi Butonu */}
      <button
        onClick={() => setSelectedCategory("Hepsi")}
        className={`px-4 py-2 rounded-md transition-all duration-300 ${
          selectedCategory === "Hepsi"
            ? "bg-blue-500 text-white" // Seçili ise mavi
            : "bg-gray-200 text-gray-700 hover:bg-gray-300" // Seçili değilse gri
        }`}
      >
        Hepsi
      </button>

      {/* Diğer Kategoriler */}
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            selectedCategory === category
              ? "bg-blue-500 text-white" // Seçilen kategori rengi (aktif)
              : "bg-gray-200 text-gray-700 hover:bg-gray-300" // Normal rengi
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;
