"use client";
import useAxiosWithAuth from "@/config/useAxiosWithAuth";
import { Eye, Trash2 } from "lucide-react";
import Link from "next/link";
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

  const handleDelete = async (id) => {
    try {
      const endpoint = `delete-result/${id}`;
      await axiosInstance({
        method: "delete",
        url: endpoint,
      });
      setResultHistory((prev) => prev.filter((result) => result.id !== id));
    } catch (error) {
      console.error("Error deleting result:", error);
    }
  };

  return (
    <div className="p-4 mx-auto min-h-screen bg-gray-100">
      <div className="max-w-4xl bg-white rounded-lg shadow-md mx-auto">
        <header className="p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Idea Result History
          </h2>
        </header>
        <section className="p-4 flex flex-wrap gap-4 justify-center">
          {resultHistory?.map((result) => (
            <div
              key={result.id}
              className="relative w-72 h-40 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md overflow-hidden flex flex-col justify-end p-4"
            >
              {/* <div className="absolute inset-y-0 right-0 w-16 bg-blue-300 flex justify-center items-center rotate-6 shadow-lg transform translate-x-4">
                <span className="text-white text-sm font-bold">Ticket</span>
              </div> */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {result?.wizardResult?.idea_description}
                </h3>
              </div>
              <div className="flex justify-between mt-4">
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
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ResultHistory;
