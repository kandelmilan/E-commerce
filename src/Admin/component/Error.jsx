
import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, ShieldBan, Server, Lock } from "lucide-react";

function Error({
  code = "404",
  title = "Page Not Found",
  message = "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
}) {
  // Select icon dynamically
  const getIcon = () => {
    const iconProps = {
      size: 70,
      className: "drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]",
    };

    switch (code) {
      case "403":
        return <ShieldBan {...iconProps} className="text-yellow-400" />;
      case "500":
        return <Server {...iconProps} className="text-purple-400" />;
      case "401":
        return <Lock {...iconProps} className="text-blue-400" />;
      default:
        return <AlertTriangle {...iconProps} className="text-red-400" />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] text-white p-6 overflow-hidden relative">
      {/* Background Glow Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-indigo-600 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-pink-600 rounded-full blur-3xl opacity-30 animate-pulse" />
      </div>

      {/* Card */}
      <div className="relative z-10 text-center max-w-lg w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
        {/* Icon */}
        <div className="flex justify-center mb-8 animate-bounce">
          <div className="bg-white/10 p-6 rounded-full border border-white/20 shadow-lg">
            {getIcon()}
          </div>
        </div>

        {/* Code */}
        <h1 className="text-8xl font-extrabold tracking-widest text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          {code}
        </h1>

        {/* Title */}
        <h2 className="mt-3 text-3xl font-semibold text-indigo-300">{title}</h2>

        {/* Message */}
        <p className="mt-4 text-gray-300 leading-relaxed text-sm sm:text-base">
          {message}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="px-7 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-medium shadow-md hover:shadow-indigo-500/50 transition transform hover:scale-105 duration-200"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="px-7 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-medium border border-white/30 text-gray-200 hover:text-white transition transform hover:scale-105 duration-200"
          >
            Contact Support
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-gray-400">
          © {new Date().getFullYear()} YourApp. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Error;
