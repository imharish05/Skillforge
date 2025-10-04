import React, { useContext, useEffect, useState } from "react";
import "../Styles/CourseDetails.css";
import { UserContext } from "../App";
import { Link, useParams } from "react-router-dom";
import axios from "axios";



const CourseDetails = () => {

  let { API_URL , course, setCourse,courseItems, setCourseItems,setCartCourseItem,userDetails,cartSuccess} = useContext(UserContext);

  let { id } = useParams();


  console.log(userDetails);
  

  const courseDetails = useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(API_URL);

        setCourseItems(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchCourse();
  }, [API_URL]);

  useEffect(() => {
    if (courseItems.length > 0) {
      let courseItem = courseItems.filter((item) => item.link === id);
      setCourse(courseItem || null);
    }
  }, [courseItems, id]);
  
  
  return (
    <div className="course-wrapper d-flex align-items-center justify-content-center">

      {course.length <= 0 ? <p className="h1">No Item To Display</p>
      :
      course.map((item) => {
        return(
        <div className="container my-lg-5 shadow-lg" key={item.id}>
          <div className="row align-items-center bg-white rounded shadow p-4">
            <div className="col-md-6">
              <h2>
                <span className="h1">{item.head}</span>
              </h2>
              <p className="text-muted mt-3">{item.para}</p>

              <div className="d-flex mt-3">
                <div className="me-4">
                  ⭐ <strong>{item.rating}</strong>
                  <div className="small text-muted">average course rating</div>
                </div>
                <div className="me-4">
                  <strong>{item.practice}</strong>
                  <div className="small text-muted">practice exercises</div>
                </div>
                <div>
                  <strong>{item.hours}</strong>
                  <div className="small text-muted">hours of content</div>
                </div>
              </div>

              <div className="d-flex align-items-center mt-4">

                {userDetails ? <Link to="/cart" className="btn btn-primary me-3" onClick={() => {setCartCourseItem([...course]),cartSuccess()}}>Get started</Link> : <Link to="/profile" className="btn btn-danger me-3">Sign Up</Link>}

                <div>
                  <h5 className="mb-0 text-dark">
                    ₹{item.price}{" "}
                    <span className="text-muted text-decoration-line-through">
                      ₹{item.fixedPrice}
                    </span>
                  </h5>
                </div>
              </div>

              <p className="text-muted small mt-2">
                👥 {item.users} learners already enrolled
              </p>
            </div>

            <div className="col-md-6 text-center">
              <div
                className="rounded"
                style={{
                  background: item.bg,
                }}
              >
                <img
                  src={item.img} 
                  alt="Course"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>)
      })}
      
    </div>
  );
};

export default CourseDetails;
