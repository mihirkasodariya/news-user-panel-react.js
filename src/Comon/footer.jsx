import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin, FaPhone, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import logo from "../../src/images/Logo BB_1.png";
// import logo from "../../src/images/Logo r.png";
import { useNavigate } from "react-router";
import axios from "axios"; // Import axios
import { subscribeUser } from "../Utils/api";
import icon from "../../src/images/Icon_1.png";


const BASE_URL = "https://news-backend-node-js.onrender.com" || "http://localhost:5000";


const services = [
  {
    name: "Partner With US",
    href: "/contact",
    description: "The main page of the website.",
    type: "partnerwithus",
  },
  {
    name: "About Us",
    href: "/about",
    description: "Learn more about our company.",
  },
  {
    name: "Contact",
    href: "/contact",
    description: "Get in touch with us.",
  },
  {
    name: "Terms of Use",
    href: "/Terms&condition",
    description: "Upcoming startup events.",
  },
  {
    name: "Disclamer",
    href: "/disclaimer",
    description: "Upcoming startup events.",
  },
  {
    name: "Privacy Policy",
    href: "/privacy",
    description: "Upcoming startup events.",
  },
  {
    name: "Refund Policy",
    href: "/refundpolicy",
    description: "Upcoming startup events.",
  },
];

const more = [
  {
    name: "Events",
    href: "/",
  },
  {
    name: "Podcasts",
    href: "/",
  },
  {
    name: "NewLetters",
    href: "/blog",
  },
];

const Footer = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({ email: "" });
  const [message, setMessage] = useState({ text: "", type: "" }); // ✅ Stores success/error message
  const navigate = useNavigate();
  const [categoryTags, setCategoryTags] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchTagsByCategories = async () => {
      setLoading(true);
      try {
        const categoryResponse = await axios.get(
          `${BASE_URL}/category/all`, { headers: { Authorization: localStorage.getItem("token"), } }
        );
        const categories = categoryResponse?.data?.Categorys;
        if (categories.length != 0) {
          const tagPromises = categories.map(async (category) => {
            const response = await axios.post(
              `${BASE_URL}/tag/category`,
              { categoryId: category._id },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: localStorage.getItem("token"),
                },
              }
            );

            let selectedTag = null;
            if (response.data && response.data.length > 0) {
              if (category.category === "AI") {
                selectedTag = response.data.find((t) => t.tag === "AITrends") || {
                  ...response.data[0],
                  tag: "AITrends",
                  _id: response.data[0]._id,
                };
                // }
              } else if (category.category === "Insights") {
                selectedTag = response.data.find(
                  (t) => t.tag === "ExpertAnalysis"
                ) || {
                  ...response.data[0],
                  tag: "ExpertAnalysis",
                  _id: response.data[0]._id,
                };
              } else {
                selectedTag = response.data[0];
              }
            } else if (response?.data?.status == 401) {
              setMessage("Your session has expired. Please log in again to continue.");
              navigate("/login");
              localStorage.removeItem("token");
              localStorage.removeItem("user");
            };

            return {
              categoryId: category._id,
              tag: selectedTag
                ? {
                  ...selectedTag,
                  categoryId: category._id,
                  isExpertAnalysis: category.category === "Insights",
                  isAITrends: category.category === "AI",
                  originalTagId: selectedTag._id, // Store the original tag ID
                }
                : null,
            };
          });

          // Rest of the function remains the same
          const results = await Promise.all(tagPromises);
          const tagsByCategory = results.reduce((acc, curr) => {
            if (curr.tag) {
              acc[curr.categoryId] = curr.tag;
            }
            return acc;
          }, {});

          setCategoryTags(tagsByCategory);
        } else if (categoryResponse?.data?.status == 401) {
          setMessage("Your session has expired. Please log in again to continue.");
          navigate("/login");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        };
      } catch (error) {
        console.error("Error fetching tags:", error);
        setCategoryTags({});
      } finally {
        setLoading(false);
      }
    };

    fetchTagsByCategories();
  }, []);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/category/all`, { headers: { Authorization: localStorage.getItem("token"), } });
        if (Array.isArray(response.data.Categorys)) {
          setCategories(response.data.Categorys);
        } else if (response?.data?.status == 401) {
          setMessage("Your session has expired. Please log in again to continue.");
          navigate("/login");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        };
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryClick = (category) => {
    scrollToTop();
    navigate(`/category/${category._id}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" }); // Clear previous messages

    try {
      const response = await subscribeUser(JSON.stringify(formData));

      if (response === true) {
        setMessage({
          text: response.message || "Subscribed successfully!",
          type: "success",
        });
        setFormData({ email: "" });
      } else {
        setMessage({
          text: response.message || "You have already Subscribed!",
          type: "error",
        });
      }

      // ✅ Hide message after 5 seconds
      setTimeout(() => {
        setMessage({ text: "", type: "" });
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      setMessage({
        text: "An error occurred. Please try again.",
        type: "error",
      });

      // ✅ Hide error message after 5 seconds
      setTimeout(() => {
        setMessage({ text: "", type: "" });
      }, 5000);
    }
  };

  return (
    <>
      <div className="relative z-10 bg-blue-50  px-16 pt-16 ">
        <footer className="max-w-screen-xl mx-auto text-white">
          <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 justify-center mx-auto text-center gap-5">
            <div className="space-y-5">
              <div className="grid justify-center">
                <img src={logo} onClick={() => { navigate("/"); scrollToTop(); }} alt="Logo" className="h-28 p-2" />
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div>
                  <a
                    href="https://www.facebook.com/profile.php?id=61572969454904"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <FaFacebook className="text-[#4360ac] text-2xl hover:scale-125 transition-transform duration-300" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/techspherebulletin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <BsInstagram className="text-[#4360ac] text-2xl hover:scale-125 transition-transform duration-300" />
                  </a>
                </div>
                <div>
                  <a
                    href=" https://x.com/__TechSphere__"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <FaXTwitter className="text-[#4360ac] hover:scale-125 transition-transform duration-300 text-2xl" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/company/techsphere-bulletin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <FaLinkedin className="text-[#4360ac] hover:scale-125 transition-transform duration-300 text-2xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:text-start text-center">
              <h2 className="mb-6  text-base sm:text-base md:text-lg lg:text-lg xl:text-xl text-[#4360ac] font-extrabold underline underline-offset-8">
                Media
              </h2>
              {categories?.map((item) => (
                <div
                  className="  text-sm sm:text-sm md:text-sm lg:text-base xl:text-base text-gray-900 font-bold"
                  key={item._id}
                >
                  <button
                    className="py-2"
                    onClick={() => handleCategoryClick(item)}
                  >
                    {item.category}
                  </button>
                </div>
              ))}
            </div>
            <div className="lg:text-start text-center">
              <h2 className="mb-6 text-base sm:text-base md:text-lg lg:text-lg xl:text-xl text-[#4360ac] font-extrabold underline underline-offset-8">
                In-Depth
              </h2>
              {loading ? (
                <div className="w-10 my-20 h-10 mx-auto flex items-center justify-center">
                  <img src={icon} alt="" className=" slow-spin" />
                </div>
              ) : Object.values(categoryTags).length > 0 ? (
                Object.values(categoryTags)?.map((tag) => (
                  <div
                    key={tag._id}
                    className="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base text-gray-900 font-bold"
                  >
                    <button
                      className="py-2 hover:text-[#4360ac] transition-colors duration-300"
                      // onClick={() => {
                      //   navigate(`/tag/${tag._id}`, {
                      //     state: {
                      //       categoryId: tag.categoryId,  // Add categoryId to state
                      //       tagId: tag._id  // Add tagId to state
                      //     }
                      //   });
                      //   scrollToTop();
                      // }}
                      onClick={() => {
                        const tagId = tag.isAITrends
                          ? tag.originalTagId
                          : tag._id;
                        navigate(`/tag/${tagId}`, {
                          state: {
                            categoryId: tag.categoryId,
                            tagId: tagId,
                            isExpertAnalysis: tag.isExpertAnalysis,
                            isAITrends: tag.isAITrends,
                          },
                        });
                        scrollToTop();
                      }}
                    >
                      {tag.isExpertAnalysis
                        ? "ExpertAnalysis"
                        : tag.isAITrends
                          ? "AITrends"
                          : tag.tag}
                      {/* {tag.tag} */}
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-gray-500">No tags available</div>
              )}
            </div>

            <div className="lg:text-start text-center">
              <h2 className="mb-6 text-base sm:text-base md:text-lg lg:text-lg xl:text-xl text-[#4360ac] font-extrabold underline underline-offset-8">
                More
              </h2>
              {more.map((service) => (
                <div
                  className="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base text-gray-900 font-semibold"
                  key={service.name}
                >
                  <button
                    onClick={() => {
                      navigate(service.href);
                      scrollToTop();
                    }}
                    // onClick={() => {
                    //   scrollToTop();
                    //   navigate(service.href, {
                    //     state: { description: service.description },
                    //   });
                    // }}
                    className="py-2"
                  >
                    {service.name}
                  </button>
                </div>
              ))}
            </div>
            <div className="lg:text-start text-center">
              <h2 className="mb-6 text-base sm:text-base md:text-lg lg:text-lg xl:text-xl text-[#4360ac] font-extrabold underline underline-offset-8">
                Services
              </h2>
              {services.map((service) => (
                <div
                  className=" text-sm sm:text-sm md:text-sm lg:text-base xl:text-base text-gray-900 font-semibold"
                  key={service.name}
                >
                  <button
                    onClick={() => {
                      scrollToTop();
                      navigate(service.href, {
                        state: {
                          description: service.description,
                          enquiryType: service.type // Pass the enquiry type
                        }
                        // state: { description: service.description },
                      });
                    }}
                    className="py-2"
                  >
                    {service.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mt-12">
            <div className="flex items-center justify-center ">
              <FaMapMarkerAlt className="text-[#4360ac] text-2xl space-x-1" />
              <p className="text-gray-900 text-sm font-semibold">
                London Eye, UK
              </p>
            </div>
            <div className="flex items-center justify-center space-x-1">
              <FaPhone className="text-[#4360ac] text-2xl" />
              <p className="text-gray-900 text-sm font-semibold">
                088-777-666-85
              </p>
            </div>
            <div className="flex items-center justify-center space-x-1">
              <HiOutlineMailOpen className="text-[#4360ac] text-2xl" />
              <p className="text-gray-900 text-sm font-semibold">
                mail@tntech.com
              </p>
            </div>
          </div> */}
          <hr className="mt-6 border-[#4360ac]" />
        </footer>
      </div>
      <div className="bg-blue-50 pt-6 ">
        <div className=" py-6 px-10 lg:px-96 flex flex-col lg:flex-row items-center justify-between mx-auto w-full">
          <div className="text-center lg:text-left w-full">
            <h2 className="pb-2 text-xl font-bold text-[#4360ac]">
              Join Our Newsletter
            </h2>
            <p className="text-gray-700 text-xs sm:text-sm">
              Stay ahead with smart insights. an get the latest tech trend, AI
              news, CyberSecurity Upadates, Startups and Inovations - delivered
              straight to your Inbox.
            </p>
          </div>
          <div className="w-full max-w-md mx-auto px-4">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-full flex flex-col sm:flex-row items-center gap-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4360ac]"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2 text-sm font-semibold text-white rounded-md bg-gradient-to-r from-[#4360ac] to-[#2bace2] hover:from-[#2bace2] hover:to-[#4360ac] focus:outline-none focus:ring-2 focus:ring-[#2bace2] transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>

              {message?.text && (
                <p
                  className={`text-sm text-center mt-1 ${message.type === "success" ? "text-green-600" : "text-red-600"
                    }`}
                >
                  {message.text}
                </p>
              )}
            </form>
          </div>
        </div>
        {/* <hr className="mt-6 mx-16  lg:mx-48 border-[#4360ac]" /> */}
        <div className=" bg-[#4360ac] py-9 text-center text-xs sm:text-base text-white">
          © 2025 Techsphere Bulletin • All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
