"use client";

import Breadcrumb from "@/components/pages/document/Breadcrumb";
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
      title: "Getting Started",
      links: [
        { label: "Quick Start", href: "#" },
        { label: "Installation", href: "#" },
        { label: "Intro to Development", href: "#" },
        { label: "Wallets", href: "#" },
      ],
    },
    {
      title: "Core Concepts",
      links: [
        { label: "Solana Account Model", href: "#" },
        { label: "Transactions and Instructions", href: "#" },
        { label: "Fees on Solana", href: "#" },
        { label: "Programs on Solana", href: "#" },
      ],
    },
  ];
//   const parameters = [
//     {
//       parameter: "idea_stage",
//       type: "Integer",
//       required: "Yes",
//       validationRules: "One of: 1, 3, 5",
//       description: "Current stage of the business",
//     },
//     {
//       parameter: "work_status",
//       type: "Integer",
//       required: "Yes",
//       validationRules: "One of: 1, 2, 3, 4, 5",
//       description: "Current employment status",
//     },
//     {
//       parameter: "project_type",
//       type: "Integer",
//       required: "Yes",
//       validationRules: "Range: 1 to 21",
//       description: "Type/sector of the project",
//     },
//     {
//       parameter: "job_relation",
//       type: "Integer",
//       required: "Yes",
//       validationRules: "One of: 2, 5",
//       description: "Whether current job relates",
//     },
//     {
//       parameter: "investment_plan",
//       type: "Integer",
//       required: "Yes",
//       validationRules: "One of: 1, 2, 3, 4, 5",
//       description: "Planned investment range",
//     },
//     {
//       parameter: "work_experience",
//       type: "Integer",
//       required: "Yes",
//       validationRules: "One of: 0, 3, 4, 5",
//       description: "Years of relevant work experience",
//     },
//     {
//       parameter: "project_location",
//       type: "Integer",
//       required: "Yes",
//       validationRules: "Valid country ID",
//       description: "Country ID for project location",
//     },
//     {
//       parameter: "idea_description",
//       type: "String",
//       required: "Yes",
//       validationRules: "Min: 50 chars, Max: 250 chars",
//       description: "Description of business idea",
//     },
//     {
//       parameter: "daily_hours",
//       type: "Integer",
//       required: "Yes",
//       validationRules: "One of: 1, 2, 3, 4, 5",
//       description: "Daily hours available",
//     },
//     {
//       parameter: "timeframe",
//       type: "Integer",
//       required: "Yes",
//       validationRules: "One of: 1, 2, 3",
//       description: "Estimated development timeframe",
//     },
//   ];
  return (
    <div className="min-h-screen flex bg-[#121212] text-white">
      <div className="flex-1 p-8 max-w-3xl overflow-y-scroll">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "API Documentation", href: "/api-documentation" },
          ]}
        />
        <h1 className="text-6xl font-bold mb-6 text-[#C0C0C0]">
          API Documentation
        </h1>

        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">
            Business Plan Analysis API
          </h2>
          <table className="w-full mb-8 border border-gray-600 text-left">
            <tbody>
              <tr>
                <th className="p-4 bg-[#1E1E1E]">Endpoint</th>
                <td className="p-4">
                  POST <code>https://ideax.in/api/get-idea-result</code>
                </td>
              </tr>
              <tr>
                <th className="p-4 bg-[#1E1E1E]">Description</th>
                <td className="p-4 bg-[#121212]">
                  This API analyzes user inputs about their business idea,
                  circumstances, and plans to generate a comprehensive business
                  plan analysis and success prediction.
                </td>
              </tr>
              <tr>
                <th className="p-4 bg-[#1E1E1E]">Authentication</th>
                <td className="p-4">Authentication is not required.</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-3xl font-semibold mb-4 text-left text-[#C0C0C0]">
            Request Parameters
          </h3>
          <p className="mb-4 text-gray-300 text-left text-lg">
            All numeric parameters must be integers. The request body should be
            a JSON object containing:
          </p>
          <div className="w-full overflow-x-auto shadow-lg rounded-lg"></div>
          <ul className="list-disc ml-6 mb-8 text-gray-300">
            <li>
              <strong>idea_stage:</strong> 1 (Still an idea), 3 (Made a plan), 5
              (Already started)
            </li>
            <li>
              <strong>work_status:</strong> 1 (Unemployed), 2 (Working
              full-time), 3 (Working part-time), etc.
            </li>
            <li>
              <strong>project_type:</strong> 1 (Services), 2 (Retail), ..., 21
              (Other)
            </li>
            <li>
              <strong>job_relation:</strong> 2 (No), 5 (Yes)
            </li>
            <li>
              <strong>investment_plan:</strong> 1 (&lt; 1 Lakh ₹), ..., 5 (&gt;
              1 Crore ₹)
            </li>
            <li>
              <strong>work_experience:</strong> 0 (No experience), ..., 5 (More
              than 5 years)
            </li>
            <li>
              <strong>daily_hours:</strong> 1 (&lt; 1 hour), ..., 5 (&gt; 6
              hours)
            </li>
            <li>
              <strong>timeframe:</strong> 1 (&lt; 3 months), 2 (3-6 months), 3
              (6-12 months)
            </li>
          </ul>
        </section>
        <ParameterReference/>
        <section className="mb-12h">
          <h3 className="text-3xl font-semibold mb-4 text-[#C0C0C0]">
            Example Request
          </h3>
          <pre className="bg-[#1E1E1E] p-4 rounded text-sm text-[#C0C0C0] overflow-x-auto relative scrollbar-hover">
            {`{
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

          <h3 className="text-3xl font-semibold mb-4 text-[#C0C0C0]">
            Response Format
          </h3>
          <h4 className="text-2xl font-semibold mb-2 text-[#C0C0C0]">
            Success Response (200 OK)
          </h4>
          <pre className="bg-[#1E1E1E] p-4 rounded text-sm text-[#C0C0C0] overflow-x-auto relative">
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

          <h4 className="text-2xl font-semibold mb-2 text-[#C0C0C0]">
            Validation Error Response (400)
          </h4>
          <pre className="bg-[#1E1E1E] p-4 rounded text-sm text-[#C0C0C0] overflow-x-auto relative">
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

          <h4 className="text-2xl font-semibold mb-2 text-[#C0C0C0]">
            Server Error (500)
          </h4>
          <pre className="bg-[#1E1E1E] p-4 rounded text-sm text-[#C0C0C0] overflow-x-auto relative">
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

        <section className="mb-12 ">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">
            Embeddable Widget API
          </h2>
          <table className="w-full mb-8 border border-gray-600 text-left">
            <tbody>
              <tr>
                <th className="p-4 bg-[#1E1E1E]">Base URL</th>
                <td className="p-4 ">
                  <code>https://ideax.in/api/widget/:uniqueKey</code>
                </td>
              </tr>
              <tr>
                <th className="p-4 bg-[#1E1E1E]">Endpoint</th>
                <td className="p-4 bg-[#121212]">
                  GET <code>/api/widget/:uniqueKey</code>
                </td>
              </tr>
              <tr>
                <th className="p-4 bg-[#1E1E1E]">Response</th>
                <td className="p-4 ">
                  The API returns an HTML response that includes:
                  <ul className="list-disc ml-6 mt-2">
                    <li>
                      <strong>Logo:</strong> A logo image hosted at{" "}
                      <code>https://ideax.in/logo.png</code>.
                    </li>
                    <li>
                      <strong>Validation Status:</strong> A message confirming
                      the validation status.
                    </li>
                    <li>
                      <strong>Success Percentage:</strong> The success
                      percentage associated with the unique key.
                    </li>
                    <li>
                      <strong>Trustpilot Widget:</strong> An embedded Trustpilot
                      widget.
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-3xl font-semibold mb-4 text-left text-[#C0C0C0]">
            Example Response (HTML)
          </h3>
          <pre className="bg-[#1E1E1E] p-4 rounded text-sm text-[#C0C0C0] overflow-x-auto relative">
            {`<iframe
  src="https://idxsolana.io/api/widget/abc123"
  width="300"
  height="200"
  style="border: none;">
</iframe>`}
<button
              className="absolute top-2 right-2 bg-[#3B3B3B] text-white px-2 py-1 rounded text-xs"
              onClick={() =>
                copyToClipboard(`<iframe
  src="https://idxsolana.io/api/widget/abc123"
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
      </div>

      <TableOfContents data={tableOfContents}/>
    </div>
  );
};

export default APIDocumentation;
