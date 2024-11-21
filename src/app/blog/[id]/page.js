"use client"; // Ensure the component runs on the client side
import ArticleCard from "@/components/blogs/ArticleCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const websiteEssentials = [
  {
    title: "The Ultimate Guide to Building a Personal Portfolio Website",
    category: "Website Essentials",
    imageUrl: "https://images.unsplash.com/photo-1518085250887-2f903c200fee",
  },
  {
    title: "10 Tips for Optimizing Website Performance",
    category: "Website Essentials",
    imageUrl: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
  },
  {
    title: "Essential SEO Techniques to Improve Your Site’s Ranking",
    category: "Website Essentials",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
];
const BlogDetails = () => {
  const params = useParams();
  const id = params.id;
  // console.log(id)
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    if (!id) return;
    fetch("/blogs.json")
      .then((response) => response.json())
      .then((data) => {
        setBlog(data[id]);
      });
  }, [id]);
  console.log(blog, blog?.para);
  if (!blog) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm mb-2 text-left text-gray-500">
            {blog?.heading}
          </p>
          <h1 className="text-4xl font-bold mb-4">{blog?.title}</h1>
          <div className="flex items-center justify-between mb-6">
            <div>
              {/* <p className="text-sm font-medium text-gray-800 text-left">
                Melissa Suzuno
              </p>
              <p className="text-sm text-gray-500">
                HR and L&D Insights Writer, Udemy
              </p> */}
            </div>
            <button className="text-sm text-blue-600 hover:underline flex items-center"></button>
          </div>
        </div>
        <div className="max-w-3xl mx-auto mb-6">
          <img src={blog?.imageUrl} alt="Technical Learning" className="" />
          {blog.para && <p className="text-gray-700 text-left">{blog.para}</p>}
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {blog?.content.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              {section?.header && (
                <p className="text-gray-700 text-left font-semibold text-lg">
                  {section.header}
                </p>
              )}
              {section?.image && (
                <img
                  src={section.image}
                  alt={`Section ${sectionIndex + 1}`}
                  className="rounded-md w-full max-w-xl"
                />
              )}
              {section?.text && (
                <p className="text-gray-700 text-left">{section.text}</p>
              )}

              {section?.features?.map((feature, featureIndex) => (
                <div key={featureIndex} className="space-y-4">
                  {feature?.title && (
                    <p className="text-gray-700 text-left font-semibold">
                      {feature.title}
                    </p>
                  )}
                  {feature?.image && (
                    <img
                      src={feature.image}
                      alt={`Feature ${featureIndex + 1}`}
                      className="rounded-md max-w-xl"
                    />
                  )}
                  {feature?.description && (
                    <p className="text-gray-700 text-left">
                      {feature.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
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
