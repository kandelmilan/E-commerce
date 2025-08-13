import React, { useState } from 'react';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white p-6 sm:p-8 rounded-md shadow-md border border-blue-400">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Please login using your account details below.
        </p>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0A174E]"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full border border-gray-300 rounded-md px-3 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0A174E]"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-500 text-xs"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        {/* Forgot password */}
        <div className="text-right mb-4">
          <a href="#" className="text-sm text-gray-500 hover:text-[#0A174E]">
            Forgot your password?
          </a>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-black text-white py-2 rounded-md hover:bg-primary transition">
          Sign In
        </button>

        {/* Footer link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?
          <a href="/signup" className="text-primaryrimary hover:underline ml-1">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
