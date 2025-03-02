"use client";

import Breadcrumb from "@/components/pages/document/Breadcrumb";
import PaginationButtons from "@/components/pages/document/PaginationButtons";
import ParameterReference from "@/components/pages/document/ParameterReference";
import TableOfContents from "@/components/pages/document/TableOfContents";
const APIDocumentation = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      // alert("Code copied to clipboard!");
    });
  };
  const tableOfContents = [
    {
      title: "Business Plan Analysis API",
      links: [
        { label: "Request Parameters", href: "#RequestParameters" },
        { label: "Parameter Reference", href: "#ParameterReference" },
        { label: "Example Request", href: "#ExampleRequest" },
        { label: "Response Format", href: "#ResponseFormat" },
      ],
    },
    {
      title: "Embeddable Widget API",
      links: [
        { label: "Example Request", href: "#ExampleRequest" },
        { label: "Example Response", href: "#ExampleResponse" },
      ],
    },
  ];
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#121212] text-white max-w-screen overflow-x-scroll scrollbar-hover">
      <div className="flex-1 p-3 md:p-8 max-w-full md:max-w-3xl  scrollbar-hover">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "API Documentation", href: "/api-documentation" },
          ]}
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#C0C0C0]">
          API Documentation
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#C0C0C0]">
            Business Plan Analysis API
          </h2>
          <div className="w-full max-w-4xl mx-auto">
            {/* Mobile-first approach with card-like view */}
            <div className="block md:hidden">
              <div className="space-y-4">
                {/* Endpoint Section */}
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="font-bold text-gray-200 mb-2">Endpoint</div>
                  <div className="bg-gray-800 p-2 rounded">
                    <span className="text-blue-500 font-mono">POST</span>
                    <code className="block mt-1 text-sm overflow-x-auto">
                      https://idxsolana.io/api/get-idea-result
                    </code>
                  </div>
                </div>

                {/* Description Section */}
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="font-bold text-gray-200 mb-2">
                    Description
                  </div>
                  <div className="bg-gray-800 p-2 rounded text-sm">
                    This API analyzes user inputs about their business idea,
                    circumstances, and plans to generate a comprehensive
                    business plan analysis and success prediction.
                  </div>
                </div>

                {/* Authentication Section */}
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="font-bold text-gray-200 mb-2">
                    Authentication
                  </div>
                  <div className="bg-gray-800 p-2 rounded text-sm">
                    Authentication is not required.
                  </div>
                </div>
              </div>
            </div>

            {/* Traditional table view for larger screens */}
            <div className="hidden md:block overflow-hidden rounded-lg">
              <table className="w-full border-collapse bg-gray-900">
                <tbody>
                  <tr className="border-b border-gray-700">
                    <th className="p-4 bg-gray-800 text-left w-1/4">
                      Endpoint
                    </th>
                    <td className="p-4">
                      <span className="text-blue-500 font-mono">POST</span>{" "}
                      <code className="bg-gray-800 px-2 py-1 rounded">
                        https://idxsolana.io/api/get-idea-result
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <th className="p-4 bg-gray-800 text-left">Description</th>
                    <td className="p-4 bg-gray-700">
                      This API analyzes user inputs about their business idea,
                      circumstances, and plans to generate a comprehensive
                      business plan analysis and success prediction.
                    </td>
                  </tr>
                  <tr>
                    <th className="p-4 bg-gray-800 text-left">
                      Authentication
                    </th>
                    <td className="p-4">Authentication is not required.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <section id="RequestParameters" className="pt-16 overflow-scroll">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-left text-[#C0C0C0]">
              Request Parameters
            </h3>
            <p className="text-gray-300 text-left text-lg">
              All numeric parameters must be integers. The request body should
              be a JSON object containing:
            </p>
          </section>
        </section>
        <section id="ParameterReference" className="pt-16 overflow-scroll">
          <ParameterReference />
        </section>
        <section className="mb-12 overflow-scroll max-w-screen">
          <section id="ExampleRequest" className="pt-16">
            <h3 className="text-2xl md:text-3xl text-left font-semibold mb-4 text-[#C0C0C0]">
              Example Request
            </h3>
            <pre className="bg-[#1E1E1E] p-4 rounded text-sm text-[#C0C0C0] overflow-x-auto relative scrollbar-hover">
              {`{
              "idea_stage": 2,
              "work_status": 3,
              "project_type": 3,
              "job_relation": 1,
              "investment_plan": 4,
              "work_experience": 4,
              "project_location": 1,
              "idea_description": "AI-powered fitness application that provides personalized workout routines based on user's fitness level and goals",
              "daily_hours": 4,
              "timeframe": 2
            }`}
              <button
                className="absolute top-2 right-2 bg-[#3B3B3B] text-white px-2 py-1 rounded text-xs"
                onClick={() =>
                  copyToClipboard(`{
                  "idea_stage": 5,
                  "work_status": 3,
                  "project_type": 3,
                  "job_relation": 5,
                  "investment_plan": 4,
                  "work_experience": 4,
                  "project_location": 1,
                  "idea_description": "AI-powered fitness application that provides personalized workout routines based on user's fitness level and goals",
                  "daily_hours": 4,
                  "timeframe": 2
                }`)
                }
              >
                Copy Code
              </button>
            </pre>
          </section>
          <section id="ResponseFormat" className="pt-16">
            <h3 className="text-2xl md:text-3xl text-left font-semibold mb-4 text-[#C0C0C0]">
              Response Format
            </h3>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 text-[#C0C0C0]">
              Success Response (200 OK)
            </h4>
            <pre className="bg-[#1E1E1E] p-4 rounded text-sm text-[#C0C0C0] overflow-x-auto relative scrollbar-hover">
              {`{
              "status": 200,
              "error": false,
              "message": "Success",
              "data": {
                "resultText": "Detailed analysis and recommendations...",
                "success_percentage": "75.23"
              }
            }`}
              <button
                className="absolute top-2 right-2 bg-[#3B3B3B] text-white px-2 py-1 rounded text-xs"
                onClick={() =>
                  copyToClipboard(`{
                  "status": 200,
                  "error": false,
                  "message": "Success",
                  "data": {
                    "resultText": "Detailed analysis and recommendations...",
                    "success_percentage": "75.23"
                  }
                }`)
                }
              >
                Copy Code
              </button>
            </pre>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 text-[#C0C0C0]">
              Validation Error Response (400)
            </h4>
            <pre className="bg-[#1E1E1E] p-4 rounded text-sm text-[#C0C0C0] overflow-x-auto relative scrollbar-hover">
              {`{
              "status": 400,
              "error": true,
              "message": "Validation error message",
              "data": null
            }`}
              <button
                className="absolute top-2 right-2 bg-[#3B3B3B] text-white px-2 py-1 rounded text-xs"
                onClick={() =>
                  copyToClipboard(`{
                  "status": 400,
                  "error": true,
                  "message": "Validation error message",
                  "data": null
                }`)
                }
              >
                Copy Code
              </button>
            </pre>
          </section>
          <section>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 text-[#C0C0C0]">
              Server Error (500)
            </h4>
            <pre className="bg-[#1E1E1E] p-4 rounded text-sm text-[#C0C0C0] overflow-x-auto relative scrollbar-hover">
              {`{
              "status": 500,
              "error": true,
              "message": "An error occurred while processing your request",
              "data": null
            }`}
              <button
                className="absolute top-2 right-2 bg-[#3B3B3B] text-white px-2 py-1 rounded text-xs"
                onClick={() =>
                  copyToClipboard(`{
                  "status": 500,
                  "error": true,
                  "message": "An error occurred while processing your request",
                  "data": null
                }`)
                }
              >
                Copy Code
              </button>
            </pre>
          </section>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#C0C0C0]">
            Embeddable Widget API
          </h2>
          <div className="w-full max-w-4xl mx-auto">
            {/* Mobile-first approach with a card-like view for small screens */}
            <div className="block md:hidden">
              <div className="space-y-4">
                {/* Base URL Section */}
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="font-bold text-gray-200 mb-2">Base URL</div>
                  <code className="block bg-gray-800 p-2 rounded text-sm overflow-x-auto scrollbar-hover">
                    https://idxsolana.io/api/widget/:uniqueKey
                  </code>
                </div>

                {/* Endpoint Section */}
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="font-bold text-gray-200 mb-2">Endpoint</div>
                  <div className="bg-gray-800 p-2 rounded">
                    <span className="text-green-500 font-mono">GET</span>
                    <code className="block mt-1 text-sm overflow-x-auto">
                      /api/widget/:uniqueKey
                    </code>
                  </div>
                </div>

                {/* Response Section */}
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="font-bold text-gray-200 mb-2">Response</div>
                  <div className="bg-gray-800  p-2 rounded">
                    <p className="text-sm text-gray-200 text-left mb-2">
                      The API returns an HTML response that includes:
                    </p>
                    <ul className="list-disc ml-4 space-y-2 text-sm">
                      <li>
                        <span className="font-semibold">Logo:</span> A logo
                        image hosted at{" "}
                        <code className="bg-gray-700 px-1 rounded">
                          https://idxsolana.io/logo.png
                        </code>
                      </li>
                      <li>
                        <span className="font-semibold">
                          Validation Status:
                        </span>{" "}
                        A message confirming the validation status
                      </li>
                      <li>
                        <span className="font-semibold">
                          Success Percentage:
                        </span>{" "}
                        The success percentage associated with the unique key
                      </li>
                      <li>
                        <span className="font-semibold">
                          Trustpilot Widget:
                        </span>{" "}
                        An embedded Trustpilot widget
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Traditional table view for larger screens */}
            <div className="hidden md:block overflow-hidden rounded-lg">
              <table className="w-full border-collapse bg-gray-900">
                <tbody>
                  <tr className="border-b border-gray-700">
                    <th className="p-4 bg-gray-800 text-left w-1/4">
                      Base URL
                    </th>
                    <td className="p-4">
                      <code className="bg-gray-800 px-2 py-1 rounded">
                        https://idxsolana.io/api/widget/:uniqueKey
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <th className="p-4 bg-gray-800 text-left">Endpoint</th>
                    <td className="p-4">
                      <span className="text-green-500 font-mono">GET</span>{" "}
                      <code className="bg-gray-800 px-2 py-1 rounded">
                        /api/widget/:uniqueKey
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <th className="p-4 bg-gray-800 text-left align-top">
                      Response
                    </th>
                    <td className="p-4">
                      <p className="mb-2">
                        The API returns an HTML response that includes:
                      </p>
                      <ul className="list-disc ml-6 space-y-2">
                        <li>
                          <span className="font-semibold">Logo:</span> A logo
                          image hosted at{" "}
                          <code className="bg-gray-800 px-2 py-1 rounded">
                            https://idxsolana.io/logo.png
                          </code>
                        </li>
                        <li>
                          <span className="font-semibold">
                            Validation Status:
                          </span>{" "}
                          A message confirming the validation status
                        </li>
                        <li>
                          <span className="font-semibold">
                            Success Percentage:
                          </span>{" "}
                          The success percentage associated with the unique key
                        </li>
                        <li>
                          <span className="font-semibold">
                            Trustpilot Widget:
                          </span>{" "}
                          An embedded Trustpilot widget
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <section id="ExampleRequest">
            <h3 className="text-2xl md:text-3xl text-left font-semibold pt-16 text-[#C0C0C0]">
              Example Request
            </h3>
            <pre className="bg-[#1E1E1E] p-4 rounded text-sm text-[#C0C0C0] overflow-x-auto relative scrollbar-hover">
              {`<iframe
              src="https://idxsolana.io/api/widget/415a86cd"
              width="300"
              height="200"
              style="border: none;">
            </iframe>`}
              <button
                className="absolute top-2 right-2 bg-[#3B3B3B] text-white px-2 py-1 rounded text-xs"
                onClick={() =>
                  copyToClipboard(`<iframe
                  src="https://idxsolana.io/api/widget/415a86cd"
                  width="300"
                  height="200"
                  style="border: none;">
                </iframe>`)
                }
              >
                Copy Code
              </button>
            </pre>
          </section>
          <section id="ExampleResponse" className="pt-16 rounded-lg shadow-md">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-left text-[#C0C0C0]">
              Example Response
            </h3>
            <div className="overflow-hidden rounded-lg border bg-white">
              <iframe
                src="https://idxsolana.io/api/widget/415a86cd"
                width="100%"
                height="400"
                className="w-full h-96"
                title="Example Response Widget"
                frameBorder="0"
                loading="lazy"
              >
                Your browser does not support iframes.
              </iframe>
            </div>
          </section>
        </section>
        <PaginationButtons
          previous={{ href: "/technology-stack", name: "Technology Stack" }}
          next={{ href: "/security-protocols", name: "Security Protocols" }}
        />
      </div>

      <TableOfContents data={tableOfContents} className="w-full md:w-1/4" />
    </div>
  );
};
export default APIDocumentation;
