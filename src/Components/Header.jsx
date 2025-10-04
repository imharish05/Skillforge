import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo4.png";
import "../Styles/Header.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { UserContext } from "../App";

const Header = () => {


  let { cartCount, setCartCount,searchContent,setSearchContent,courseData,setCourseData,allCourse,setAllCourse,handleSearch} = useContext(UserContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollHeight, setscrollHeight] = useState(0);
  const [navBackground, setNavBackground] = useState("inactive");

  //   Nav Background color set

  useEffect(() => {
    const scrollHandler = () => setscrollHeight(window.scrollY);
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (scrollHeight > 10) {
      setNavBackground("active");
    } else {
      setNavBackground("inactive");
    }
  }, [scrollHeight]);

  // Button Toggle
  const toggleBtnHandle = () => {
    setMenuOpen((prev) => !prev);
  };



  // Handle Search
  




  return (
    <nav className={`${navBackground} navbar navbar-expand-lg py-0`}>
      <div className="container-fluid">
        {/* Logo */}
        <div className="Logo">
          <Link
            to="/"
            className="d-flex align-items-center text-decoration-none"
          >
            <img src={Logo} alt="Logo" className="Logo-icon img-fluid" />
          </Link>
        </div>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={menuOpen}
          onClick={toggleBtnHandle}
        >
          {menuOpen ? <GrClose className="icon-rotate" /> : <FaBarsStaggered />}
        </button>

        {/* Collapsible Menu */}
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNav"
        >

          <div className="d-flex flex-column flex-lg-row w-100 align-items-center justify-content-around">

            <div className="col-lg-2 ms-5">
            <form className="d-flex flex-shrink-0 flex-grow-1" role="search" onSubmit={(e) => handleSearch(e)}>
              <input
                className="form-control py-1 flex-grow-1 border border-dark"
                type="search"
                placeholder="Search for anything"
                aria-label="Search"
                value={searchContent}
                onChange={(e) => setSearchContent(e.target.value)}
              />
              <button
                className="btn d-block ms-2 bg-primary text-white border d-lg-none"
                type="submit"
              >
                Search
              </button>
            </form>
            </div>

        <div className="col-6">
          <ul className="navbar-nav w-100 d-flex justify-content-around">

            <li className="nav-item text-center">
              <Link to="/" index className="nav-link" onClick={toggleBtnHandle}>
                Home
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link
                to="/courses"
                className="nav-link"
                onClick={toggleBtnHandle}
              >
                Courses
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link to="/about" className="nav-link" onClick={toggleBtnHandle}>
                About
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link to="/blog" className="nav-link" onClick={toggleBtnHandle}>
                Blog
              </Link>
            </li>
            <li className="nav-item text-center">
              <Link
                to="/contact"
                className="nav-link"
                onClick={toggleBtnHandle}
              >
                Contact
              </Link>
            </li>
          </ul>
            </div>

            <div className="col-2">
          <ul
            className="navbar-nav ms-auto mb-2 mb-lg-0"
            id="NavItem-1"
          >
            <li className="nav-item px-4">
              <Link
                to="/cart"
                className="nav-link cart-list"
                onClick={toggleBtnHandle}
              >
                <FiShoppingCart id="cart-icon" className="icons" />
                <p className="h6 p-1 text-center py-0 mb-1" id="cart-count">
                  {cartCount}
                </p>
              </Link>
            </li>
            <li className="nav-item px-4">
              <Link
                to="/profile"
                className="nav-link"
                onClick={toggleBtnHandle}
              >
                <FaRegUser className="icons" />
              </Link>
            </li>
          </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
