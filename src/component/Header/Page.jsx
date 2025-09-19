
import React from "react";
import { Link } from "react-router-dom";

function CategoriesPage() {
  const categories = [
    {
      id: 1,
      name: "Chairs",
      image: "/",
      link: "/category/chairs",
    },
    {
      id: 2,
      name: "Sofas",
      image: "/",
      link: "/category/sofas",
    },
    {
      id: 3,
      name: "Tables",
      image: "/",
      link: "/category/tables",
    },
    {
      id: 4,
      name: "Beds",
      image: "/",
      link: "/category/beds",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-primary text-center mb-12">
        All Categories
      </h1>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-md"
          >
            {/* Category Image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition rounded-2xl">
              <h2 className="text-white text-2xl font-bold">{cat.name}</h2>
              <Link
                to={cat.link}
                className="mt-3 bg-white text-primary px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition"
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
