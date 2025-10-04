import React, { useState } from "react";
import AboutImg from "../assets/About/Intro.png";
import "../Styles/About.css";
import YoutubeImg from "../assets/About/Youtube1.jpg";
import { FaPlay } from "react-icons/fa";
import YouTube from "react-youtube";
import { MdClose } from "react-icons/md";
import Mission from "../assets/About/Mission1.png";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaRegSmileBeam } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GiPathDistance } from "react-icons/gi";
import { FaBrain } from "react-icons/fa";
import {useInView} from "react-intersection-observer"
import CountUp from "react-countup";
import {Link} from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";



const About = () => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: { autoplay: 0, rel: 0, modestbranding: 1, controls: 1 },
  };

  const [showVideo, setShowVideo] = useState(false);



  // For Count Up

  const {ref,inView} = useInView({
    triggerOnce : false,
    threshold :0.3
  })
  return (


    <section className="container-fluid About py-4 px-0">
      {/* Intro Page */}

      <section className="container">
        <div className="row pt-md-5 gap-lg-0 gap-4">
          <div className="col-lg-6">
            <div className="d-flex flex-column align-items-center justify-content-around content-wrapper">
              <p className="h2 py-3 align-self-lg-start">About Us</p>
              <p className="text-muted text-start">
                {" "}
                Skillforge is built on a passion for learning and innovation. We
                believe that education is not just about acquiring information —
                it’s about empowering individuals to grow, adapt, and thrive in
                a fast-changing world. Our platform offers a dynamic space where
                learners can gain real-world skills, enhance their knowledge,
                and unlock their potential through hands-on, practical learning
                experiences.
              </p>

              <button
                className="btn align-self-lg-start text-white"
                id="exploreBtn"
              >
                Explore More <FaLongArrowAltDown className="mb-1"/>

              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-wrapper d-flex flex-column align-items-center justify-content-center">
              <img
                src={AboutImg}
                alt=""
                className="img-fluid"
                id="aboutIntroImg"
              />
            </div>
          </div>
        </div>
      </section>

      {/*Second page */}

      <section className="container py-4">
        <div className="row d-flex flex-wrap-reverse gap-lg-0 gap-3">
          <div className="col-lg-6 youtube-card">
            <img
              src={YoutubeImg}
              alt="YoutubeThumbImg"
              id="youtubeImg"
              className="img-fluid rounded-5"
            />

            <button
              className="border-0 rounded-circle text-center"
              id="playBtn"
              onClick={() => setShowVideo(true)}
            >
              <FaPlay className="text-white ms-2 mb-2" />
            </button>
          </div>
          <div className="col-lg-6 py-5">
            <div className="wrapper d-flex flex-column align-items-center">
              <p className="h3 text-center">Access to Learning Anytime & Anyware</p>
              <p className="text-muted px-4 pt-3">Skillforge Classes are designed to make learning simple, accessible, and engaging. With flexible schedules and interactive sessions, you can learn at your own pace while gaining practical, real-world skills guided by expert instructors.</p>

              <div className="content-list row px-5 w-100" >
                <div className="col-md-6">
                  <li className="py-2 text-muted ">Flexible Timing</li>
                  <li className="py-2 text-muted ">Easy to Understand</li>
                  <li className="py-2 text-muted ">Career-Focused Skills</li>
                  <li className="py-2 text-muted ">Progress Tracking</li>
                </div>
                <div className="col-md-6">
                  <li className="py-2 text-muted ">Affordable</li>
                  <li className="py-2 text-muted ">World-Class Learning</li>
                  <li className="py-2 text-muted ">Community Support</li>
                  <li className="pt-2 text-muted ">Hands-on Projects</li>
                </div>
              </div>
            </div>

          </div>
        </div>


      </section>

        {/* Mission Page */}

        <section className="container py-4">
          <p className="h2 text-center py-3">Our Mission & Vision</p>

          <div className="row d-flex flex-wrap-wrap">
            <div className="col-lg-6">
              <div className="wrapper py-3 ps-3">
                <li className="py-2">Empower learners with practical, industry-relevant skills</li>
                <li className="py-2">Provide interactive and project-based learning experiences</li>
                <li className="py-2">Bridge the gap between theoretical knowledge and real-world application</li>
                <li className="py-2">Build confidence and expertise to succeed in the digital era</li>
                <li className="py-2">Become a global hub where curiosity transforms into mastery</li>
                <li className="py-2">Unlock career opportunities for learners worldwide</li>
                <li className="py-2">Nurture creativity, innovation, and problem-solving skills</li>
                <li className="py-2">Inspire learners to achieve their personal and professional goals</li>
                <li className="pt-2">Shape a future full of possibilities through continuous learning</li>
              </div>
            </div>

            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="wrapper">
              <img src={Mission} alt="arrow" className="img-fluid" id="missionImg"/>
              </div>
            </div>
          </div>
        </section>


        {/* Features */}
              <section className="Features container py-3">
                <div className="feature-para">
                  <p className="h2 text-center py-4">Discover Powerfull Features</p>
                  <p className="h5 text-muted text-center py-4">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                  
                </div>
        
                <div className="row d-flex align-items-center justify-content-evenly gap-lg-0 gap-2 py-3">
                  <div className="col-lg-3 col-md-5">
                    <div className="d-flex align-items-center flex-column justify-content-around shadow rounded-4">
                    <FaRegThumbsUp className="my-4 p-1"/>
                    <p className="h4 text-center">
                      Relaxing & Learning
                    </p>
                    <p className="small p-3 text-center text-muted">Relaxing while learning keeps your mind calm, reduces stress, and improves focus, making it easier to understand and remember what you study and help to upskill</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-5">
                    <div className="d-flex align-items-center flex-column justify-content-around shadow rounded-4">
                    <FaMedal className="my-4 p-1"/>
                    <p className="h4 text-center">
                      Certificate
                    </p>
                    <p className="small p-3 text-center text-muted">Completing a SkillForge course earns you a certificate that validates your skills and showcases your dedication to learning, making it a strong addition to your resume or portfolio.</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-5">
                    <div className="d-flex align-items-center flex-column justify-content-around shadow rounded-4">
        
                    <HiMiniComputerDesktop className="my-4 p-1"/>
                                <p className="h4 text-center">
                      Private Mentoring
                    </p>
                    <p className="small p-3 text-center text-muted">Private monitoring ensures your progress and performance are tracked personally and securely. It helps you stay focused, identify areas to improve, and maintain consistent growth.</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-5">
                    <div className="d-flex align-items-center flex-column justify-content-around shadow rounded-4">
                    <FaRegSmileBeam className="my-4 p-1"/>
                                <p className="h4 text-center">
                     Creative Thinking
                    </p>
                    <p className="small p-3 text-center text-muted">By learning through diverse real-world experiences, you develop the ability to think creatively, see problems from new perspectives, and generate innovative solutions.</p>
                    </div>
                  </div>
                </div>

                <div className="row d-flex align-items-center justify-content-evenly gap-lg-0 gap-2 py-5">
                  <div className="col-lg-3 col-md-5">
                    <div className="d-flex align-items-center flex-column justify-content-around shadow rounded-4">
                    <MdLiveTv className="my-4 p-1"/>
                    <p className="h4 text-center">
                      Interactive Live Classes
                    </p>
                    <p className="small p-3 text-center text-muted">Interactive live classes let you learn directly from experts, clear doubts instantly, and engage with peers, making it easier to understand topics deeply and helping you build skills faster and stronger.</p>

                    </div>
                  </div>
                  <div className="col-lg-3 col-md-5">
                    <div className="d-flex align-items-center flex-column justify-content-around shadow rounded-4">
                    <GiSkills className="my-4 p-1"/>
                    <p className="h4 text-center">
                      Skill Progress Tracker
                    </p>
                    <p className="small p-3 text-center text-muted">The skill progress tracker helps you monitor your learning journey, track lessons, and see your growth clearly, making it easier to stay motivated and helping you achieve your learning goals effectively.</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-5">
                    <div className="d-flex align-items-center flex-column justify-content-around shadow rounded-4">
        
                    <FaBrain className="my-4 p-1"/>
                                <p className="h4 text-center">
                      AI-Powered Learning Paths
                    </p>
                    <p className="small p-3 text-center text-muted">AI-powered learning paths analyze your interests and goals to suggest the right courses, making it easier to learn what matters most and helping you grow faster with personalized guidance.</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-5">
                    <div className="d-flex align-items-center flex-column justify-content-around shadow rounded-4">
                    <GiPathDistance className="my-4 p-1"/>
                                <p className="h4 text-center">
Career Support Hub
                    </p>
                    <p className="small p-3 text-center text-muted">Career support guides you with resume building, interview preparation, and job insights, making it easier to enter the industry and helping you move closer to your professional goals confidently.</p>
                    </div>
                  </div>
                </div>
              </section>

        {/* Counter */}

        <section ref={ref} className="counter container-fluid border py-5">
          <div className="container row d-flex mx-auto py-3">
            <div className="col-6 col-md-3">
              <p className="h1 text-center">
                <CountUp
            start={0}
            end={inView ? 100 : 0}
            duration={2}
            suffix="+"
          /></p>
              <p className="h4 text-center">COURSES</p>
            </div>
            <div className="col-6 col-md-3">
                            <p className="h1 text-center">
          <CountUp
            start={0}
            end={inView ? 6 : 0}
            duration={2}
            suffix="+"
          /></p>
              <p className="h4 text-center">COUNTRIES</p>
            </div>
            <div className="col-6 col-md-3">
                            <p className="h1 text-center">                <CountUp
            start={0}
            end={inView ? 10 : 0}
            duration={2}
            suffix="k"
          /></p>
              <p className="h4 text-center">STUDENTS</p>
            </div>
            <div className="col-6 col-md-3">
                            <p className="h1 text-center">
                                              <CountUp
            start={0}
            end={inView ? 900 : 0}
            duration={2}
            suffix="+"
          />
                            </p>
              <p className="h4 text-center">INSTRUCTORS</p>
            </div>
          </div>
        </section>

{/* Get in touch */}
<section className="Contact container-fluid pt-5">
  <div className="wrapper d-flex align-items-center flex-column py-3">
    <p className="h3 text-center">Have Question ? Get in touch!</p>
    <p className="text-center pt-4">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
    
    <Link to="/contact" className=" btn text-center" id="Contact-Btn"><FaPhoneAlt className="mb-1 me-2"/> Contact Us</Link>
  </div>
</section>

      {/* YOUTUBE VIDEO */}
      <section
        className="youtube-box container-fluid d-flex align-items-center justify-content-center"
        style={{
          transform: showVideo ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.5s ease",
        }}
      >
        <div className="youtube-wrapper shadow">
          <button
            className="text-white"
            id="closeBtn"
            onClick={() => setShowVideo(false)}
          >
            <MdClose />
          </button>
          <YouTube videoId="N3AkSS5hXMA" opts={opts} />
        </div>
      </section>


    </section>


  );
};

export default About;
