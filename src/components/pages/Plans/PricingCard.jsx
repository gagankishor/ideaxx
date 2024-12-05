import Link from "next/link";
const startupFeatures = [
  {
    title: "Tailored Platform Experience",
    description:
      "Gain full access to the IDEAX platform, customized to fit the unique needs of your business. Manage and track your company's progress effortlessly, anytime and anywhere.",
  },
  {
    title: "Mobile Accessibility",
    description:
      "Stay connected with your projects through our iOS and Android apps, ensuring you can keep tabs on your business operations from anywhere in the world.",
  },
  {
    title: "AI-Powered Assistance",
    description:
      "Utilize an advanced AI assistant to monitor the progress of your ideas and receive actionable insights that keep your projects on track.",
  },
  {
    title: "Essential Data Access",
    description:
      "Unlock critical data to jumpstart new ventures or propel your current projects forward, equipping you with the knowledge to succeed.",
  },
  {
    title: "Strategic Project Guidance",
    description:
      "Navigate the complexities of business development with structured guidance that steers your projects through the necessary stages towards successful completion.",
  },
  {
    title: "Innovative Solutions",
    description:
      "Explore advanced solutions designed to refine and enhance your business ideas, driving innovation and competitiveness.",
  },
  {
    title: "Expert Advice",
    description:
      "Benefit from a wealth of knowledge with advice and tips gleaned from successful projects, tailored to parallel your business aspirations.",
  },
  {
    title: "Exclusive Community Interaction",
    description:
      "Engage with an exclusive community of successful entrepreneurs, sharing ideas and gaining insights from like-minded individuals.",
  },
  {
    title: "Market Insights",
    description:
      "Receive periodic reports on market trends and analytics, empowering you with the information needed to make strategic marketing decisions.",
  },
  {
    title: "Secure Cloud Storage",
    description:
      "Safeguard your business documents and resources with 5 GB of secure cloud storage, ensuring your data is protected and readily accessible.",
  },
  {
    title: "Idea Marketplace",
    description:
      "Access a dynamic marketplace to buy and sell innovative ideas, expanding your business opportunities.",
  },
  {
    title: "Unlimited AI Tests",
    description:
      "Test and validate your ideas without limits using our cutting-edge AI technology, giving you the confidence to pursue the most promising ventures.",
  },
];

const enterpriseFeatures = [
  {
    title: "Virtual Meetings with Global Experts",
    description:
      "Engage in insightful virtual consultations with global experts to refine your strategies and accelerate your business growth.",
  },
  {
    title: "Dedicated Full-Team Support",
    description:
      "Receive dedicated support from a full team committed to ensuring a swift and successful launch or development of your ideas.",
  },
  {
    title: "Professional Enterprise Web and App Development",
    description:
      "Elevate your online presence with professionally designed websites and mobile applications tailored to reflect your enterprise's branding and operational needs.",
  },
  {
    title: "Custom CRM Development",
    description:
      "Benefit from a custom-designed CRM system, programmed specifically to enhance your operational efficiency and customer relationship management.",
  },
  {
    title: "Comprehensive SEO and SMO Services",
    description:
      "Boost your online visibility with comprehensive SEO (Search Engine Optimization) and SMO (Social Media Optimization) services, customized for your business to enhance engagement and reach.",
  },
  {
    title: "Corporate Brand Establishment",
    description:
      "Establish a strong corporate brand identity with our targeted branding strategies, designed to resonate well with your target audience and build a lasting reputation.",
  },
  {
    title: "Personalized Assistance from a Dedicated Business Advisor",
    description:
      "Gain exclusive access to a dedicated business advisor who provides customized guidance and expert support tailored to your enterprise's unique needs.",
  },
  {
    title: "Enhanced Secure Cloud Storage",
    description:
      "Safeguard your important business documents and resources with 50 GB of secure cloud storage, ensuring your data is protected and accessible whenever you need it.",
  },
];
const PricingPlans = () => {
  // const handelStartupPlan = ()=>{
  //   alert("dfsf")
  // }
  const plans = [
    {
      title: "Startup Plan",
      description:
        "Perfect for small businesses and startups looking to scale.",
      price: "299.00",
      features: startupFeatures,
      storage: "5 GB",
      buttonName: "Choose Plan",
      handelClick: "/cart",
    },
    {
      title: "Enterprise Launch",
      description:
        "Designed for large-scale businesses requiring advanced tools.",
      // price: "XXX",
      features: enterpriseFeatures,
      storage: "50 GB",
      buttonName: "Contect Sales",
      handelClick: "cart",
    },
  ];
  return (
    <div className="flex flex-col max-w-5xl m-auto md:flex-row justify-center gap-6 py-10 px-4">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg shadow-lg p-6 w-full md:w-1/2"
        >
          <h3 className="text-lg font-bold">{plan.title}</h3>
          <p className="text-gray-600 mt-2">{plan.description}</p>
          {plan.price&&(
            <>
            <div className="flex items-center mt-8 space-x-4">
            <span className="text-lg font-thin text-gray-500 line-through">
            ₹{plan.price}/mo
            </span>
            {/* <span className="text-3xl font-bold text-purple-600">{plan.discountedPrice}</span> */}
          </div>
          <h4 className="text-5xl font-bold mt-4"><span className=" text-lg font-thin">₹</span>{plan.price} <span  className=" text-lg font-thin">/mo</span></h4>
            </>
          )}
          
          <p className="text-gray-500 mt-1">
            {plan.storage} Secure Cloud Storage
          </p>
          <div className=" flex justify-center">
            <Link
              href={plan.handelClick}
              className="bg-[#6161FF] text-center font-semibold text-white mt-4 w-full py-3 px-6 mx-auto rounded-md hover:bg-[#6161FF]"
            >
              {plan.buttonName}
            </Link>
          </div>
          <ul className="mt-6 space-y-2">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✔</span>
                <div>
                  <h5 className="font-semibold">{feature.title}</h5>
                  <p className="text-sm text-left pl-2 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default PricingPlans;
