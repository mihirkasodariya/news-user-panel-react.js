import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
import emailimg from "../../src/images/contact-form.png";
import { useLocation } from "react-router";


const BASE_URL =  "https://news-backend-node-js.onrender.com" || "http://localhost:5000";


const Contact = () => {

  const location = useLocation();


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    enquiryType: location.state?.enquiryType || "",
    // enquiryType: "",
    website: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [apiResponse, setApiResponse] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Validation Function
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.enquiryType.trim()) newErrors.enquiryType = "Select an enquiry type";

    if (formData.website.trim() && !/^https?:\/\/[^\s$.?#].[^\s]*$/i.test(formData.website)) {
      newErrors.website = "Invalid website URL";
    }

    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    return newErrors;
  };

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setApiResponse(null);
    setApiError(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    const token = localStorage.getItem("token");
    if (!token) {
      setApiError("Authentication token missing. Please login again.");
      setIsSubmitting(false);
      return;
    }

    const data = qs.stringify({
      firstName: formData.fullName.split(" ")[0] || "",
      lastName: formData.fullName.split(" ")[1] || "",
      enquiryType: formData.enquiryType,
      email: formData.email,
      websiteLink: formData.website,
      message: formData.message,
    });

    try {
      const response = await axios.post(`${BASE_URL}/user/ConnectMessage`, data, {
        headers: {
          "x-access-token": `${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      // ✅ Ensure response is handled properly
      setApiResponse(response.data.message || "Your message has been sent successfully!");
      setFormData({ fullName: "", email: "", enquiryType: "", website: "", message: "" });

    } catch (error) {
      if(error.response?.data?.message === "User not found"){
        setApiError( "This user is not registered! Kindly register first");
        return
      }
      setApiError(error.response?.data?.message || "Unauthorized: Invalid token!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-l from-[#2bace2] via-[#4360ac] to-[#4360ac]">
      <div className="flex items-center bg-white mt-24 bg-opacity-20 p-5 rounded-lg shadow-lg backdrop-blur-md">
        <div className="w-1/2 hidden md:block">
          <img src={emailimg} alt="Contact Form Illustration" className="w-full" />
        </div>
        <div className="w-full md:w-1/2 p-5 bg-white bg-opacity-70 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r to-[#2bace2] from-[#4360ac] bg-clip-text text-transparent">
            Drop us a mail
          </h1>
          <p className="text-center bg-gradient-to-r to-[#2bace2] from-[#4360ac] bg-clip-text text-transparent">
            Our Team will contact you soon
          </p>
          <hr className="h-0.5 bg-gradient-to-r from-[#2bace2] to-[#4360ac] border-0 my-4" />

          {/* ✅ Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {["fullName", "email", "website"].map((key) => (
              <div key={key}>
                <label className="block font-medium">
                  {key === "fullName" ? "Full Name" : key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  type={key === "email" ? "email" : "text"}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className={`border p-2 w-full rounded ${errors[key] ? "border-red-500" : "border-gray-300"}`}
                />
                {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
              </div>
            ))}

            {/* ✅ Enquiry Type Dropdown */}
            <div>
              <label className="block font-medium">Enquiry Type</label>
              <select
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                className={`border p-2 w-full rounded ${errors.enquiryType ? "border-red-500" : "border-gray-300"}`}
              >
                <option value="">Select Enquiry Type</option>
                <option value="general">General</option>
                <option value="technical">Technical</option>
                <option value="sales">Sales</option>
                <option value="partnerwithus">Partner With US</option>
              </select>
              {errors.enquiryType && <p className="text-red-500 text-sm">{errors.enquiryType}</p>}
            </div>

            {/* ✅ Message Textarea */}
            <div>
              <label className="block font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="border p-2 w-full rounded resize-none"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            {/* ✅ Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-[#4360ac] to-[#2bace2] hover:scale-105 hover:from-[#2bace2] hover:to-[#4360ac] transition-all duration-300 ease-in-out  bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {/* ✅ API Response Handling */}
            {apiResponse && <p className="text-green-500">{typeof apiResponse === "object" ? apiResponse.message : apiResponse}</p>}
            {apiError && <p className="text-red-500">{typeof apiError === "object" ? apiError.message : apiError}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;



// import React, { useState } from "react";
// import axios from "axios";
// import qs from "qs";
// import emailimg from "../../src/images/contact-form.png";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     contactNumber: "",
//     enquiryType: "",
//     website: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [apiResponse, setApiResponse] = useState(null);
//   const [apiError, setApiError] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }
//     // if (!formData.contactNumber.trim()) {
//     //   newErrors.contactNumber = "Contact number is required";
//     // } else if (!/^\d{10}$/.test(formData.contactNumber)) {
//     //   newErrors.contactNumber = "Must be a 10-digit number";
//     // }
//     if (!formData.enquiryType.trim()) newErrors.enquiryType = "Select an enquiry type";
//     if (formData.website.trim() && !/^https?:\/\/[^\s$.?#].[^\s]*$/i.test(formData.website)) {
//       newErrors.website = "Invalid website URL";
//     }
//     if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
//     return newErrors;
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrors({});
//     setApiResponse(null);
//     setApiError(null);

//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setIsSubmitting(true);
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setApiError("Authentication token missing. Please login again.");
//       setIsSubmitting(false);
//       return;
//     }

//     const data = qs.stringify({
//       firstName: formData.fullName.split(" ")[0] || "",
//       lastName: formData.fullName.split(" ")[1] || "",
//       enquiryType: formData.enquiryType,
//       email: formData.email,
//       websiteLink: formData.website,
//       message: formData.message,
//     });

//     try {
//       const response = await axios.post("http://localhost:5000/user/ConnectMessage", data, {
//         headers: {
//           "x-access-token": `${token}`,
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//       });
//       setApiResponse(response.data);
//       console.log(response.data, "formdata");
//       setFormData({ fullName: "", email: "", enquiryType: "", website: "", message: "" });
//       console.log({ fullName: "", email: "", enquiryType: "", website: "", message: "" }, "formdata")
//     } catch (error) {
//       setApiError(error.response?.data?.message || "Unauthorized: Invalid token!");
//       console.error(error.response?.data?.message , "Unauthorized: Invalid token!");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-cyan-700 to-blue-500">
//       <div className="flex items-center bg-white mt-24 bg-opacity-20 p-5 rounded-lg shadow-lg backdrop-blur-md">
//         <div className="w-1/2 hidden md:block">
//           <img src={emailimg} alt="Contact Form Illustration" className="w-full" />
//         </div>
//         <div className="w-full md:w-1/2 p-5 bg-white bg-opacity-70 rounded-lg shadow-md">
//           <h1 className="text-3xl font-bold text-center bg-gradient-to-r to-cyan-700 from-blue-500 bg-clip-text text-transparent">Drop us a mail</h1>
//           <p className="text-center bg-gradient-to-r to-cyan-700 from-blue-500 bg-clip-text text-transparent">Our Team will contact you soon</p>
//           <hr className="h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 my-4" />
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             {Object.entries({ fullName: "Full Name", email: "Email", website: "Website (Optional)" }).map(([key, label]) => (
//               <div key={key}>
//                 <label className="block font-medium">{label}</label>
//                 <input type={key === "email" ? "email" : "text"} name={key} value={formData[key]} onChange={handleChange} className={`border p-2 w-full rounded ${errors[key] ? "border-red-500" : "border-gray-300"}`} />
//                 {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
//               </div>
//             ))}
//             <div>
//               <label className="block font-medium">Enquiry Type</label>
//               <select name="enquiryType" value={formData.enquiryType} onChange={handleChange} className={`border p-2 w-full rounded ${errors.enquiryType ? "border-red-500" : "border-gray-300"}`}>
//                 <option value="">Select Enquiry Type</option>
//                 <option value="general">General</option>
//                 <option value="technical">Technical</option>
//                 <option value="sales">Sales</option>
//               </select>
//               {errors.enquiryType && <p className="text-red-500 text-sm">{errors.enquiryType}</p>}
//             </div>
//             <div>
//               <label className="block font-medium">Message</label>
//               <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="border p-2 w-full rounded resize-none"></textarea>
//               {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
//             </div>
//             <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400">
//               {isSubmitting ? "Submitting..." : "Submit"}
//             </button>
//             {apiResponse && <p className="text-green-500">{apiResponse}</p>}
//             {apiError && <p className="text-red-500">{apiError}</p>}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;



// import React from "react";
// import { Formik } from "formik";
// import emailimg from "../../src/images/contact-form.png";

// const Contact = () => {

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-cyan-700 to-blue-500">
//       <div className="flex items-center bg-white  mt-24 bg-opacity-20 p-5 rounded-lg shadow-lg backdrop-blur-md">
//         {/* Left Side - Image */}
//         <div className="w-1/2 hidden md:block">
//           <img
//             src={emailimg}
//             alt="Contact Form Illustration"
//             className="w-full"
//           />
//         </div>

//         {/* Right Side - Form */}
//         <div className="w-full md:w-1/2 p-5 bg-white bg-opacity-70 rounded-lg shadow-md">
//           <div className="grid text-center gap-2 ">
//             <h1 className="text-3xl font-bold bg-gradient-to-r to-cyan-700 from-blue-500 bg-clip-text text-transparent">
//               Drop us a mail
//             </h1>
//             <p className="bg-gradient-to-r to-cyan-700 from-blue-500 bg-clip-text text-transparent">Our Team will contact you soon</p>
//           </div>
//           <hr className="h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 my-4" />
//           <Formik
//             initialValues={{
//               fullName: "",
//               email: "",
//               contactNumber: "",
//               enquiryType: "",
//               website: "",
//               message: "",
//             }}
//             validate={(values) => {
//               const errors = {};

//               // Full Name Validation
//               if (!values.fullName) {
//                 errors.fullName = "Full Name is required";
//               }

//               // Email Validation
//               if (!values.email) {
//                 errors.email = "Enter valid email";
//               } else if (
//                 !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//               ) {
//                 errors.email = "Invalid email address";
//               }

//               // Contact Number Validation
//               if (!values.contactNumber) {
//                 errors.contactNumber = "Contact number is required";
//               } else if (!/^\d{10}$/.test(values.contactNumber)) {
//                 errors.contactNumber =
//                   "Please enter a valid 10-digit contact number";
//               }

//               // Enquiry Type Validation
//               if (!values.enquiryType) {
//                 errors.enquiryType = "Please select an enquiry type";
//               }

//               // Website Validation
//               if (
//                 values.website &&
//                 !/^https?:\/\/[^\s$.?#].[^\s]*$/i.test(values.website)
//               ) {
//                 errors.website = "Invalid website URL";
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
//                 {/* Full Name */}
//                 <div>
//                   <label className="block font-medium">Full Name</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     placeholder="Fulll Name"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.fullName}
//                     className={`border p-2 w-full rounded ${
//                       errors.fullName && touched.fullName
//                         ? "border-red-500"
//                         : "border-gray-300"
//                     }`}
//                   />
//                   {errors.fullName && touched.fullName && (
//                     <p className="text-red-500 text-sm">{errors.fullName}</p>
//                   )}
//                 </div>

//                 {/* Email */}
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

//                 {/* Contact Number */}
//                 <div>
//                   <label className="block font-medium">Contact Number</label>
//                   <input
//                     type="text"
//                     name="contactNumber"
//                     placeholder="Your Contact Number"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.contactNumber}
//                     className={`border p-2 w-full rounded ${
//                       errors.contactNumber && touched.contactNumber
//                         ? "border-red-500"
//                         : "border-gray-300"
//                     }`}
//                   />
//                   {errors.contactNumber && touched.contactNumber && (
//                     <p className="text-red-500 text-sm">
//                       {errors.contactNumber}
//                     </p>
//                   )}
//                 </div>

//                 {/* Enquiry Type */}
//                 <div>
//                   <label className="block font-medium">Enquiry Type</label>
//                   <select
//                     name="enquiryType"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.enquiryType}
//                     className={`border p-2 w-full rounded ${
//                       errors.enquiryType && touched.enquiryType
//                         ? "border-red-500"
//                         : "border-gray-300"
//                     }`}
//                   >
//                     <option value="">Select Enquiry Type</option>
//                     <option value="general">General</option>
//                     <option value="technical">Technical</option>
//                     <option value="sales">Sales</option>
//                   </select>
//                   {errors.enquiryType && touched.enquiryType && (
//                     <p className="text-red-500 text-sm">{errors.enquiryType}</p>
//                   )}
//                 </div>

//                 {/* Website */}
//                 <div>
//                   <label className="block font-medium">
//                     Website (Optional)
//                   </label>
//                   <input
//                     type="text"
//                     name="website"
//                     placeholder="Your Website URL"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.website}
//                     className="border p-2 w-full rounded"
//                   />
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label className="block font-medium">Message</label>
//                   <textarea
//                     name="message"
//                     placeholder="Your Message..."
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.message}
//                     rows="4"
//                     className="border p-2 w-full rounded resize-none"
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="bg-gradient-to-r from-cyan-700 to-blue-500 hover:scale-105 hover:from-cyan-600 hover:to-blue-400 transition-all duration-300 ease-in-out  text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
//                 >
//                   Submit
//                 </button>
//               </form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
