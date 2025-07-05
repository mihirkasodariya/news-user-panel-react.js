import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Navbar from "./Comon/navbar";
import Home from "./Components/home";
import Footer from "./Comon/footer";
import Category from "./ComonStorypage/category";
import NewsDetails from "./ComonCardList/newsDetails";
import ScrollToTop from "react-scroll-to-top";
import Tag from "./ComonStorypage/tag";
import Login from "./Register/login";
import Signup from "./Register/signup";
import Contact from "./Register/contact";
import { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import Forgotpassword from "./Register/forgotpassword";
import Resetpassword from "./Register/resetpassword";
import BlogList from "./ComonCardList/blogList";
import Blog from "./ComonStorypage/blog";
import LatestNews from "./ComonStorypage/latestNews";
import AboutUs from "./Services/about";
import TermsPage from "./Services/TermsofUse";
import Disclaimer from "./Services/disclamer";
import PrivacyPolicy from "./Services/privacyPolicy";
import RefundPolicy from "./Services/refundpolicy";
import Profile from "./Profile/profile";
import AdSenseAd from "./Components/AdSenseAd";
import { ChevronDown, ChevronUp } from "lucide-react";

function App() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [consent, setConsent] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });
  const [isAdVisible, setIsAdVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Load stored consent on first render
  useEffect(() => {
    const storedConsent = localStorage.getItem("cookieConsent");
    if (!storedConsent) {
      setIsVisible(true);
    } else {
      setConsent(JSON.parse(storedConsent));
    }
  }, []);

  // Save full consent when user accepts all cookies
  const acceptAllCookies = () => {
    const newConsent = { essential: true, analytics: true, marketing: true };
    localStorage.setItem("cookieConsent", JSON.stringify(newConsent));
    setConsent(newConsent);
    setIsVisible(false);
  };

  // Save custom preferences
  const savePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setShowPreferences(false);
    setIsVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer); // Cleanup in case the component unmounts
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/newsdetails/:id" element={<NewsDetails />} />
        <Route path="/blogdetails/:id" element={<BlogList />} />
        <Route path="/tag/:tagId" element={<Tag />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Terms&condition" element={<TermsPage />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        <Route path="/latestnews" element={<LatestNews />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/resetaPassword/:token" element={<Resetpassword />} />
        <Route path="/newsdetails" element={<NewsDetails />} />
      </Routes>
      <ScrollToTop
        smooth
        color="white"
        className="!rounded-full !flex !items-center !justify-center !w-12 !h-12 !bg-[#4360ac] !z-50 animate-bounce hover:animate-none hover:scale-110 transition-transform duration-300"
      />
      {/* Show ad ONLY on `lg` and up (desktop) */}
      <div className="hidden lg:block">
        {!["/login", "/register", "/forgotpassword", "/resetpassword"].includes(location.pathname) && (
          <div
            className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full sm:w-[90%] md:w-[728px] z-50 transition-transform duration-300 ease-in-out h-28 ${isCollapsed ? "translate-y-[60%]" : "translate-y-0"
              }`}
          >
            <div className="relative bg-white bg-opacity-90 rounded-t-md shadow-md px-3 h-[34px] flex items-center justify-center">
              {/* Toggle Icon */}
              <div className="absolute top-1 left-2">
                {isCollapsed ? (
                  <ChevronUp
                    size={24}
                    className="cursor-pointer text-gray-600 hover:text-black"
                    onClick={() => setIsCollapsed(false)}
                  />
                ) : (
                  <ChevronDown
                    size={18}
                    className="cursor-pointer text-gray-600 hover:text-black"
                    onClick={() => setIsCollapsed(true)}
                  />
                )}
              </div>

              {/* Ad Container */}
              <div className="w-full mt-[34px]">
                <AdSenseAd
                  width="708px"
                  height="90px"
                  onLoad={(success) => setIsAdVisible(success)}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {isVisible && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 w-[96%] sm:w-[80%] md:w-[70%] lg:w-[65%] bg-black bg-opacity-80 text-white p-4 z-50 rounded-lg shadow-lg flex flex-col xl:flex-row items-center justify-between gap-4 md:gap-6">
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Close cookie banner"
            className="absolute -top-3 -right-2 text-white h-6 w-6 bg-black bg-opacity-80 rounded-full grid place-items-center hover:bg-opacity-100 transition-all"
          >
            <GrFormClose size={24} />
          </button>
          <p className="text-xs font-bold text-center xl:text-left flex-1">
            This website uses cookies and similar technologies to ensure
            functionality, evaluate website usage, and to serve marketing
            content. Visit our{" "}
            <a
              href="#"
              className="underline hover:text-blue-600 transition-all"
            >
              Cookie Policy
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="underline hover:text-blue-600 transition-all"
            >
              Privacy Policy
            </a>{" "}
            for more information.
          </p>
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={() => setShowPreferences(true)}
              className="bg-white/30 backdrop-blur-md font-bold text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition-all"
            >
              Cookie Preferences
            </button>
            <button
              onClick={acceptAllCookies}
              className="bg-white text-black px-4 font-bold py-2 rounded-full text-sm hover:bg-gray-200 transition-all"
            >
              Accept Cookies
            </button>
          </div>
        </div>
      )
      }

      {/* Preferences Modal */}
      {
        showPreferences && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[400px]">
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
                onClick={() => setShowPreferences(false)}
              >
                ✖
              </button>

              <h2 className="text-lg font-bold mb-4">Manage Cookie Preferences</h2>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" checked disabled className="accent-blue-500" />
                  <span>Essential Cookies (Always Enabled)</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={() => setConsent({ ...consent, analytics: !consent.analytics })}
                    className="accent-blue-500"
                  />
                  <span>Enable Analytics Cookies</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={consent.marketing}
                    onChange={() => setConsent({ ...consent, marketing: !consent.marketing })}
                    className="accent-blue-500"
                  />
                  <span>Enable Marketing Cookies</span>
                </label>
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
                  onClick={savePreferences}
                >
                  Save Preferences
                </button>
                <button
                  className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition-all"
                  onClick={() => setShowPreferences(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )
      }
      {
        location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/forgotpassword" && location.pathname !== "/resetpassword" && (
          <Footer />
        )
      }
    </>
  );
}

export default App;
