import React from "react";

const TourCard = ({ tour }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden relative">
      {tour.discount && (
        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
          %{tour.discount} İndirim
        </div>
      )}

      <div className="absolute top-2 right-2">
        <button className="text-gray-500 hover:text-red-500">
          ❤️
        </button>
      </div>

      <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <span className="bg-orange-200 text-orange-700 text-xs px-2 py-1 rounded-full">
          {tour.category}
        </span>

        <h3 className="text-lg font-bold mt-2">{tour.title}</h3>

        <p className="text-gray-600 text-sm">{tour.location}</p>

        <div className="flex items-center text-yellow-500 text-sm mt-2">
          ⭐ {tour.rating} <span className="text-gray-500 ml-1">({tour.reviews})</span>
        </div>

        <div className="flex items-center mt-2">
          {tour.oldPrice && <span className="text-gray-400 line-through mr-2">${tour.oldPrice}</span>}
          <span className="text-blue-500 font-bold">${tour.price}</span>
        </div>

        <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
          Detaylar →
        </button>
      </div>
    </div>
  );
};

export default TourCard;