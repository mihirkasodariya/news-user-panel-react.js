import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import emailimg from "../../src/images/contact-form.png";
import { useAuth } from "../Context/authContext";

// Better fallback logic
const BASE_URL =  "https://news-backend-node-js.onrender.com" || "http://localhost:5000";

const Signup = () => {
  const navigate = useNavigate();
  const { updateUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const { firstName, lastName, email, password } = formValues;
    const newErrors = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required.";
    if (!lastName.trim()) newErrors.lastName = "Last name is required.";

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = "Must include an uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
      newErrors.password = "Must include a lowercase letter.";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = "Must include a number.";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      newErrors.password = "Must include a special character.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, formValues);
      updateUser(response.data.user);
      setErrorMessage(response.data.message);
      setShowPopup(true);
    } catch (error) {
      if (error.response?.data?.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
      setShowPopup(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-l from-[#2bace2] via-[#4360ac] to-[#4360ac]">
      <div className="flex items-center bg-white bg-opacity-20 p-5 rounded-lg shadow-lg backdrop-blur-md">
        <div className="w-1/2 hidden md:block">
          <img src={emailimg} alt="Signup Illustration" className="w-full" />
        </div>
        <div className="w-full md:w-1/2 p-5 bg-white bg-opacity-70 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center bg-gradient-to-l to-[#4360ac] from-[#2bace2] bg-clip-text text-transparent">
            Create your account
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <div>
              <label className="block font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={formValues.firstName}
                onChange={handleChange}
                className={`border p-2 w-full rounded ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            <div>
              <label className="block font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={formValues.lastName}
                onChange={handleChange}
                className={`border p-2 w-full rounded ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>

            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formValues.email}
                onChange={handleChange}
                className={`border p-2 w-full rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="block font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={formValues.password}
                  onChange={handleChange}
                  className={`border p-2 w-full rounded ${errors.password ? "border-red-500" : "border-gray-300"}`}
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

            <button
              type="submit"
              disabled={isSubmitting}
              className={`text-white px-4 py-2 rounded ${
                isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-[#4360ac] to-[#2bace2] hover:scale-105 transition-all"
              }`}
            >
              {isSubmitting ? "Registering..." : "Register Account"}
            </button>
          </form>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-xl h-40 font-semibold grid border border-blue-500 gap-3 justify-center items-center p-10 rounded shadow-lg">
            <p>{errorMessage}</p>
            <button onClick={handleClosePopup} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;


// import React, { useState } from "react";
// import { Formik } from "formik";
// import emailimg from "../../src/images/contact-form.png";
// import { useNavigate } from "react-router";
// import { IoEyeSharp } from "react-icons/io5";
// import { FaRegEyeSlash } from "react-icons/fa";
// import { GoogleLogin } from "@react-oauth/google";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-cyan-700 to-blue-500">
//       <div className="flex items-center bg-white bg-opacity-20 p-5 rounded-lg shadow-lg backdrop-blur-md">
//         <div className="w-1/2 hidden md:block">
//           <img src={emailimg} alt="Login Illustration" className="w-full" />
//         </div>

//         <div className="w-full md:w-1/2 p-5 bg-white bg-opacity-70 rounded-lg shadow-md">
//           <h1 className="text-2xl font-semibold mb-6 text-center">
//             <span className="bg-gradient-to-r to-cyan-700 from-blue-500 bg-clip-text text-transparent text-3xl font-bold">
//               Create{" "}
//             </span>
//             your account
//           </h1>
//           <Formik
//             initialValues={{
//               firstName: "",
//               lastName: "",
//               email: "",
//               mobile: "",
//               password: "",
//             }}
//             onSubmit={(values, { setSubmitting, setErrors }) => {
//               const errors = {};

//               if (!values.firstName.trim()) {
//                 errors.firstName = "First Name is required";
//               }

//               if (!values.lastName.trim()) {
//                 errors.lastName = "Last Name is required";
//               }

//               if (!values.email) {
//                 errors.email = "Enter a valid email";
//               } else if (
//                 !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//               ) {
//                 errors.email = "Invalid email address";
//               }

//               if (!values.mobile.trim()) {
//                 errors.mobile = "Mobile number is required";
//               } else if (!/^\d{10}$/.test(values.mobile)) {
//                 errors.mobile = "Mobile number must be exactly 10 digits";
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

//               if (Object.keys(errors).length > 0) {
//                 setErrors(errors);
//                 setSubmitting(false);
//               } else {
//                 setTimeout(() => {
//                   // alert(JSON.stringify(values, null, 2));
//                   navigate("/login");
//                   setSubmitting(false);
//                 }, 400);
//               }
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
//                 <div className="flex flex-col md:flex-row gap-4">
//                   <div className="w-full md:w-1/2">
//                     <label className="block font-medium">First Name</label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       placeholder="First Name"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       value={values.firstName}
//                       className={`border p-2 w-full rounded ${
//                         errors.firstName && touched.firstName
//                           ? "border-red-500"
//                           : "border-gray-300"
//                       }`}
//                     />
//                     {errors.firstName && touched.firstName && (
//                       <p className="text-red-500 text-sm">{errors.firstName}</p>
//                     )}
//                   </div>
//                   <div className="w-full md:w-1/2">
//                     <label className="block font-medium">Last Name</label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       placeholder="Last Name"
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       value={values.lastName}
//                       className={`border p-2 w-full rounded ${
//                         errors.lastName && touched.lastName
//                           ? "border-red-500"
//                           : "border-gray-300"
//                       }`}
//                     />
//                     {errors.lastName && touched.lastName && (
//                       <p className="text-red-500 text-sm">{errors.lastName}</p>
//                     )}
//                   </div>
//                 </div>

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
//                   <label className="block font-medium">Mobile Number</label>
//                   <div
//                     className={`relative flex items-center bg-white border p-2 rounded ${
//                       errors.mobile && touched.mobile
//                         ? "border-red-500"
//                         : "border-gray-300"
//                     }`}
//                   >
//                     <span className="text-gray-700 font-semibold mr-2">
//                       +91
//                     </span>
//                     <input
//                       type="text"
//                       name="mobile"
//                       placeholder="Your Mobile Number"
//                       onChange={(e) => {
//                         let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
//                         if (value.length > 10) value = value.slice(0, 10);
//                         handleChange({
//                           target: { name: "mobile", value: value },
//                         });
//                       }}
//                       onBlur={handleBlur}
//                       value={values.mobile}
//                       maxLength={10}
//                       className="w-full outline-none bg-transparent"
//                       onPaste={(e) => e.preventDefault()} // Prevent pasting
//                     />
//                   </div>
//                   {errors.mobile && touched.mobile && (
//                     <p className="text-red-500 text-sm">{errors.mobile}</p>
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
//                         errors.password && touched.password
//                           ? "border-red-500"
//                           : "border-gray-300"
//                       }`}
//                     />
//                     <span
//                       className="absolute text-gray-600 text-xl right-3 top-2 cursor-pointer"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? <IoEyeSharp /> : <FaRegEyeSlash />}
//                     </span>
//                   </div>
//                   {errors.password && touched.password && (
//                     <p className="text-red-500 text-sm">{errors.password}</p>
//                   )}
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className=" text-white px-4 py-2 rounded bg-gradient-to-r from-cyan-700 to-blue-500 hover:scale-105 hover:from-cyan-600 hover:to-blue-400 transition-all duration-300 ease-in-out disabled:bg-gray-400"
//                 >
//                   Register Account
//                 </button>
//               </form>
//             )}
//           </Formik>
//           <div className="mt-4 hover:scale-105 transition-all duration-300 ease-in-out">
//             <GoogleLogin
//               onSuccess={(credentialResponse) => {
//                 console.log(credentialResponse);
//               }}
//               onError={() => {
//                 console.log("Login Failed");
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;           
