import React, { useContext, useEffect, useState } from "react";
import "../Styles/Cart.css";
import { UserContext } from "../App";
import EmptyCart from "../assets/EmptyCart1.png";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

const Cart = () => {



  let { courseCount, setCourseCount, cartShow, setCartShow,setCartCount,Price, setPrice,discountPrice, setDiscountPrice,discountPercentage, setDiscountPercentage,coupons, setCoupons,inputMsg, setInputMsg,couponInput, setCouponInput,cartDelete} =useContext(UserContext);

  // Coupon Code
  let couponCode = [
    { code: "SAVE10", type: "percent", value: 10 },
    { code: "FLAT50", type: "fixed", value: 50 },
    { code: "WELCOME15", type: "percent", value: 15 },
    { code: "BLACKFRIDAY50", type: "fixed", value: 50 },
  ];

  const couponCheck = () => {

    const coupon = couponCode.find((item) => item.code == couponInput);

    if (coupon) {
      let newPrice;

      if(coupon.type === "percent") {
        newPrice = Price - (Price * coupon.value) / 100;
      }
      else if (coupon.type === "fixed") {
        newPrice = Price - coupon.value;
      }

      setPrice(Math.max(newPrice,0));

      setInputMsg(false)

    }
    else {
      setInputMsg(true);
    }

    setCouponInput("");
  };



  useEffect(() => {
    if (cartShow.length > 0) {
      let TotalPrice = cartShow.reduce((acc, item) => acc + item.price, 0);
      setPrice((preVal) => (preVal = TotalPrice));

      let totalDiscount = cartShow.reduce(
        (acc, item) => acc + item.fixedPrice,
        0
      );

      setDiscountPrice((preVal) => (preVal = totalDiscount));
    }
  }, [cartShow]);

  useEffect(() => {
    if (cartShow.length > 0) {
      let totalPercentage = (Price / discountPrice) * 100;
      let discount = Math.ceil(100 - totalPercentage);
      setDiscountPercentage(discount);
    }
  }, [Price, discountPrice]);



  // ItemDelete

  const itemDelete = (id) => {
    let newItem = cartShow.filter((item) => item.id !== id)
    setCartShow(newItem)
    setCourseCount((preVal) => preVal-1);
    setCartCount((preVal) => preVal-1)
  }

  return (
    <div className="Cart">
      <div className="container">
        <div className="row">
          <p className="h1">Shopping Cart</p>
        </div>
        <div className="row">
          <p className="h6 text-muted pt-4">{courseCount} Courses in Cart</p>
        </div>

        {cartShow.length <= 0 ? (
          <div className="EmptyCart d-flex align-items-center justify-content-around flex-column">
            <img src={EmptyCart} alt="" className="img-fluid" id="emptyCart" />
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
        ) : (
          <div className="CartDetails row flex-column-reverse flex-lg-row mt-2 py-2">
            <div className="col-lg-8 content-Wrapper">
              {cartShow.map((item) => (
                <div
                  className="content d-lg-flex justify-content-between align-items-center mt-2 py-3"
                  key={item.id}
                >
                  {/* Image */}
                  <div className="img-content col-lg-4">
                    <img src={item.img} className="img-fluid rounded" alt="" />
                  </div>

                  {/* Course Details */}
                  <div className="course-content px-3">
                    <p className="h4 fw-bold text-break">{item.heading}</p>

                    <div className="rating d-flex align-items-center justify-content-between flex-wrap py-2">
                      <div className="wrapper d-flex align-items-center justify-content-between">
                      <p className="btn py-1 px-1 border fw-bold seller mb-0">
                        {item.seller}
                      </p>
                      <p className="px-2 mb-0">
                        ⭐ {item.rating} ({item.people} ratings)
                      </p>

                      </div>
                      <button className="rounded-2 p-1" id="deleteBtn" onClick={() => {itemDelete(item.id),cartDelete()}}><FaRegTrashCan className="mb-1"/> Remove Course</button>
                    </div>


                    <div className="card-text d-flex flex-wrap">
                      <div className="border rounded-2 px-2 py-1 me-2">
                        {item.hours} Total Hours
                      </div>
                      <div className="border rounded-2 px-2 py-1 me-2">
                        397K ratings
                      </div>
                      <div className="border rounded-2 px-2 py-1 me-2">
                        {item.lectures} Lectures
                      </div>
                    </div>
                    
                  </div>
                  <hr />
                </div>
              ))}
            </div>

            {/* Checkout */}
            <div className="col-lg-4 CheckOut shadow">
              <p className="h5 text-muted">Total : </p>
              <p className="h2" id="price">
                ₹ {Math.ceil(Price)}
              </p>
              <p className="text-decoration-line-through h6 text-danger">
                {" "}
                ₹ {discountPrice}
              </p>
              <p className="h6"> {discountPercentage}% off</p>
              <Link to="/" className="btn px-3 py-2 border" id="checkOut-btn">
                Proceed to Checkout <FaArrowCircleRight className="ms-1" />
              </Link>
              <p className="h6 pt-2 text-muted">You Won't be Charged yet</p>
              <hr />

              {coupons ? (
                <div className="d-flex flex-column pb-4">
                  <p className="h6 fw-bold">Promotions</p>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      className="rounded-1 py-1 ps-2"
                      placeholder="Enter Coupon Code"
                      value={couponInput}
                      onChange={(e) =>
                        setCouponInput(e.target.value.toUpperCase().trim())
                      }
                    />
                    <button
                      type="submit"
                      className="ms-2 px-3 py-1 rounded-1"
                      id="couponApplyBtn"
                      onClick={() => {
                        couponCheck();
                      }}
                    >
                      Apply
                    </button>

                    {inputMsg === true && (<p className="text-danger">The coupon code entered is not valid for this course. Perhaps you used the wrong coupon code?</p>)}
                    {inputMsg === false && (<p className="text-danger">Coupon  Applied✨!</p>)}


                  </form>
                </div>
              ) : (
                <div className="coupons-btn d-flex align-items-center justify-content-center py-2">
                  <button
                    className="w-75 py-2 rounded-2 h6"
                    id="coupon-btn"
                    onClick={() => setCoupons((preVal) => !preVal)}
                  >
                    Apply Coupons
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
