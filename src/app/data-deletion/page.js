"use client";
import { useState } from "react";
import axios from "axios";
import { RestAPI } from "@/config/Api";

const DeletionCallback = () => {
  const [signedRequest, setSignedRequest] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSignedRequest(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${RestAPI}/deletion_callback`, {
        signed_request: signedRequest,
      });

      setResponse(result.data);
      setError(null);
    } catch (err) {
      setError("Failed to process the request. Please try again.");
      console.error("Error:", err);
    }
  };
  return (
    <div className="max-w-lg mx-auto my-5 p-6 min-h-screen bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Data Deletion Callback</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="signedRequest"
            className="block text-sm font-medium text-gray-700"
          >
            Signed Request:
          </label>
          <input
            type="text"
            id="signedRequest"
            value={signedRequest}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
      {response && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          <h2 className="text-lg font-semibold">Response</h2>
          <pre className="whitespace-pre-wrap break-words">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
};
export default DeletionCallback;