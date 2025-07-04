import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import axios from "axios";
import icon from "../../src/images/Icon_1.png";
import AdSenseAd from "../Components/AdSenseAd.jsx";

const BASE_URL = "https://news-backend-node-js.onrender.com" || "http://localhost:5000";

const NewsDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const { story, newsId, categoryId, tagId } = location.state || {};
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const [newsData, setNewsData] = useState(null);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trendingStories, setTrendingStories] = useState([]);
  const [isAdVisible, setIsAdVisible] = useState(false);

  useEffect(() => {
    const fetchCategoryNews = async () => {
      try {
        const user = localStorage.getItem("user");
        const userId = JSON.parse(user)?._id;
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/news/CategoryWisenews`, { headers: { Authorization: localStorage.getItem("token"), } }, { userId });
        if (response.data.categoryWiseNews) {
          setStories(response.data.categoryWiseNews);
        } else if (response?.data?.status == 401) {
          setMessage("Your session has expired. Please log in again to continue.");
          navigate("/login");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        };
        setLoading(false);
      } catch (error) {
        console.error("Error fetching category-wise news:", error);
        setStories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryNews();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (newsData && stories.length > 0) {
      const currentCategory = stories.find(
        (cat) => cat.categoryName === newsData.categoryDetails.category
      );
      if (currentCategory) {
        const filteredNews = currentCategory.news.filter(
          (item) => item._id !== newsData._id
        );
        setTrendingStories(filteredNews.slice(0, 6));
      }
    }
  }, [newsData, stories]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const payload = {
          categoryId: story?.categoryId?._id || story?.categoryId || categoryId,
          tagId: story?.tagId?._id || story?.tagId || tagId,
          newsId: story?._id || newsId || id,
        };

        const headers = {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")
        };

        const response = await axios.post(
          `${BASE_URL}/news/categoryTagNewsWiseNews`,
          payload,
          { headers }
        );

        if (response.data && response.data.categoryTagAndNewsWiseNews) {
          setNewsData(response.data.categoryTagAndNewsWiseNews[0]);
        } else if (response?.data?.status == 401) {
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
  }, [story]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login"); // Redirect to login if user is not logged in
    }
  }, [navigate]);

  const handlenavigatetag = (tagId, categoryId) => {
    navigate(`/tag/${tagId}`, {
      state: {
        categoryId: categoryId,
        tagId: tagId,
      },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //Newsdetails navigate
  const handlenavigate = (story) => {
    navigate(`/newsdetails/${story._id}`, { state: { story } });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [story]);

  const truncateText = (text, maxLength) => {
    return text?.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div>
      {message && (
        <div severity="info" className="mb-4">
          {message}
        </div>
      )}
      <div className="my-36">
        <div className="grid justify-center items-center w-full px-4 mx-auto  sm:w-full md:w-full xl:w-[80%]">
          <div className={isAdVisible ? "flex justify-center items-center pb-9" : "flex justify-center items-center"}>
            <AdSenseAd width="1500px" height="60px" onLoad={(success) => setIsAdVisible(success)} />
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6 h-fits">
            <div className="lg:col-span-3 col-span-4">
              {newsData ? (
                <>
                  <p
                    onClick={() =>
                      navigate(
                        `/category/${encodeURIComponent(
                          newsData.categoryDetails.category
                        )}`
                      )
                    }
                    className="text-white uppercase cursor-pointer bg-[#4360ac] rounded-sm mb-3 w-fit px-3 grid justify-center items-center mx-auto "
                  >
                    {newsData.categoryDetails.category}
                  </p>
                  <h1 className="text-4xl font-bold mb-3">
                    {newsData.title}
                  </h1>
                  <p className="text-gray-700 text-end pb-4 text-sm">
                    {new Date(newsData.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <img
                    src={`${BASE_URL}/${newsData.heroimage?.replace(/\\/g, "/")}`}
                    alt={newsData.title}
                    className="rounded-lg w-full  object-cover mb-4"
                  />

                  <div className="rounded-md bg-blue-50 p-4 my-5">
                    <h1 className="text-[#4360ac] font-bold text-3xl">Summary</h1>
                    <ul className="list-disc list-outside grid gap-6 px-4 py-2 text-xl marker:text-[#4360ac] font-normal">
                      {newsData.summary.map((item, index) => (
                        <li key={index} className="text-gray-500 text-base py-1">
                          {truncateText(item.text)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">{newsData.heading}</h2>
                    <p className="text-gray-700 text-lg">
                      {newsData.content_1.map((item, index) => (
                        <p key={index} className="py-2">
                          {truncateText(item.text)}
                        </p>
                      ))}
                    </p>

                    {newsData.image_2 && (
                      <img
                        src={`${BASE_URL}/${newsData.image_2?.replace(
                          /\\/g,
                          "/"
                        )}`}
                        alt={newsData.title}
                        className="rounded-lg w-full  object-cover my-4"
                      />
                    )}

                    <p className="text-gray-700 text-lg">
                      {newsData.content_2.map((item, index) => (
                        <p key={index} className="py-2">
                          {truncateText(item.text)}
                        </p>
                      ))}
                    </p>

                    {newsData.image_3 && (
                      <img
                        src={`${BASE_URL}/${newsData.image_3?.replace(
                          /\\/g,
                          "/"
                        )}`}
                        alt={newsData.title}
                        className="rounded-lg w-full  object-cover my-4"
                      />
                    )}
                    <p className="text-gray-700 text-lg">
                      {newsData.content_3.map((item, index) => (
                        <p key={index} className="py-2">
                          {truncateText(item.text)}
                        </p>
                      ))}
                    </p>
                  </div>
                </>
              ) : (
                <div className="w-10 h-10 mx-auto flex items-center justify-center">
                  <img src={icon} alt="" className=" slow-spin" />
                </div>
              )}
              <div className={isAdVisible ? "flex justify-center items-center pb-9" : "flex justify-center items-center"}>
                <AdSenseAd width="1120px" height="60px" onLoad={(success) => setIsAdVisible(success)} />
              </div>
            </div>

            <div className="lg:col-span-1 col-span-2 bg-white border border-gray-200 p-2 sticky top-32 w-full rounded-xl max-h-[calc(126vh-150px)] overflow-y-auto">
              <h1 className="font-extrabold text-2xl  mt-2 mb-5">
                Trending Stories
              </h1>
              <div className={isAdVisible ? "flex justify-center items-center" : "flex justify-center items-center"}>
                <AdSenseAd width="400px" height="90px" onLoad={(success) => setIsAdVisible(success)} />
              </div>
              {loading ? (
                <div className="w-10 my-20 h-10 mx-auto flex items-center justify-center">
                  <img src={icon} alt="" className=" slow-spin" />
                </div>
              ) : (
                trendingStories.map((item, index) => (
                  <React.Fragment key={item._id}>
                    <div>
                      <a
                        onClick={() => handlenavigate(item)}
                        className="flex flex-col items-center py-1 bg-white shadow-sm md:flex-row md:max-w-xl border-b-2 border-gray-200"
                      >
                        <img
                          className="object-cover flex-shrink-0 w-24 h-20 md:w-24 md:h-20 rounded-t-lg md:rounded-none md:rounded-s-lg"
                          src={`${BASE_URL}/${item.heroimage?.replace(/\\/g, "/")}`}
                          alt={item.heading}
                        />
                        <p className="cursor-pointer mb-3 font-bold text-base sm:text-sm md:text-sm lg:text-sm xl:text-sm px-2 py-2 text-black">
                          {truncateText(item?.title, 45)}
                        </p>
                      </a>
                    </div>
                  </React.Fragment>
                ))
              )}
              <div className={isAdVisible ? "flex justify-center items-center" : "flex justify-center items-center"}>
                <AdSenseAd width="400px" height="90px" onLoad={(success) => setIsAdVisible(success)} />
              </div>
            </div>
          </div>
          <hr className=" mt-3 hidden lg:grid " />
          <div className="slider-container  sm:w-full hidden lg:grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6 justify-between md:w-full xl:w-full mx-auto">
            {loading ? (
              <div className="w-10 my-20 h-10 mx-auto flex items-center justify-center">
                <img src={icon} alt="" className=" slow-spin" />
                <p className="mt-5 text-[#4360ac] font-extrabold text-base">
                  Loading...
                </p>
              </div>
            ) : (
              trendingStories.slice(0, 4).map((val) => (
                <div
                  key={val._id}
                  onClick={() => handlenavigate(val)}
                  className="relative grid justify-center col-span-1 mx-auto m-5 h-[370px] bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl group"
                >
                  <a className="w-full relative mx-auto h-[180px] overflow-hidden rounded-t-lg">
                    <img
                      className="rounded-t-xl w-full h-full object-cover"
                      src={`${BASE_URL}/${val.heroimage?.replace(/\\/g, "/")}`}
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
                    <p className="line-clamp-2 mb-3 font-medium text-black group-hover:font-bold transition-all duration-300">
                      {val?.title}
                    </p>
                    <a
                      onClick={(e) => {
                        e.stopPropagation();
                        handlenavigatetag(
                          val?.tagDetails?._id,
                          newsData.categoryDetails._id
                        );
                      }}
                      className=" cursor-pointer inline-flex uppercase relative items-center px-2 text-[10px] font-medium text-[#4360ac] bg-blue-100 rounded-sm transition-all duration-300 ease-in-out hover:bg-[#4360ac] hover:text-white shadow hover:shadow-lg"
                    >
                      {val.tagDetails.tag}
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
