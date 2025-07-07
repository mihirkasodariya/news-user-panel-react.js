import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import categorybg from "../../src/images/comonbgimage.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import icon from "../../src/images/Icon_1.png";
import { followTag, unfollowTag } from "../Utils/api";
import { toast } from "react-toastify";
import AdSenseAd from "../Components/AdSenseAd.jsx"; 


const BASE_URL = "https://news-backend-node-js.onrender.com" || "http://localhost:5000";


const Tag = () => {
  const location = useLocation();
  const { tagId } = useParams();
  const [message, setMessage] = useState("");
  const { categoryId, fromLatest } = location.state || {};
  const navigate = useNavigate();
  const [tagslist, setTagslist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [tagCollection, setTag] = useState([]);
  const [currentTag, setCurrentTag] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdVisible, setIsAdVisible] = useState(false);
  
  const cardsPerPage = 9;

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const payload = {
          categoryId: categoryId,
        };
        const response = await axios.post(
          `${BASE_URL}/tag/category`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (response?.data[0]?._id) {
          setTag(response?.data); // Adjust this if the response structure is different
          setLoading(false);
        } else if (response?.data?.status == 401) {
          setMessage("Your session has expired. Please log in again to continue.");
          navigate("/login");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        };
      } catch (error) {
        console.error("Error in API call:", error);
      }
    };

    if (categoryId) {
      fetchTags();
    }
  }, [categoryId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Validate that we have valid MongoDB ObjectId format
        if (!categoryId || !tagId) {
          console.error("Missing categoryId or tagId");
          return;
        }
        const payload = {
          categoryId: categoryId?._id,
          tagId: tagId,
        };

        const response = await axios.post(
          `${BASE_URL}/news/categoryAndTagWiseNews`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (response.data?.categoryAndTagWiseNews?.[0]?.news) {
          setTagslist(response.data.categoryAndTagWiseNews[0].news);
          setCurrentTag(response.data.categoryAndTagWiseNews[0].news);
        } else if (response?.data?.status == 401) {
          setMessage("Your session has expired. Please log in again to continue.");
          navigate("/login");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        } else {
          setTagslist([]);
        }
      } catch (error) {
        console.error("Full error details:", error.response?.data || error);
        setTagslist([]);
      } finally {
        setLoading(false);
      }
    };

    if (categoryId && tagId) {
      fetchData();
    }
  }, [categoryId, tagId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handlenavigate = (story) => {
    navigate(`/newsdetails/${story._id}`, { state: { story } });
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = tagslist.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(tagslist.length / cardsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isNextDisabled =
    currentPage === totalPages || currentCards.length === 0;
  const isPreviousDisabled = currentPage === 1;

  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const handlenavigatetag = (newTagId) => {
    navigate(`/tag/${newTagId}`, {
      state: {
        categoryId: categoryId,
      },
    });
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle follow/unfollow action
  // const handleFollow = async () => {
  //   const payload = {
  //     tagId: tagId, // Add the Tag ID you want to fetch tags for
  //   };
  //   const success = isFollowing
  //     ? await unfollowTag(payload)
  //     : await followTag(payload);

  //   if (success) {
  //     setIsFollowing(!isFollowing);
  //   }
  // };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!token && !!user);

    // Check follow status if user is logged in
    if (token && user) {
      const followedTags = JSON.parse(
        localStorage.getItem("followedTags") || "[]"
      );
      setIsFollowing(followedTags.includes(tagId));
    }
  }, [tagId]);

  // Update the handleFollow function
  const handleFollow = async () => {
    try {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");

      if (!token || !user) {
        toast.error("Please login to follow tags");
        navigate("/login");
        return;
      }

      const payload = {
        tagId: tagId,
        userId: JSON.parse(user)?._id,
      };

      const success = isFollowing
        ? await unfollowTag(payload)
        : await followTag(payload);

      if (success) {
        // Update local storage
        const followedTags = JSON.parse(
          localStorage.getItem("followedTags") || "[]"
        );

        if (isFollowing) {
          const updatedTags = followedTags.filter((tId) => tId !== tagId);
          localStorage.setItem("followedTags", JSON.stringify(updatedTags));
        } else {
          if (!followedTags.includes(tagId)) {
            followedTags.push(tagId);
            localStorage.setItem("followedTags", JSON.stringify(followedTags));
          }
        }

        setIsFollowing(!isFollowing);
        toast.success(isFollowing ? "Tag unfollowed" : "Tag followed");
      }
    } catch (error) {
      console.error("Follow/Unfollow error:", error);
      toast.error("Error updating follow status");
    }
  };

  return (
    <div className="mt-24">
      <div className="relative w-full h-[300px]">
        <img
          src={categorybg}
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 w-full px-4 sm:w-full md:w-full xl:w-[65%] gap-4 mx-auto flex flex-col justify-center sm:text-start text-center text-white">
          {tagCollection
            .filter((tag) => tag._id === tagId)
            .map((val) => {
              return (
                <div key={val._id} className="space-y-3">
                  <p className="font-bold text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
                    {val.tag}
                  </p>
                  <button
                    className={`bg-gradient-to-r from-[#4360ac] to-[#2bace2]   
    hover:scale-105 hover:from-[#2bace2] hover:to-[#4360ac] 
    transition-all duration-300 ease-in-out 
    text-white font-medium rounded-lg text-sm 
    px-5 py-2.5 me-2 mb-2 w-24
    ${!isLoggedIn ? "opacity-50" : ""}`}
                    onClick={handleFollow}
                    title={!isLoggedIn ? "Please login to follow tags" : ""}
                  >
                    {isLoggedIn
                      ? isFollowing
                        ? "Unfollow"
                        : "Follow"
                      : "Follow"}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2 w-full px-4 sm:w-full md:w-full xl:w-[68%]">
          <div className="col-span-1 space-y-10">
            <div className=" bg-[#ddd] h-96 py-6 px-4 mt-5 sm:block hidden rounded-xl">
              <h1 className="font-semibold text-2xl">Tags</h1>
              <div className="border-b border-gray-400 pb-5 ">
                <div className="px-7 h-64 py-4 mt-5 overflow-x-auto overflow-y-auto">
                  {loading ? (
                    <div className="w-10 h-10 mx-auto flex items-center justify-center">
                      <img src={icon} alt="" className=" slow-spin" />
                    </div>
                  ) : (
                    tagCollection?.map((tag) => (
                      <ul key={tag._id} className="list-disc ">
                        <li
                          onClick={() => handlenavigatetag(tag._id)}
                          className="font-normal mb-1 text-sm cursor-pointer text-slate-700 marker:text-black hover:text-black hover:underline hover:font-medium"
                        >
                          {tag.tag}
                        </li>
                      </ul>
                    ))
                  )}
                </div>
              </div>
            </div>
           <div className={isAdVisible ? "flex justify-center items-center pb-9" : "flex justify-center items-center"}>
                <AdSenseAd width="400px" height="715px" onLoad={(success) => setIsAdVisible(success)} />
              </div>
          </div>
          <div className="col-span-3">
            <div className="slider-container sm:w-full grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6 justify-between md:w-full xl:w-[90%] mx-auto">
              {loading ? (
                <div className="w-10 my-20 h-10 mx-auto flex items-center justify-center">
                  <img src={icon} alt="" className=" slow-spin" />
                </div>
              ) : (
                currentCards.map((val) => (
                  <div
                    key={val._id}
                    className="relative grid justify-center col-span-1 mx-auto m-5 h-[340px] bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl group"
                  >
                    <a className="w-full relative mx-auto h-[180px] overflow-hidden rounded-t-lg">
                      <img
                        className="rounded-t-xl w-full h-full object-cover"
                        src={`${BASE_URL}/${val.heroimage?.replace(
                          /\\/g,
                          "/"
                        )}`}
                        // src={val.heroimage}
                        alt={val.heading}
                      />
                    </a>
                    <div className="p-5">
                      <h5 className="mb-2 text-xs tracking-tight text-gray-600 transition-colors duration-300">
                        {new Date(val.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </h5>
                      <p
                        onClick={() => handlenavigate(val)}
                        className="line-clamp-2 mb-3 font-medium text-black transition-all duration-300 group-hover:font-bold"
                      >
                        {val?.title}
                      </p>
                      <a
                        onClick={() => window.location.reload()}
                        className="inline-flex cursor-pointer uppercase relative items-center px-2 text-[10px] font-medium text-[#4360ac] bg-blue-100 rounded-sm transition-all duration-300 ease-in-out hover:bg-[#4360ac] hover:text-white shadow hover:shadow-lg"
                      >
                        {val.tagDetails.tag}
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="flex justify-between items-center my-7">
              <button
                onClick={handlePrevious}
                className="px-4 py-2 text-sm font-medium text-white bg-[#e64833] rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
                disabled={isPreviousDisabled}
              >
                <FaArrowLeftLong />
                Previous
              </button>
              <p className="text-sm font-medium text-gray-600">
                Page {currentPage} of {totalPages}
              </p>
              <button
                onClick={handleNext}
                className="px-4 py-2 text-sm font-medium text-white bg-[#e64833] rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
                disabled={isNextDisabled}
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
  );
};

export default Tag;
