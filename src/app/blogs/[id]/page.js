"use client"; // Ensure the component runs on the client side
import ArticleCard from "@/components/blogs/ArticleCard";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// Sample blog data
// const blogData = {
//   1: {
//     title: "The Future of Project Management",
//     date: "October 5, 2023",
//     content:
//       "In today's rapidly evolving landscape, project management has become more critical than ever. This article explores the latest trends, tools, and techniques shaping the future of project management, and how professionals can stay ahead.",
//     author: "Jane Doe",
//     authorBio:
//       "Jane is an experienced project manager with a passion for innovation. She writes regularly on the future of work and project management best practices.",
//     imageUrl: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
//     relatedPosts: [
//       { id: 2, title: "Top CRM Strategies for 2024" },
//       { id: 3, title: "Agile Project Management: Best Practices" },
//     ],
//   },
//   2: {
//     title: "Top CRM Strategies for 2024",
//     date: "November 1, 2023",
//     content:
//       "Customer Relationship Management (CRM) has seen a surge in technological advancements. In this post, we delve into the best CRM strategies to help businesses enhance customer engagement and drive sales in 2024.",
//     author: "John Smith",
//     authorBio:
//       "John is a CRM expert with over 10 years of experience. He specializes in customer retention strategies and CRM system implementation.",
//     imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
//     relatedPosts: [
//       { id: 1, title: "The Future of Project Management" },
//       { id: 4, title: "Optimizing Customer Service with AI" },
//     ],
//   },
//   // Add more sample data as needed
// };
const websiteEssentials = [
  {
    title: "The Ultimate Guide to Building a Personal Portfolio Website",
    category: "Website Essentials",
    imageUrl: "https://images.unsplash.com/photo-1518085250887-2f903c200fee", // Portfolio website image
  },
  {
    title: "10 Tips for Optimizing Website Performance",
    category: "Website Essentials",
    imageUrl: "https://images.unsplash.com/photo-1533750349088-cd871a92f312", // Website performance optimization image
  },
  {
    title: "Essential SEO Techniques to Improve Your Site’s Ranking",
    category: "Website Essentials",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b", // SEO techniques image
  },
];

const BlogDetails = () => {
  // const params = useParams(); // Get dynamic route parameters
  // const id = params.id; // Access the 'id' parameter directly
  // const blog = blogData[id];
  
  // const router = useRouter();
  // const { id } = router.query; // Dynamic blog ID
  // const [blog, setBlog] = useState(null);

  // useEffect(() => {
  //   if (!id) return;

  //   // Fetch the JSON file
  //   fetch("/blogs.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBlog(data[id]); // Set the blog based on the ID
  //     });
  // }, [id]);
  
  // if (!blog) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto">
          {/* Category */}
          <p className="text-sm mb-2 text-left text-gray-500">IT & Software</p>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4">
            3 Ways Technical Certifications Drive Business Outcomes
          </h1>

          {/* Author Info */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm font-medium text-gray-800 text-left">
                Melissa Suzuno
              </p>
              <p className="text-sm text-gray-500">
                HR and L&D Insights Writer, Udemy
              </p>
            </div>
            <button className="text-sm text-blue-600 hover:underline flex items-center">
              Share this article
              <span className="ml-1">↗</span>
            </button>
          </div>
        </div>
        {/* Cover Image */}
        <div className="max-w-3xl mx-auto mb-6">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
            alt="Technical Learning"
            className=""
          />
        </div>
        {/* Content Section */}
        <div className="max-w-3xl mx-auto ">
          {/* Intro Paragraph */}
          <p className="text-gray-700 mb-6 text-left">
            The rapid evolution of technology has left many organizations
            struggling to keep up. However, investing in technical
            certifications is proving to be an effective way to address skill
            gaps. Here’s how technical certifications are transforming
            workplaces and driving measurable business outcomes.
          </p>

          {/* Numbered Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                1. Boost productivity rates
              </h2>
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Productivity"
                className=" mb-4"
              />
              <p className="text-gray-700 text-left">
                Studies reveal that certified workers are not only more
                efficient but also perform complex tasks faster than their
                peers. According to Cisco, certified professionals complete
                tasks 37% more effectively than non-certified employees,
                significantly increasing overall productivity.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                2. Increase accuracy and quality of work
              </h2>
              <img
                src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Accuracy"
                className=" mb-4"
              />
              <p className="text-gray-700 text-left">
                Certifications help employees stay up-to-date with the latest
                industry standards and practices. This ensures fewer errors and
                improved outcomes. According to research, certified workers have
                29% fewer errors in their projects than non-certified
                colleagues, leading to better quality control.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                3. Reduce project costs
              </h2>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Reduce Costs"
                className="mb-4"
              />
              <p className="text-gray-700 text-left">
                While certifications require initial investments, they provide
                long-term benefits. Businesses save significantly on costs due
                to the reduced need for external experts and fewer project
                failures. Certified employees also help improve resource
                allocation, ensuring projects are completed within budget.
              </p>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Conclusion</h2>
            <p className="text-gray-700 text-left">
              Technical certifications have become essential for organizations
              looking to remain competitive in today&lsquo;s fast-paced environment.
              They not only help bridge the skills gap but also empower
              employees to excel in their roles, resulting in higher
              productivity, improved accuracy, and cost savings. By investing in
              certifications, businesses can future-proof their workforce and
              achieve sustainable growth.
            </p>
          </div>
        </div>

        {/* Author Bio */}
        <div className="max-w-3xl mx-auto mt-8 p-6 ">
          <h3 className="text-lg font-semibold mb-4">About the Author</h3>
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100"
              alt="Author"
              className="rounded-full w-16 h-16 mr-4"
            />
            <p className="text-gray-700 text-left">
              Melissa Suzuno is an experienced HR and L&D writer at Udemy,
              focusing on helping organizations build effective training
              programs. She specializes in workforce development and talent
              management strategies.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 ">
        <div className="bg-gray-50 mx-5 md:mx-20 py-12">
          <div className="max-w-full  mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Related Blogs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-3 gap-6">
              {websiteEssentials.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  category={article.category}
                  imageUrl={article.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
