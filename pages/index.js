import React, { useState } from "react";
import Navbar from "../components/Navbar";
import tours from "../data/tours";
import TourCard from "../components/TourCard";
import FilterPopup from "../components/FilterPopup";
import Filter from "../components/Filter";

export default function Home() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Hepsi");

  // Mevcut kategorileri dinamik olarak al
  const categories = [...new Set(tours.map((tour) => tour.category))];

  // Seçilen kategoriye göre filtreleme yap
  const filteredTours =
    selectedCategory === "Hepsi"
      ? tours
      : tours.filter((tour) => tour.category === selectedCategory);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar (Filtre Popup'ı açmak için) */}
      <Navbar setIsFilterOpen={setIsFilterOpen} />

      {/* Filtre Popup */}
      <FilterPopup
        isOpen={isFilterOpen}
        setIsOpen={setIsFilterOpen}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Başlık */}
      <h1 className="text-2xl font-bold text-center mt-4">Popüler Turlar</h1>

      {/* Filtreleme Bileşeni */}
      <Filter categories={categories} setSelectedCategory={setSelectedCategory} />

      {/* Tur Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredTours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
}
