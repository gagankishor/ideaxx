// "use client";  // Ensure this component is client-rendered
// import PropTypes from 'prop-types';

// import Slider from "react-slick";
// import Image from "next/image"; // Use Next.js image component
// import "./CardSlider.css";
// import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";

// const CardSlider = () => {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 4.8,
//       slidesToScroll: 2,
//       nextArrow: <SampleNextArrow />,
//       prevArrow: <SamplePrevArrow />,
//       responsive: [
//         {
//           breakpoint: 1400,
//           settings: {
//             slidesToShow: 4.5,
//             slidesToScroll: 2,
//           },
//         },
//         {
//           breakpoint: 1200,
//           settings: {
//             slidesToShow: 3.8,
//             slidesToScroll: 2,
//           },
//         },
//         {
//           breakpoint: 1100,
//           settings: {
//             slidesToShow: 3.4,
//             slidesToScroll: 2,
//           },
//         },
//         {
//           breakpoint: 1000,
//           settings: {
//             slidesToShow: 3.2,
//             slidesToScroll: 2,
//           },
//         },
//         {
//           breakpoint: 900,
//           settings: {
//             slidesToShow: 2.7,
//             slidesToScroll: 2,
//           },
//         },
//         {
//           breakpoint: 800,
//           settings: {
//             slidesToShow: 2.4,
//             slidesToScroll: 2,
//           },
//         },
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 2.3,
//             slidesToScroll: 1,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 1.8,
//             slidesToScroll: 1,
//           },
//         },
//         {
//           breakpoint: 550,
//           settings: {
//             slidesToShow: 1.4,
//             slidesToScroll: 1,
//           },
//         },
//         {
//           breakpoint: 510,
//           settings: {
//             slidesToShow: 1.2,
//             slidesToScroll: 1,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1.0,
//             nextArrow: <></>,
//             prevArrow: <></>,
//           },
//         },
//         {
//           breakpoint: 380,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             nextArrow: <></>,
//             prevArrow: <></>,
//           },
//         },
//       ],
//     };

//     const cards = [
//       // { id: 1, title: '', description: '', bgImage: '/homeslider/cashflow.jpeg' },
//       // { id: 2, title: '', description: '', bgImage: '/homeslider/bisness.jpeg' },
//       // { id: 3, title: '', description: '', bgImage: '/homeslider/community.jpeg' },
//       // { id: 4, title: '', description: '', bgImage: '/homeslider/cashflow.jpeg' },
      
//       {
//         pointers: [
//           "New Idea finalise",
//           "Find and discover Ideas",
//           "Save all Ideas in one place",
//         ],
//         icon: "/main-icon/Idea.png",
//         id: 8,
//         title: "Idea",
//         description: "",
//         bgImage: "/sliderLandigPage/8.webp",
//       },
//       {
//         pointers: ["Brand Name", "Logo", "Font", "Colors", "Slogan"],
//         icon: "/main-icon/Businessidentity.png",
//         id: 14,
//         title: "Business identity",
//         description: "",
//         bgImage: "/sliderLandigPage/14.webp",
//       },
//       {
//         pointers: [
//           "Social Media",
//           "Email Marketing",
//           "SEO",
//           "Marketing Material",
//           "Business Card",
//           "Marketing Events",
//           "Billboards",
//           "Online Campaigns",
//         ],
//         icon: "/main-icon/Marketing.png",
//         id: 4,
//         title: "Marketing",
//         description: "",
//         bgImage: "/sliderLandigPage/4.webp",
//       },
//       {
//         pointers: [
//           "Location",
//           "Contact",
//           "Registration Certificate",
//           "Bank account",
//           "Brand registration",
//           "Partners",
//         ],
//         icon: "/main-icon/Legal.png",
//         id: 5,
//         title: "Legal",
//         description: "",
//         bgImage: "/sliderLandigPage/5.webp",
//       },
//       {
//         pointers: ["Employees"],
//         icon: "/main-icon/team.png",
//         id: 15,
//         title: "Team",
//         description: "",
//         bgImage: "/sliderLandigPage/15.webp",
//       },
//       {
//         pointers: ["Equipment", "Templates", "Platform"],
//         icon: "/main-icon/BusinessTools.png",
//         id: 13,
//         title: "Business Tools",
//         description: "",
//         bgImage: "/sliderLandigPage/13.webp",
//       },
//       {
//         pointers: ["Funds", "Expenses", "Income", "Reports"],
//         icon: "/main-icon/CashFlow.png",
//         id: 11,
//         title: "Cash Flow",
//         description: "",
//         bgImage: "/sliderLandigPage/11.webp",
//       },
//       {
//         pointers: ["Book an appointment", "AI consulting"],
//         icon: "/main-icon/Consulting.png",
//         id: 3,
//         title: "Consulting",
//         description: "community",
//         bgImage: "/sliderLandigPage/3.webp",
//       },
//       {
//         pointers: ["Ideas", "Books", "Courses", "Entertainment"],
//         icon: "/main-icon/Entrepreneur.png",
//         id: 9,
//         title: "Entrepreneur",
//         description: "",
//         bgImage: "/sliderLandigPage/9.webp",
//       },
//       {
//         pointers: ["Marketing Strategies", "Investors"],
//         icon: "/main-icon/Strategies.png",
//         id: 2,
//         title: "Strategies",
//         description: "Business",
//         bgImage: "/sliderLandigPage/2.webp",
//       },
//       {
//         pointers: ["Clients", "Suppliers", "logistics"],
//         icon: "/main-icon/Community.png",
//         id: 1,
//         title: "Community",
//         description: "Community",
//         bgImage: "/sliderLandigPage/1.webp",
//       },
//       {
//         pointers: [""],
//         icon: "/main-icon/Buy-Sell.png",
//         id: 12,
//         title: "Buy-Sell",
//         description: "",
//         bgImage: "/sliderLandigPage/12.webp",
//       },
//       // { id: 6, title: 'Integrity', description: '', bgImage: '/sliderLandigPage/6.jpg' },
//       // { id: 7, title: 'Inovation', description: '', bgImage: '/sliderLandigPage/7.jpg' },
//       // { id: 10, title: 'Col', description: '', bgImage: '/sliderLandigPage/10.jpg' },
//     ];
//   return (
//     <div className="card-slider-improved">
//       <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
//         <div className="left-shadow" />
//         <Slider {...settings}>
//           {cards.map((card) => (
//             <div key={card.id} className="slider-card">
//               <Image
//   src={card.bgImage}
//   alt="Slider Image"
//   width={500}
//   height={300}
//   className="slider-card-image"
// />
//               <div className="card-content2">
//                 <h3 style={{ display: "flex", alignItems: "center", fontSize: "18px", fontWeight: "300" }}>
//                   <div style={{
//                     marginRight: "10px",
//                     display: "flex",
//                     alignItems: "center",
//                     backgroundColor: "white",
//                     padding: "5px",
//                     borderRadius: "5px",
//                   }}>
//                     <Image src={card.icon} alt={card.title} width={25} height={25} />
//                   </div>
//                   {card.title}
//                 </h3> 
//                 {card.pointers.map((pointer, index) => (
//                   <p key={index} className="card-description">
//                     <FaCheckCircle style={{ margin: "0 5px" }} />
//                     {pointer}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </Slider>
//         <div className="right-shadow" />
//       </div>
//     </div>
//   );
// };

// const SampleNextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div
//       className="slick-arrow slick-next"
//       onClick={onClick}
//       style={{
//         display: "block",
//         background: "black",
//         borderRadius: "50%",
//         cursor: "pointer",
//         position: "absolute",
//         top: "50%",
//         right: "10px",
//         transform: "translateY(-50%)",
//       }}
//     >
//       <FaArrowRight color="white" />
//     </div>
//   );
// };

// const SamplePrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div
//       className="slick-arrow slick-prev"
//       onClick={onClick}
//       style={{
//         display: "block",
//         background: "black",
//         borderRadius: "50%",
//         cursor: "pointer",
//         position: "absolute",
//         top: "50%",
//         left: "10px",
//         transform: "translateY(-50%)",
//       }}
//     >
//       <FaArrowLeft color="white" />
//     </div>
//   );
// };
// SampleNextArrow.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

// SamplePrevArrow.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
// export default CardSlider;

// // "use client"
// // import Slider from "react-slick";
// // import "./CardSlider.css";
// // import {
// //   FaArrowLeft,
// //   FaArrowRight,
// //   FaCheckCircle,
// // } from "react-icons/fa";
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faLightbulb as solidLightbulb } from '@fortawesome/free-solid-svg-icons';

// // const CardSlider = () => {
// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 4.8,
// //     slidesToScroll: 2,
// //     nextArrow: <SampleNextArrow />,
// //     prevArrow: <SamplePrevArrow />,
// //     responsive: [
// //       {
// //         breakpoint: 1400,
// //         settings: {
// //           slidesToShow: 4.5,
// //           slidesToScroll: 2,
// //         },
// //       },
// //       {
// //         breakpoint: 1200,
// //         settings: {
// //           slidesToShow: 3.8,
// //           slidesToScroll: 2,
// //         },
// //       },
// //       {
// //         breakpoint: 1100,
// //         settings: {
// //           slidesToShow: 3.4,
// //           slidesToScroll: 2,
// //         },
// //       },
// //       {
// //         breakpoint: 1000,
// //         settings: {
// //           slidesToShow: 3.2,
// //           slidesToScroll: 2,
// //         },
// //       },
// //       {
// //         breakpoint: 900,
// //         settings: {
// //           slidesToShow: 2.7,
// //           slidesToScroll: 2,
// //         },
// //       },
// //       {
// //         breakpoint: 800,
// //         settings: {
// //           slidesToShow: 2.4,
// //           slidesToScroll: 2,
// //         },
// //       },
// //       {
// //         breakpoint: 768,
// //         settings: {
// //           slidesToShow: 2.3,
// //           slidesToScroll: 1,
// //         },
// //       },
// //       {
// //         breakpoint: 600,
// //         settings: {
// //           slidesToShow: 1.8,
// //           slidesToScroll: 1,
// //         },
// //       },
// //       {
// //         breakpoint: 550,
// //         settings: {
// //           slidesToShow: 1.4,
// //           slidesToScroll: 1,
// //         },
// //       },
// //       {
// //         breakpoint: 510,
// //         settings: {
// //           slidesToShow: 1.2,
// //           slidesToScroll: 1,
// //         },
// //       },
// //       {
// //         breakpoint: 480,
// //         settings: {
// //           slidesToShow: 1,
// //           slidesToScroll: 1.0,
// //           nextArrow: <></>,
// //           prevArrow: <></>,
// //         },
// //       },
// //       {
// //         breakpoint: 380,
// //         settings: {
// //           slidesToShow: 1,
// //           slidesToScroll: 1,
// //           nextArrow: <></>,
// //           prevArrow: <></>,
// //         },
// //       },
// //     ],
// //   };

// //   const cards = [
// //     // { id: 1, title: '', description: '', bgImage: '/homeslider/cashflow.jpeg' },
// //     // { id: 2, title: '', description: '', bgImage: '/homeslider/bisness.jpeg' },
// //     // { id: 3, title: '', description: '', bgImage: '/homeslider/community.jpeg' },
// //     // { id: 4, title: '', description: '', bgImage: '/homeslider/cashflow.jpeg' },
    
// //     {
// //       pointers: [
// //         "New Idea finalise",
// //         "Find and discover Ideas",
// //         "Save all Ideas in one place",
// //       ],
// //       icon: "/main-icon/Idea.png",
// //       id: 8,
// //       title: "Idea",
// //       description: "",
// //       bgImage: "/sliderLandigPage/8.webp",
// //     },
// //     {
// //       pointers: ["Brand Name", "Logo", "Font", "Colors", "Slogan"],
// //       icon: "/main-icon/Businessidentity.png",
// //       id: 14,
// //       title: "Business identity",
// //       description: "",
// //       bgImage: "/sliderLandigPage/14.webp",
// //     },
// //     {
// //       pointers: [
// //         "Social Media",
// //         "Email Marketing",
// //         "SEO",
// //         "Marketing Material",
// //         "Business Card",
// //         "Marketing Events",
// //         "Billboards",
// //         "Online Campaigns",
// //       ],
// //       icon: "/main-icon/Marketing.png",
// //       id: 4,
// //       title: "Marketing",
// //       description: "",
// //       bgImage: "/sliderLandigPage/4.webp",
// //     },
// //     {
// //       pointers: [
// //         "Location",
// //         "Contact",
// //         "Registration Certificate",
// //         "Bank account",
// //         "Brand registration",
// //         "Partners",
// //       ],
// //       icon: "/main-icon/Legal.png",
// //       id: 5,
// //       title: "Legal",
// //       description: "",
// //       bgImage: "/sliderLandigPage/5.webp",
// //     },
// //     {
// //       pointers: ["Employees"],
// //       icon: "/main-icon/team.png",
// //       id: 15,
// //       title: "Team",
// //       description: "",
// //       bgImage: "/sliderLandigPage/15.webp",
// //     },
// //     {
// //       pointers: ["Equipment", "Templates", "Platform"],
// //       icon: "/main-icon/BusinessTools.png",
// //       id: 13,
// //       title: "Business Tools",
// //       description: "",
// //       bgImage: "/sliderLandigPage/13.webp",
// //     },
// //     {
// //       pointers: ["Funds", "Expenses", "Income", "Reports"],
// //       icon: "/main-icon/CashFlow.png",
// //       id: 11,
// //       title: "Cash Flow",
// //       description: "",
// //       bgImage: "/sliderLandigPage/11.webp",
// //     },
// //     {
// //       pointers: ["Book an appointment", "AI consulting"],
// //       icon: "/main-icon/Consulting.png",
// //       id: 3,
// //       title: "Consulting",
// //       description: "community",
// //       bgImage: "/sliderLandigPage/3.webp",
// //     },
// //     {
// //       pointers: ["Ideas", "Books", "Courses", "Entertainment"],
// //       icon: "/main-icon/Entrepreneur.png",
// //       id: 9,
// //       title: "Entrepreneur",
// //       description: "",
// //       bgImage: "/sliderLandigPage/9.webp",
// //     },
// //     {
// //       pointers: ["Marketing Strategies", "Investors"],
// //       icon: "/main-icon/Strategies.png",
// //       id: 2,
// //       title: "Strategies",
// //       description: "Business",
// //       bgImage: "/sliderLandigPage/2.webp",
// //     },
// //     {
// //       pointers: ["Clients", "Suppliers", "logistics"],
// //       icon: "/main-icon/Community.png",
// //       id: 1,
// //       title: "Community",
// //       description: "Community",
// //       bgImage: "sliderLandigPage/1.webp",
// //     },
// //     {
// //       pointers: [""],
// //       icon: "main-icon/Buy-Sell.png",
// //       id: 12,
// //       title: "Buy-Sell",
// //       description: "",
// //       bgImage: "/sliderLandigPage/12.webp",
// //     },
// //     // { id: 6, title: 'Integrity', description: '', bgImage: '/sliderLandigPage/6.jpg' },
// //     // { id: 7, title: 'Inovation', description: '', bgImage: '/sliderLandigPage/7.jpg' },
// //     // { id: 10, title: 'Col', description: '', bgImage: '/sliderLandigPage/10.jpg' },
// //   ];
// //   // 1- idea
// //   // 2- Business identity
// //   // 3- Marketing
// //   // 4- Legal
// //   // 5- Team
// //   // 6- Business Tools
// //   // 7- Cash Flow
// //   // 8- Consulting
// //   // 9- Entrepreneur
// //   // 10- Strategies
// //   // 11- Community
// //   // 12- Buy-Sell
// //   return (
// //     <>
// //       <div className="card-slider-improved">
// //         <div
// //           style={{
// //             display: "flex",
// //             justifyContent: "center",
// //             flexDirection: "column",
// //             position: "relative",
// //           }}
// //         >
// //           <div className="left-sedow"></div>
// //           <Slider {...settings}>
// //             {cards.map((card) => (
// //               <div
// //                 key={card.id}
// //                 className="slider-card"
// //                 style={{ width: "90%" }}
// //               >
// //               <img
// //                 src={card.bgImage}
// //                 alt="Slider Image"
// //                 style={{
// //                   width: "100%",
// //                   height: "auto",
// //                   objectFit: "cover",
// //                   backgroundColor:'transparent',

// //                 }}
// //                 className="slider-card-image"
// //               />
// //                 <div className="card-content2">
// //                   <h3
// //                     style={{
// //                       display: "flex",
// //                       alignItems: "center",
// //                       textAlign: "left",
// //                       fontSize: "18px",
// //                       fontWeight: "300",
// //                       padding: "0px",
// //                     }}
// //                   >
// //                     <div
// //                       style={{
// //                         marginRight: "10px",
// //                         display: "flex",
// //                         justifyContent: "center",
// //                         alignItems: "center",
// //                         backgroundColor: "white",
// //                         padding: "0px",
// //                         width: "38px",
// //                         height: "38px",
// //                         borderRadius: "5px",
// //                       }}
// //                     >
// //                       <img
// //                         src={card.icon}
// //                         alt={card.title}
// //                         width={25}
// //                         style={{
// //                           objectFit: "cover",
// //                           color: "white",
// //                         }}
// //                       />
// //                     </div>
// //                     {card.title}
// //                   </h3>
// //                   {card.pointers.map((pointer, index) => (
// //     <p key={index} className="card-description">
// //         <FaCheckCircle style={{ margin: "0 5px", borderRadius: "5px" }} />
// //         {pointer}
// //     </p>
// // ))}
// //                 </div>
// //               </div>
// //             ))}
// //           </Slider>
// //           <div className="right-sedow"></div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // const SampleNextArrow = (props) => {
// //   const { onClick } = props;
// //   return (
// //     <div
// //       className="slick-arrow slick-next"
// //       style={{
// //         display: "block",
// //         background: "black",
// //         color: "white",
// //         borderRadius: "50%",
// //         padding: "10px",
// //         width: "60px",
// //         height: "60px",
// //         textAlign: "center",
// //         lineHeight: "20px",
// //         fontSize: "18px",
// //         cursor: "pointer",
// //         position: "absolute",
// //         top: "50%",
// //         right: "10px",
// //         transform: "translateY(-50%)",
// //       }}
// //       onClick={onClick}
// //     >
// //       <FaArrowRight />
// //     </div>
// //   );
// // };

// // const SamplePrevArrow = (props) => {
// //   const { onClick } = props;
// //   return (
// //     <div
// //       className="slick-arrow slick-prev"
// //       style={{
// //         display: "block",
// //         background: "black",
// //         color: "white",
// //         borderRadius: "50%",
// //         padding: "10px",
// //         width: "60px",
// //         height: "60px",
// //         textAlign: "center",
// //         lineHeight: "20px",
// //         fontSize: "18px",
// //         cursor: "pointer",
// //         position: "absolute",
// //         top: "50%",
// //         left: "10px",
// //         transform: "translateY(-50%)",
// //         content: "none",
// //       }}
// //       onClick={onClick}
// //     >
// //       <FaArrowLeft />
// //     </div>
// //   );
// // };

// // export default CardSlider;
"use client"; // Ensure this component is client-rendered
import PropTypes from 'prop-types';
import Slider from "react-slick";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import styles from "./CardSlider.module.css"; // Use CSS modules or Tailwind for scoped styling

const CardSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            { breakpoint: 1400, settings: { slidesToShow: 4, slidesToScroll: 2 }},
            { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 2 }},
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 }},
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, nextArrow: null, prevArrow: null }},
        ],
    };
    const cards = [
      // { id: 1, title: '', description: '', bgImage: '/homeslider/cashflow.jpeg' },
      // { id: 2, title: '', description: '', bgImage: '/homeslider/bisness.jpeg' },
      // { id: 3, title: '', description: '', bgImage: '/homeslider/community.jpeg' },
      // { id: 4, title: '', description: '', bgImage: '/homeslider/cashflow.jpeg' },
      
      {
        pointers: [
          "New Idea finalise",
          "Find and discover Ideas",
          "Save all Ideas in one place",
        ],
        icon: "/main-icon/Idea.png",
        id: 8,
        title: "Idea",
        description: "",
        bgImage: "/sliderLandigPage/8.webp",
      },
      {
        pointers: ["Brand Name", "Logo", "Font", "Colors", "Slogan"],
        icon: "/main-icon/Businessidentity.png",
        id: 14,
        title: "Business identity",
        description: "",
        bgImage: "/sliderLandigPage/14.webp",
      },
      {
        pointers: [
          "Social Media",
          "Email Marketing",
          "SEO",
          "Marketing Material",
          "Business Card",
          "Marketing Events",
          "Billboards",
          "Online Campaigns",
        ],
        icon: "/main-icon/Marketing.png",
        id: 4,
        title: "Marketing",
        description: "",
        bgImage: "/sliderLandigPage/4.webp",
      },
      {
        pointers: [
          "Location",
          "Contact",
          "Registration Certificate",
          "Bank account",
          "Brand registration",
          "Partners",
        ],
        icon: "/main-icon/Legal.png",
        id: 5,
        title: "Legal",
        description: "",
        bgImage: "/sliderLandigPage/5.webp",
      },
      {
        pointers: ["Employees"],
        icon: "/main-icon/team.png",
        id: 15,
        title: "Team",
        description: "",
        bgImage: "/sliderLandigPage/15.webp",
      },
      {
        pointers: ["Equipment", "Templates", "Platform"],
        icon: "/main-icon/BusinessTools.png",
        id: 13,
        title: "Business Tools",
        description: "",
        bgImage: "/sliderLandigPage/13.webp",
      },
      {
        pointers: ["Funds", "Expenses", "Income", "Reports"],
        icon: "/main-icon/CashFlow.png",
        id: 11,
        title: "Cash Flow",
        description: "",
        bgImage: "/sliderLandigPage/11.webp",
      },
      {
        pointers: ["Book an appointment", "AI consulting"],
        icon: "/main-icon/Consulting.png",
        id: 3,
        title: "Consulting",
        description: "community",
        bgImage: "/sliderLandigPage/3.webp",
      },
      {
        pointers: ["Ideas", "Books", "Courses", "Entertainment"],
        icon: "/main-icon/Entrepreneur.png",
        id: 9,
        title: "Entrepreneur",
        description: "",
        bgImage: "/sliderLandigPage/9.webp",
      },
      {
        pointers: ["Marketing Strategies", "Investors"],
        icon: "/main-icon/Strategies.png",
        id: 2,
        title: "Strategies",
        description: "Business",
        bgImage: "/sliderLandigPage/2.webp",
      },
      {
        pointers: ["Clients", "Suppliers", "logistics"],
        icon: "/main-icon/Community.png",
        id: 1,
        title: "Community",
        description: "Community",
        bgImage: "/sliderLandigPage/1.webp",
      },
      {
        pointers: [""],
        icon: "/main-icon/Buy-Sell.png",
        id: 12,
        title: "Buy-Sell",
        description: "",
        bgImage: "/sliderLandigPage/12.webp",
      },
      // { id: 6, title: 'Integrity', description: '', bgImage: '/sliderLandigPage/6.jpg' },
      // { id: 7, title: 'Inovation', description: '', bgImage: '/sliderLandigPage/7.jpg' },
      // { id: 10, title: 'Col', description: '', bgImage: '/sliderLandigPage/10.jpg' },
    ];
    return (
        
      <div className="card-slider-improved">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div className="left-sedow"></div>
        <Slider {...settings}>
          {cards.map((card) => (
            <div
              key={card.id}
              className="slider-card"
              style={{ width: "90%" }}
            >
            <img
              src={card.bgImage}
              alt="Slider Image"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                backgroundColor:'transparent',

              }}
              className="slider-card-image"
            />
              <div className="card-content2">
                <h3
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "left",
                    fontSize: "18px",
                    fontWeight: "300",
                    padding: "0px",
                  }}
                >
                  <div
                    style={{
                      marginRight: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "white",
                      padding: "0px",
                      width: "38px",
                      height: "38px",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src={card.icon}
                      alt={card.title}
                      width={25}
                      style={{
                        objectFit: "cover",
                        color: "white",
                      }}
                    />
                  </div>
                  {card.title}
                </h3>
                {card.pointers.map((pointer, index) => (
  <p key={index} className="card-description">
      <FaCheckCircle style={{ margin: "0 5px", borderRadius: "5px" }} />
      {pointer}
  </p>
))}
              </div>
            </div>
          ))}
        </Slider>
        <div className="right-sedow"></div>
      </div>
    </div>
    );
};

const SampleNextArrow = ({ onClick }) => (
    <div className={styles.nextArrow} onClick={onClick}>
        <FaArrowRight />
    </div>
);

const SamplePrevArrow = ({ onClick }) => (
    <div className={styles.prevArrow} onClick={onClick}>
        <FaArrowLeft />
    </div>
);

CardSlider.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            bgImage: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            pointers: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
};

export default CardSlider;
