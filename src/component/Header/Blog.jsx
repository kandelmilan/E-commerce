import React from "react";
import Breadcrum from "../BreadCrum";
import Blog22 from "../../assets/image/Blog22.png";

function Blog() {
  return (
    <section className="container mx-auto">
      {/* Header */}
      <div className="bg-[#F6F5FF] w-full h-[280px] flex flex-col justify-center px-14">
        <h1 className="font-bold text-[24px] sm:text-[28px] lg:text-[35px] text-[#151875] leading-snug">
          Blogs pages
        </h1>
        <Breadcrum />
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-10 mt-10 px-6 lg:px-10">
        {/* Left: Blog Posts */}
        <div className="flex-1 space-y-12">
          {/* Blog Card */}
          <div className="space-y-4">
            <img src={Blog22} alt="Blog" className="rounded-lg shadow" />
            <div className="flex gap-4 text-sm text-gray-500">
              <span className="text-pink-500">Surf Axion</span>
              <span className="text-orange-400">Aug 09 2020</span>
            </div>
            <h3 className="text-[#151875] font-bold text-xl">
              Mauris at orci non vulputate diam tincidunt nec.
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
              malesuada vitae ultrices in in neque, porta dignissim.
            </p>
            <a href="#" className="text-pink-500 font-semibold hover:underline">
              Read More →
            </a>
          </div>

          {/* Duplicate cards for more posts */}
          <div className="space-y-4">
            <img src={Blog22} alt="Blog" className="rounded-lg shadow" />
            <div className="flex gap-4 text-sm text-gray-500">
              <span className="text-pink-500">Surf Axion</span>
              <span className="text-orange-400">Aug 09 2020</span>
            </div>
            <h3 className="text-[#151875] font-bold text-xl">
              Aenean vitae in aliquam ultrices lectus. Etiam.
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              facilisis quis auctor pretium ipsum, eu rutrum.
            </p>
            <a href="#" className="text-pink-500 font-semibold hover:underline">
              Read More →
            </a>
          </div>
        </div>

        {/* Right: Sidebar */}
        <aside className="w-full lg:w-[300px] space-y-8">
          {/* Search */}
          <div>
            <h3 className="font-bold text-[#151875] mb-3">Search</h3>
            <input
              type="text"
              placeholder="Search For Posts"
              className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-[#151875] mb-3">Categories</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex justify-between">
                Hobbies <span className="text-pink-500">(14)</span>
              </li>
              <li className="flex justify-between">
                Women <span>(21)</span>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="font-bold text-[#151875] mb-3">Recent Post</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="text-gray-600">It is a long established fact</p>
                <span className="text-xs text-gray-400">Aug 09 2020</span>
              </li>
              <li>
                <p className="text-gray-600">It is a long established fact</p>
                <span className="text-xs text-gray-400">Aug 09 2020</span>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className="font-bold text-[#151875] mb-3">Follow</h3>
            <div className="flex gap-4">
              <a href="#" className="text-pink-500">●</a>
              <a href="#" className="text-blue-500">●</a>
              <a href="#" className="text-cyan-500">●</a>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="font-bold text-[#151875] mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded">General</span>
              <span className="px-3 py-1 bg-gray-100 rounded">Asanil</span>
              <span className="px-3 py-1 bg-gray-100 rounded">Insas</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Blog;
