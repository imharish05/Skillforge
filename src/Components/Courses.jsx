import React, { useContext, useEffect, useState } from "react";
import "../Styles/Courses.css";
import { Link } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";
import { UserContext } from "../App";
import axios from "axios";

const Courses = () => {

  let {API_URL,courseData,setCourseData,allCourse,setAllCourse,filteredItems} = useContext(UserContext)
  
  
  
  return (
    <div className="Courses Container-fluid d-flex align-items-center w-100">
      <section className="popular-courses container">
        <div className="d-flex align-items-center flex-column justify-content-center align-items-end gap-4 pt-4">
          <p className="h1 fw-600">
            Ready to reimagine your career?
          </p>
          <p className="h6 text-muted text-center">Join Career Accelerators through Skill Forge Personal Plan and get the structure, skills, and real-world experience that makes you an exceptional candidate.</p>
        </div>
        <div className="row pt-5 d-flex align-items-center justify-content-center gap-3 gap-lg-0 flex-wrap">
          
        {filteredItems.length==0 ?  <p className="h1 text-center">No Course To Display</p> 
            : filteredItems.map((item)=>{
              return(
            <div className="col-lg-4 col-md-10 mb-3" key={item.id}>
            <Link
              to={`/courses/${item.link}`}
              className="text-decoration-none"
            >
              <div className="card rounded-2">
                <img src={item.img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title fw-bold pb-2">
                    {item.head}
                  </h5>
                  <div className="card-text d-flex">
                    <div className="stars border rounded-2 px-2 py-1 me-2 text-center">
                      <IoStarSharp className="mb-1" /> {item.rating}
                    </div>
                    <div className="ratings border rounded-2 px-2 py-1  me-2">
                      {item.like}K ratings
                    </div>
                    <div className="ratings border rounded-2 px-2 py-1  me-2">
                      {item.hours} Hours
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            </div>
              )
            })
          }
        </div>
      </section>
    </div>
  );
};

export default Courses;
