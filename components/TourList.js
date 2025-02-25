import { useState } from "react";
import tours from "../data/tours";
import FilterPopup from "./FilterPopup";

const TourList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredTours = tours.filter(
    (tour) =>
      tour.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      tour.price >= minPrice &&
      tour.price <= maxPrice
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Tur Ara..."
          className="w-3/4 p-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => setIsFilterOpen(true)}
          className="px-4 py-2 bg-orange-500 text-white rounded-md"
        >
          Filtrele
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTours.map((tour) => (
          <div key={tour.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-bold mt-2">{tour.title}</h3>
            <p className="text-gray-600">{tour.location}</p>
            <p className="text-blue-500 font-bold">${tour.price}</p>
          </div>
        ))}
      </div>

      <FilterPopup isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </div>
  );
};

export default TourList;