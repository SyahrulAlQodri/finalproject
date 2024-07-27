import useAuth from "../../../hooks/useAuth";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "../../../redux/slice/userLoggedSlice";

export default function Navbar() {
  const { userLog } = useAuth();
  const navigate = useNavigate();
  const [navStyle, setNavStyle] = useState("");
  const user = useSelector((state) => state.userLogged.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (localStorage.getItem("token")) {
      getUserLogged();
    }
  }, []);

  const logout = async () => {
    await userLog("logout");
    dispatch(clearUser());
    navigate("/login");
  };

  const handleScroll = () => {
    if (window.scrollY >= 100 && window.scrollY < 500) {
      setNavStyle("hide");
    } else if (window.scrollY >= 500) {
      setNavStyle("scrolled");
    } else {
      setNavStyle("show");
    }
  };

  const getUserLogged = () => {
    if (localStorage.getItem("token")) {
      userLog("user", (res) => dispatch(setUser(res)));
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md ${navStyle}`}>
      <div className="container flex items-center justify-between px-6 py-3 mx-auto">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-black">Amighty Travel</h2>
        </div>

        <button
          className="flex items-center justify-center p-2 text-gray-600 lg:hidden"
          type="button"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`lg:flex lg:items-center lg:justify-center flex-grow ${isNavOpen ? 'block' : 'hidden'}`} id="navbarSupportedContent">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className={`text-black hover:text-gray-600 ${pathname === "/" ? "font-bold" : ""}`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/activity"
                className={`text-black hover:text-gray-600 ${pathname === "/activity" ? "font-bold" : ""}`}
              >
                Activity
              </Link>
            </li>
            <li>
              <Link
                to="/promo"
                className={`text-black hover:text-gray-600 ${pathname === "/promo" ? "font-bold" : ""}`}
                aria-disabled="true"
              >
                Promo
              </Link>
            </li>
            {user?.role === "admin" && (
              <li>
                <Link
                  to="/dashboard/user"
                  className={`text-black hover:text-gray-600 ${pathname.startsWith("/dashboard") ? "font-bold" : ""}`}
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          {user?.name ? (
            <div className="relative">
              <button
                className="flex items-center text-black hover:text-gray-600"
                type="button"
                onClick={toggleDropdown}
              >
                <img
                  src={user.profilePictureUrl}
                  alt={user.name}
                  className="mr-2 rounded-full w-9 h-9"
                />
                <span className="font-semibold">{user.name}</span>
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-0 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-black rounded-md hover:bg-gray-100"
                    >
                      <i className="mr-2 bi bi-person-circle"></i> Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      className="block w-full px-4 py-2 text-left text-black rounded-md hover:bg-gray-100"
                    >
                      <i className="mr-2 bi bi-box-arrow-in-right"></i> Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="px-4 py-2 text-white transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-700">
                <i className="mr-2 bi bi-person-fill"></i> Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}