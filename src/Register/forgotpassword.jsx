import React, { useState } from "react";
import emailimg from "../../src/images/contact-form.png";
import { useNavigate } from "react-router";
import { useAuth } from "../Context/authContext"; // Import the context


const ForgotPassword = () => {
  const navigate = useNavigate();
  const { forgotPassword } = useAuth(); // Get forgotPassword from context
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  // Validate email field
  const validate = () => {
    let newErrors = {};

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = "Invalid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      try {
        await forgotPassword(email);
        navigate("/resetpassword");
      } catch (error) {
        console.error("Error sending reset password link:", error);
        setErrors({ email: "Failed to send reset password link. Please try again." });
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-l from-[#2bace2] via-[#4360ac] to-[#4360ac]">
      <div className="flex items-center bg-white bg-opacity-20 p-5 rounded-lg shadow-lg backdrop-blur-md">
        
        {/* Left Side - Image */}
        <div className="w-1/2 hidden md:block">
          <img src={emailimg} alt="Forgot Password" className="w-full" />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-5 bg-white bg-opacity-70 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r to-[#2bace2] from-[#4360ac] bg-clip-text text-transparent">
              Forgot 
            </span>
            Password
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email Field */}
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`border p-2 w-full rounded ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-[#4360ac] to-[#2bace2] hover:from-[#2bace2] hover:to-[#4360ac] hover:scale-105 transition-all duration-300 text-white px-4 py-2 rounded"
            >
              Send Reset password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
