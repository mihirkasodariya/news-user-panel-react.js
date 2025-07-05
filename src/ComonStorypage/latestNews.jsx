import React, { useEffect, useState } from "react";
import categorybg from "../../src/images/comonbgimage.webp";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import axios from "axios";
import icon from "../../src/images/Icon_1.png";
import { useNavigate } from "react-router";
import AdSenseAd from "../Components/AdSenseAd.jsx"; 
const BASE_URL = "https://news-backend-node-js.onrender.com" || "http://localhost:5000";

const LatestNews = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [latestNews, setLatestNews] = useState({
    AI: [],
    Crypto: [],
    Security: [],
    Startups: [],
    Insights: [],
  });
  const [latestNewsLoading, setLatestNewsLoading] = useState(true);
  const [tags, setTags] = useState([]);
  const [tagsLoading, setTagsLoading] = useState(true);
  const [isAdVisible, setIsAdVisible] = useState(false);

  // Add this useEffect after your existing useEffect
  useEffect(() => {
    const fetchTags = async () => {
      setTagsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/tag/all`, { headers: { Authorization: localStorage.getItem("token"), } });
        if (response.data.Tags) {
          setTags(response.data.Tags);
        } else if (response?.data?.status == 401) {
          setMessage("Your session has expired. Please log in again to continue.");
          navigate("/login");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        };
      } catch (error) {
        console.error("Error fetching tags:", error);
        setTags([]);
      } finally {
        setTagsLoading(false);
      }
    };

    fetchTags();
  }, []);

  useEffect(() => {
    const fetchLatestNews = async () => {
      setLatestNewsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/news/Latestnews`, { headers: { Authorization: localStorage.getItem("token"), } });
        console.log(response.data)
        if (response.data) {
          // Combine all news into a single array and sort by date
          const allNews = [
            ...response.data.AI,
            ...response.data.Crypto,
            ...response.data.Security,
            ...response.data.Startups,
            ...response.data.Insights,
          ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

          setLatestNews({
            news: allNews // Store all news in a 'news' property to match category structure
          });
        } else if (response?.data?.status == 401) {
          setMessage("Your session has expired. Please log in again to continue.");
          navigate("/login");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        };
      } catch (error) {
        console.error("Error fetching latest news:", error);
        setLatestNews({ news: [] });
      } finally {
        setLatestNewsLoading(false);
      }
    };

    fetchLatestNews();
  }, []);

  const handlenavigate = (news) => {
    navigate(`/newsdetails/${news._id}`, { state: { story: news } });
  };

  const handlenavigatetag = (tagId, categoryId) => {
    navigate(`/tag/${tagId}`, {
      state: {
        categoryId: categoryId,
      },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;

  // Add this function before the return statement
  const getPaginatedNews = () => {
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = latestNews.news?.slice(indexOfFirstCard, indexOfLastCard) || [];
    const totalPages = Math.ceil((latestNews.news?.length || 0) / cardsPerPage);

    return { currentCards, totalPages };
  };

  return (
    <div>
      {message && (
        <div severity="info" className="mb-4">
          {message}
        </div>
      )}
      <div className="mt-24">
        {/* Hero Section */}
        <div className="relative w-full h-[300px]">
          <img
            src={categorybg}
            alt="Category Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 w-full px-4 sm:w-full md:w-full xl:w-[65%] gap-4 mx-auto flex flex-col justify-center sm:text-start text-center text-white">
            <p className="font-bold text-5xl">Latest</p>
            <p className="font-medium text-xl text-gray-200">
              Breaking news and top stories from around the world.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex justify-center items-center w-full">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2 w-full px-4 sm:w-full md:w-full xl:w-[68%]">
            {/* Sidebar */}
            <div className="col-span-1 space-y-10">
              <div className="bg-[#ddd] h-96 py-6 px-4 mt-5 sm:block hidden rounded-xl">
                <h1 className="font-semibold text-2xl">Tags</h1>
                <div className="border-b border-gray-400 pb-5">
                  <div className="px-7 h-64 py-4 mt-5 overflow-x-auto overflow-y-auto">
                    {tagsLoading ? (
                      <div className="w-10 h-10 mx-auto flex items-center justify-center">
                        <img src={icon} alt="" className="slow-spin" />
                      </div>
                    ) : (
                      tags.map((tag) => (
                        <ul key={tag._id} className="list-disc">
                          <li onClick={() => handlenavigatetag(tag._id, tag.categoryId)} className="font-normal text-sm mb-1 cursor-pointer text-slate-700 marker:text-black hover:text-black hover:underline hover:font-medium">
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

            {/* News Grid */}
            <div className="col-span-3">
              {latestNewsLoading ? (
                <div className="w-10 my-20 h-10 mx-auto flex items-center justify-center">
                  <img src={icon} alt="" className="slow-spin" />
                </div>
              ) : (
                <div className="slider-container sm:w-full grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6 justify-between md:w-full xl:w-[90%] mx-auto">
                  {getPaginatedNews().currentCards.map((news) => (
                    <div
                      key={news._id}
                      onClick={() => handlenavigate(news)}
                      className="relative grid justify-center col-span-1 mx-auto m-5 h-[340px] bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl group"
                    >
                      <div className="w-full relative mx-auto h-[160px] overflow-hidden rounded-t-xl">
                        <img
                          className="w-full h-full object-cover"
                          src={`${BASE_URL}/${news.heroimage?.replace(
                            /\\/g,
                            "/"
                          )}`}
                          alt={news.title}
                        />
                      </div>
                      <div className="p-5">
                        <h5 className="mb-2 text-xs tracking-tight text-gray-600">
                          {new Date(news.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </h5>
                        <p className="line-clamp-2 mb-3 font-medium text-black group-hover:font-bold">
                          {news.title}
                        </p>
                        <a
                          onClick={(e) => {
                            e.stopPropagation();
                            handlenavigatetag(news.tagId._id, news.categoryId._id);
                          }}
                          className="cursor-pointer uppercase px-2 w-fit h-fit text-[10px] font-medium text-[#4360ac] bg-blue-100 rounded-sm transition-all duration-300 ease-in-out hover:bg-[#4360ac] hover:text-white shadow hover:shadow-lg">
                          {news.tagId?.tag || "Tag"}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              <div className="flex justify-between items-center my-7">
                <button
                  onClick={() => {
                    setCurrentPage((prev) => Math.max(prev - 1, 1));
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-sm font-medium text-white bg-[#4360ac] rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <FaArrowLeftLong />
                  Previous
                </button>
                <p className="text-sm font-medium text-gray-600">
                  Page {currentPage} of {getPaginatedNews().totalPages}
                </p>
                <button
                  onClick={() => {
                    setCurrentPage((prev) =>
                      Math.min(prev + 1, getPaginatedNews().totalPages)
                    );
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  disabled={currentPage === getPaginatedNews().totalPages}
                  className="px-4 py-2 text-sm font-medium text-white bg-[#4360ac] rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Next
                  <FaArrowRightLong />
                </button>
              </div>
              {/* Bottom Advertisement */}
              <div className={isAdVisible ? "flex justify-center items-center pb-9" : "flex justify-center items-center"}>
                <AdSenseAd width="1500px" height="60px" onLoad={(success) => setIsAdVisible(success)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
