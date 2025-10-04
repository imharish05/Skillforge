import React from 'react'
import "../Styles/Footer.css"
import Logo from "../assets/Logo2.png"
import { FaLocationDot } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaGreaterThan } from "react-icons/fa6";
import Apple from "../assets/Footer/App.png"
import Play  from "../assets/Footer/Play.png"
import { MdEmail } from "react-icons/md";

const Footer = () => {


  let Year = new Date()

  return (
    <div className='Footer container-fluid mt-4'>
      <div className="row d-flex gap-4 gap-lg-0 px-2 py-4">
        <div className="col-lg-4">
          <img src={Logo} alt="Logo" className='img-fluid pb-2' />
          <p className="h5 head pt-4 text-white pe-1">
            Empowering you to learn, grow, and shape a future filled with endless possibilities.
          </p>

          <div className="brands py-4">
              <FaInstagram className='mx-3'/>
              <FaFacebook className='mx-3'/>
              <FaXTwitter className='mx-3'/>
              <FaLinkedinIn className='mx-3'/>
          </div>

        </div>
        <div className="col-lg-2">
          <div className="link-wrapper ps-4 pt-2">
            <p className="h4 text-white">Links</p>
            <div className="links d-flex flex-column justify-content-around">
            <Link to="/" className='text-white text-decoration-none pt-2'><FaGreaterThan className='links-symbol mb-1'/> Home</Link>
            <Link to="/courses" className='text-white text-decoration-none pt-2'><FaGreaterThan className='links-symbol mb-1'/> Courses</Link>
            <Link to="/about" className='text-white text-decoration-none pt-2'><FaGreaterThan className='links-symbol mb-1'/> About</Link>
            <Link to="/blog" className='text-white text-decoration-none pt-2'><FaGreaterThan className='links-symbol mb-1'/> Blog</Link>
            <Link to="/contact" className='text-white text-decoration-none pt-2'><FaGreaterThan className='links-symbol mb-1'/> Contact</Link>
            </div>

          </div>
        </div>
        <div className="col-lg-3">
          <div className="Deatils ps-4 pt-2">
            <p className="h4 text-white">Contact</p>

            <div className="location d-flex align-items-center py-2">
            <IoLocationOutline className='me-3'/> <p className='mb-0 text-white'>C/54 Northwest Freeway,Houston, USA 485</p>
            </div>
            <div className="location d-flex align-items-center py-2">
            <BiPhoneCall className='me-3' /> <p className='mb-0 text-white'>+152 534-468-854</p>
            </div>
            <div className="Mail d-flex align-items-center py-2">
            <MdEmail  className='me-3' /> <p className='mb-0 text-white'>skillforge@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="store-wrapper d-flex justify-content-between flex-column align-items-start pt-2">
            <p className="h4 text-white ps-3">Get In Touch</p>
            <img src={Play} alt="" className="my-2"/>
            <img src={Apple} alt="" className="my-2"/>
          </div>
        </div>
      </div>

      <div className="row py-4">
<hr className='text-white'/>
        <p className='text-center text-white mb-0'>
              &copy;{Year.getFullYear()} Skillforge. Design & Develop by Harish
        </p> 
      </div>
    </div>
  )
}

export default Footer