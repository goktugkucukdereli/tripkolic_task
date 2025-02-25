import React from "react";

const Navbar = ({ setIsFilterOpen }) => {
  return (
    <nav className="bg-orange-500 p-4 flex justify-between items-center text-white shadow-md">
      <div className="flex items-center gap-3">
        <button className="text-2xl" onClick={() => setIsFilterOpen(true)}>☰</button>
        <h1 className="text-lg font-bold">Tripkolic</h1>
      </div>

      <div className="flex gap-4">
        <button className="flex items-center gap-2">
          ❤️ <span className="hidden md:block">Favoriler</span>
        </button>
        <button className="flex items-center gap-2">
          🛒 <span className="hidden md:block">Sepet</span>
        </button>
        <button className="flex items-center gap-2">
          🔑 <span className="hidden md:block">Giriş</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;