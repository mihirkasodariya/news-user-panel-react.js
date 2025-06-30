import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../src/images/slider1.jpg";
import { AiFillSkype } from "react-icons/ai";
import { GiMeltingMetal } from "react-icons/gi";

const Sponsored = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slider = [
    {
      id: 1,
      img: slider1,
      name: "Meylitha",
      date: "May 2, 2023",
      description: "QuiD Cash Raises $4.5 Million in Pre-Series A Funding",
    },
    {
      id: 2,
      img: slider1,
      name: "Jackson",
      date: "August 2, 2023",
      description:
        "How This Founder Turned ₹18 Lakhs into ₹8 Crore in Revenue The Océglōw Success Story",
    },
    {
      id: 3,
      img: slider1,
      name: "Jonh Ali",
      date: "April 2, 2023",
      description: "From Jaipur to the World",
    },
    {
      id: 4,
      img: slider1,
      name: "Jonh Ali",
      date: "September 2, 2025",
      description:
        "The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
    },
    {
      id: 5,
      img: slider1,
      name: "Jonh Ali",
      date: "June 14, 2025",
      description:
        "Jaipur to the World: The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
    },
    {
      id: 6,
      img: slider1,
      name: "Jonh Ali",
      date: "April 14, 2025",
      description:
        "To the World: The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
    },
  ];

  return (
    <div className="mt-32 overflow-hidden">
      <div className="bg-slate-200  h-96">
        <div className="flex justify-between  pt-10 w-full px-4  sm:w-full md:w-full xl:w-[63%] mx-auto">
          <div className="flex gap-2 items-center">
            <AiFillSkype className="h-14 w-14 text-[#e64833]" />
            <div>
              <p className="font-semibold text-base sm:text-lg md:text-lg lg:text-2xl">sponsored</p>
              {/* <p className="font-medium text-xs sm:text-base md:text-base lg:text-lg xl:text-xl text-gray-600">
                Stories full of vigor and impact.
              </p> */}
            </div>
          </div>
          <button
            type="button"
            className="py-2 px-5 mb-2 sm:text-sm text-xs font-medium shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none rounded-full border  dark:bg-white dark:text-black dark:border-[#e64833] dark:hover:text-white dark:hover:bg-[#e64833]"
          >
            View More
          </button>
        </div>
      </div>
      <div className="w-full mx-auto -mt-64">
        <Slider
          {...settings}
          className="slider-container px-6 sm:w-full md:w-full grid justify-center xl:w-[90%] mx-auto"
        >
          {slider.map((val) => (
            <div
              key={val.id}
              className="relative sm:!w-[95%] md:!w-[95%] lg:!w-[314px]  xl:!w-[305px] 2xl:!w-[345px] grid justify-center mx-auto m-5 h-[430px] bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            >
              <a
                href="#"
                className="w-full relative mx-auto h-auto overflow-hidden rounded-lg"
              >
                <img
                  className="rounded-t-xl w-full h-[200px] object-cover"
                  src={val.img}
                  alt={val.name}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-base tracking-tight text-gray-600 transition-colors duration-300">
                    {val.date}
                  </h5>
                </a>
                <p className="mb-3 font-medium text-black h-24">
                  {val.description}
                </p>
                <a
                  href="#"
                  className="inline-flex relative items-center px-4 py-2 text-sm font-medium text-red-500 bg-red-100 rounded-lg transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white shadow hover:shadow-lg"
                >
                  STARTSUP
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sponsored;

// import React, { useEffect, useRef, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import slider1 from "../../src/images/slider1.jpg";
// import { MdAutoStories } from "react-icons/md";
// import { useNavigate } from "react-router";
// import { FaTachographDigital } from "react-icons/fa6";

// const slider = [
//   {
//     id: 1,
//     img: slider1,
//     name: "Meylitha",
//     date: "May 2, 2023",
//     description: "QuiD Cash Raises $4.5 Million in Pre-Series A Funding",
//     btn: "Startups",
//   },
//   {
//     id: 2,
//     img: slider1,
//     name: "Jackson",
//     date: "May 2, 2023",
//     description:
//       "How This Founder Turned ₹18 Lakhs into ₹8 Crore in Revenue The Océglōw Success Story",
//     btn: "News",
//   },
//   {
//     id: 3,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description: "From Jaipur to the World",
//     btn: "Insights",
//   },
//   {
//     id: 4,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "Funding Alerts",
//   },
//   {
//     id: 5,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " Jaipur to the World: The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "Paris",
//   },
//   {
//     id: 6,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " to the World: The Story of Zuvelio  Redefining Jewelry with Innovation and Sustainability",
//     btn: "Funding Alerts",
//   },
// ];

// const slider2 = [
//   {
//     id: 1,
//     img: slider1,
//     name: "Meylitha",
//     date: "May 2, 2023",
//     description: "QuiD Cash Raises $4.5 Million in Pre-Series A Funding",
//     btn: "Insights",
//   },
//   {
//     id: 2,
//     img: slider1,
//     name: "Jackson",
//     date: "May 2, 2023",
//     description:
//       "How This Founder Turned ₹18 Lakhs into ₹8 Crore in Revenue The Océglōw Success Story",
//     btn: "Insights",
//   },
//   {
//     id: 3,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       "Zuvelio Redefining Jewelry with Innovation and Sustainability   ",
//     btn: "Insights",
//   },
//   {
//     id: 4,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "Startups"
//   },
// ];

// const Home = () => {
//   const getCharacterLimit = () => {
//     return window.innerWidth > 1024 ? 50 : 30;
//   };

//   const navigate = useNavigate();
//   const [characterLimit, setCharacterLimit] = useState(getCharacterLimit());
//   const [mainSlider, setMainSlider] = useState(null);
//   const [thumbnailSlider, setThumbnailSlider] = useState(null);
//   const mainSliderRef = useRef(null);
//   const thumbnailSliderRef = useRef(null);

//   useEffect(() => {
//     setMainSlider(mainSliderRef.current);
//     setThumbnailSlider(thumbnailSliderRef.current);

//     const handleResize = () => {
//       setCharacterLimit(getCharacterLimit());
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const settings = {
//     asNavFor: thumbnailSlider,
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//     arrows: false,
//   };

//   const settings1 = {
//     asNavFor: mainSlider,
//     slidesToShow: 3,
//     swipeToSlide: true,
//     focusOnSelect: true,
//     infinite: true,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const settings2 = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: false,
//     responsive: [
//       {
//         breakpoint: 1030,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const settings3 = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: false,
//     responsive: [
//       {
//         breakpoint: 1030,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const truncateText = (text, maxLength) => {
//     return text.length > maxLength
//       ? text.substring(0, maxLength) + "..."
//       : text;
//   };

// //News Details
//   const handlenavigate = (story) => {
//     navigate(`/newsdetails/${story.id}`, { state: { story } });
//   };

//   //CategoryName navigate
//   const capitalizeCategoryName = (category) => {
//     return category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
//   };

//   const handlenavigate1 = (category , categoryDescription = "Your default description.") => {
//     const formattedCategory = capitalizeCategoryName(category);
//     navigate(`/category/${formattedCategory}`, {
//       state: {
//         categoryName: formattedCategory,
//         categoryDescription: categoryDescription,
//       },
//     });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   //TagName navigate
//   const capitalizeTagName = (tag) => {
//     return tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase();
//   };

//   const handlenavigatetag = (tag) => {
//     const formattedTag = capitalizeTagName(tag);
//     navigate(`/tag/${formattedTag}`, {
//       state: { tagName: formattedTag },
//     });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       <div className=" mt-32 justify-center items-center ">
//         <div className=" w-full mx-auto ">
//           <Slider
//             {...settings}
//             ref={mainSliderRef}
//             className="slider-container "
//           >
//             {slider.map((val) => (
//               <div
//                 className="mx-auto animate-fade-in px-6 flex flex-col  justify-center items-center"
//                 key={val.id}
//                 data-aos="fade-up"
//               >
//                 <img
//                   src={val.img}
//                   alt={val.name}
//                   className="w-full h-full object-cover  mx-auto rounded-2xl sm:w-full sm:h-full md:w-full md:h-[400px] xl:w-[60%] xl:h-[400px]"
//                   // className="w-[60%] h-[50%] mx-auto rounded-2xl" // Adjusted size for responsiveness
//                 />
//                 <p
//                   onClick={() => handlenavigate(val)}
//                   className="w-full text-black font-bold text-lg  mx-auto sm:w-full md:w-[60%] mt-4"
//                 >
//                   {val.description}
//                 </p>
//                 <div className="w-full flex gap-4 items-center  mx-auto sm:w-full md:w-[60%] mt-4">
//                   <button
//                     onClick={(e) => {
//                       handlenavigatetag(val.btn);
//                     }}
//                     className="relative uppercase inline-flex items-center justify-center font-semibold text-lg  px-5 py-2  overflow-hidden  text-gray-900 rounded-lg group bg-gradient-to-br from-red-900 to-[#e64833] group-hover:from-[#e64833] group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
//                   >
//                     {val.btn}
//                   </button>
//                   <button className="bg-transparent text-black font-semibold text-lg px-3 py-2">
//                     By StartupStory
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//         <div className="mt-10 w-full mx-auto sm:block hidden ">
//           <Slider
//             {...settings1}
//             ref={thumbnailSliderRef}
//             className="slider-container w-full px-6  sm:w-full md:w-full xl:w-[63%] mx-auto"
//           >
//             {slider.map((val) => (
//               <>
//                 <div className="border-l-4 h-20 border-[#e64833]">
//                   <div className="flex flex-col  mx-2  bg-white    shadow md:flex-row md:max-w-xl  ">
//                     <img className=" h-20" src={val.img} alt={val.name} />
//                     <div className="flex flex-col justify-between pl-2 leading-normal">
//                       <p className="mb-3 font-normal text-black">
//                         {truncateText(val.description, characterLimit)}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             ))}
//           </Slider>
//         </div>
//       </div>
//       <div className="mt-20 overflow-hidden">
//         <div className="bg-slate-100  h-96">
//           <div className="flex justify-between pt-5 w-full px-4  sm:w-full md:w-full xl:w-[78%] mx-auto">
//             <div className="flex gap-2">
//               <MdAutoStories className="h-14 w-14 text-[#e64833]" />
//               <div>
//                 <p className="font-bold text-lg sm:text-lg md:text-lg lg:text-2xl">
//                   Latest stories
//                 </p>
//                 <p className="font-medium text-xs sm:text-sm text-gray-600">
//                 {/* <p className="font-medium text-xs sm:text-base md:text-base lg:text-lg xl:text-sm text-gray-600"> */}
//                   Stories full of vigor and impact.
//                 </p>
//               </div>
//             </div>
//             <button
//               type="button"
//               // onClick={handlenavigate1}
//               onClick={() => handlenavigate1("Stories", "Stories full of vigor and impact.")}
//               // to={item === "Home" ? "/" : `/category/${item}`}
//               className="py-2 px-5 mb-2 sm:text-sm text-xs font-medium shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none rounded-full border  dark:bg-white dark:text-black dark:border-[#e64833] dark:hover:text-white dark:hover:bg-[#e64833]"
//             >
//               View More
//             </button>
//           </div>
//         </div>
//         <div className="w-full mx-auto -mt-72 mb-20">
//           <Slider
//             {...settings2}
//             className="slider-container px-6  sm:w-full md:w-full grid space-y-7 justify-center xl:w-[93%] mx-auto"
//           >
//             {slider.map((val) => (
//               <div
//                 key={val.id}
//                 onClick={() => handlenavigate(val)}
//                 className="relative  sm:!w-[95%] md:!w-[95%] lg:!w-[314px] ml-1 xl:!w-[305px] 2xl:!w-[345px] grid justify-center mx-auto mt-5 mb-14 h-[350px] hover:ml-2 bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
//               >
//                 <a className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
//                   <img
//                     className="rounded-t-xl w-full h-[200px] object-cover"
//                     src={val.img}
//                     alt={val.name}
//                   />
//                 </a>
//                 <div className="px-5 py-3">
//                   <div className="flex justify-between items-center py-2">
//                     <h5 className="mb-2 text-xs tracking-tight text-gray-600 transition-colors duration-300">
//                       {val.date}
//                     </h5>
//                     <a
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handlenavigatetag(val.btn);
//                     }}
//                     className="inline-flex uppercase relative items-center px-2 text-xs font-medium text-red-500 bg-red-100 rounded-sm transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white shadow hover:shadow-lg"
//                   >
//                     {val.btn}
//                   </a>
//                   </div>
//                   <p className=" font-medium text-black h-20 py-3">
//                   {truncateText(val.description, 50)}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//       <div className="w-full h-full  mx-auto rounded-2xl sm:w-full sm:h-full md:w-full md:h-full xl:w-[70%] xl:h-[50%]">
//         <div className="flex justify-between pt-10 w-full px-4  sm:w-full md:w-full xl:w-[90%] mx-auto">
//           <div className="flex gap-2">
//             <FaTachographDigital className="h-14 w-14 text-[#e64833]" />
//             <div>
//               <p className="font-bold text-lg sm:text-lg md:text-lg lg:text-2xl">
//                 Insights
//               </p>
//               <p className="font-medium text-xs sm:text-sm text-gray-600">
//                 Digging deeper in the accuracy
//               </p>
//             </div>
//           </div>
//           <button
//             type="button"
//             onClick={() => handlenavigate1("Insights", "Digging deeper in the accuracy")}
//             className=" px-5 mb-2 sm:text-sm text-xs font-medium shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none rounded-full border  dark:bg-white dark:text-black dark:border-[#e64833] dark:hover:text-white dark:hover:bg-[#e64833]"
//           >
//             View More
//           </button>
//         </div>
//         <div className="slider-container px-6 sm:w-full hidden lg:grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 justify-between md:w-full xl:w-[90%] mx-auto">
//           {slider2.map((val) => (
//             <div
//               key={val.id}
//               onClick={() => handlenavigate(val)}
//               className="relative grid justify-center col-span-1 mx-auto m-5 h-[370px] bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
//             >
//               <a className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
//                 <img
//                   className="rounded-t-xl w-full h-fit object-cover"
//                   src={val.img}
//                   alt={val.name}
//                 />
//               </a>
//               <div className="px-5 space-y-5">

//               <div className="flex justify-between items-center py-2">
//                   <h5 className="mb-2 text-xs tracking-tight text-gray-600 transition-colors duration-300">
//                     {val.date}
//                   </h5>
//                   <a
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handlenavigatetag(val.btn);
//                   }}
//                   className="inline-flex uppercase relative items-center cursor-pointer px-2  text-xs font-medium text-red-500 bg-red-100 rounded-sm transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white shadow hover:shadow-lg"
//                 >
//                   {val.btn}
//                 </a>
//               </div>
//                 <p className="mb-3 font-medium text-black ">
//                 {truncateText(val.description, 45)}
//                 </p>

//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="block lg:hidden">
//           <Slider
//             {...settings3}
//             className="slider-container px-6 sm:w-full md:w-full grid justify-center xl:w-[90%] mx-auto overflow-hidden"
//           >
//             {slider2.map((val) => (
//               <div
//                 key={val.id}
//                 onClick={() => handlenavigate(val)}
//                 className="relative sm:!w-[95%] md:!w-[95%] lg:!w-[314px] xl:!w-[305px] 2xl:!w-[345px] grid justify-center mx-auto m-5 h-[380px] bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
//               >
//                 <a className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
//                   <img
//                     className="rounded-t-xl w-full h-[200px] object-cover"
//                     src={val.img}
//                     alt={val.name}
//                   />
//                 </a>
//                 <div className="p-5 space-y-3">
//                   <div className="flex justify-between items-center py-2">
//                     <h5 className="mb-2 text-xs tracking-tight text-gray-600 transition-colors duration-300">
//                       {val.date}
//                     </h5>
//                     <a
//                     onClick={(e) => {
//                       e.stopPropagation(); // Prevents triggering handlenavigate when button is clicked
//                       handlenavigatetag(val.btn);
//                     }}
//                     className="inline-flex uppercase relative items-center px-2 text-xs font-medium text-red-500 bg-red-100 rounded-sm transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white shadow hover:shadow-lg"
//                   >
//                     {val.btn}
//                   </a>
//                   </div>
//                   <p className=" font-medium text-black ">
//                   {truncateText(val.description, 45)}
//                   </p>

//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;



// import React, { useEffect, useState } from "react";
// import categorybg from "../../src/images/categorybackgroundimage.jpg";
// import slider1 from "../../src/images/slider1.jpg";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

// const slider = [
//   {
//     id: 1,
//     img: slider1,
//     name: "Meylitha",
//     date: "May 2, 2023",
//     description: "QuiD Cash Raises $4.5 Million in Pre-Series A Funding",
//     btn: "News",
//   },
//   {
//     id: 2,
//     img: slider1,
//     name: "Jackson",
//     date: "May 2, 2023",
//     description:
//       "How This Founder Turned ₹18 Lakhs into ₹8 Crore in Revenue The Océglōw Success Story",
//     btn: "Startups",
//   },
//   {
//     id: 3,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       "Zuvelio Redefining Jewelry with Innovation and Sustainability   ",
//     btn: "Insights",
//   },
//   {
//     id: 4,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "Funding Alerts",
//   },
//   {
//     id: 5,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "Startups",
//   },
//   {
//     id: 6,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "News",
//   },
//   {
//     id: 7,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "Startups",
//   },
//   {
//     id: 8,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "News",
//   },
//   {
//     id: 9,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "Paris",
//   },
//   {
//     id: 10,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "News",
//   },
//   {
//     id: 11,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "Insights",
//   },
//   {
//     id: 12,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "Funding Alerts",
//   },
//   {
//     id: 13,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "Startups",
//   },
// ];

// const tagslist = ["News", "Insights", "Startups", "Funding Alerts", "Paris"];

// const Tag = () => {
//   const location = useLocation();
//   const { tag } = useParams();
//   const { tagName } = location.state || {};
//   const navigate = useNavigate();

//   const cardsPerPage = 9;
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   //NewsDetails Navigate
//   const handlenavigate = (story) => {
//     navigate(`/newsdetails/${story.id}`, { state: { story } });
//   };

//   //TagName Navigate
//   const capitalizeTagName = (tag) => {
//     return tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase();
//   };

//   const handlenavigatetag = (tag) => {
//     const formattedTag = capitalizeTagName(tag);
//     navigate(`/tag/${formattedTag}`, {
//       state: { tagName: formattedTag },
//     });
//     setCurrentPage(1);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // const [stories, setStories] = useState([]);

//   // useEffect(() => {
//   //   // Fetch news for the specific category
//   //   fetch(`https://dummyjson.com/news?category=${category}`)
//   //     .then((res) => res.json())
//   //     .then((data) => setStories(data));
//   // }, [category]);

//   const indexOfLastCard = currentPage * cardsPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//   const filteredCards = slider.filter(
//     (val) => val.btn.toLowerCase() === tagName.toLowerCase()
//   );
//   const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);
//   const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const isNextDisabled =
//     currentPage === totalPages || currentCards.length === 0;
//   const isPreviousDisabled = currentPage === 1;

//   const truncateText = (text, maxLength) => {
//     return text.length > maxLength
//       ? text.substring(0, maxLength) + "..."
//       : text;
//   };
//   return (
//     <>
//       <div className=" mt-24 ">
//         <div className="relative w-full h-[300px] ">
//           <img
//             src={categorybg}
//             alt="Footer Background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 w-full px-4  sm:w-full md:w-full xl:w-[65%] gap-2 mx-auto flex flex-col justify-center sm:text-start  text-center   text-white">
//             <p className="font-bold text-5xl ">{tagName || tag}</p>
//           </div>
//         </div>
//         <div className="flex justify-center items-center w-full">
//           <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2 w-full px-4  sm:w-full md:w-full xl:w-[65%]">
//             <div className="col-span-1 bg-[#ddd] h-96 p-2 mt-5 sm:block hidden  rounded-xl">
//               <h1 className="font-semibold text-2xl">Tags</h1>
//               <div className="px-7 h-64 py-4 mt-5  overflow-y-auto overflow-x-auto border-b-2 border-black">
//                 {tagslist.map((val) => {
//                   return (
//                     <ul key={val} className="list-disc pl-5 ">
//                       <li
//                         onClick={() => handlenavigatetag(val)}
//                         className="font-normal text-base cursor-pointer text-slate-700 marker:text-black hover:text-black hover:underline hover:font-medium"
//                       >
//                         {val}
//                       </li>
//                     </ul>
//                   );
//                 })}
//               </div>
//             </div>
//             <div className="col-span-3">
//               <div className="slider-container  sm:w-full grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2 justify-between md:w-full xl:w-[90%] mx-auto">
//                 {currentCards.map((val) => (
//                   <div
//                     key={val.id}
//                     to={`/newsdetails/${val.id}`}
//                     state={{ story: val }}
//                     onClick={() => handlenavigate(val)}
//                     className="relative grid justify-center col-span-1 mx-auto m-5 h-[350px] bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
//                   >
//                     <a className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
//                       <img
//                         className="rounded-t-xl w-full h-fit object-cover"
//                         src={val.img}
//                         alt={val.name}
//                       />
//                     </a>
//                     <div className="p-5">
//                       <div className="flex justify-between items-center py-2">
//                         <h5 className="mb-2 text-xs tracking-tight text-gray-600 transition-colors duration-300">
//                           {val.date}
//                         </h5>
//                         <a
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           handlenavigatetag(val.btn);
//                         }}
//                         className="inline-flex uppercase relative items-center px-2 text-xs font-medium text-red-500 bg-red-100 rounded-lg transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white shadow hover:shadow-lg"
//                       >
//                         {val.btn}
//                       </a>
//                       </div>
//                       <p className="mb-3 font-medium text-black h-20">
//                       {truncateText(val.description, 45)}
//                       </p>

//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center my-7">
//                 <button
//                   onClick={handlePrevious}
//                   className="px-4 py-2 text-sm font-medium text-white bg-[#e64833] rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
//                   disabled={isPreviousDisabled}
//                 >
//                   <FaArrowLeftLong />
//                   Previous
//                 </button>
//                 <p className="text-sm font-medium text-gray-600">
//                   Page {currentPage} of {totalPages}
//                 </p>
//                 <button
//                   onClick={handleNext}
//                   className="px-4 py-2 text-sm font-medium text-white bg-[#e64833] rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
//                   disabled={isNextDisabled}
//                 >
//                   Next
//                   <FaArrowRightLong />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Tag;


// import React, { useEffect, useState } from "react";
// import categorybg from "../../src/images/categorybackgroundimage.jpg";
// import slider1 from "../../src/images/slider1.jpg";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

// const slider = [
//   {
//     id: 1,
//     img: slider1,
//     name: "Meylitha",
//     date: "May 2, 2023",
//     description: "QuiD Cash Raises $4.5 Million in Pre-Series A Funding",
//     btn: "News",
//   },
//   {
//     id: 2,
//     img: slider1,
//     name: "Jackson",
//     date: "May 2, 2023",
//     description:
//       "How This Founder Turned ₹18 Lakhs into ₹8 Crore in Revenue The Océglōw Success Story",
//     btn: "Startups",
//   },
//   {
//     id: 3,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       "Zuvelio Redefining Jewelry with Innovation and Sustainability   ",
//     btn: "FundingAlerts",
//   },
//   {
//     id: 4,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "FundingAlerts",
//   },
//   {
//     id: 5,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "Startups",
//   },
//   {
//     id: 6,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "News",
//   },
//   {
//     id: 7,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "Startups",
//   },
//   {
//     id: 8,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "FundingAlerts",
//   },
//   {
//     id: 9,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "News",
//   },
//   {
//     id: 10,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "News",
//   },
//   {
//     id: 11,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "FundingAlerts",
//   },
//   {
//     id: 12,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "Paris",
//   },
//   {
//     id: 13,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "Startups",
//   },
//   {
//     id: 14,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "News",
//   },
//   {
//     id: 15,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "FundingAlerts",
//   },
//   {
//     id: 16,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "Paris",
//   },
//   {
//     id: 17,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "Startups",
//   },
//   {
//     id: 18,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "Paris",
//   },
//   {
//     id: 19,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "Startups",
//   },
// ];

// const tagslist = ["News", "Insights", "Startups", "FundingAlerts", "Paris"];

// const Category = () => {
//   const location = useLocation();
//   // const routeName = location.pathname.split("/")[1];
//   const { category } = useParams();
//   const description = location.state?.description || "No description available";
//   const { categoryName } = location.state || {};
//   const { categoryDescription } = location.state || {};
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   const capitalizeCategoryName = (category) => {
//     return category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
//   };

//   const handlenavigate1 = (category) => {
//     const formattedCategory = capitalizeCategoryName(category);
//     navigate(`/category/${formattedCategory}`, {
//       state: { categoryName: formattedCategory },
//     });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handlenavigate = (story) => {
//     // navigate("/newsdetails/:id", { state: { story } });
//     navigate(`/newsdetails/${story.id}`, { state: { story } });
//   };

//   const capitalizeTagName = (tag) => {
//     return tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase();
//   };

//   const handlenavigatetag = (tag) => {
//     const formattedTag = capitalizeTagName(tag);
//     navigate(`/tag/${formattedTag}`, {
//       state: { tagName: formattedTag },
//     });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // const [stories, setStories] = useState([]);

//   // useEffect(() => {
//   //   // Fetch news for the specific category
//   //   fetch(`https://dummyjson.com/news?category=${category}`)
//   //     .then((res) => res.json())
//   //     .then((data) => setStories(data));
//   // }, [category]);

//   const cardsPerPage = 9;
//   const [currentPage, setCurrentPage] = useState(1);

//   const indexOfLastCard = currentPage * cardsPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//   const currentCards = slider.slice(indexOfFirstCard, indexOfLastCard);

//   const totalPages = Math.ceil(slider.length / cardsPerPage);

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };
//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const truncateText = (text, maxLength) => {
//     return text.length > maxLength
//       ? text.substring(0, maxLength) + "..."
//       : text;
//   };

//   return (
//     <>
//       <div className=" mt-24 ">
//         <div className="relative w-full h-[300px] ">
//           <img
//             src={categorybg}
//             alt="Footer Background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 w-full px-4  sm:w-full md:w-full xl:w-[65%] gap-2 mx-auto flex flex-col justify-center sm:text-start  text-center   text-white">
//             <p className="font-bold text-5xl ">{categoryName || category}</p>
//             <p className="font-medium text-xl text-gray-200">
//               {categoryDescription || description}
//             </p>
//           </div>
//         </div>
//         <div className="flex justify-center items-center w-full">
//           <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2 w-full px-4  sm:w-full md:w-full xl:w-[65%]">
//             <div className="col-span-1 bg-[#ddd] h-96 p-2 mt-5 sm:block hidden  rounded-xl">
//               <h1 className="font-semibold text-2xl">Tags</h1>
//               <div className="px-7 h-64 py-4 mt-5  overflow-y-auto overflow-x-auto border-b-2 border-black">
//                 {tagslist.map((val) => {
//                   return (
//                     <ul key={val} className="list-disc pl-5 ">
//                       <li
//                         onClick={() => handlenavigatetag(val)}
//                         className="font-normal text-base cursor-pointer text-slate-700 marker:text-black hover:text-black hover:underline hover:font-medium"
//                       >
//                         {val}
//                       </li>
//                     </ul>
//                   );
//                 })}
//               </div>
//             </div>
//             <div className="col-span-3">
//               <div className="slider-container  sm:w-full grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2 justify-between md:w-full xl:w-[90%] mx-auto">
//                 {currentCards.map((val) => (
//                   <div
//                     key={val.id}
//                     to={`/newsdetails/${val.id}`}
//                     state={{ story: val }}
//                     onClick={() => handlenavigate(val)}
//                     className="relative grid justify-center col-span-1 mx-auto m-5 h-[350px] bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
//                   >
//                     <a className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
//                       <img
//                         className="rounded-t-xl w-full h-fit object-cover"
//                         src={val.img}
//                         alt={val.name}
//                       />
//                     </a>
//                     <div className="px-5 grid gap-2">
//                       <div className="flex justify-between items-center">
//                         <h5 className="mb-2 text-xs tracking-tight text-gray-600 transition-colors duration-300">
//                           {val.date}
//                         </h5>
//                         <a
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           handlenavigatetag(val.btn);
//                         }}
//                         className="inline-flex uppercase relative items-center px-2 text-xs font-medium text-red-500 bg-red-100 rounded-sm transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white shadow hover:shadow-lg"
//                       >
//                         {val.btn}
//                       </a>
//                       </div>
//                       <p className="mb-3 font-medium text-black">
//                       {truncateText(val.description, 40)}
//                       </p>

//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center my-7">
//                 <button
//                   onClick={handlePrevious}
//                   className="px-4 py-2 text-sm font-medium text-white bg-[#e64833] rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
//                   disabled={currentPage === 1}
//                 >
//                   <FaArrowLeftLong />
//                   Previous
//                 </button>
//                 <p className="text-sm font-medium text-gray-600">
//                   Page {currentPage} of {totalPages}
//                 </p>
//                 <button
//                   onClick={handleNext}
//                   className="px-4 py-2 text-sm font-medium text-white bg-[#e64833] rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
//                   disabled={currentPage === totalPages}
//                 >
//                   Next
//                   <FaArrowRightLong />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Category;


// import React, { useEffect, useRef, useState } from "react";
// import { Link, useLocation, useNavigate, useParams } from "react-router";
// import slider1 from "../../src/images/slider1.jpg";

// const slider = [
//   {
//     id: 1,
//     img: slider1,
//     name: "Meylitha",
//     date: "May 2, 2023",
//     description: "QuiD Cash Raises $4.5 Million in Pre-Series A Funding",
//     btn: "Insights",
//   },
//   {
//     id: 2,
//     img: slider1,
//     name: "Jackson",
//     date: "May 2, 2023",
//     description:
//       "How This Founder Turned ₹18 Lakhs into ₹8 Crore in Revenue The Océglōw Success Story",
//     btn: "Startups",
//   },
//   {
//     id: 3,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description: "From Jaipur to the World",
//     btn: "Paris",
//   },
//   {
//     id: 4,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "News",
//   },
//   {
//     id: 5,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       " Jaipur to the World: The Story of Zuvelio Redefining Jewelry with Innovation and Sustainability",
//     btn: "Startups",
//   },
//   {
//     id: 6,
//     img: slider1,
//     name: "Jonh Ali",
//     date: "May 2, 2023",
//     description:
//       "To the World: The Story of Zuvelio  Redefining Jewelry with Innovation and Sustainability",
//     btn: "Insights",
//   },
// ];

// const NewsDetails = () => {
//   const location = useLocation();
//   const { id } = useParams();
//   const { story } = location.state || {};
//   const navigate = useNavigate();
//   const capitalizeTagName = (tag) => {
//     return tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase();
//   };

//   //TagName Navigate
//   const handlenavigatetag = (tag) => {
//     const formattedTag = capitalizeTagName(tag);
//     navigate(`/tag/${formattedTag}`, {
//       state: { tagName: formattedTag },
//     });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   //Newsdetails navigate
//   const handlenavigate = (story) => {
//     navigate(`/newsdetails/${story.id}`, { state: { story } });
//   };

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, [story]);

//   const truncateText = (text, maxLength) => {
//     return text.length > maxLength
//       ? text.substring(0, maxLength) + "..."
//       : text;
//   };

//   return (
//     <div className="my-40">
//       <div className="grid justify-center items-center w-full px-4 mx-auto  sm:w-full md:w-full xl:w-[70%]">
//         <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2 ">
//           <div className="lg:col-span-3 col-span-4">
//             {story ? (
//               <>
//                 <h1 className="text-4xl font-bold mb-4 text-center ">
//                   {story.description}
//                 </h1>
//                 <p className="text-gray-700 text-lg text-center pb-4">
//                   {story.date}
//                 </p>
//                 <img
//                   src={story.img}
//                   alt={story.name}
//                   className="rounded-lg w-full max-h-[400px] object-cover mb-4"
//                 />
//                 <div className="rounded-md bg-[#FFF6F6] p-4 my-5">
//                 <h1 className="text-[#e64833] font-bold text-3xl">Summary</h1>
//                 <ul className="list-disc  list-outside grid gap-4 px-4 py-2 text-xl marker:text-[#e64833] font-normal">

//                   <li className="text-gray-500">
//                     Now this is a story all about how, my life got
//                     flipped-turned upside down Now this is a story all about how, my life got
//                     flipped-turned upside down
//                   </li>
//                   <li className="text-gray-500">
//                     Now this is a story all about how, my life got
//                     flipped-turned upside down
//                   </li>
//                 </ul>
//                 </div>

// <p className="text-gray-700 text-lg">
//   Mumbai-based quick service platform Snabbit has secured $5.5
//   Mn (around INR 47.6 Cr) in a Series A funding round led by
//   Elevation Capital. The round also saw participation from its
//   existing investor Nexus Venture Partners, along with a host of
//   angel investors, including Meesho cofounders Vidit Aatrey and
//   Sanjeev Barnwal; 
// </p>
//               </>
//             ) : (
//               <p>No story details available.</p>
//             )}
//           </div>
//           <div className="lg:col-span-1 col-span-2 bg-white border border-gray-200 h-fit p-2  sticky top-32  w-full   rounded-xl">
//             <h1 className="font-bold text-4xl  mt-2 mb-5">Trending Stories</h1>
//             {slider.map((item) => {
//               return (
//                 <>
//                   <div>
//                     <a
//                       onClick={() => handlenavigate(item)}
//                       key={item.id}
//                       className="flex flex-col items-center py-1 bg-white   shadow-sm md:flex-row md:max-w-xl border-b-2 border-gray-200 "
//                     >
//                       <img
//                         className="object-cover w-28 rounded-t-lg h-24 md:rounded-none md:rounded-s-lg"
//                         src={item.img}
//                         alt={item.name}
//                       />
//                       <p className="mb-3 font-bold text-base sm:text-lg md:text-lg lg:text-sm xl:text-lg px-2 py-2 text-black ">
//                         {truncateText(item.description, 40)}
//                       </p>
//                     </a>
//                   </div>
//                 </>
//               );
//             })}
//           </div>
//         </div>
//         <hr className="border mt-3 hidden lg:grid border-black" />
//         <div className="slider-container  sm:w-full hidden lg:grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 justify-between md:w-full xl:w-full mx-auto">
//           {slider.slice(0, 4).map((val) => (
//             <div
//               key={val.id}
//               onClick={() => handlenavigate(val)}
//               className="relative grid justify-center col-span-1 mx-auto m-5 h-[370px] bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
//             >
//               <a className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
//                 <img
//                   className="rounded-t-xl w-full h-fit object-cover"
//                   src={val.img}
//                   alt={val.name}
//                 />
//               </a>
//               <div className="p-5">
//                 <div className="flex justify-between items-center py-2">
//                   <h5 className="mb-2 text-base tracking-tight text-gray-600 transition-colors duration-300">
//                     {val.date}
//                   </h5>
//                   <a
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handlenavigatetag(val.btn);
//                   }}
//                   className="inline-flex uppercase relative items-center px-2 text-sm font-medium text-red-500 bg-red-100 rounded-sm transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white shadow hover:shadow-lg"
//                 >
//                   {val.btn}
//                 </a>
//                 </div>
//                 <p className="mb-3 font-medium text-black ">
//                 {truncateText(val.description, 50)}
//                 </p>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsDetails;