import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Baseurl } from '../../hook/useFetch';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import axios from 'axios';
import Logo from "../../assets/image/Logo.png"

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate()

  const handleSubmmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${Baseurl}/user/login`, formData)
      localStorage.setItem("token", res?.data?.token)
      navigate("/")
      toast.success("Login Successfull")
    } catch (err) {
      console.log(err)
      toast.error(err?.response?.data?.message)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Card */}
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
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0A174E]"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full border border-gray-300 rounded-md pl-10 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0A174E]"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
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
        <button
          className="w-full primary-btn py-3 rounded-md"
          onClick={(e) => handleSubmmit(e)}
        >
          Sign In
        </button>

        {/* Footer link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an Account?
          <a href="/signup" className="text-[#0A174E] hover:underline ml-1">
            Create account
          </a>
        </p>
      </div>

      {/* Logo Section */}
      <div className="mt-8">
        <img src={Logo} alt="Logo" className="h-12" />
      </div>
    </div>
  );
}

export default LoginForm;
