import React, { useState } from "react";
import Navbar from "../components/Navbar";
import tours from "../data/tours";
import TourCard from "../components/TourCard";
import FilterPopup from "../components/FilterPopup";

export default function Home() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Hepsi");

  const categories = ["Hepsi", ...new Set(tours.map((tour) => tour.category))];

  const filteredTours =
    selectedCategory === "Hepsi"
      ? tours
      : tours.filter((tour) => tour.category === selectedCategory);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar setIsFilterOpen={setIsFilterOpen} />

      {/* Filtreleme Popup */}
      <FilterPopup
        isOpen={isFilterOpen}
        setIsOpen={setIsFilterOpen}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Başlık */}
      <h1 className="text-2xl font-bold text-center mt-4">Popüler Turlar</h1>

      {/* Kategoriler */}
      <div className="overflow-x-auto whitespace-nowrap flex gap-2 p-2 px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              selectedCategory === category
                ? "bg-orange-500 text-white" // Seçili kategori vurgulama
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Turların Listelenmesi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredTours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
}
