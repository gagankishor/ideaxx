"use client";
import useAxiosWithAuth from "@/config/useAxiosWithAuth";
// import { Eye, Trash2 } from "lucide-react";
// import Link from "next/link";
import { useEffect, useState } from "react";

const ResultHistory = () => {
  const axiosInstance = useAxiosWithAuth();
  const [resultHistory, setResultHistory] = useState([]);

  useEffect(() => {
    const fetchResultHistory = async () => {
      try {
        const endpoint = "get-all-result";
        const response = await axiosInstance({
          method: "get",
          url: endpoint,
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "multipart/form-data",
          },
        });
        setResultHistory(response.data.data); // Assuming the response data contains the result history
      } catch (error) {
        console.error("Error fetching result history:", error);
      }
    };
    fetchResultHistory();
  }, []);
  // const handleDelete = async (id) => {
  //   try {
  //     const endpoint = `delete-result/${id}`;
  //     await axiosInstance({
  //       method: "delete",
  //       url: endpoint,
  //     });
  //     setResultHistory((prev) => prev.filter((result) => result.id !== id));
  //   } catch (error) {
  //     console.error("Error deleting result:", error);
  //   }
  // };
  const handleRedirect = (uniqueKey) => {
    const hostUrl = window.location.origin;
    window.location.href = `${hostUrl}/wizard-result/${uniqueKey}`;
  };
  const handleDelete = async (id) => {
    try {
      const endpoint = `/delete-result/${id}`;
      const response = await axiosInstance({
        method: "post",
        url: endpoint,
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "multipart/form-data",
        },
      });
      setResultHistory(response.data.data);
    } catch (error) {
      console.error("Error fetching result history:", error);
    }
    fetch(`/api/delete-result/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        console.log("Deleted:", data);
      })
      .catch((error) => console.error("Error deleting:", error));
  };
  return (
    <div className="p-4 mx-auto min-h-screen bg-gray-50">
      <div className="mx-auto">
        <header className="p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Idea Result History
          </h2>
        </header>
        <section className="p-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          {resultHistory?.map((result) => (
            <article
              key={result.id}
              className="relative bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300 hover:scale-105"
            >
              <button
                onClick={() => handleDelete(result.id)}
                className="absolute top-2 right-2 z-10 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-lg hover:bg-red-600"
                aria-label="Delete"
              >
                &times;
              </button>
              <div
                className="w-full h-full bg-white rounded-t-lg overflow-hidden cursor-pointer "
                onClick={() => handleRedirect(result.uniqueKey)}
              >
                <img
                  src="/result-page/Startup-Business-Idea.png"
                  className="w-full h-full blur-sm"
                  alt="Wizard Result Preview"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-none opacity-100 transition-opacity duration-200 p-3">
                <h2 className="text-lg font-medium text-gray-800 text-center line-clamp-2">
                  {result?.wizardResult?.idea_description || "Untitled"}
                </h2>
              </div>
            </article>
          ))}
          {resultHistory?.map((result) => (
            <article
              key={result.id}
              className="relative bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300 hover:scale-105"
            >
              <button
                onClick={() => handleDelete(result.id)}
                className="absolute top-2 right-2 z-10 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-lg hover:bg-red-600"
                aria-label="Delete"
              >
                &times;
              </button>
              <div
                className="w-full h-full bg-white rounded-t-lg overflow-hidden cursor-pointer "
                onClick={() => handleRedirect(result.uniqueKey)}
              >
                <img
                  src="/result-page/Startup-Business-Idea.png"
                  className="w-full h-full blur-sm"
                  alt="Wizard Result Preview"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-none opacity-100 transition-opacity duration-200 p-3">
                <h2 className="text-lg font-medium text-gray-800 text-center line-clamp-2">
                  {result?.wizardResult?.idea_description || "Untitled"}
                </h2>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};
export default ResultHistory;
{
  /* <div className="flex justify-between mt-4">
    <Link
      href={`/wizard-result/${result?.uniqueKey}`}
      className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded focus:outline-none focus:ring focus:ring-blue-200"
      aria-label={`View details of ${result.idea}`}
    >
      <Eye className="w-4 h-4" /> View
    </Link>
    <button
      onClick={() => handleDelete(result.id)}
      className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-red-600 hover:bg-red-50 rounded focus:outline-none focus:ring focus:ring-red-200"
      aria-label={`Delete ${result.idea}`}
    >
      <Trash2 className="w-4 h-4" /> Delete
    </button>
  </div> */
}