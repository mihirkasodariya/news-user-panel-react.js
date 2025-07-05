import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import image from "../../src/images/Icon_1.png";
import AdSenseAd from "../Components/AdSenseAd.jsx";

const BASE_URL = "https://news-backend-node-js.onrender.com" || "http://localhost:5000";


const BlogList = () => {
  const location = useLocation();
  const { article } = location.state || {};
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdVisible, setIsAdVisible] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/blog/all`);
        setArticles(response.data.Blogs);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleBlogNavigate = (article) => {
    navigate(`/blogdetails/${article._id}`, { state: { article } });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const truncateText = (text, maxLength) => {
    return text?.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };
  return (
    <div className="my-36">
      <div className="grid justify-center items-center w-full px-4 mx-auto sm:w-full md:w-full xl:w-[80%]">
        {/* Top Advertisement */}
        <div className={isAdVisible ? "flex justify-center items-center pb-9" : "flex justify-center items-center"}>
          <AdSenseAd width="1500px" height="60px" onLoad={(success) => setIsAdVisible(success)} />
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2">
          <div className="lg:col-span-3 col-span-4">
            <p className="text-white uppercase cursor-pointer bg-[#4360ac] rounded-sm mb-3 w-fit px-3 grid justify-center items-center mx-auto">
              Blog
            </p>

            {/* Blog Title */}
            <h1 className="text-4xl font-bold mb-3">
              {article?.blog}
            </h1>

            {/* Date */}
            <p className="text-gray-700 text-end pb-4 text-sm">
              {new Date(article?.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            {/* Main Image */}
            <img
              src={`${BASE_URL}/${article?.image?.replace(/\\/g, "/")}`}
              alt={article?.blog}
              className="rounded-lg w-full object-cover mb-4"
            />

            <h3 className="pt-3 font-medium text-black group-hover:font-bold transition-all duration-300">
              {article.blogContent.map((item, index) => (
                <p key={index} className="text-gray-500 text-base py-1">
                  {item.text}
                </p>
              ))}
            </h3>

            {/* Bottom Advertisement */}
            <div className={isAdVisible ? "flex justify-center items-center pb-9" : "flex justify-center items-center"}>
              <AdSenseAd width="1120px" height="60px" onLoad={(success) => setIsAdVisible(success)} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 col-span-2 bg-white border border-gray-200 h-fit p-2 sticky top-32 w-full rounded-xl">
            <h1 className="font-extrabold text-2xl mt-2 mb-5">
              Trending Stories
            </h1>

            {/* Sidebar Advertisement */}
            <div className="grid justify-center mb-5 items-center ">
              {/* Advertisementcv */}
              <div className={isAdVisible ? "flex justify-center items-center" : "flex justify-center items-center"}>
                <AdSenseAd width="351px" height="90px" onLoad={(success) => setIsAdVisible(success)} />
              </div>
            </div>

            {/* Trending Stories List */}
            {articles.slice(0, 6).map((item, index) => (
              <React.Fragment key={item._id}>
                <div onClick={() => handleBlogNavigate(item)}>
                  <div className="flex flex-col items-center py-1 bg-white shadow-sm md:flex-row md:max-w-xl border-b-2 border-gray-200">
                    <img
                      className="object-cover flex-shrink-0 w-24 h-20 md:w-24 md:h-20 rounded-t-lg md:rounded-none md:rounded-s-lg"
                      src={`${BASE_URL}/${item.image?.replace(/\\/g, "/")}`}
                      alt={item.blog}
                    />
                    <p className="cursor-pointer mb-3 font-bold text-base sm:text-sm md:text-sm lg:text-sm xl:text-sm px-2 py-2 text-black">
                      {truncateText(item?.blog, 45)}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ))}
            <div className={isAdVisible ? "flex justify-center items-center" : "flex justify-center items-center pt-2"}>
              <AdSenseAd width="351px" height="90px" onLoad={(success) => setIsAdVisible(success)} />
            </div>
          </div>
        </div>

        {/* Related Stories Section */}
        <hr className="mt-20 hidden lg:grid" />

        <div className="slider-container w-full hidden lg:grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6">
          {loading ? (
            <div className="w-10 my-20 h-10 mx-auto flex items-center justify-center">
              <img src={image} alt="" className="slow-spin" />
            </div>
          ) : (
            articles.slice(0, 4).map((val) => (
              <div
                key={val._id}
                onClick={() => handleBlogNavigate(val)}
                className="relative col-span-1 h-[320px] bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl group"
              >
                <div className="w-full h-[180px] overflow-hidden rounded-t-lg">
                  <img
                    className="w-full h-full object-cover rounded-t-xl"
                    src={`${BASE_URL}/${val.image?.replace(/\\/g, "/")}`}
                    alt={val.blog}
                  />
                </div>
                <div className="p-5">
                  <h5 className="mb-5 text-xs tracking-tight text-gray-600">
                    {new Date(val.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </h5>
                  <p className="line-clamp-2 my-3 font-medium text-black group-hover:font-bold">
                    {val.blog}
                  </p>
                </div>
              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
};

export default BlogList;
