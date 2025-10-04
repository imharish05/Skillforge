import React, { useContext, useEffect, useState } from "react";
import "../Styles/Profile.css"; // your CSS file
import { UserContext } from "../App";
import ProfileImg from "../assets/Profile3.png";
import { FaAt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { LuEyeClosed } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import userProfile from "../assets/Profile1.png";
import EmptyCart from "../assets/EmptyCart2.png";
import DashEmptyCart from "../assets/DashboardCart.png";
import { Link } from "react-router-dom";
import { BiPurchaseTag } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";

function Profile() {
  let storedUsers = [];

  let id = null;
  
  const [editorId, setEditorId] = useState(null);
  
  const [editBtnText, setEditBtnText] = useState(false);
  
  let users = JSON.parse(localStorage.getItem("UserCredientials")) || [];

  const [updateStyle,setUpdateStyle] = useState(false)
  
  


  const {updateToast,cartDelete,
    newName,
    setNewName,
    newEmail,
    setnewEmail,
    newPwd,
    setnewPwd,
    userMail,
    setUsermail,
    userName,
    setUserName,
    password,
    setPassword,
    ConfirmPassword,
    setConfirmPassword,
    loginPara,
    setLoginPara,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setshowConfirmPassword,
    pwdCheckError,
    setpwdCheckError,
    loginEmail,
    setLoginEmail,
    loginPwd,
    setLoginPwd,
    loginPwdCheckError,
    setLoginPwdCheckError,
    userDetails,
    setUserDetails,
    courseProfileView,
    setcourseProfileView,
    cartShow,
    purchaseCount,
    cartCount,
    setPurchaseCount,
    courseCount,
    setCourseCount,
    setCartShow,
    setCartCount,
    updateStatus,setUpdateStatus,
  } = useContext(UserContext);



  let dashboardCart = cartShow[cartShow.length-1];



  const handlePassword = () => {
    setShowPassword((preVal) => !preVal);
  };

  const handleConfirmPassword = () => {
    setshowConfirmPassword((preVal) => !preVal);
  };

  // SignUp check

  const handlePwdCheck = () => {
    const pattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (courseProfileView && editorId !== null) {
      if (!pattern.test(newPwd)) {
        setpwdCheckError(
          "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"
        );
        setUpdateStatus("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character")
        return;
      }
      let UpdatedUser = users.map((item) =>
        item.id === editorId
          ? { ...item, name: newName, email: newEmail, password: newPwd }
          : item
      );
      localStorage.setItem("UserCredientials", JSON.stringify(UpdatedUser));
      
      setUpdateStatus("");
      updateToast();
      setUpdateStyle(true)
      setLoginEmail(newEmail);
      setLoginPwd(newPwd);
    } else {
      if (!pattern.test(password)) {
        setpwdCheckError(
          "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"
        );
        return;
      }
      if (password !== ConfirmPassword) {
        setpwdCheckError("Passwords do not match");
        return;
      }
      AddnewUser();
      setpwdCheckError("Signed in Successfully");
      
    }
  };

  // Adding New User
  const AddnewUser = () => {
    id = users.length + 1;

    let newUser = {
      id: id,
      name: userName,
      email: userMail,
      password: password,
    };

    const exists = users.some((item) => item.email === newUser.email);

    if (exists) {
      setpwdCheckError("Email already Regiestered");
      return;
    }

    users.push(newUser);

    localStorage.setItem("UserCredientials", JSON.stringify(users));
  };


  
  // Handle login pwd check

  const handleLogin = () => {
    const pattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!pattern.test(loginPwd)) {
      setLoginPwdCheckError(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"
      );

      return;
    } else {
      let existingUser = users.some(
        (item) => item.email === loginEmail && item.password === loginPwd
      );

      if (existingUser) {
        setLoginPwdCheckError("SuccessFully Logged In");
        setUserDetails(true);
        return;
      } else {
        setLoginPwdCheckError("Invalid UserId or Password");
        return;
      }
    }

    setLoginPwdCheckError("");
  };

  // EditProfile

  const handleEditProfile = (id) => {
    setEditorId(id);

    setcourseProfileView((preVal) => !preVal);
    setEditBtnText((preVal) => !preVal);

    const profileData = users.find((item) => {
      return item.id === id;
    });

    setNewName(profileData.name);
    setnewEmail(profileData.email);
    setnewPwd(profileData.password);
  };

  //LogOut

  const handleLogout = () =>{
    setLoginEmail("")
    setLoginPwd("")
    setUserDetails(false)
    setLoginPwdCheckError("")
  }


  
  const deleteItem = (id) =>{

    let newItems = cartShow.filter((item) => item.id !== id)
    setCartShow(newItems)
    setCartCount((preVal) => preVal-1)

    setCourseCount((preVal) => preVal-1)
  }
  

  return userDetails ? (
    <div className="user-Profile container-fluid w-100 d-flex align-items-start justify-content-center pt-lg-5">
      <div className="row w-100">
        {/* Profile */}
        <div className="col-lg-3 ">
          <div className="profile-wrapper d-flex flex-column align-items-center justify-content-evenly shadow rounded-3">
            <p className="h2">Profile</p>
            <img
              src={userProfile}
              alt=""
              className="img-fluid border border-danger"
              id="profilePic"
            />
            {(() => {
              const loggedUser = users.find((item) => item.email == loginEmail);

              if (loggedUser) {
                return (
                  <div
                    className="userData text-center py-2"
                    key={loggedUser.id}
                  >
                    <p className="h5 fw-bold">{loggedUser.name}</p>
                    <p className="h6 py-1">{loggedUser.email}</p>
                    <button
                      onClick={() => {
                        handleEditProfile(loggedUser.id);
                      }}
                      className="p-1 rounded-3"
                      id="Edit-btn"
                    >
                      {editBtnText ? "Go Back" : "Edit Profile"}
                    </button>

                    <button className="text-white p-1 rounded-3 ms-3 border-0" style={{background : "red"}} onClick={() =>{handleLogout()}}>Log Out</button>
                  </div>
                );
              }
            })()}
          </div>
        </div>

        {/* Profile Edit and Course Data */}

        <div className="col-lg-6">
          {courseProfileView ? (
            // Profile Data
            <div className="ProfileView d-flex flex-column align-items-center justify-content-center shadow rounded-3 py-2 shadow">
              <p className="h2">Edit Profile</p>
              <form
                className="form d-flex flex-column w-75"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="mb-3">
                  <label htmlFor="newUserName" className="mb-1">
                    Enter name
                  </label>
                  <div className="inputForm d-flex align-items-center border border-1 border rounded-2 p-2">
                    <FaAt className="me-2" />
                    <input
                      type="text"
                      className="input border-0"
                      placeholder="Enter your Email"
                      id="newUserName"
                      value={newName}
                      onChange={(e) => {setNewName(e.target.value),setUpdateStatus("")}}
                    />
                  </div>
                </div>
                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="newUserEmail" className="mb-1">
                    Enter Email
                  </label>
                  <div className="inputForm d-flex align-items-center border border-1 border rounded-2 p-2">
                    <FaAt className="me-2" />
                    <input
                      type="email"
                      required
                      className="input border-0"
                      placeholder="Enter your Email"
                      id="newUserEmail"
                      value={newEmail}
                      onChange={(e) =>{
                        setnewEmail(e.target.value.trim().toLowerCase()),setUpdateStatus("")
                      }
                      }
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="loginUserPassword" className="mb-1">
                    Password
                  </label>
                  <div className="inputForm d-flex align-items-center border border-1 border rounded-2 p-2">
                    <FaLock className="me-2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      className="input border flex-grow-1 border-0"
                      placeholder="Enter your Password"
                      id="loginUserPassword"
                      value={newPwd}
                      onChange={(e) => setnewPwd(e.target.value.trim())}
                    />

                    {showPassword ? (
                      <LuEyeClosed onClick={() => handlePassword()} />
                    ) : (
                      <FaEye onClick={() => handlePassword()} />
                    )}
                  </div>

                  {/* Login */}
                  <p style={{color : "red"}}>{updateStatus}</p>
                </div>

                <button
                  className="button-submit mb-3 ms-3 bg-black text-white p-1 rounded-3"
                  type="submit"
                  onClick={() => handlePwdCheck()}
                >
                  Update
                </button>
              </form>
            </div>
          ) : (
            //  Course Details
            <div className="CourseView shadow d-flex flex-column align-items-center justify-content-center rounded-3 py-2 pb-3">
              <div className="d-lg-flex justify-content-center align-items-center gap-4 mb-3">
                <p className="h2">My Cart</p>
              </div>
              {cartShow.length > 0 ? (
                <div
                  id="myCarousel"
                  className="carousel slide d-flex flex-column align-items-center justify-content-center"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {/* my Cart */}
                    {cartShow.length > 0 &&
                      cartShow
                        .reduce((groups, item, index) => {
                          const groupIndex = Math.floor(index / 3);
                          if (!groups[groupIndex]) groups[groupIndex] = [];
                          groups[groupIndex].push(item);
                          console.log(groups);
                          
                          return groups;
                        }, [])
                        .map((group, groupIndex) => (
                          <div
                            key={groupIndex}
                            className={`carousel-item ${
                              groupIndex === 0 ? "active" : ""
                            }`}
                          >
                            <div className="d-flex align-items-start justify-content-between px-2">
                              {group.map((course, i) => (
                                <div key={i} className="col-4 px-2">
                                  <div className="card border rounded-3 shadow-sm">
                                    <img
                                      src={course.img}
                                      alt=""
                                      className="card-img-top rounded-top-3"
                                    />
                                    <div className="card-body p-2">
                                      <h6 className="card-title">
                                        {course.heading}
                                      </h6>

                                      <div className="list d-flex justify-content-between align-items-center">
                                      <p className="small fw-bold text-bold mb-0">
                                        ₹{course.price}
                                      </p>
                                      <button className="rounded-2 card-btn" id="deleteBtn" onClick={() => {deleteItem(course.id,cartDelete())}}><FaRegTrashCan className="mb-1"/> Remove</button>

                                      </div>


                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                  </div>

                  {/* Controls */}
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>

                  <Link to="/cart" className="btn border bg-primary text-white">View Cart</Link>
                </div>
              ) : (
                <div className="EmptyCart d-flex align-items-center justify-content-around flex-column">
                  <img
                    src={EmptyCart}
                    alt=""
                    className="img-fluid"
                    id="emptyCart-Profile"
                  />
                  <p className="text-muted d-md-h5">
                    Your cart is empty. Grab a course!
                  </p>
                  <Link
                    to="/courses"
                    className="text-decoration-none p-2 bg-primary text-white mt-2 rounded-2"
                  >
                    Keep Shopping
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Dashboard */}
        <div className="col-lg-3">
          <div className="dashboard-wrapper d-flex flex-column align-items-center rounded-3 py-2 shadow">
            <p className="h2">My DashBoard</p>

            <div className="cart-course w-100">
              <div className="purchase d-flex align-items-center py-2">
                <BiPurchaseTag className="ms-2" />
                <p className="mb-0 ps-2">{purchaseCount} Courses Purchased</p>
              </div>
              <div className="purchase d-flex align-items-center py-2">
                <FaShoppingCart className="ms-2" />
                <p className="mb-0 ps-2">{cartCount} Course In Cart</p>
              </div>

              <div className="CartDetail pt-3">
                <p className="h6 text-center fw-bold">My Cart</p>

                {cartShow.length > 0 ? (
                  <div className="card p-2 border-0">
                    <img
                      src={dashboardCart.img}
                      alt=""
                      className="img-top rounded-3"
                    />
                    <div className="card-body p-1">
                      <p className="card-title fw-bold">
                        {dashboardCart.heading}
                      </p>

                      <div className="dashboardbtn d-flex align-items-center justify-content-around">
                        <p className="card-link btn border mb-0 bg-primary">
                          <Link
                            to="/cart"
                            className="text-decoration-none text-white"
                          >
                            <FaShoppingCart className="me-2 mb-1" />
                            View Cart
                          </Link>
                        </p>
                        <p
                          className="card-link btn border mb-0"
                          id="checkOutBtn"
                        >
                          <Link
                            to="/cart"
                            className="text-decoration-none text-white"
                          >
                            <BsCartCheckFill className="me-1 mb-1" />
                            Proceed to Checkout
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="emptyDashboardCart card border-0">
                    <img src={DashEmptyCart} alt="" className="img-top px-5" />

                    <p className="card-title text-center fw-bold">
                      No Items yet{" "}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    // User Login & SignUp
    <div className="login-page d-flex align-items-center justify-content-center w-100 pt-lg-4">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row shadow rounded-5 overflow-hidden" id="form-wrapper">
          {/* Left image */}
          <div className="col-lg-6 d-lg-block d-none px-0">
            <img
              src={ProfileImg}
              alt="Profile"
              className="img-fluid"
              id="LoginImg"
            />
          </div>

          {/* Right form */}
          <form
            className="col-lg-6 px-0 d-flex align-items-center align-items-center justify-content-around flex-column"
            onSubmit={(e) => e.preventDefault()}
          >
            {loginPara ? (
              <p className="h1 px-4 align-self-lg-start py-3" id="helloText">
                Welcome Back
              </p>
            ) : (
              <p className="h1 px-4 align-self-lg-start py-2" id="helloText">
                Welcome Aboard!
              </p>
            )}

            {loginPara ? (
              // Login
              <div className="form d-flex flex-column w-75">
                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="loginUserEmail" className="mb-1">
                    Email
                  </label>
                  <div className="inputForm d-flex align-items-center border border-1 border rounded-2 p-2">
                    <FaAt className="me-2" />
                    <input
                      type="email"
                      required
                      className="input border-0"
                      placeholder="Enter your Email"
                      id="loginUserEmail"
                      value={loginEmail}
                      onChange={(e) =>
                        setLoginEmail(e.target.value.trim().toLowerCase())
                      }
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="loginUserPassword" className="mb-1">
                    Password
                  </label>
                  <div className="inputForm d-flex align-items-center border border-1 border rounded-2 p-2">
                    <FaLock className="me-2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      className="input border flex-grow-1 border-0"
                      placeholder="Enter your Password"
                      id="loginUserPassword"
                      value={loginPwd}
                      onChange={(e) => setLoginPwd(e.target.value.trim())}
                    />

                    {showPassword ? (
                      <LuEyeClosed onClick={() => handlePassword()} />
                    ) : (
                      <FaEye onClick={() => handlePassword()} />
                    )}
                  </div>

                  {/* Login */}
                  <p className="text-danger">{loginPwdCheckError}</p>
                </div>

                {/* Remember me */}
                <div className="flex-row d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <input type="checkbox" tabIndex={1} id="rememberCheck" />
                    <label className="ms-1" htmlFor="rememberCheck">
                      Remember me
                    </label>
                  </div>
                  <button className="span text-primary text-primary bg-white border-0">
                    Forgot password?
                  </button>
                </div>

                <button
                  className="button-submit mb-3 ms-3 bg-black text-white p-1 rounded-3"
                  type="submit"
                  onClick={() => handleLogin()}
                >
                  Sign In
                </button>

                <p className="p text-center">
                  Don't have an account?{" "}
                  <button
                    className="span text-primary bg-white border-0"
                    onClick={() => setLoginPara((preVal) => !preVal)}
                  >
                    Sign Up
                  </button>
                </p>

                <p className="text-center">Or With</p>

                {/* Social login */}
                <div className="flex-row d-flex align-items-center justify-content-around gap-2 pb-4">
                  <button className="btn google d-flex align-items-center border gap-2">
                    <FaGoogle /> Google
                  </button>

                  <button className="btn apple d-flex align-items-center border gap-2">
                    <FaApple />
                    Apple
                  </button>
                </div>
              </div>
            ) : (
              // SignUp
              <div className="form d-flex flex-column w-75">
                <div className="mb-2">
                  <label htmlFor="SignupUserEmail" className="mb-1">
                    Name
                  </label>
                  <div className="inputForm d-flex align-items-center border border-1 border rounded-2 p-2">
                    <FaUser className="me-2" />
                    <input
                      type="text"
                      required
                      className="input border-0"
                      placeholder="Enter your Name"
                      id="SignupUserEmail"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value.trim())}
                    />
                  </div>
                </div>
                {/* Email */}
                <div className="mb-2">
                  <label htmlFor="SignUpUserEmail" className="mb-1">
                    Email
                  </label>
                  <div className="inputForm d-flex align-items-center border border-1 border rounded-2 p-2">
                    <FaAt className="me-2" />
                    <input
                      type="email"
                      required
                      className="input border-0"
                      placeholder="Enter your Email"
                      id="SignUpUserEmail"
                      value={userMail}
                      onChange={(e) =>
                        setUsermail(e.target.value.trim().toLowerCase())
                      }
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-2">
                  <label htmlFor="SignUpuserPassword" className="mb-1">
                    Password
                  </label>
                  <div className="inputForm d-flex align-items-center border border-1 border rounded-2 p-2">
                    <FaLock className="me-2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      className="input flex-grow-1 border-0"
                      placeholder="Enter your Password"
                      id="SignUpuserPassword"
                      value={password}
                      onChange={(e) => setPassword(e.target.value.trim())}
                    />

                    {showPassword ? (
                      <LuEyeClosed onClick={() => handlePassword()} />
                    ) : (
                      <FaEye onClick={() => handlePassword()} />
                    )}
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label htmlFor="SignUpuserConfirmPwd" className="mb-1">
                    Confirm Password
                  </label>
                  <div className="inputForm d-flex align-items-center border border-1 border rounded-2 p-2">
                    <FaLock className="me-2" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      className="input border flex-grow-1 border-0"
                      placeholder="Re-enter your Password"
                      id="SignUpuserConfirmPwd"
                      value={ConfirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    {showConfirmPassword ? (
                      <LuEyeClosed onClick={() => handleConfirmPassword()} />
                    ) : (
                      <FaEye onClick={() => handleConfirmPassword()} />
                    )}
                  </div>
                  <p className="text-danger">{pwdCheckError}</p>
                </div>

                <button
                  className="button-submit mb-2 ms-3 bg-black text-white p-1 rounded-3"
                  type="submit"
                  onClick={() => handlePwdCheck()}
                >
                  Sign Up
                </button>

                <p className="p text-center mb-2">
                  Already have an account?{" "}
                  <button
                    className="span text-primary bg-white border-0"
                    onClick={() => setLoginPara((preVal) => !preVal)}
                  >
                    Login In
                  </button>
                </p>

                {/* Social login */}
                <div className="flex-row d-flex align-items-center justify-content-around gap-2 pb-4">
                  <button className="btn google d-flex align-items-center border gap-2">
                    <FaGoogle /> Google
                  </button>

                  <button className="btn apple d-flex align-items-center border gap-2">
                    <FaApple />
                    Apple
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
