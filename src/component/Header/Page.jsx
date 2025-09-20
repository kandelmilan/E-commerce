import React from "react";
import { Link } from "react-router-dom";

function CategoriesPage() {
  const categories = [
    { id: 1, name: "Chairs", image: "/images/chairs.jpg", link: "/category/chairs" },
    { id: 2, name: "Sofas", image: "/images/sofas.jpg", link: "/category/sofas" },
    { id: 3, name: "Tables", image: "/images/tables.jpg", link: "/category/tables" },
    { id: 4, name: "Beds", image: "/images/beds.jpg", link: "/category/beds" },
    { id: 5, name: "Wardrobes", image: "/images/wardrobes.jpg", link: "/category/wardrobes" },
    { id: 6, name: "Desks", image: "/images/desks.jpg", link: "/category/desks" },
    { id: 7, name: "Outdoor", image: "/images/outdoor.jpg", link: "/category/outdoor" },
    { id: 8, name: "Storage", image: "/images/storage.jpg", link: "/category/storage" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Discover Our Categories</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Explore a wide range of furniture categories to style your home.
            From cozy sofas to elegant dining tables — we’ve got you covered.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl">
                <h2 className="text-white text-2xl font-bold">{cat.name}</h2>
                <Link
                  to={cat.link}
                  className="mt-3 bg-white text-indigo-600 px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-600 hover:text-white transition"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pagination / Next Sections */}
      <section className="flex justify-center items-center py-10">
        <div className="flex space-x-3">
          <button className="w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-white text-gray-700 border rounded-full hover:bg-indigo-100 transition">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-white text-gray-700 border rounded-full hover:bg-indigo-100 transition">
            3
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-white text-gray-700 border rounded-full hover:bg-indigo-100 transition">
            4
          </button>
        </div>
      </section>
    </div>
  );
}

export default CategoriesPage;