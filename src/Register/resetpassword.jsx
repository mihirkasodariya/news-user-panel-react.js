import React, { useState } from "react";
import emailimg from "../../src/images/contact-form.png";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import { useAuth } from "../Context/authContext"; // Import the context

const ResetPassword = () => {
  const navigate = useNavigate();
  const { resetPassword } = useAuth(); // Get resetPassword from context
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const { token } = useParams();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear errors when user starts typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validate form fields
  const validate = () => {
    let newErrors = {};

    if (!formData.newPassword) {
      newErrors.newPassword = "Password is required.";
    } else if (formData.newPassword.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    } else if (!/[A-Z]/.test(formData.newPassword)) {
      newErrors.password = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(formData.newPassword)) {
      newErrors.password = "Password must contain at least one lowercase letter.";
    } else if (!/[0-9]/.test(formData.newPassword)) {
      newErrors.password = "Password must contain at least one number.";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.newPassword)) {
      newErrors.password = "Password must contain at least one special character.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      try {
        // const token = new URLSearchParams(window.location.search).get('token');
        await resetPassword({ ...formData, clientToken: token });
        navigate("/login"); // Navigate to login page after successful reset
      } catch (error) {
        console.error("Error resetting password:", error);
        setErrors({ newPassword: "Failed to reset password. Please try again." });
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-l from-[#2bace2] via-[#4360ac] to-[#4360ac]">
      <div className="flex items-center bg-white bg-opacity-20 p-5 rounded-lg shadow-lg backdrop-blur-md">
        
        {/* Left Side - Image */}
        <div className="w-1/2 hidden md:block">
          <img src={emailimg} alt="Reset Password" className="w-full" />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-5 bg-white bg-opacity-70 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r to-[#2bace2] from-[#4360ac] bg-clip-text text-transparent">
              Reset 
            </span>
            Password
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Password Field */}
            <div>
              <label className="block font-medium">New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="newPassword"
                  placeholder="Enter New Password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className={`border p-2 w-full rounded ${
                    errors.newPassword ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <span
                  className="absolute text-gray-600 text-xl right-3 top-2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeSharp /> : <FaRegEyeSlash />}
                </span>
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block font-medium">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`border p-2 w-full rounded ${
                    errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <span
                  className="absolute text-gray-600 text-xl right-3 top-2 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <IoEyeSharp /> : <FaRegEyeSlash />}
                </span>
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-[#4360ac] to-[#2bace2] hover:scale-105 hover:from-[#2bace2] hover:to-[#4360ac] transition-all duration-300 text-white px-4 py-2 rounded"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
