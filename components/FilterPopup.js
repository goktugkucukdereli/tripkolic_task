import React, { useState } from "react";

const FilterPopup = ({ isOpen, setIsOpen }) => {
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [startTime, setStartTime] = useState(12);
  const [groupSize, setGroupSize] = useState(5);
  const [location, setLocation] = useState("");

  const themes = ["Island Tour", "Land Tour", "Safari"];
  const activities = ["Swimming", "Running", "Elephant care", "Snorkelling"];
  const vehicles = ["Yacht", "Speedboat", "Safari", "Catamaran", "Speedcatamaran"];
  const features = ["Transfer", "Halal Food", "Vegetarian Food"];

  const toggleSelection = (category, setCategory, item) => {
    setCategory((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleReset = () => {
    setSelectedThemes([]);
    setSelectedActivities([]);
    setSelectedVehicles([]);
    setSelectedFeatures([]);
    setPriceRange([0, 500]);
    setStartTime(12);
    setGroupSize(5);
    setLocation("");
  };

  const handleSearch = () => {
    console.log("Filters Applied:");
    console.log("Location:", location);
    console.log("Selected Themes:", selectedThemes);
    console.log("Selected Activities:", selectedActivities);
    console.log("Selected Vehicles:", selectedVehicles);
    console.log("Selected Features:", selectedFeatures);
    console.log("Price Range:", priceRange);
    console.log("Start Time:", startTime);
    console.log("Group Size:", groupSize);
    alert("Filters applied! (Check console for details)");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-start items-start z-50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white w-72 h-full shadow-lg p-4 overflow-auto relative rounded-r-lg"
        onClick={(e) => e.stopPropagation()}
      >
            <div className="flex items-center justify-between border-b pb-2 mb-3">

            <button className="text-sm font-semibold px-2 py-1 rounded-md bg-orange-500 text-white">
                TOURS
            </button>

            <span className="text-sm font-semibold text-gray-700 border-b-2 border-black">
                Filter
            </span>

            <button
                onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
                }}
                className="bg-gray-300 text-gray-800 text-xs px-3 py-1 w-8 h-8 rounded-full flex items-center justify-center shadow-md hover:bg-gray-400"
            >
                ✖
            </button>
            </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-semibold text-sm mb-1">Location</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search location" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 text-sm border rounded-md pr-10"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">🔍</span> 
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold text-sm mb-1">Theme</label>
            <div className="flex flex-wrap gap-1">
              {themes.map((theme) => (
                <button
                  key={theme}
                  onClick={() => toggleSelection(selectedThemes, setSelectedThemes, theme)}
                  className={`px-2 py-1 text-xs rounded-full border ${
                    selectedThemes.includes(theme) ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold text-sm mb-1">Activity</label>
            <div className="flex flex-wrap gap-1">
              {activities.map((activity) => (
                <button
                  key={activity}
                  onClick={() => toggleSelection(selectedActivities, setSelectedActivities, activity)}
                  className={`px-2 py-1 text-xs rounded-full border ${
                    selectedActivities.includes(activity) ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {activity}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-semibold text-sm mb-1">Price</label>
            <input type="range" min="0" max="500" value={priceRange[1]} onChange={(e) => setPriceRange([0, Number(e.target.value)])} className="w-full"/>
            <div className="flex justify-between text-xs text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-semibold text-sm mb-1">Start Time</label>
            <input type="range" min="0" max="24" step="1" value={startTime} onChange={(e) => setStartTime(Number(e.target.value))} className="w-full"/>
            <div className="flex justify-between text-xs text-gray-600">
              <span>00:00</span>
              <span>{startTime}:00</span>
            </div>
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-semibold text-sm mb-1">Group Size</label>
            <input type="range" min="1" max="50" step="1" value={groupSize} onChange={(e) => setGroupSize(Number(e.target.value))} className="w-full"/>
            <div className="flex justify-between text-xs text-gray-600">
              <span>1</span>
              <span>{groupSize}</span>
            </div>
          </div>

            <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1 text-sm mb-1">Vehicle</label>
            <div className="flex flex-wrap gap-1">
              {vehicles.map((vehicle) => (
                <button
                  key={vehicle}
                  onClick={() => toggleSelection(selectedVehicles, setSelectedVehicles, vehicle)}
                  className={`px-2 py-1 text-xs rounded-full border ${
                    selectedVehicles.includes(vehicle) ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {vehicle}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-semibold text-sm mb-1">Features</label>
            <div className="flex flex-wrap gap-1">
              {features.map((feature) => (
                <button key={feature} onClick={() => toggleSelection(selectedFeatures, setSelectedFeatures, feature)}
                  className={`px-2 py-1 text-xs rounded-md border ${
                    selectedFeatures.includes(feature) ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
                  }`}>
                  {feature}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end mt-3 gap-2">
            <button onClick={handleReset} className="bg-orange-500 text-white text-xs px-3 py-1 rounded-md">RESET</button>
            <button onClick={handleSearch} className="bg-orange-500 text-white text-xs px-3 py-1 rounded-md">SEARCH</button>
          </div>
        </div>
      </div>
  );
};

export default FilterPopup;