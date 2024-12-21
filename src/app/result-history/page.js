"use client";
import useAxiosWithAuth from "@/config/useAxiosWithAuth";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ResultHistory = () => {
  // Sample data - replace with your actual data source
  const axiosInstance = useAxiosWithAuth();

  // const [results] = useState([
  //   { id: 1, date: "2024-12-21", idea: "Toy Store", key: "dsffsadf" },
  //   { id: 2, date: "2024-12-20", idea: "Electric Car", key: "ksdffsey" },
  //   { id: 3, date: "2024-12-19", idea: "Online Book Store", key: "kesdfsy" },
  // ]);
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
  console.log(resultHistory, "=======================------------------");
  return (
    <div className="p-4  mx-auto min-h-screen bg-gray-100">
      <div className="max-w-4xl bg-white rounded-lg shadow-md mx-auto">
        <header className="p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Idea Result History
          </h2>
        </header>
        <section className="p-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                    Idea
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                    Date
                  </th>

                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {resultHistory?.map((result) => (
                  <tr
                    key={result.id}
                    className="border-t hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-2 text-sm text-gray-800">
                      {result?.wizardResult?.idea_description}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-800">
                      {new Date(result?.createdAt).toLocaleString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: false,
                      })}
                    </td>
                    <td className="px-4 py-2">
                      <Link
                        href={`/wizard-result/${result?.uniqueKey}`}
                        className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded focus:outline-none focus:ring focus:ring-blue-200"
                        aria-label={`View details of ${result.idea}`}
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};
export default ResultHistory;
