import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const learningResources = [
  {
    title: "Introduction to Ideax.in",
    description: "Learn the basics of using Ideax.in to start your journey.",
    link: "learning-guide/1",
  },
  {
    title: "Creating Your First Project",
    description:
      "A step-by-step guide to creating your first project on Ideax.",
    link: "learning-guide/1",
  },
  {
    title: "Understanding the Business Module",
    description:
      "Explore the business module and learn how to make the most of it.",
    link: "learning-guide/1",
  },
];

const LearningGuideSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    console.log("Search query updated:", searchQuery);
  }, [searchQuery]);

  const filteredResources = searchQuery.length > 0 
  ? learningResources.filter((resource) => {
      const queryLower = searchQuery.toLowerCase();
      return (
        resource.title.toLowerCase().includes(queryLower) ||
        resource.description.toLowerCase().includes(queryLower)
      );
    }) 
  : [];
  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      console.log(`Searching for: ${searchQuery}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 bg-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-thin text-gray-900 mb-4 text-center">
        Learning Guide For ideax
      </h1>
      <p className="text-gray-600 mb-8 text-lg sm:text-xl md:text-2xl text-center max-w-2xl">
        Explore guided, interactive and expertly crafted resources to get to
        where you want to be.
      </p>
      <div className="w-full max-w-3xl">
        <div className="relative flex items-center w-full border border-gray-300 rounded-full">
          <FaSearch className="absolute left-4 text-gray-500" />

          <input
            type="text"
            placeholder="What do you want to learn?"
            className="w-full py-3 pl-12 pr-32 rounded-full outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />

          <button
            onClick={handleSearch}
            className="absolute right-0 py-3 px-6 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Search library
          </button>
        </div>
      </div>
      <div className="w-full max-w-3xl mt-5">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 mb-4 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {resource.title}
              </h2>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <a href={resource.link} className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
          ))
        ) :searchQuery.length>0? (
          <p className="text-gray-600 text-center">No resources found.</p>
        ):''}
      </div>
    </div>
  );
};
export default LearningGuideSearch;
