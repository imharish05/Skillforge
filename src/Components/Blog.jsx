import React, { useContext } from "react";
import "../Styles/Blog.css";

import { Link, useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { UserContext } from "../App";
import { IoStarSharp } from "react-icons/io5";

import Trainer1 from "../assets/Trainers/Trainer1.jpg";
import Trainer2 from "../assets/Trainers/Trainer2.jpg";
import Trainer3 from "../assets/Trainers/Trainer3.jpg";
import Trainer4 from "../assets/Trainers/Trainer4.jpg";
import Trainer5 from "../assets/Trainers/Trainer5.jpg"
import Trainer6 from "../assets/Trainers/Trainer6.jpg"



import Newsletter from "../assets/Newsletter2.png"



const Blog = () => {


  const testimonials = [
  { name: "Travis", role: "Student", img: Trainer1, text: "I really enjoy the hands-on nature of the courses. It makes for a very economical and productive learning experience. The access to instructors after the class is a great benefit as well. I always plan for a challenging project after the class to take advantage of their guidance!" },

  { name: "Stella", role: "Student", img: Trainer2, text: "I had a wonderful experience with Crystal Reports at the beginning of the week and now I feel comfortable enough to create basic to intermediate reports all on my own. Joel was a wonderful instructor and provided real-life feedback and training to better assist me with learning the new skills" },

  { name: "Stephen Kim", role: "Student", img: Trainer3, text: "I have been working with the course content for almost 10 years, and was still able to learn something new. Ourinstructor was clear and concise and was careful not to go off topic even when we students could very easily do that. He kept us on track and ON TIME! Awesome!" },

  { name: "Aminullah", role: "Student", img: Trainer4, text: "I value the interactive approach of these courses. They offer a practical and time-efficient learning experience. Access to instructors after class is very helpful. I often start small projects after each session, which allows me to apply the concepts and gain confidence in real-world scenarios." },

  { name: "Suhani", role: "Data Analyst", img: Trainer5, text: "I really appreciate the interactive nature of these courses. They provide a practical and efficient learning experience, with instructor support available even after class. I usually work on small projects following each lesson, which helps to build confidence in real-world situations." },

  { name: "Michael", role: "Student", img: Trainer6, text: "I enjoy the hands-on approach of these courses. They offer a practical and efficient way to learn. I like to work on small projects after each session, which helps me apply the lessons and gain confidence in using the skills in real situations." },
];


    const groupedTestimonials = testimonials.reduce((group,item,index)=>{
    const groupIndex = Math.floor(index / 3)
        if(!group[groupIndex]) group[groupIndex] = []
        group[groupIndex].push(item)
        return group;
      },[])

  let { blogContent, setBlogContent,handleNewsLetter,newsLetterInput,setnewsLetterInput,newsEmail,setNewsEmail,lettercommend,setLettercommend
    
  } = useContext(UserContext);

  return (
    <div className="Blog">
      <div className="container-fluid">
        <p className="h1 text-center py-3">From the SkillForge Blog</p>
        <p className="h5 py-3 text-center">
          Learn, explore, and stay updated with our latest tutorials and tips
        </p>
      </div>

      <section className="container">
        <div className="row d-flex align-items-center justify-content-evenly py-3">
          {blogContent.map((items, index) => {
            return (
              <div className="col-lg-4 col-sm-10 py-3" key={index}>
                <div className="card">
                  <img src={items.img} alt="" className="card-img-top" />
                  <div className="card-body">
                    <p className="card-title h5">{items.heading}</p>
                    <p className="card-text">{items.sample}</p>
                    <Link
                      to={`/blog/${items.route}`}
                      className="text-decoration-none blogcontent"
                    >
                      Read More <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="testimonials container">
        <p className="h2 text-center py-3">What Our Students Say ?</p>
        <p className="h5 text-center text-muted">
          Discover a world of knowledge and opportunities with our online
          education platform pursue a new career.
        </p>

<div id="testimonialCarousel" className="carousel slide py-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          {groupedTestimonials.map((slide,index)=>(
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key = {index}>
              <div className="row">
                {slide.map((item,index)=>(
                  <div className="col-md-4 py-md-5 py-3" key={index}>
                    <div className="stars d-flex align-items-center justify-content-center">
                      <IoStarSharp className="mx-1"/>
                      <IoStarSharp className="mx-1"/>
                      <IoStarSharp className="mx-1"/>
                      <IoStarSharp className="mx-1"/>
                      <IoStarSharp className="mx-1"/>
                    </div>
                    <p className="py-3 text-center">{item.text}</p>
                    <div className="row d-flex align-items-center justify-content-center">
                      <div className="col-2">
                        <img src={item.img} alt="TrainerImg"  className="img-fluid rounded-circle"/>
                      </div>
                      <div className="col-5">
                        <p className="h5">{item.name}</p>
                        <p className="h6 text-muted">{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

</div>
            {/* Controls */}
  <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

        </div>

      </section>



      {/* NewsLetter */}

            <section className="newsletter container-fluid my-5">
              <div className="row d-flex align-items-center justify-content-center flex-wrap py-4">
                <div className="col-lg-6">
                  <img src={Newsletter} alt="newslette
                  " className="img-fluid"/>
                </div>
                <div className="col-lg-4 col-md-8 py-2">
                  <p className="h1 text-white">Subscribe to Newsletter!</p>
                  <p className="h5 text-white py-3 small">Subscribe to get latest updates and information.</p>
                  <form className="input d-flex flex-wrap gap-2 rounded-4" id="newsletterForm" onSubmit={(e) =>{handleNewsLetter(e)}}>
                    <input type="email" className="py-2 ps-3 flex-grow-1 rounded-4 border-0" required value={newsLetterInput} onChange={(e) =>{setnewsLetterInput(e.target.value),setLettercommend(false)}} placeholder="Enter Your Email"/>
                    <button className="py-2 px-2 rounded-4 ms-3 bg-primary text-white border-0">SUBSCRIBE</button>
                    <div className="commend">
                    </div>
                  </form>
                    {lettercommend ? <p className="mt-2 fw-bold" id="letterCommand">Maill Successfully Submitted</p> : ""}
                </div>
              </div>
            </section>
    </div>
  );
};

export default Blog;
