import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import logo from "../../src/images/Logo BB_1.png";
import { Fragment, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { data, useLocation, useNavigate } from "react-router";
import { MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useAuth } from "../Context/authContext";


const BASE_URL = "https://news-backend-node-js.onrender.com" || "http://localhost:5000";


const Navbar = () => {
  const [message, setMessage] = useState("");
  const location = useLocation();
  const { user, updateUser } = useAuth(); // Get user and updateUser from context
  const navigate = useNavigate();
  const [categories, setCategories] = useState({ main: [], more: [] }); // State to hold categories
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/category/all`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });

        if (Array.isArray(response.data.Categorys)) {
          const allCategories = [
            {
              category: "Home",
              categoryContent: "Home page",
              route: "/",
            },
            {
              category: "Latest",
              categoryContent: "Breaking news and top stories from around the world",
              route: "/latestnews",
            },
            ...response.data.Categorys.slice(0, 7),
          ];
          setCategories({
            main: allCategories,
            more: response.data.Categorys.slice(7),
          });
        } else if (response?.data?.status == 401) {
          setMessage("Your session has expired. Please log in again to continue.");
          navigate("/login");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        } else {
          console.error("Invalid data format:", response.data.Categorys);
          setCategories({ main: [], more: [] });
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories({ main: [], more: [] });
      }
    };

    fetchCategories();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   updateUser(null); // Clear user state in context
  //   navigate("/login"); // Redirect to login page
  // };

  const handleLogout = () => {
    if (!user) return; // Don't open dialog if no user
    setIsLogoutDialogOpen(true);
  };

  // Add this new function for actual logout
  const confirmLogout = () => {
    localStorage.removeItem("user");
    updateUser(null);
    setIsLogoutDialogOpen(false);
    navigate("/login");
  };


  const handleCategoryClick = (category) => {
    scrollToTop();
    if (category.route) {
      navigate(category.route);
    } else {
      navigate(`/category/${category._id}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <Disclosure
      as="nav"
      className="bg-white w-screen fixed top-0  z-50  border-b-4 border-[#4360ac] "
    >
      <div className=" !w-full  px-2 sm:px-2 lg:px-4">
        <div className="relative flex h-24 w-full items-center justify-between max-sm:justify-center">
          <div className="flex justify-center shrink-0 items-center cursor-pointer">
            <img
              alt="Company Logo"
              src={logo}
              onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }) }}
              className="h-14 w-auto sm:h-14 md:h-14 lg:h-14 xl:h-20"
            />
          </div>
          <div className="flex max-sm:hidden flex-1 items-center sm:items-stretch sm:justify-center">
            <div className="hidden sm:hidden  md:hidden lg:block  sm:ml-6 ">
              <div className="flex space-x-4 items-center">
                {/* Main Categories */}
                {categories.main?.map((category) => (
                  <button
                    key={category.category}
                    aria-current={
                      category.category === location.pathname
                        ? "page"
                        : undefined
                    }
                    className={`
                      rounded-md px-1 sm:px-1 md:px-0 lg:px-2 xl:px-4 text-sm sm:text-base md:text-sm lg:text-sm xl:text-lg font-semibold text-black 
                      ${location.pathname === (category.route || `/category/${category._id}`)
                        ? "!bg-gray-200 !text-black px-2 py-1"
                        : "group relative w-max"
                      }
                    `}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category.category}
                    <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-black group-hover:w-full"></span>
                  </button>
                ))}
                {/* More Dropdown */}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <MenuButton className="inline-flex  font-semibold items-center text-sm sm:text-base md:text-sm lg:text-sm xl:text-lg  w-full justify-center gap-x-1.5 rounded-md px-3 py-2 shadow-xs">
                      More
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 size-5  font-semibold"
                      />
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <div className="py-2">
                      {categories.more?.map((category) => (
                        <MenuItem key={category.category}>
                          <button
                            onClick={() => handleCategoryClick(category)}
                            className="block w-full px-4 py-2 text-left text-gray-900 hover:bg-gray-100"
                          >
                            {category.category}
                          </button>
                        </MenuItem>
                      ))}
                      <MenuItem>
                        <a
                          href="/about"
                          className="block px-4 py-2 hover:bg-gray-100 text-gray-900"
                        >
                          About US
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 text-gray-900"
                        >
                          Events
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 text-gray-900"
                        >
                          Podcast
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="/blog"
                          className="block px-4 py-2 hover:bg-gray-100 text-gray-900"
                        >
                          Newsletters
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 text-gray-900"
                        >
                          Sponsored
                        </a>
                      </MenuItem>
                      <MenuItem>
                        {user ? (
                          <a
                            onClick={handleLogout}
                            className="block px-4 py-2 cursor-pointer hover:bg-red-50 text-red-500 font-medium"
                          >
                            Log Out
                          </a>
                        ) : (
                          <span className="block px-4 py-2 text-gray-400 cursor-not-allowed">
                            Log Out
                          </span>
                        )}
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </div>
            </div>
            <Transition appear show={isLogoutDialogOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-50"
                onClose={() => setIsLogoutDialogOpen(false)}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Confirm Logout
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Are you sure you want to logout?
                          </p>
                        </div>

                        <div className="mt-4 flex justify-end space-x-3">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none"
                            onClick={() => setIsLogoutDialogOpen(false)}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none"
                            onClick={confirmLogout}
                          >
                            Logout
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {user ? (
              <div className="flex items-center">
                <div
                  className="bg-[#4360ac] text-white hidden sm:hidden md:hidden lg:flex rounded-full h-12 w-12 items-center justify-center cursor-pointer hover:bg-[#31478c] transition"
                  onClick={() => navigate("/profile")}
                >
                  {user.firstName.charAt(0).toUpperCase()}
                  {user.lastName.charAt(0).toUpperCase()}
                </div>
              </div>

            ) : (
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="bg-gradient-to-r from-[#4360ac] to-[#2bace2] hover:scale-105 hover:from-[#2bace2] hover:to-[#4360ac] transition-all duration-300 ease-in-out  text-white hidden sm:hidden md:hidden lg:block font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                LOGIN
              </button>
            )}
            <Menu as="div" className="relative ml-3">
              <div>
                <DisclosureButton className="group relative md:block lg:hidden inline-flex items-center justify-center rounded-md  text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-8 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-8 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel>
        <div className="space-y-1 px-2 pb-3 pt-2 grid gap-2">
          {categories.main.map((category) => (
            <>
              <button
                key={category.category}
                as="a"
                aria-current={
                  category.category === location.pathname ? "page" : undefined
                }
                className={`
                  text-black w-36 text-start px-2  block rounded-md  py-2 text-base font-medium
                   ${location.pathname === (category.route || `/category/${category._id}`)
                    ? "!bg-gray-200 !text-black px-2 py-1"
                    : "group relative w-max"
                  }
                `}
                onClick={() => handleCategoryClick(category)}
              >
                {category.category}
              </button>
            </>
          ))}
          <Menu as="div" className="relative inline-flex group">
            <div>
              <MenuButton className="inline-flex items-center text-base sm:text-base md:text-sm lg:text-sm xl:text-lg font-medium  w-full justify-center gap-x-1.5 rounded-md px-3 py-2   shadow-xs   ">
                More
                <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 " />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 left-16 top-5 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-2">
                {categories.more?.map((category) => (
                  <MenuItem key={category.category}>
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className="block w-full px-4 py-2 text-left text-gray-900 hover:bg-gray-100"
                    >
                      {category.category}
                    </button>
                  </MenuItem>
                ))}
                <MenuItem>
                  <a
                    href="/about"
                    className="block px-4 py-2  hover:bg-gray-100 text-gray-900 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    About US
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-900 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Events
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2  hover:bg-gray-100 text-gray-900 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Podcast
                  </a>
                </MenuItem>
                <form method="POST">
                  <MenuItem>
                    <button
                      type="submit"
                      className="block w-full hover:bg-gray-100  px-4 py-2 text-left text-gray-900 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Podcast
                    </button>
                  </MenuItem>
                </form>
                <MenuItem>
                  {user ? (
                    <a
                      onClick={handleLogout}
                      className="block px-4 py-2 cursor-pointer hover:bg-red-50 text-red-500 font-medium data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Log Out
                    </a>
                  ) : (
                    <span className="block px-4 py-2 text-gray-400 cursor-not-allowed">
                      Log Out
                    </span>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
          {user ? (
            <div className="flex pl-2 items-center">
              <div className="bg-[#4360ac] text-white rounded-full h-10 w-10 flex items-center justify-center">
                {user.firstName.charAt(0)}
                {user.lastName.charAt(0)}
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-[#4360ac] to-[#2bace2] hover:scale-105 hover:from-[#2bace2] hover:to-[#4360ac] transition-all duration-300 ease-in-out  text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-24"
            >
              LOGIN
            </button>
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
