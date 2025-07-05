import React, { useEffect, useState } from "react";
import categorybg from "../../src/images/comonbgimage.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import icon from "../../src/images/Icon_1.png";
import { followCategory, unfollowCategory } from "../Utils/api";
import { toast } from "react-toastify";
import AdSenseAd from "../Components/AdSenseAd.jsx";
const BASE_URL = "https://news-backend-node-js.onrender.com" || "http://localhost:5000";

const Category = () => {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tag, setTag] = useState([]);
  const [categoryData, setCategoryData] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdVisible, setIsAdVisible] = useState(false);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const payload = {
          categoryId: id,
        };
        const response = await axios.post(`${BASE_URL}/tag/category`, payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        });
        if (Array.isArray(response.data) ? response.data : []) {
          setTag(Array.isArray(response.data) ? response.data : []);
          setLoading(false);
        } else if (response?.data?.status == 401) {
          setMessage("Your session has expired. Please log in again to continue.");
          navigate("/login");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        };
      } catch (error) {
        console.error("Error fetching tags:", error);
        setTag([]); // Set empty array on error
        setLoading(false);
      }
    };

    if (id) {
      fetchTags();
    }
  }, [id]);

  useEffect(() => {
    const fetchCategoryNews = async () => {
      try {
        setLoading(true);
        const user = localStorage.getItem("user");

        const payload = {
          categoryId: id,
          userId: JSON.parse(user)?._id,
        };
        const response = await axios.post(
          `${BASE_URL}/news/CategoryWiseNewsById`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token")
            },
          }
        );

        if (response.data.categoryWiseNews) {
          const categoryData = response.data.categoryWiseNews[0];
          setStories(categoryData);
          setCategoryData(categoryData);
        } else if (response?.data?.status == 401) {
          setMessage("Your session has expired. Please log in again to continue.");
          navigate("/login");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        };
      } catch (error) {
        console.error("Error fetching category-wise news:", error);
        setStories({ news: [] });
        setCategoryData(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCategoryNews();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [id]);

  const handlenavigate = (story) => {
    navigate(`/newsdetails/${story._id}`, { state: { story } });
  };

  const handlenavigatetag = (tagId, categoryId) => {
    navigate(`/tag/${tagId}`, {
      state: {
        categoryId: categoryId,
      },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cardsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const getPaginatedData = () => {
    const currentCards =
      stories?.news?.slice(
        (currentPage - 1) * cardsPerPage,
        currentPage * cardsPerPage
      ) || [];
    const totalPages = Math.ceil((stories?.news?.length || 0) / cardsPerPage);

    return {
      currentCards,
      totalPages,
    };
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!token && !!user);

    // Only check follow status if user is logged in
    if (token && user) {
      const followedCategories = JSON.parse(
        localStorage.getItem("followedCategories") || "[]"
      );
      setIsFollowing(followedCategories.includes(id));
    }
  }, [id]);

  // Update the handleFollow function
  const handleFollow = async () => {
    try {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");

      if (!token || !user) {
        toast.error("Please login to follow categories");
        navigate("/login");
        return;
      }

      const payload = {
        categoryId: id,
        userId: JSON.parse(user)?._id, // Add user ID to payload
      };

      const success = isFollowing
        ? await unfollowCategory(payload)
        : await followCategory(payload);

      if (success) {
        // Update local storage
        const followedCategories = JSON.parse(
          localStorage.getItem("followedCategories") || "[]"
        );

        if (isFollowing) {
          const updatedCategories = followedCategories.filter(
            (catId) => catId !== id
          );
          localStorage.setItem(
            "followedCategories",
            JSON.stringify(updatedCategories)
          );
        } else {
          if (!followedCategories.includes(id)) {
            followedCategories.push(id);
            localStorage.setItem(
              "followedCategories",
              JSON.stringify(followedCategories)
            );
          }
        }

        setIsFollowing(!isFollowing);
        toast.success(
          isFollowing ? "Category unfollowed" : "Category followed"
        );
      }
    } catch (error) {
      console.error("Follow/Unfollow error:", error);
      toast.error("Error updating follow status");
    }
  };

  useEffect(() => {
    setCurrentPage(1); // Reset current page to 1 when category ID changes
  }, [id]);

  return (
    <>
      <div>
        {message && (
          <div severity="info" className="mb-4">
            {message}
          </div>
        )}
        <div className=" mt-24 ">
          <div className="relative w-full h-[300px] ">
            <img
              src={categorybg}
              alt="Footer Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 w-full px-4 sm:w-full md:w-full xl:w-[65%] gap-4 mx-auto flex flex-col justify-center sm:text-start text-center text-white">
              <p className="font-bold text-5xl">
                {categoryData?.categoryName || ""}
              </p>
              <p className="font-medium text-xl text-gray-200">
                {categoryData?.categoryContent || ""}
              </p>
              <div className="grid justify-center sm:justify-start">
                <button
                  className="bg-gradient-to-r from-[#4360ac] to-[#2bace2]   
      hover:scale-105 hover:from-[#2bace2] hover:to-[#4360ac] 
      transition-all duration-300 ease-in-out 
      text-white font-medium rounded-lg text-sm 
      px-5 py-2.5 me-2 mb-2 w-24"
                  onClick={() => {
                    if (!isLoggedIn) {
                      toast.info("Please login to follow categories");
                      navigate("/login");
                      return;
                    }
                    handleFollow();
                  }}
                >
                  {isLoggedIn ? (isFollowing ? "Unfollow" : "Follow") : "Follow"}
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2 w-full px-4  sm:w-full md:w-full xl:w-[68%]">
              <div className="col-span-1 space-y-10">
                <div className=" bg-[#ddd] h-96 py-6 px-4 mt-5 sm:block hidden  rounded-xl">
                  <h1 className="font-semibold text-2xl ">Tags</h1>
                  <div className="border-b border-gray-400 pb-5 ">
                    <div className="px-7 h-64 py-4 mt-5  overflow-x-auto overflow-y-auto ">
                      {loading ? (
                        <div className="w-10 h-10 mx-auto flex items-center justify-center">
                          <img src={icon} alt="" className=" slow-spin" />
                        </div>
                      ) : (
                        tag?.map((val) => {
                          return (
                            <ul key={val._id} className="list-disc  ">
                              <li
                                onClick={() => handlenavigatetag(val._id, id)}
                                className="font-normal text-sm mb-1 cursor-pointer  text-slate-700 marker:text-black hover:text-black hover:underline hover:font-medium"
                              >
                                {val.tag}
                              </li>
                            </ul>
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>
                <div className={isAdVisible ? "flex justify-center items-center" : "flex justify-center items-center"}>
                  <AdSenseAd width="400px" height="715px" onLoad={(success) => setIsAdVisible(success)} />
                </div>
                <div className={isAdVisible ? "flex justify-center items-center" : "flex justify-center items-center"}>
                  <AdSenseAd width="400px" height="715px" onLoad={(success) => setIsAdVisible(success)} />
                </div>
                <div className={isAdVisible ? "flex justify-center items-center" : "flex justify-center items-center"}>
                  <AdSenseAd width="400px" height="715px" onLoad={(success) => setIsAdVisible(success)} />
                </div>
              </div>

              <div className="col-span-3">
                {
                  // Regular Category View
                  loading ? (
                    <div className="w-10 my-20 h-10 mx-auto flex items-center justify-center">
                      <img src={icon} alt="" className="slow-spin" />
                    </div>
                  ) : (
                    <div className="slider-container sm:w-full grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6 justify-between md:w-full xl:w-[90%] mx-auto">
                      {getPaginatedData().currentCards.map((story) => (
                        <div
                          key={story?._id}
                          onClick={() => handlenavigate(story)}
                          className="relative grid justify-center col-span-1 mx-auto m-5 h-[340px] bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl group"
                        >
                          <a className="w-full relative mx-auto h-[160px] overflow-hidden rounded-t-xl">
                            <img
                              className="w-full h-full object-cover"
                              src={`${BASE_URL}/${story.heroimage?.replace(
                                /\\/g,
                                "/"
                              )}`}
                              alt={story?.heading}
                            />
                          </a>
                          <div className="p-5">
                            <h5 className="mb-2 text-xs tracking-tight text-gray-600 transition-all duration-300 d">
                              {new Date(story?.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </h5>
                            <p className="line-clamp-2 mb-3 font-medium text-black  group-hover:font-bold transition-all duration-300">
                              {story?.title}
                            </p>
                            <a
                              onClick={(e) => {
                                e.stopPropagation();
                                handlenavigatetag(story?.tagDetails?._id, id);
                              }}
                              className="cursor-pointer  uppercase px-2 w-fit h-fit text-[10px] font-medium text-[#4360ac] bg-blue-100 rounded-sm transition-all duration-300 ease-in-out hover:bg-[#4360ac] hover:text-white shadow hover:shadow-lg"
                            >
                              {story?.tagDetails?.tag}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                }
                <div className="flex justify-between items-center my-7">
                  <button
                    onClick={() => {
                      if (currentPage > 1) {
                        setCurrentPage(currentPage - 1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className="px-4 py-2 text-sm font-medium text-white bg-[#4360ac] rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
                    disabled={currentPage === 1}
                  >
                    <FaArrowLeftLong />
                    Previous
                  </button>
                  <p className="text-sm font-medium text-gray-600">
                    Page {currentPage} of {getPaginatedData().totalPages}
                  </p>
                  <button
                    onClick={() => {
                      if (currentPage < getPaginatedData().totalPages) {
                        setCurrentPage(currentPage + 1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className="px-4 py-2 text-sm font-medium text-white bg-[#4360ac] rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
                    disabled={currentPage === getPaginatedData().totalPages}
                  >
                    Next
                    <FaArrowRightLong />
                  </button>
                </div>
                <div className={isAdVisible ? "flex justify-center items-center pb-9" : "flex justify-center items-center"}>
                  <AdSenseAd width="1500px" height="60px" onLoad={(success) => setIsAdVisible(success)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
