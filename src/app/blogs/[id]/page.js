"use client"; // Ensure the component runs on the client side
import { useParams } from 'next/navigation'; // Import useParams for dynamic route params

// Sample blog data
const blogData = {
  1: {
    title: "The Future of Project Management",
    date: "October 5, 2023",
    content: "In today's rapidly evolving landscape, project management has become more critical than ever. This article explores the latest trends, tools, and techniques shaping the future of project management, and how professionals can stay ahead.",
    author: "Jane Doe",
    authorBio: "Jane is an experienced project manager with a passion for innovation. She writes regularly on the future of work and project management best practices.",
    imageUrl: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
    relatedPosts: [
      { id: 2, title: "Top CRM Strategies for 2024" },
      { id: 3, title: "Agile Project Management: Best Practices" },
    ],
  },
  2: {
    title: "Top CRM Strategies for 2024",
    date: "November 1, 2023",
    content: "Customer Relationship Management (CRM) has seen a surge in technological advancements. In this post, we delve into the best CRM strategies to help businesses enhance customer engagement and drive sales in 2024.",
    author: "John Smith",
    authorBio: "John is a CRM expert with over 10 years of experience. He specializes in customer retention strategies and CRM system implementation.",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    relatedPosts: [
      { id: 1, title: "The Future of Project Management" },
      { id: 4, title: "Optimizing Customer Service with AI" },
    ],
  },
  // Add more sample data as needed
};

const BlogDetails = () => {
  const params = useParams(); // Get dynamic route parameters
  const id = params.id; // Access the 'id' parameter directly
  const blog = blogData[id];

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl space-y-8">
      {/* Blog Header */}
      <div className="mb-8 bg-gradient-to-r from-blue-400 via-teal-400 to-green-500 text-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-white mb-4">{blog.title}</h1>
        <div className="text-gray-100 mb-4 text-lg">
          <span>{blog.date}</span> · <span>By {blog.author}</span>
        </div>
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-72 object-cover rounded-lg shadow-xl border-4 border-white mb-6"
        />
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-4">
        <p>{blog.content}</p>
      </div>

      {/* Author Bio */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Author</h2>
        <p className="text-lg text-gray-600">{blog.authorBio}</p>
      </div>

      {/* Related Posts */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Posts</h2>
        <ul className="list-disc pl-5 space-y-2">
          {blog.relatedPosts.map((post) => (
            <li key={post.id}>
              <a href={`/blogs/${post.id}`} className="text-blue-600 hover:underline">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Comments Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Leave a Comment</h2>
        <form className="space-y-4">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Write your comment here..."
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
          >
            Submit Comment
          </button>
        </form>
      </div>

      {/* Back Link */}
      <div className="mt-8">
        <a href="/blogs" className="flex items-center text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.25 19.25L3.5 12.5m0 0l6.75-6.75m-6.75 6.75h16" />
          </svg>
          Back to blog list
        </a>
      </div>
    </div>
  );
};

export default BlogDetails;
