import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import Home1 from "../assets/Home1.png";
import Shape1 from "../assets/shape-1.png"
import Shape2 from "../assets/shape-2.png"
import Shape3 from "../assets/shape-3.png"
import Shape4 from "../assets/shape-4.png"
import { FaArrowCircleRight } from "react-icons/fa";
import FSWD from "../assets/Courses/fswd.webp"
import DigitalMarket from "../assets/Courses/digitalmarketer.webp"
import AI from "../assets/Courses/ai-engineer.webp"
import { IoStarSharp } from "react-icons/io5";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaRegSmileBeam } from "react-icons/fa";
import Newsletter from "../assets/Newsletter2.png"
import { UserContext } from "../App";

// Trainers
import Trainer1 from "../assets/Trainers/Trainer1.jpg"
import Trainer2 from "../assets/Trainers/Trainer2.jpg"
import Trainer3 from "../assets/Trainers/Trainer3.jpg"
import Trainer4 from "../assets/Trainers/Trainer4.jpg"

// Brands
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


// Blog Persons

import Person1 from "../assets/Blog/Person1.jpg"
import Person2 from "../assets/Blog/Person2.jpg"
import Person3 from "../assets/Blog/Person3.jpg"


const Home = () => {

  let [data,setData] = useState([10,20,30])

  
  
  let {newsLetterInput,setnewsLetterInput,newsEmail,setNewsEmail,lettercommend,setLettercommend} = useContext(UserContext)
  
  // Handle News Letter


    const handleNewsLetter = (e) =>{

    e.preventDefault()
    let id = newsEmail.length+1;  
    setnewsLetterInput("")
      let userMail = [...newsEmail,{id : id , user : newsLetterInput}]
      setNewsEmail(userMail)
      localStorage.setItem("Newsletter",JSON.stringify(userMail))
      setLettercommend(true)
  }



  return (
    // Home first Section

    <div className="Home-wrapper">

      {/* Home Wrapper */}
      <section className="Home d-flex align-items-center justify-content-center flex-wrap">
        <div className="home-content row mx-0 d-flex align-items-center justify-content-around">
          <div className="col-lg-5 col-md-10">
            <p className="h1 pt-5 fw-bold">Your Course To Success</p>
            <p className="py-5 h6">
              Unlock your potential with our expert-led online courses. Learn at
              your own pace, gain real-world skills, and take the next step
              toward your career goals. Whether you’re a beginner or looking to
              advance, our interactive lessons and hands-on projects are
              designed to help you succeed.
            </p>
            <button className="rounded-2 bg-primary border-0">
              <Link
                to="/courses"
                className="btn text-decoration-none py-lg-3 py-2 text-white"
              >
                Ready To Get Started
              </Link>
            </button>
          </div>
          <div className="col-lg-5">
            <img src={Home1} alt="Home" className="img-fluid" />
          </div>
        </div>
        <div className="shape">
          <img src={Shape1} alt="shape-1" className="shape-1" />
          <img src={Shape2} alt="shape-2" className="shape-2" />
          <img src={Shape3} alt="shape-3" className="shape-3" />
          <img src={Shape4} alt="shape-4" className="shape-4" />
        </div>
      </section>

      {/* Popular Courses */}
      <section className="popular-courses container">
        <div className="d-lg-flex justify-content-between align-items-end gap-4">
          <p className="h3 fw-600">
            Explore <br />
            <span className="fw-bold h2">Our Popular Courses</span>
          </p>
          <Link to="/courses" className="text-decoration-none pe-2 course-link">
            Browse Online Courses <FaArrowCircleRight className="ms-2" />
          </Link>
        </div>
        <div className="row pt-5 d-flex align-items-center justify-content-center gap-3 gap-lg-0 flex-wrap">
          <div className="col-lg-4 col-md-10">
            <Link to="/courses/full-stack-developer" className="text-decoration-none">
              <div className="card rounded-2">
                <img src={FSWD} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title fw-bold pb-2">Full Stack Development</h5>
                  <div className="card-text d-flex">
                    <div className="stars border rounded-2 px-2 py-1 me-2 text-center"><IoStarSharp className="mb-1"/> 4.5</div>
                    <div className="ratings border rounded-2 px-2 py-1  me-2">397K ratings</div>
                    <div className="ratings border rounded-2 px-2 py-1  me-2">112.1 Hours</div>
                  </div>
                </div>
              </div>
          </Link>
          </div>
          <div className="col-lg-4 col-md-10">
             <Link to="/courses/digitalmarketing" className="text-decoration-none">
              <div className="card rounded-2">
                <img src={DigitalMarket} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title fw-bold pb-2">Digital Marketing</h5>
                  <div className="card-text d-flex">
                    <div className="stars border rounded-2 px-2 py-1 me-2 text-center"><IoStarSharp className="mb-1"/> 4.9</div>
                    <div className="ratings border rounded-2 px-2 py-1  me-2">457K ratings</div>
                    <div className="ratings border rounded-2 px-2 py-1  me-2">110.9 Hours</div>
                  </div>
                </div>
              </div>
          </Link>
          </div>
          <div className="col-lg-4 col-md-10">
             <Link to="/courses/ai-engineer" className="text-decoration-none">
              <div className="card rounded-2">
                <img src={AI} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title fw-bold pb-2">AI Engineer</h5>
                  <div className="card-text d-flex">
                    <div className="stars border rounded-2 px-2 py-1 me-2 text-center"><IoStarSharp className="mb-1"/> 4.7</div>
                    <div className="ratings border rounded-2 px-2 py-1  me-2">787K ratings</div>
                    <div className="ratings border rounded-2 px-2 py-1  me-2">978.9 Hours</div>
                  </div>
                </div>
              </div>
          </Link>
          </div>

          <div className="mt-4 w-100 d-flex align-items-start">
            <Link to ="/courses" className="rounded-1 p-2 text-decoration-none course-btn fw-bold ">ALL Career Skill Builders</Link></div>
        </div>
      </section>

      {/* Discover Courses */}
      <section className="Features container py-3">
        <div className="feature-para">
          <p className="h2 text-center py-4">Discover Powerfull Features</p>
          <p className="h5 text-muted text-center py-4">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
          
        </div>

        <div className="row d-flex align-items-center justify-content-evenly gap-lg-0 gap-2 py-3">
          <div className="col-lg-3 col-md-5">
            <div className="d-flex align-items-center flex-column justify-content-around shadow rounded-4">
            <FaRegThumbsUp className="my-4 p-1"/>
            <p className="h4">
              Relaxing & Learning
            </p>
            <p className="small p-3 text-center text-muted">Relaxing while learning keeps your mind calm, reduces stress, and improves focus, making it easier to understand and remember what you study and help to upskill</p>
            <Link to = "/about" className="text-decoration-none py-2">Read More</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-5">
            <div className="d-flex align-items-center flex-column justify-content-around shadow rounded-4">
            <FaMedal className="my-4 p-1"/>
            <p className="h4">
              Certificate
            </p>
            <p className="small p-3 text-center text-muted">Completing a SkillForge course earns you a certificate that validates your skills and showcases your dedication to learning, making it a strong addition to your resume or portfolio.</p>
            <Link to = "/about" className="text-decoration-none py-2">Read More</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-5">
            <div className="d-flex align-items-center flex-column justify-content-around shadow rounded-4">

            <HiMiniComputerDesktop className="my-4 p-1"/>
                        <p className="h4">
              Private Mentoring
            </p>
            <p className="small p-3 text-center text-muted">Private monitoring ensures your progress and performance are tracked personally and securely. It helps you stay focused, identify areas to improve, and maintain consistent growth.</p>
            <Link to = "/about" className="text-decoration-none py-2">Read More</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-5">
            <div className="d-flex align-items-center flex-column justify-content-around shadow rounded-4">
            <FaRegSmileBeam className="my-4 p-1"/>
                        <p className="h4">
             Creative Thinking
            </p>
            <p className="small p-3 text-center text-muted">By learning through diverse real-world experiences, you develop the ability to think creatively, see problems from new perspectives, and generate innovative solutions.</p>
            <Link to = "/about" className="text-decoration-none py-2">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Letter */}
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

      {/* Instructor */}

      <section className="instructors container">
       <p className="h2 text-center py-4">Expert Instructors</p>
          <p className="h5 text-muted text-center py-4">Our expert instructors are skilled professionals who share real-world knowledge and guide you with clear, practical teaching to help you succeed.</p>

          <div className="row">
            <div className="col-lg-3 col-md-6 py-2">
              <div className="wrapper">
                <div className="image-wrapper d-flex flex-column align-items-center">
                  <img src={Trainer1} alt="" className="img-fluid rounded-pill shadow"/>
                  <div className="content">
                    <p className="h4 text-center pt-2">Ramon Gibson</p>
                    <p className="h6 text-center text-muted pt-2">Full Stack Expert</p>
                  </div>
                   <div className="brands d-flex align-items-center justify-content-center py-2">
                  <Link to="/" className="text-decoration-none mx-2"><FaInstagram className="p-0"/></Link>
                  <Link to="/" className="text-decoration-none mx-2"><FaFacebook /></Link>
                  <Link to="/" className="text-decoration-none mx-2"><FaXTwitter /></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 py-2">
              <div className="wrapper">
                <div className="image-wrapper d-flex flex-column align-items-center">
                <img src={Trainer2} alt="" className="img-fluid rounded-pill shadow"/>
                      <div className="content">
                    <p className="h4 text-center pt-2">Stella Robinson</p>
                    <p className="h6 text-center text-muted pt-2">Digital Market Expert</p>
                  </div>
                                <div className="brands d-flex align-items-center justify-content-center py-2">
                  <Link to="/" className="text-decoration-none mx-2"><FaInstagram /></Link>
                  <Link to="/" className="text-decoration-none mx-2"><FaFacebook /></Link>
                  <Link to="/" className="text-decoration-none mx-2"><FaXTwitter /></Link>
                </div>
                </div>
              </div>

            </div>
            <div className="col-lg-3 col-md-6 py-2">
              <div className="wrapper">
                                <div className="image-wrapper d-flex flex-column align-items-center">
                <img src={Trainer3} alt="" className="img-fluid rounded-pill shadow"/>
                                      <div className="content">
                    <p className="h4 text-center pt-2">Paul Phelan</p>
                    <p className="h6 text-center text-muted pt-2">AI Trainer</p>
                  </div>
                   <div className="brands d-flex align-items-center justify-content-center py-2">
                  <Link to="/" className="text-decoration-none mx-2"><FaInstagram /></Link>
                  <Link to="/" className="text-decoration-none mx-2"><FaFacebook /></Link>
                  <Link to="/" className="text-decoration-none mx-2"><FaXTwitter /></Link>
                </div>
                </div>
              </div>

            </div>
            <div className="col-lg-3 col-md-6 py-2">
              <div className="wrapper rounded-pill">
                <div className="image-wrapper d-flex flex-column align-items-center">
                <img src={Trainer4} alt="" className="img-fluid rounded-pill shadow"/>
                  <div className="content">
                    <p className="h4 text-center pt-2">Megan Cade</p>
                    <p className="h6 text-center text-muted pt-2">UI/UX Expert</p>
                  </div>
                <div className="brands d-flex align-items-center justify-content-center py-2">
                  <Link to="/" className="text-decoration-none mx-2"><FaInstagram /></Link>
                  <Link to="/" className="text-decoration-none mx-2"><FaFacebook /></Link>
                  <Link to="/" className="text-decoration-none mx-2"><FaXTwitter /></Link>
                </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Blogs Intro */}

      <section className="container py-4">
        <p className="h2 text-center py-4">Blogs Or News</p>
        <p className="h5 text-muted py-4">Stay updated with the latest blogs and news, featuring industry insights, learning tips, and trending topics to keep you informed and inspired.</p>

        <div className="row d-flex align-items-center justify-content-evenly gap-3 py-3">
          <div className="col-lg-3 col-sm-10">
            <div className="card">
              <img src={Person1} alt="" className="card-img-top"/>
              <div className="card-body">
                <p className="card-title h5">Demystifying Data Science: A Beginner’s</p>
                <p className="card-text">A quick beginner’s guide to understand data science, its key concepts, and real-world uses.</p>
                <Link to="/blog" className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-10">
            <div className="card">
              <img src={Person2} alt="" className="card-img-top"/>
              <div className="card-body">
                <p className="card-title h5">App Development Course</p>
                <p className="card-text">A beginner-friendly guide to app development, covering core concepts, tools, and steps to build functional and user-friendly applications.</p>
                <Link to="/blog" className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-10">
            <div className="card">
              <img src={Person3} alt="" className="card-img-top"/>
              <div className="card-body">
                <p className="card-title h5">Full stack Project in Nextjs Course</p>
                <p className="card-text">Build a complete full-stack project using Next.js, covering both frontend and backend development.</p>
                <Link to="/blog" className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Home;
