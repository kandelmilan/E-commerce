import React from "react";
import { Link, useLocation } from "react-router-dom";

const AppBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <div className="#">
    <nav className="mt-2 text-sm md:px-15">
      <ol className="flex flex-wrap items-center text-gray-600">
        <li>
          <Link to="/" className="hover:text-blue-600 font-medium">
            Home
          </Link>
        </li>

        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return (
            <li key={name} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-pink-500 font-medium capitalize">
                  {decodeURIComponent(name).replace(/-/g, " ")}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="hover:text-blue-600 capitalize"
                >
                  {decodeURIComponent(name).replace(/-/g, " ")}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
</div>
  );
};

export default AppBreadcrumbs;