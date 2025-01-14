"use client";
import useAxiosWithAuth from "@/config/useAxiosWithAuth";
import { useEffect, useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import Link from "next/link";

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
  }, [axiosInstance]);

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
      console.error("Error deleting result:", error);
    }
  };

  return (
    <div className="p-4 mx-auto min-h-screen bg-gray-50">
      <div className="mx-auto">
        <header className="p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Idea Result History
          </h2>
        </header>
        <section className="p-4 grid grid-cols-1 md:grid-cols-4 gap-6 h-full">
          {resultHistory.map((result) => (
            <article
              key={result.id}
              className="relative bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300 hover:scale-105 min-h-96"
            >
              <button
                onClick={() => handleDelete(result.id)}
                className="absolute top-2 right-2 z-10 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-lg hover:bg-red-600"
                aria-label="Delete"
              >
                <IoTrashBin />
              </button>
              <Link href={`/wizard-result/${result.uniqueKey}`}>
                <div className="w-full h-full bg-white rounded-t-lg overflow-hidden cursor-pointer">
                  <div className="h-full flex flex-col">
                    <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 scrollbar-hover">
                        <div
                          style={{
                            transform: `scale(${0.3})`,
                            transformOrigin: "top left",
                            width: `${100 / 0.3}%`,
                            height: `${100 / 0.3}%`,
                          }}
                        >
                          <iframe
                            src={`/wizard-result/${result.uniqueKey}`}
                            title="Website Preview"
                            className="w-full h-full border-0"
                            sandbox="allow-same-origin allow-scripts"
                            style={{
                              width: "1100px", // Desktop viewport width
                              height: "1080px", // Desktop viewport height
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
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
