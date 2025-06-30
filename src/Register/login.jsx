import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Formik } from "formik";
import axios from "axios";
import emailimg from "../../src/images/contact-form.png";
import { useNavigate } from "react-router";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useAuth } from "../Context/authContext";
import { GoogleLogin } from "@react-oauth/google";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = "https://news-backend-node-js.onrender.com" || "http://localhost:5000";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { updateUser } = useAuth();

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/google`, {
        tokenId: credentialResponse.credential,
      });
      localStorage.setItem("token", response.data.token);
      updateUser(response.data.user);
      navigate("/");
    } catch (error) {
      console.error("Google login failed:", error);
      alert("Google login failed! " + (error.response?.data?.message || ""));
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center bg-gradient-to-l from-[#2bace2] via-[#4360ac] to-[#4360ac]">
      <div className="flex flex-col md:flex-row items-center bg-white bg-opacity-20 p-4 md:p-6 rounded-lg shadow-lg backdrop-blur-md w-[95%] md:w-[85%] lg:w-[70%] xl:w-[60%] max-w-[1100px]">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 hidden md:block">
          <img
            src={emailimg}
            alt="Login Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-4 md:p-6 bg-white bg-opacity-70 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r to-[#2bace2] from-[#4360ac] bg-clip-text text-transparent">
              Please{" "}
            </span>
            Login
          </h1>

          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Enter valid email";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }

              if (!values.password) {
                errors.password =
                  "Password must be at least 8 characters long.";
              } else if (values.password.length < 8) {
                errors.password = "Password must be at least 8 characters";
              } else if (!/[A-Z]/.test(values.password)) {
                errors.password =
                  "Password must contain at least one uppercase letter";
              } else if (!/[a-z]/.test(values.password)) {
                errors.password =
                  "Password must contain at least one lowercase letter";
              } else if (!/[0-9]/.test(values.password)) {
                errors.password = "Password must contain at least one number";
              } else if (!/[!@#$%^&*(),.?\":{}|<>]/.test(values.password)) {
                errors.password =
                  "Password must contain at least one special character";
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const response = await axios.post(
                  `${BASE_URL}/auth/login`,
                  values
                );
                localStorage.setItem("token", response.data.token);
                updateUser(response.data.user);
                navigate("/");
              } catch (error) {
                alert(
                  "Login failed! " + (error.response?.data?.message || "")
                );
              }
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Email Field */}
                <div>
                  <label className="block font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    onChange={handleChange}
                    onBlur={(e) => {
                      handleBlur(e);
                      if (errors.email && values.email) {
                        toast.error(errors.email);
                      }
                    }}
                    value={values.email}
                    className={`border-2 p-2 w-full rounded ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label className="block font-medium">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Your Password"
                      onChange={handleChange}
                      onBlur={(e) => {
                        handleBlur(e);
                        if (errors.password && values.password) {
                          toast.error(errors.password);
                        }
                      }}
                      value={values.password}
                      className={`border-2 p-2 w-full rounded ${
                        errors.password && touched.password
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <span
                      className="absolute text-gray-600 text-xl right-3 top-2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <IoEyeSharp /> : <FaRegEyeSlash />}
                    </span>
                  </div>
                  <a
                    href="/forgotpassword"
                    className="text-end mt-2 font-semibold block"
                  >
                    Forget Password ?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#4360ac] to-[#2bace2] transition-all duration-300 text-white px-4 py-2 rounded hover:opacity-90 disabled:bg-gray-400"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>

                {/* Signup Link */}
                <h1
                  onClick={() => navigate("/register")}
                  className="font-semibold cursor-pointer text-center"
                >
                  Don't have an account?{" "}
                  <span className="bg-gradient-to-l to-[#4360ac] from-[#2bace2] bg-clip-text text-transparent">
                    Signup
                  </span>
                </h1>
              </form>
            )}
          </Formik>

          {/* Google Login */}
          <div className="mt-4">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => {
                console.error("Google Login Failed");
                alert("Google login failed. Please try again.");
              }}
              theme="outline"
              size="large"
              logo_alignment="center"
              shape="square"
              text="continue_with"
              locale="en"
            />
          </div>

          {/* Home Button */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => navigate("/")}
              className="text-sm text-[#4360ac] font-semibold underline hover:text-[#2bace2] transition duration-200"
            >
              ← Go to Home
            </button>
          </div>

          {/* Toast */}
          <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { Formik } from "formik";
// import emailimg from "../../src/images/contact-form.png";
// import { useNavigate } from "react-router";
// import { IoEyeSharp } from "react-icons/io5";
// import { FaRegEyeSlash } from "react-icons/fa";

// const Login = () => {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-cyan-700 to-blue-500">
//       <div className="flex items-center bg-white bg-opacity-20 p-5 rounded-lg shadow-lg backdrop-blur-md">
//         {/* ✅ White semi-transparent background for form & image with blur effect */}

//         {/* Left Side - Image */}
//         <div className="w-1/2 hidden md:block">
//           <img src={emailimg} alt="Login Illustration" className="w-full" />
//         </div>

//         {/* Right Side - Form */}
//         <div className="w-full md:w-1/2 p-5 bg-white bg-opacity-70 rounded-lg shadow-md">
//           <h1 className="text-3xl font-bold mb-6 text-center">
//             <span className="bg-gradient-to-r to-cyan-700 from-blue-500 bg-clip-text text-transparent text-3xl font-bold">
//               Please{" "}
//             </span>
//             Login
//           </h1>
//           <Formik
//             initialValues={{ email: "", password: "" }}
//             validate={(values) => {
//               const errors = {};
//               if (!values.email) {
//                 errors.email = "Enter valid email";
//               } else if (
//                 !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//               ) {
//                 errors.email = "Invalid email address";
//               }
//               if (!values.password) {
//                 errors.password =
//                   "Password must be at least 8 characters long.";
//               } else if (values.password.length < 8) {
//                 errors.password = "Password must be at least 8 characters";
//               } else if (!/[A-Z]/.test(values.password)) {
//                 errors.password =
//                   "Password must contain at least one uppercase letter";
//               } else if (!/[a-z]/.test(values.password)) {
//                 errors.password =
//                   "Password must contain at least one lowercase letter";
//               } else if (!/[0-9]/.test(values.password)) {
//                 errors.password = "Password must contain at least one number";
//               } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
//                 errors.password =
//                   "Password must contain at least one special character";
//               }
//               return errors;
//             }}
//             onSubmit={(values, { setSubmitting }) => {
//               setTimeout(() => {
//                 alert(JSON.stringify(values, null, 2));
//                 setSubmitting(false);
//               }, 400);
//             }}
//           >
//             {({
//               values,
//               errors,
//               touched,
//               handleChange,
//               handleBlur,
//               handleSubmit,
//               isSubmitting,
//             }) => (
//               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                 <div>
//                   <label className="block font-medium">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Your Email Address"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.email}
//                     className={`border p-2 w-full rounded ${
//                       errors.email && touched.email
//                         ? "border-red-500"
//                         : "border-gray-300"
//                     }`}
//                   />
//                   {errors.email && touched.email && (
//                     <p className="text-red-500 text-sm">{errors.email}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block font-medium">Password</label>
//                   <div className="relative">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       name="password"
//                       placeholder="Your Password"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       value={values.password}
//                       className={`border p-2 w-full rounded ${
//                         errors.email && touched.email
//                           ? "border-red-500"
//                           : "border-gray-300"
//                       }`}
//                     />
//                     <span
//                       className="absolute text-gray-600 text-xl right-3 top-2 cursor-pointer"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? <IoEyeSharp /> : <FaRegEyeSlash /> }
//                     </span>
//                   </div>
//                   {errors.password && touched.password && (
//                     <p className="text-red-500 text-sm">{errors.password}</p>
//                   )}
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="bg-gradient-to-r from-cyan-700 to-blue-500 hover:scale-105 hover:from-cyan-600 hover:to-blue-400 transition-all duration-300 ease-in-out  text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
//                 >
//                   Submit
//                 </button>
//                 <h1
//                   onClick={() => navigate("/register")}
//                   className="font-semibold cursor-pointer"
//                 >
//                   Don't have an account ?{" "}
//                   <span className="bg-gradient-to-r to-cyan-700 from-blue-500 bg-clip-text text-transparent">
//                     Signup
//                   </span>{" "}
//                 </h1>
//               </form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
