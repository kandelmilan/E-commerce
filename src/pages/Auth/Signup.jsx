import React,{ useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, User2 } from 'lucide-react';
  import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import {Baseurl} from "../../hook/useFetch"


<ToastContainer>this is a container</ToastContainer>

function SignupForm(){
    const [showPassword,setShowPassword]=useState(false);
    const navigate=useNavigate()
    const [formData,setFormData]=useState({
        username:'',
        email:"",
        password:'',
        role:'',

    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${Baseurl}/api/v1/user/signup`, formData)
            console.log(res)
            if (res.data) {
                toast("Signed up sucessfully")
                navigate("/login")

            }

        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || "Signup failed!");
                console.error("Error Response:", error.response.data);
            }
            // If no response from server
            else if (error.request) {
                toast.error("No response from server. Please try again later.");
                console.error("Error Request:", error.request);
            }
            // Other unexpected errors
            else {
                toast.error("Something went wrong!");
                console.error("Error:", error.message);
            }
        }


    };

    return(
       <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-md shadow-md border border-blue-400">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center mb-4">Sign Up</h2>
                <p className="text-sm text-gray-500 text-center mb-6">
                    Create a new account below.
                </p>

                <form onSubmit={handleSubmit}>

                    {/* Full Name & Phone */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        <div className="flex-1">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Username Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <input
                                    id="username"
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={formData.username}
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                    className="w-full border border-gray-300 rounded-md pl-12 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0A174E]"
                                    required
                                />
                            </div>
                        </div>

                    </div>


                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full border border-gray-300 rounded-md pl-12 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0A174E]"
                                required
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <div className="relative">

                            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="w-full border border-gray-300 rounded-md pl-12 pr-12 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0A174E]"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                                tabIndex={-1}
                            >
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Role
                            </label>
                            <div className="relative">
                                <User2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <select name="role" id="role" onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
                                    <option value="buyer">Buyer</option>
                                    <option value="seller">Seller</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Sign Up Button */}
                    <button type="submit" className="w-full primary-btn py-2 rounded-md text-sm">
                        Sign Up
                    </button>
                </form>

                {/* Footer link */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an Account?
                    <a href="/login" className="text-[#0A174E] hover:underline ml-1">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
export default SignupForm;