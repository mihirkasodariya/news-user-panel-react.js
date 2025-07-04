import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdAutoStories } from "react-icons/md";
import { useNavigate } from "react-router";
import { FaBlog } from "react-icons/fa6";
import axios from "axios";
import icon from "../../src/images/Icon_1.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AdSenseAd from "../Components/AdSenseAd.jsx";
function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="m-5 absolute -right-12 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-[#4360ac] p-1 text-white shadow-lg transition-all hover:bg-[#2bace2] disabled:opacity-50"
      aria-label="Next slide"
    >
      <ChevronRight className="h-6 w-6" />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="m-5 absolute -left-12 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-[#4360ac] p-1 text-white shadow-lg transition-all hover:bg-[#2bace2] disabled:opacity-50"
      aria-label="Previous slide"
    >
      <ChevronLeft className="h-6 w-6" />
    </button>
  );
}

const BASE_URL = "https://news-backend-node-js.onrender.com" || "http://localhost:5000";
// const BASE_URL = process.env.BACKEND_URL || "http://localhost:5000";

const Home = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const [mainSlider, setMainSlider] = useState(null);
  const [thumbnailSlider, setThumbnailSlider] = useState(null);
  const mainSliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);
  const [category, setCategory] = useState([]);
  const [randomCategory, setRandomCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [latestNews, setLatestNews] = useState({
    AI: [],
    Crypto: [],
    Security: [],
    Startups: [],
    Insights: [],
  });
  const [latestNewsLoading, setLatestNewsLoading] = useState(true);
  // const [latestCategoryId, setLatestCategoryId] = useState(null);
  const [articles, setArticles] = useState([]);
  const [isAdVisible, setIsAdVisible] = useState(false);
  // const [blogData, setBlogData] = useState({}); // ✅ useState with different name
  const handleNavigateBlog = (news) => {
    // navigate(`/newsdetails/${news._id}/${news.categoryId}/${news.tagId}`);
    navigate("/newsdetails", {
      state: {
        newsId: news._id,
        categoryId: news.categoryId,
        tagId: news.tagId,
      },
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = localStorage.getItem("user");
        const [randomRes, categoryRes] = await Promise.all([
          axios.get(`${BASE_URL}/news/HomeCategorys`, { headers: { Authorization: localStorage.getItem("token"), } }),
          axios.get(`${BASE_URL}/news/CategoryWisenews`, { headers: { Authorization: localStorage.getItem("token"), } }),
          // axios.get(`${BASE_URL}/news/CategoryWisenews`, {
          //   params: { userId }, 
          // }),
        ]);
        if (randomRes.data.categoriesWithNews) {
          setRandomCategory(randomRes.data.categoriesWithNews || []);
          randomRes.data.categoriesWithNews.map(
            (item) => ({
              category: item.category,
              news: item.news || [], // Convert null to empty array
              _id: item.category._id,
            })
          );

          setCategory(categoryRes.data.categoryWiseNews || []);
          setLoading(false);
        } else if (randomRes?.data?.status == 401) {
          setMessage("Your session has expired. Please log in again to continue.");
          navigate("/login");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        };
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchLatestNews = async () => {
      setLatestNewsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/news/Latestnews`, { headers: { Authorization: localStorage.getItem("token"), } });
        if (response.data) {
          setLatestNews(response.data);
        } else if (response?.data?.status == 401) {
          setMessage("Your session has expired. Please log in again to continue.");
          navigate("/login");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        };
      } catch (error) {
        console.error("Error fetching latest news:", error);
        setLatestNews({
          AI: [],
          Crypto: [],
          Security: [],
          Startups: [],
          Insights: [],
        });
      } finally {
        setLatestNewsLoading(false);
      }
    };

    fetchLatestNews();
  }, []);

  useEffect(() => {
    setMainSlider(mainSliderRef.current);
    setThumbnailSlider(thumbnailSliderRef.current);
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blog/all`, { headers: { Authorization: localStorage.getItem("token"), } });
        if (response.data.Blogs) {
          setArticles(response.data.Blogs);

        } else if (response?.data?.status == 401) {
          setMessage("Your session has expired. Please log in again to continue.");
          navigate("/login");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        };
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const settings = {
    asNavFor: thumbnailSlider,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };

  const settings1 = {
    asNavFor: mainSlider,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: true,
    infinite: true,
    vertical: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settings3 = {
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

  const settings4 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const truncateText = (text, maxLength) => {
    return text?.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  //News Details
  const handlenavigate = (story) => {
    navigate(`/newsdetails/${story._id}`, { state: { story } });
  };

  const handlenavigate1 = (categoryId) => {
    navigate(`/category/${categoryId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlenavigatetag = (tagId, categoryId) => {
    // Log the IDs being passed

    navigate(`/tag/${tagId}`, {
      state: {
        categoryId: categoryId,
      },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBlogNavigate = (article) => {
    navigate(`/blogdetails/${article._id}`, { state: { article } });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className=" mt-32 justify-center  items-center ">
        <div className=" w-full mx-auto ">
          <Slider
            {...settings}
            ref={mainSliderRef}
            className="slider-container "
          >
            {randomCategory.map((val) => (
              <div
                className="mx-auto animate-fade-in px-6 flex flex-col justify-center items-center"
                key={val.category._id}
                data-aos="fade-up"
              >
                <img
                  src={`${BASE_URL}/${val.news?.heroimage?.replace(
                    /\\/g,
                    "/"
                  )}`}
                  alt={val.category.category}
                  className="w-full h-full object-cover mx-auto rounded-2xl sm:w-full sm:h-full md:w-full md:h-[400px] xl:w-[60%] xl:h-[400px] cursor-pointer"
                  onClick={(e) => {
                    handleNavigateBlog(val.news);
                  }}                // className="w-full h-full object-fill  mx-auto rounded-2xl sm:w-full sm:h-full md:w-full md:h-[400px] xl:w-[60%] xl:h-[400px]"
                />
                <p
                  // onClick={() => handlenavigate(val)}
                  className="w-full text-black font-bold text-lg  mx-auto sm:w-full md:w-[60%] mt-4"
                >
                  {val.news?.title}
                </p>
                <div className="w-full flex gap-4 items-center  mx-auto sm:w-full md:w-[60%] mt-4">
                  <button
                    onClick={(e) => {
                      handlenavigate1(val.category._id);
                    }}
                    className="relative uppercase inline-flex items-center justify-center font-semibold text-lg  px-5 py-2  overflow-hidden  text-gray-900 rounded-lg group bg-gradient-to-br from-[#4360ac] to-[#2bace2] group-hover:from-[#2bace2] group-hover:to-blue-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800"
                  >
                    {val.category.category}
                  </button>
                  <button className="bg-transparent text-black font-semibold text-lg px-3 py-2">
                    By StartupStory
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="mt-10 w-full mx-auto sm:block hidden ">
          <Slider
            {...settings1}
            ref={thumbnailSliderRef}
            className="slider-container w-full px-6  sm:w-full md:w-full xl:w-[63%] mx-auto"
          >
            {randomCategory.map((val) => (
              <>
                <div className="border-l-4 h-20 border-[#4360ac] cursor-pointer group"
                  onClick={() => handleNavigateBlog(val.news)}
                >
                  <div className="flex flex-col  mx-2  bg-white  shadow md:flex-row md:max-w-xl  ">
                    <img
                      className=" h-20 w-24"
                      src={`${BASE_URL}/${val.news?.heroimage?.replace(
                        /\\/g,
                        "/"
                      )}`}
                      alt={val.category.category}
                    />
                    <div className="flex flex-col justify-between pl-2 leading-normal">
                      <p className="line-clamp-2 mb-3 font-normal text-black group-hover:font-semibold transition">
                        {val.news?.title}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
        {/* )} */}
      </div>
      {latestNewsLoading ? (
        <div className="w-10 my-20 h-10 mx-auto flex items-center justify-center">
          <img src={icon} alt="" className="slow-spin" />
        </div>
      ) : (
        <div className="mt-20 overflow-hidden">
          <div className="bg-slate-100 h-24rem h-[480px]">
            <div className="flex justify-between items-center pt-5 w-full px-10 sm:px-12 md:px-14 lg:px-14 xl:px-8 sm:w-full md:w-full xl:w-[95%] mx-auto">
              <div className="flex gap-2">
                <MdAutoStories className="h-12 w-12 text-[#4360ac]" />
                <div>
                  <p className="font-bold text-lg sm:text-lg md:text-lg lg:text-base">
                    Latest
                  </p>
                  <p className="font-medium text-xs sm:text-xs text-gray-600">
                    Breaking news and top stories from around the world.
                  </p>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/latestnews");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="py-1 px-4 mb-2 sm:text-sm text-xs font-medium shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none rounded-full border  dark:bg-white dark:text-black dark:border-[#4360ac] dark:hover:text-white dark:hover:bg-[#4360ac]"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto -mt-[420px] mb-20">
            <div className="px-12 relative cursor-pointer">
              <Slider {...settings4}>
                {articles
                  .sort(() => Math.random() - 0.5) // Optional: Shuffle articles like latestNews
                  .slice(0, 7) // Optional: Limit to 7 items
                  .map((article, index) => (
                    <div
                      key={article._id || index}
                      onClick={() => handleBlogNavigate(article)}
                      className="sm:px-6 px-0 py-10"
                    >
                      <div>
                        <div className="overflow-hidden rounded-lg h-[350px] border bg-card bg-white border-gray-200 text-card-foreground duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl group cursor-pointer">
                          <div className="relative h-48 w-full">
                            <img
                              src={`${BASE_URL}/${article.image?.replace(/\\/g, "/")}`}
                              alt={article.blog}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="p-4">
                            <div className="my-3 flex items-center justify-between">
                              <span className="mb-2 text-xs tracking-tight text-gray-600">
                                {new Date(article.createdAt).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </span>
                              {article.tagId && article.categoryId && (
                                <div className="flex gap-6 items-center">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handlenavigatetag(
                                        article.tagId._id,
                                        article.categoryId._id
                                      );
                                    }}
                                    className="inline-flex uppercase relative items-center px-2 text-[10px] font-medium text-[#4360ac] bg-blue-100 rounded-sm transition-all duration-300 ease-in-out hover:bg-[#4360ac] hover:text-white shadow hover:shadow-lg"
                                  >
                                    {article.tagId.tag}
                                  </button>
                                </div>
                              )}
                            </div>
                            <h3 className="line-clamp-2 pt-3 font-medium text-black group-hover:font-bold transition-all duration-300">
                              {truncateText(article.blog, 52)}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>

          <div className={isAdVisible ? "flex justify-center items-center pb-9" : "flex justify-center items-center"}>
            <AdSenseAd width="1300px" height="60px" onLoad={(success) => setIsAdVisible(success)} />
          </div>
        </div>
      )}
      {loading ? (
        <div className="w-10 my-20 h-10 mx-auto flex items-center justify-center">
          <img src={icon} alt="" className=" slow-spin" />
        </div>
      ) : (
        category.map((item, index) => {
          return (
            <>
              <div className="w-full h-full mb-12  mx-auto rounded-2xl sm:w-full sm:h-full md:w-full md:h-full xl:w-[70%] xl:h-[50%]">
                <div className="flex justify-between items-center w-full px-4  sm:w-full md:w-full xl:w-[90%] mx-auto">
                  <div className="flex gap-6">
                    <img
                      className=" h-12 w-12 object-cover"
                      src={`${BASE_URL}/${item.icon?.replace(/\\/g, "/")}`}
                      alt={item.categoryName}
                    />
                    {/* <FaTachographDigital className="h-12 w-12 text-[#4360ac]" /> */}
                    <div>
                      <p className="font-bold text-lg sm:text-lg md:text-lg lg:text-lg">
                        {item.categoryName}
                      </p>
                      <p className="font-medium text-xs sm:text-xs text-gray-600">
                        {item.categoryContent}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => handlenavigate1(item._id)}
                      className="py-1 px-5 mb-2 sm:text-sm text-xs font-medium shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none rounded-full border  dark:bg-white dark:text-black dark:border-[#4360ac] dark:hover:text-white dark:hover:bg-[#4360ac]"
                    >
                      View More
                    </button>
                  </div>
                </div>
                <div className="cursor-pointer slider-container px-6 sm:w-full hidden lg:grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6 justify-between md:w-full xl:w-[90%] mx-auto">
                  {item?.news?.slice(0, 4).map((val) => (
                    <div
                      key={val._id}
                      onClick={() => handlenavigate(val)}
                      className="relative grid justify-center col-span-1 mx-auto m-5 h-[350px] bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl group"
                    >
                      <a className="w-full relative mx-auto h-[180px] overflow-hidden rounded-t-lg">
                        <img
                          className="rounded-t-xl w-full h-full object-cover"
                          src={`${BASE_URL}/${val.heroimage?.replace(
                            /\\/g,
                            "/"
                          )}`}
                          alt={val.heading}
                        />
                      </a>
                      <div className="px-5 space-y-5">
                        <h5 className="mb-2 text-xs tracking-tight text-gray-600 transition-colors duration-300">
                          {new Date(val.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </h5>
                        <p className=" line-clamp-2 mb-3 font-medium text-black group-hover:font-bold transition-all duration-300">
                          {val?.title}
                        </p>
                        <a
                          onClick={(e) => {
                            e.stopPropagation();
                            handlenavigatetag(val.tagDetails._id, item._id);
                          }}
                          className="inline-flex uppercase relative items-center cursor-pointer px-2  text-[10px] font-medium text-[#4360ac] bg-blue-100 rounded-sm transition-all duration-300 ease-in-out hover:bg-[#4360ac] hover:text-white shadow hover:shadow-lg"
                        >
                          {val.tagDetails.tag}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="block lg:hidden">
                  <Slider
                    {...settings3}
                    className="slider-container px-6 sm:w-full md:w-full grid justify-center xl:w-[90%] mx-auto overflow-hidden"
                  >
                    {item?.news?.slice(0, 4).map((val) => (
                      <div
                        key={val.id}
                        onClick={() => handlenavigate(val)}
                        className="relative sm:!w-[95%] md:!w-[95%] lg:!w-[314px] xl:!w-[305px] 2xl:!w-[345px] grid justify-center mx-auto m-5 h-[380px] bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl group"
                      >
                        <a className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
                          <img
                            className="rounded-t-xl w-full h-[200px] object-cover"
                            src={`${BASE_URL}/${val.heroimage?.replace(
                              /\\/g,
                              "/"
                            )}`}
                            alt={val.heading}
                          />
                        </a>
                        <div className="p-5 space-y-3">
                          <h5 className="mb-2 text-xs tracking-tight text-gray-600 transition-colors duration-300">
                            {new Date(val.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </h5>

                          <p className="line-clamp-2 font-medium text-black group-hover:font-bold transition-all duration-300">
                            {val?.title}
                          </p>
                          <a
                            onClick={(e) => {
                              e.stopPropagation();
                              handlenavigatetag(val.tagDetails._id, item._id);
                            }}
                            className="inline-flex uppercase relative items-center px-2 text-[10px] font-medium text-[#4360ac] bg-blue-100 rounded-sm transition-all duration-300 ease-in-out hover:bg-[#4360ac] hover:text-white shadow hover:shadow-lg"
                          >
                            {val.tagDetails.tag}
                          </a>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                {/* Advertisement after every 2 categories */}
                {(index + 1) % 2 === 0 && (
                  <div className={isAdVisible ? "flex justify-center items-center pb-9" : "flex justify-center items-center"}>
                    <AdSenseAd width="1300px" height="60px" onLoad={(success) => setIsAdVisible(success)} />
                  </div>
                )}
              </div >
              {/* )} */}
            </>
          );
        })
      )}
      <div className="mt-24">
        <div className="mt-20 overflow-hidden">
          <div className="bg-slate-100 h-[480px]">
            <div className="flex justify-between items-center pt-6 w-full px-10 sm:px-12 md:px-14 lg:px-14 xl:px-8 sm:w-full md:w-full xl:w-[95%] mx-auto">
              <div className="flex gap-6">
                <FaBlog className="h-12 w-12 text-[#4360ac]" />
                <div>
                  <p className="font-bold text-lg sm:text-lg md:text-lg lg:text-lg">
                    Blogs
                  </p>
                  <p className="font-medium text-xs sm:text-xs text-gray-600">
                    Read our latest blog posts and articles
                  </p>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/blog");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="py-1 px-4 mb-2 sm:text-sm text-xs font-medium shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none rounded-full border dark:bg-white dark:text-black dark:border-[#4360ac] dark:hover:text-white dark:hover:bg-[#4360ac]"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto -mt-[420px] mb-20">
            <div className="px-12 relative">
              <Slider {...settings4}>
                {articles.map((article, index) => (
                  <div
                    key={article._id || index}
                    className="sm:px-6 px-0 py-10"
                    onClick={() => handleBlogNavigate(article)}
                  >
                    <div>
                      <div className="overflow-hidden rounded-lg h-[350px] border bg-card bg-white border-gray-200 text-card-foreground duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl group cursor-pointer">
                        <div className="relative h-48 w-full">
                          <img
                            src={`${BASE_URL}/${article.image?.replace(
                              /\\/g,
                              "/"
                            )}`}
                            alt={article.blog}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="p-4">
                          <div className="my-3 flex items-center justify-between">
                            <span className="mb-2 text-xs tracking-tight text-gray-600">
                              {new Date(article.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </span>
                          </div>
                          <h3 className="line-clamp-2 pt-3 font-medium text-black group-hover:font-bold transition-all duration-300">
                            {article.blog}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className={isAdVisible ? "flex justify-center items-center pb-9" : "flex justify-center items-center"}>
            <AdSenseAd width="2000px" height="60px" onLoad={(success) => setIsAdVisible(success)} />
          </div>
        </div>
      </div >
    </>
  );
};

export default Home;
