import { createContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Courses from "./Components/Courses";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Profile from "./Components/Profile";
import CourseDetails from "./Components/CourseDetails";
import { useLocation } from "react-router-dom";
import Missing from "./Components/Missing";
export let UserContext = createContext();
import axios from "axios";
import Footer from "./Components/Footer";


// Blog Persons
import Person1 from "../src/assets/Blog/Person1.jpg"
import Person2 from "../src/assets/Blog/Person2.jpg"
import Person3 from "../src/assets/Blog/Person3.jpg"
import Person4 from "../src/assets/Blog/Person4.jpg"
import Person5 from "../src/assets/Blog/Person5.jpg"
import Person6 from "../src/assets/Blog/Person6.jpg"



// Toast
import { ToastContainer, toast,Bounce  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogContent from "./Components/BlogContent";
import CheckOut from "./Components/CheckOut";
  
function App() {


  // Blogs

  const [blogContent,setBlogContent] = useState([

    // Data science


    {id : 1,img : Person1 , route : "data-Science",heading : "Demystifying Data Science: A Beginner’s Guide",sample : "A quick beginner’s guide to understand data science, its key concepts, and real-world uses." , intro :"Data Science is the practice of extracting meaningful insights from data using statistics, programming, and logical problem-solving, and it’s far less mysterious than it may seem. At its core, it follows a simple workflow: define a problem, collect and clean data, explore it through visualization, build and test models, and finally deploy them to solve real-world challenges. Key concepts include features, targets, supervised vs. unsupervised learning, overfitting, evaluation metrics, and deployment. Tools like Python, SQL, and libraries such as pandas, NumPy, and scikit-learn make the process approachable, even for beginners. Real-world applications are everywhere—recommendation engines in e-commerce, fraud detection in finance, predictive healthcare, self-driving cars, and more. Starting with small projects like predicting house prices or analyzing customer churn helps build hands-on skills while avoiding common pitfalls like ignoring data cleaning or chasing overly complex models. With a step-by-step learning path and practice, data science transforms from a buzzword into a powerful, practical skillset for shaping modern decisions and innovations." ,question :"What is Data Science ?", para : "At its heart, data science is about turning raw information into actionable knowledge. Every moment, the world produces vast amounts of data—from clicks on websites and sensor readings in smart devices to financial transactions and health records. On its own, this data is just noise, but with the right tools and methods, data science uncovers patterns, predicts outcomes, and guides smarter decisions. Whether it’s helping businesses understand customer behavior, doctors detect diseases earlier, or cities manage traffic efficiently, data science bridges the gap between overwhelming information and practical solutions that improve our daily lives.",tagline : "Features of Data Science",uses1 : "Business Decision Making – Helps companies analyze sales, customer behavior, and market trends to make smarter decisions.",uses2 : "Personalized Recommendations – Powers platforms like Netflix, Amazon, and Spotify to suggest movies, products, or songs you’ll like." ,uses3 : "Self-Driving Cars – Enables vehicles to process data from sensors and cameras to navigate safely."},

    // App Development
    {id : 2 ,img :Person2 ,route : "app-development",heading : "App Development Course: A Beginner’s Guide",sample :"A beginner-friendly guide to covering core concepts to build functional and user-friendly applications.",intro :"At its heart, data science is about turning raw information into actionable knowledge. Every moment, the world produces vast amounts of data—from clicks on websites and sensor readings in smart devices to financial transactions and health records. On its own, this data is just noise, but with the right tools and methods, data science uncovers patterns, predicts outcomes, and guides smarter decisions. Whether it’s helping businesses understand customer behavior, doctors detect diseases earlier, or cities manage traffic efficiently, data science bridges the gap between overwhelming information and practical solutions that improve our daily lives." ,question :"What is App Development?", para : "App development is all about creating apps that work on different devices like phones, tablets, or even computers. There are three main types of apps: Native Apps, which are made for a specific platform like Android or iOS; Cross-Platform Apps, which can run on both Android and iOS using tools like React Native or Flutter; and Web Apps, which open in a browser but look and feel just like a mobile app",tagline : "Features of App Development",uses1 : "Business Growth – Companies can reach customers directly through mobile apps and increase sales.",uses2 : "Problem Solving – Apps help solve everyday problems, like ordering food, tracking fitness, or managing finances." ,uses3 : "Career Opportunities – Learning app development opens doors to jobs as a developer or freelancer, and even lets you create your own startup."},



    // Full stack
    {id : 3 ,img : Person3 ,route : "full-stack-development",heading : "Full Stack Project in Next.js Course: A Beginner’s Guide",sample : "Build a complete full-stack project using Next.js, covering both frontend and backend development.",intro :"In today’s connected era, collaboration goes far beyond face-to-face meetings, extending into virtual spaces where professionals, students, and entrepreneurs work together across time zones and cultures. While remote teamwork offers flexibility and access to global talent, it also introduces challenges like miscommunication, lack of engagement, and coordination difficulties. Effective online collaboration is about more than just using digital tools—it requires clear communication, strong organization, trust, and the right use of technology to keep everyone aligned toward common goals. When done well, it not only boosts productivity but also fosters creativity and inclusivity, making teams stronger and more adaptable in the digital age." ,question :"What is Online Collaboration ?", para : "Online collaboration refers to the process of working together with others over the internet, often using digital tools, to achieve a common goal. It can involve sharing ideas, documents, tasks, or even code, without the need to be in the same physical space.",tagline : "Features of Full Stack Development", uses1 : "Remote Work & Global Teams – Businesses now operate across different time zones, requiring seamless online teamwork.",uses2 : "Efficiency & Productivity – With the right tools and methods, teams can complete projects faster and more accurately." ,uses3 : "Innovation – Diverse teams bring different perspectives, leading to creative solutions."},



    // On;line Collaboration
    {id : 4,img :Person4  ,route : "online-collaboration",heading : "The Art of Effective Online Collaboration",sample : "Master the skills and tools needed to work efficiently with teams online, communicate clearly, and achieve shared goals seamlessly.",intro :"In the modern digital era, mobile apps play a central role in how we live, work, and connect—whether it’s shopping online, streaming entertainment, managing finances, or staying fit. This growing reliance on apps has turned App Development into one of the most valuable and in-demand skills across industries. For students, it opens doors to exciting career opportunities; for professionals, it enhances technical expertise; and for entrepreneurs, it provides the tools to bring innovative ideas to life. If you’ve ever dreamed of creating your own app or building a strong foundation in technology, enrolling in an App Development course is the ideal way to begin your journey." ,question :"What is App Development?", para : "App development is all about creating apps that work on different devices like phones, tablets, or even computers. There are three main types of apps: Native Apps, which are made for a specific platform like Android or iOS; Cross-Platform Apps, which can run on both Android and iOS using tools like React Native or Flutter; and Web Apps, which open in a browser but look and feel just like a mobile app",tagline : "Impact of Online Collaboration", uses1 : "Business Growth – Companies can reach customers directly through mobile apps and increase sales.",uses2 : "Problem Solving – Apps help solve everyday problems, like ordering food, tracking fitness, or managing finances." ,uses3 : "Career Opportunities – Learning app development opens doors to jobs as a developer or freelancer, and even lets you create your own startup."},


    // Job Market: Career Tips
    {id : 5,img :Person5 ,route : "career-tips",heading : "Navigating the Job Market: Career Tips", sample : "Discover practical strategies, networking tips, and skill-building advice to succeed in today’s competitive job market.", intro :"Today’s job market is dynamic and highly competitive, requiring more than just qualifications to succeed—it demands strategy, preparation, and adaptability. Whether you’re a recent graduate stepping into your first role, a professional considering a career switch, or someone returning to the workforce after a break, knowing how to navigate opportunities effectively can set you apart. By combining the right mindset with practical skills such as networking, personal branding, and targeted job search strategies, you can position yourself for roles that not only match your abilities but also align with your long-term career goals, turning challenges into stepping stones for growth." ,question :"Understanding the Job Market", para : "Before diving into job applications, it’s important to understand the job market. This involves keeping an eye on industry trends to know which sectors are growing and where demand is highest, identifying the skills that employers are seeking and working on improving them, and recognizing the value of networking opportunities, since many jobs are secured through professional connections rather than just online applications.",tagline : "Steps to Acheive Career Growth",uses1 : "Build Skills & Profile – Update your resume and online profiles, and learn relevant technical and soft skills.",uses2 : "Network Effectively – Attend events and connect with professionals to open opportunities" ,uses3 : "Prepare & Persist – Research roles, practice interviews, and stay adaptable while applying consistently."},


    // Building a Growth Mindset: Strategies
    {id : 6,img :Person6 ,route : "growth-minset",heading : "Building a Growth Mindset: Strategies",sample : "Learn how to embrace challenges, stay resilient, and continuously improve yourself with a growth-oriented mindset.",intro :"Success and personal growth begin with the right mindset. Adopting a growth mindset—the belief that skills, intelligence, and abilities can be developed through effort, learning, and persistence—is essential for achieving goals and navigating challenges. Unlike a fixed mindset, which assumes talents are innate and unchangeable, a growth mindset fosters curiosity, resilience, and adaptability, empowering individuals to embrace learning, overcome setbacks, and continually improve both personally and professionally.",question :"Why a Growth Mindset Matters", para : "Embracing challenges helps you see obstacles as opportunities to learn rather than threats, while boosting resilience encourages you to persist through setbacks and failures. A growth mindset also enhances learning by fostering curiosity and a desire to continuously improve skills, ultimately improving performance, as people with this mindset are more likely to achieve long-term success.",tagline : "Features Of Building A Strategic Mindset",uses1 : "Embrace Challenges & Learn from Mistakes – Step out of your comfort zone, treat setbacks as lessons, and focus on continuous improvement.",uses2 : "Value Effort & Feedback – Celebrate progress and hard work, and use constructive criticism to grow." ,uses3 : "Surround Yourself with Growth Opportunities – Engage with supportive people and set learning-focused goals rather than comparing yourself to others."}

  ])



  

  // Toast
    const cartSuccess = () => {
    toast.success("Item added to your cart!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    })};

    const cartDelete = () => {
    toast.error("Item removed from your cart..", {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
            hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    })};

    const updateToast = () =>{
      toast.success("Data Updated Successfully!",{
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      })
    }
    const formSubmitToast = () =>{
      toast.success("Our Team will catch you soon!",{
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      })
    }


  //Window scrollToTop pathname for n
  let { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // User Login

  // API Url

    const API_URL = "https://my-json-server.typicode.com/imharish05/skillforge-api/courses-data";

  // cartCount
  const [cartCount, setCartCount] = useState(0);

  // Course item
  const [courseItems, setCourseItems] = useState([]);
  const [course, setCourse] = useState([]);
  //  CourseCount in the cart
  const [courseCount, setCourseCount] = useState(0);

  const [cartCourseItem, setCartCourseItem] = useState([]);

  const [cartShow, setCartShow] = useState([]);

  // Cart Assign
  // Price
  const [Price, setPrice] = useState(0);

  // Discount Price
  const [discountPrice, setDiscountPrice] = useState(0);

  // Discount Percentage
  const [discountPercentage, setDiscountPercentage] = useState(0);

  // Coupons div
  const [coupons, setCoupons] = useState(false);

  // coupon false or true
  const [inputMsg, setInputMsg] = useState(null);

  // Coupon Input
  const [couponInput, setCouponInput] = useState("");

  // Cart Duplicates

  useEffect(() => {
    if (cartCourseItem.length > 0) {
      let addcount = 0;

      let updatedCart = [...cartShow];

      cartCourseItem.forEach((newItem) => {
        const exists = updatedCart.some((item) => item.id === newItem.id);

        if (!exists) {
          updatedCart.push(newItem);
          addcount++;
        }

      });
      if (addcount > 0) {
        setCartShow(updatedCart);
        setCartCount((preVal) => preVal + 1);
        setCourseCount((preVal) => preVal + 1);
      }
    }
  }, [cartCourseItem]);

  // Login

  // Login Para set
  const [loginPara, setLoginPara] = useState(true);

  // Visibility and toggle
  const [showPassword, setShowPassword] = useState(false);

  // Confirm pwd vivibility and toggle
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  // Data Collections
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userMail,setUsermail] = useState("");
  const [pwdCheckError,setpwdCheckError] = useState("")
  const [loginPwdCheckError,setLoginPwdCheckError] = useState("")
  const [loginEmail,setLoginEmail] = useState("")
  const [loginPwd,setLoginPwd] = useState("")
  const [userDetails,setUserDetails] = useState(false)
  const [courseProfileView,setcourseProfileView] = useState(false);
  const[newName,setNewName] = useState("")
  const[newEmail,setnewEmail] = useState("")
  const[newPwd,setnewPwd] = useState("")
  const[purchaseCount,setPurchaseCount] = useState(0)

  const [updateStatus,setUpdateStatus] = useState("")

  // Search Content
  const[searchContent,setSearchContent] = useState("")

  // Courses
    const [courseData,setCourseData] = useState([]);

    // All
    const [allCourse,setAllCourse] = useState([])



    // Course Fetch

    useEffect(()=>{
    const fetchCourse = async () =>{
      try{
        const response = await axios.get(API_URL);
        setCourseData(response.data)
        setAllCourse(response.data)
      }
      catch(err){
        console.log(err.message)
      }
    }

    fetchCourse()
  },[])
  

  // Search

  let searchValue = searchContent.trim().toLowerCase();

  const filteredItems = courseData.filter((item) => {
    return (
      (item.head && item.head.toLowerCase().includes(searchValue)) ||
      (item.para && item.para.toLowerCase().includes(searchValue)) ||
      (item.link && item.link.toLowerCase().includes(searchValue)) ||
      (item.heading && item.heading.toLowerCase().includes(searchValue))
    )});

  const navigate = useNavigate();
    const handleSearch = (e) =>{
    e.preventDefault()
    navigate(`/courses`);
  }





  // News Letter

  const [newsLetterInput,setnewsLetterInput] = useState("")
  const [newsEmail,setNewsEmail] = useState([])
const[lettercommend,setLettercommend] = useState(false)





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
    <UserContext.Provider
      value={{newsLetterInput,setnewsLetterInput,newsEmail,setNewsEmail,lettercommend,setLettercommend,updateStatus,setUpdateStatus,cartSuccess,cartDelete,updateToast,formSubmitToast,handleNewsLetter,
        courseData,setCourseData,
        loginPwd,setLoginPwd,
        loginEmail,setLoginEmail,
        pwdCheckError,setpwdCheckError,
        userMail,
        setUsermail,
        userName,
        setUserName,
        password,
        setPassword,
        ConfirmPassword,
        setConfirmPassword,
        API_URL,
        cartCount,
        setCartCount,
        courseItems,
        setCourseItems,
        course,
        setCourse,
        courseCount,
        setCourseCount,
        cartCourseItem,
        setCartCourseItem,
        cartShow,
        setCartShow,
        Price,
        setPrice,
        discountPrice,
        setDiscountPrice,
        discountPercentage,
        setDiscountPercentage,
        coupons,
        setCoupons,
        inputMsg,
        setInputMsg,
        couponInput,
        setCouponInput,
        loginPara,
        setLoginPara,
        showPassword,
        setShowPassword,
        showConfirmPassword,
        setshowConfirmPassword,
        loginPwdCheckError,setLoginPwdCheckError,
        userDetails,setUserDetails,
        courseProfileView,setcourseProfileView,
        handleSearch,filteredItems,
        newName,setNewName,newEmail,setnewEmail,newPwd,setnewPwd,purchaseCount,setPurchaseCount,searchContent,setSearchContent,allCourse,setAllCourse,blogContent,setBlogContent,
      }}
    >
      <div className="App">
        <ToastContainer limit={2}/>
        <Header></Header>
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/courses/:id" element={<CourseDetails />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:id" element={<BlogContent />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="*" element={<Missing />}></Route>
        </Routes>
        <Footer></Footer>

        {/* <CheckOut></CheckOut> */}


      </div>
    </UserContext.Provider>
  );
}

export default App;
