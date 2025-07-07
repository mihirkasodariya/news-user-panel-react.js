import React, { useState, useEffect } from "react";
import axios from "axios";
import icon from "../../src/images/Icon_1.png";
import { useNavigate } from "react-router";
import AdSenseAd from "../Components/AdSenseAd.jsx";

const BASE_URL = "https://news-backend-node-js.onrender.com" || "http://localhost:5000";

const Blog = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAdVisible, setIsAdVisible] = useState(false);

  const cardsPerPage = 9;


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


  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = articles.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(articles.length / cardsPerPage);


  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBlogNavigate = (article) => {
    navigate(`/blogdetails/${article._id}`, { state: { article } });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mt-24">
      <div className="flex justify-center items-center w-full ">
        {/* <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2 w-full px-4 sm:w-full md:w-full xl:w-[68%]"> */}
        {/* Main Content */}
        <div className="col-span-3">
          {loading ? (
            <div className="w-10 my-20 h-10 mx-auto flex items-center justify-center">
              <img src={icon} alt="" className="slow-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4 my-20">
              {currentCards.map((article, index) => (
                <div
                  key={article._id}
                  onClick={() => handleBlogNavigate(article)}
                  className="h-[350px] w-full bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl group"
                >
                  <div className="aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden">
                    <img
                      className="w-full h-48 object-cover"
                      src={`${BASE_URL}/${article.image?.replace(
                        /\\/g,
                        "/"
                      )}`}
                      alt={article.blog}
                    />
                  </div>
                  <div className="p-5">
                    <h5 className="my-5 text-xs tracking-tight text-gray-600">
                      {new Date(article.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </h5>
                    <p className="line-clamp-2 mb-3 font-medium text-black group-hover:font-bold">
                      {article.blog}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          <div className="flex justify-between items-center gap-4 my-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md ${currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
            >
              Previous
            </button>
            <span className="text-lg">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md ${currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
            >
              Next
            </button>
          </div>

          {/* Bottom Advertisement */}
          <div className={isAdVisible ? "flex justify-center items-center pb-9" : "flex justify-center items-center"}>
            <AdSenseAd width="1500px" height="60px" onLoad={(success) => setIsAdVisible(success)} />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Blog;

