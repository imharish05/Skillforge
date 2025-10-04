import React, { useContext, useState } from "react";
import ContactImg from "../assets/Contact.svg";
import { UserContext } from "../App";
import { FaAt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";
import { RiCloseLargeLine } from "react-icons/ri";
import "../Styles/Contact.css"


const Contact = () => {

  const [mapView,setMapView] = useState(false)

  let { formSubmitToast } = useContext(UserContext);

  const [queryUser,setQuaryUser] = useState("")
  const [queryEmail,setQuaryEmail] = useState("")
  const [queryComment,setQuaryComment] = useState("")
  const [queryNo,setQuaryNo] = useState("")

  const [allQueryies,setAllQuaries]  = useState([])


    // Query Collector

  const queryCollect = () =>{

    let quries = {name : queryUser , phone_no : queryNo, Email : queryEmail , Quary : queryComment}

    if(queryUser&&queryNo&&queryEmail&&queryComment){
    console.log("its true");
    let updatedQuries = [...allQueryies,quries]

    setAllQuaries(updatedQuries)

    localStorage.setItem("QueryDb",JSON.stringify(updatedQuries))

    setQuaryComment("")
    setQuaryEmail("")
    setQuaryNo("")
    setQuaryUser("")
    formSubmitToast()
    }

  }

  return (
    <section className="container-fluid">

      <div className="wrapper row d-flex align-items-center justify-content-around">
        <div className="col-lg-6">
          <div className="wrapper w-100">
            <p className="h1 ps-md-5">Get In Touch!</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="form d-flex flex-column ps-md-5">
                <div className="mb-2">
                  <label htmlFor="userName" className="mb-1">
                    Name
                  </label>
                  <div className="inputForm d-flex align-items-center border border-1 border rounded-2 p-2">
                    <FaUser className="me-2" />
                    <input
                      type="text"
                      required
                      className="input border-0"
                      placeholder="Enter your Name"
                      id="userName"
                      value={queryUser}
                      onChange={(e) => setQuaryUser(e.target.value)}
                    />
                  </div>
                </div>
                {/* Email */}
                <div className="mb-2">
                  <label htmlFor="Email" className="mb-1">
                    Email
                  </label>
                  <div className="inputForm d-flex align-items-center border border-1 border rounded-2 p-2">
                    <FaAt className="me-2" />
                    <input
                      type="email"
                      required
                      className="input border-0"
                      placeholder="Enter your Email"
                      id="Email"
                      value={queryEmail}
                      onChange={(e) =>{setQuaryEmail(e.target.value)}}
                    />
                  </div>
                </div>

                {/* phone number */}
                <div className="mb-2">
                  <label htmlFor="PhoneNo" className="mb-1">
                    Phone Number
                  </label>
                  <div className="inputForm d-flex align-items-center border border-1 border rounded-2 p-2">
                    <FaPhoneAlt className="me-2" />
                    <input
                      type="text"
                      required
                      className="input flex-grow-1 border-0"
                      placeholder="Enter your Phone Number"
                      id="PhoneNo"
                      value={queryNo}
                      onChange={(e)=>{setQuaryNo(e.target.value)}}
                    />
                  </div>
                </div>

                {/* Comment */}
                <div className="mb-3">
                  <label htmlFor="SignUpuserConfirmPwd" className="mb-1">
                    Your Comment:
                  </label>
                  <div className="inputForm d-flex align-items-start border border-1 border rounded-2 p-2">
                    <FaComment className="me-2 mt-1" />
                    <textarea className="input border-0 flex-grow-1"
                      placeholder="Your Message" value={queryComment} onChange={(e) =>{setQuaryComment(e.target.value)}}></textarea>
                  </div>
                </div>

                <button
                  className="button-submit mb-2 ms-md-3 bg-black text-white p-1 rounded-3"
                  type="submit"
                 onClick={() => {
                  queryCollect();
                }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-start justify-content-center">
          <img src={ContactImg} alt="" className="img-fluid" />
        </div>
      </div>

      <div className="container">
              <p className="h1 text-center pb-5">Have a question? Ask away!</p>
        <div className="row d-flex align-items-center justify-content-around gap-4">
          <div className="col-lg-3 col-md-10 py-5 shadow rounded-5">
            <div className="wrapper d-flex align-items-center justify-content-center flex-column">
                <FaPhoneAlt className="queryIcons mb-4 rounded-2"/>
                <p className="text-center">Have questions or need help? Give us a call, and our friendly team will provide the support you need quickly and efficiently.</p>
                <a href="tel:+0000000000000" className="text-decoration-none">+157 235 963</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-10 py-5 shadow rounded-5">
            <div className="wrapper px-2  d-flex align-items-center justify-content-center flex-column">
                <IoMailUnread className="queryIcons mb-4 rounded-2"/>
                <p className="text-center">Have questions or feedback? Send us an email, and our team will respond promptly to assist you with your queries or provide the information you need.</p>
                <a href="mailto:harish05082004@gmail.com" className="text-decoration-none">sample@gmail.com</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-10 py-5 shadow rounded-5">
            <div className="wrapper px-2 d-flex align-items-center justify-content-center flex-column">
                <FaLocationDot className="queryIcons mb-4 rounded-2"/>
                <p className="text-center">Visit us at our office! We’re conveniently located and ready to welcome you. Drop by for any inquiries or to learn more about our services.</p>
                <button className="btn border-0 text-primary" onClick={() => setMapView(true)}>View On Map</button>
            </div>
          </div>
        </div>
      </div>


      <div className="map d-flex align-items-center justify-content-center" style={{transform :mapView ? "translateX(0)" : ""}}>
        <div className="container d-flex align-items-center justify-content-center">

        <div className="map-wrapper">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79064.66883889679!2d8.145110964122512!3d46.81827590847395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2sSwitzerland!5e1!3m2!1sen!2sin!4v1758381902688!5m2!1sen!2sin" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

<button className="text-white btn" id="mapCloseBtn" onClick={() => setMapView(false)}><RiCloseLargeLine /></button>
        </div>
        </div>
      </div>

    </section>
    
  );
};

export default Contact;
