"use client"; // Ensure the component runs on the client side
import Link from 'next/link';

// Sample blog data
const blogData = {
  1: {
    title: "The Future of Project Management",
    date: "October 5, 2023",
    excerpt: "In today's rapidly evolving landscape, project management has become more critical than ever. This article explores the latest trends, tools, and techniques shaping the future of project management, and how professionals can stay ahead.",
    author: "Jane Doe",
    imageUrl: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
  },
  2: {
    title: "Top CRM Strategies for 2024",
    date: "November 1, 2023",
    excerpt: "Customer Relationship Management (CRM) has seen a surge in technological advancements. In this post, we delve into the best CRM strategies to help businesses enhance customer engagement and drive sales in 2024.",
    author: "John Smith",
    imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
  },
  3: {
    title: "Agile Project Management: Best Practices",
    date: "December 5, 2023",
    excerpt: "Agile project management is becoming more popular in the modern business world. This article outlines the best practices for implementing Agile methodologies and ensuring project success.",
    author: "Alice Green",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  },
  4: {
    title: "Digital Marketing in 2024: Trends You Can’t Ignore",
    date: "January 20, 2024",
    excerpt: "Digital marketing continues to evolve at a rapid pace. In this post, we cover the top digital marketing trends for 2024 that businesses need to embrace to stay competitive.",
    author: "Michael Brown",
    imageUrl: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
  },
  5: {
    title: "The Role of Artificial Intelligence in Business Innovation",
    date: "February 10, 2024",
    excerpt: "Artificial intelligence is revolutionizing industries worldwide. Learn how AI is being used to drive innovation and efficiency across various sectors.",
    author: "Sarah Johnson",
    imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
  },
  6: {
    title: "How Blockchain is Transforming Supply Chains",
    date: "March 15, 2024",
    excerpt: "Blockchain technology is rapidly changing the way supply chains are managed. This article explores the potential benefits and challenges of blockchain for global supply chains.",
    author: "David Lee",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  },
  7: {
    title: "Building a Remote Work Culture: Best Practices",
    date: "April 18, 2024",
    excerpt: "Remote work is here to stay. Discover the best practices for creating a productive and engaged remote work culture that benefits both employees and businesses.",
    author: "Linda Williams",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  },
  8: {
    title: "The Importance of Cybersecurity in a Digital World",
    date: "May 25, 2024",
    excerpt: "In an era of increasing cyber threats, understanding cybersecurity is more important than ever. This blog discusses key strategies for businesses to protect themselves against digital attacks.",
    author: "James Walker",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  },
  9: {
    title: "How to Build a Strong Personal Brand on LinkedIn",
    date: "June 30, 2024",
    excerpt: "LinkedIn has become the leading platform for professionals. Learn how to effectively build and enhance your personal brand to stand out on LinkedIn.",
    author: "Emily Clark",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  },
  10: {
    title: "Sustainable Business Practices: A Guide for 2024",
    date: "July 12, 2024",
    excerpt: "Sustainability is no longer just a buzzword; it's a necessity for businesses in 2024. This guide covers the best sustainable practices companies can adopt to reduce their carbon footprint.",
    author: "Rachel Adams",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  },
};



const Blogs = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-800">Blogs</h1>
        <p className="text-lg text-gray-500 mt-2">Latest articles and insights</p>
      </div>

      {/* Blog List */}
      <div className="space-y-8">
        {Object.entries(blogData).map(([id, blog]) => (
          <div key={id} className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden">
            {/* Blog Image */}
            <div className="w-full md:w-1/3">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-64 object-cover rounded-lg md:rounded-l-lg"
              />
            </div>

            {/* Blog Content */}
            <div className="w-full md:w-2/3 p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">{blog.title}</h2>
              <div className="text-gray-500 text-sm">{blog.date} · By {blog.author}</div>
              <p className="text-gray-700">{blog.excerpt}</p>

              {/* Read More Link */}
              <Link href={`/blogs/${id}`} className="text-blue-600 hover:underline">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
