"use client";

import Breadcrumb from "@/components/pages/document/Breadcrumb";
import PaginationButtons from "@/components/pages/document/PaginationButtons";
import TableOfContents from "@/components/pages/document/TableOfContents";

const SystemArchitecture = () => {
    const tableOfContents = [
        {
          title: "System Architecture",
          links: [
            { label: "Presentation Layer (Frontend/UI)", href: "#PresentationLayer" },
            { label: "Application Layer (Backend/API)", href: "#ApplicationLayer" },
            { label: "Data Layer (Database)", href: "#DataLayer" },
            { label: "System Architecture Diagram", href: "#SystemArchitectureDiagram" },
          ],
        },
        // {
        //   title: "Core Concepts",
        //   links: [
        //     { label: "Solana Account Model", href: "#" },
        //     { label: "Transactions and Instructions", href: "#" },
        //     { label: "Fees on Solana", href: "#" },
        //     { label: "Programs on Solana", href: "#" }, 
        //   ],
        // },
      ];
  return (
    <div className="min-h-screen flex bg-[#121212] text-white">
      <div className="flex-1 p-8 max-w-3xl overflow-y-scroll">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "System Architecture", href: "/system-architecture" },
          ]}
        />
        <h1 className="text-6xl font-bold mb-6 text-[#C0C0C0]">
          System Architecture
        </h1>

        <section id="PresentationLayer" className="pt-16">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">
            Presentation Layer (Frontend/UI)
          </h2>
          <p className="mb-4 text-gray-300 text-left text-lg">
            <strong>Description:</strong> This layer handles the user interface and user interaction. It communicates with the backend to display dynamic content and ensures a seamless user experience.
          </p>
          <p className="mb-2 text-gray-300 text-left text-lg">
            <strong>Technologies:</strong>
          </p>
          <ul className="list-disc ml-6 mb-4 text-gray-300 text-left text-lg">
            <li>React.js for building interactive and reusable UI components.</li>
            <li>HTML5/CSS3 for structuring and styling.</li>
            <li>TailwindCSS for design and layout.</li>
            <li>JavaScript for functionality and logic.</li>
          </ul>
          <p className="mb-2 text-gray-300 text-left text-lg">
            <strong>Key Responsibilities:</strong>
          </p>
          <ul className="list-disc ml-6 text-gray-300 text-left text-lg">
            <li>Display data fetched from the backend.</li>
            <li>Send user inputs and interactions to the backend for processing.</li>
            <li>Provide responsive and interactive UI/UX.</li>
          </ul>
        </section>

        <section id="ApplicationLayer" className="pt-16">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">
            Application Layer (Backend/API)
          </h2>
          <p className="mb-4 text-gray-300 text-left text-lg">
            <strong>Description:</strong> The application layer processes the business logic, handles authentication, and serves as the intermediary between the frontend and the database.
          </p>
          <p className="mb-2 text-gray-300 text-left text-lg">
            <strong>Technologies:</strong>
          </p>
          <ul className="list-disc ml-6 mb-4 text-gray-300 text-left text-lg">
            <li>Node.js as the server runtime.</li>
            <li>Express.js for handling HTTP requests and routing.</li>
            <li>JWT for authentication.</li>
            <li>RESTful API for communication with the frontend.</li>
          </ul>
          <p className="mb-2 text-gray-300 text-left text-lg">
            <strong>Key Responsibilities:</strong>
          </p>
          <ul className="list-disc ml-6 text-gray-300 text-left text-lg">
            <li>Process and validate requests from the frontend.</li>
            <li>Implement business logic and rules.</li>
            <li>Manage authentication and user sessions.</li>
            <li>Expose APIs for the frontend to fetch data or trigger actions.</li>
          </ul>
        </section>

        <section id="DataLayer" className="pt-16">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">
            Data Layer (Database)
          </h2>
          <p className="mb-4 text-gray-300 text-left text-lg">
            <strong>Description:</strong> This layer manages data storage and retrieval. It ensures data is persisted securely and efficiently.
          </p>
          <p className="mb-2 text-gray-300 text-left text-lg">
            <strong>Technologies:</strong>
          </p>
          <ul className="list-disc ml-6 mb-4 text-gray-300 text-left text-lg">
            <li>MySQL for relational data storage.</li>
            <li>PhpMyAdmin for database interaction.</li>
          </ul>
          <p className="mb-2 text-gray-300 text-left text-lg">
            <strong>Key Responsibilities:</strong>
          </p>
          <ul className="list-disc ml-6 text-gray-300 text-left text-lg">
            <li>Store application data such as user profiles, transactions, or content.</li>
            <li>Handle data queries, updates, and relationships.</li>
            <li>Ensure data consistency and integrity.</li>
          </ul>
        </section>

        <section id="SystemArchitectureDiagram" className=" pt-16">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">
            System Architecture Diagram
          </h2>
          <p className="mb-4 text-gray-300 text-left text-lg">
            Here’s how the components are interconnected:
          </p>
          <ul className="list-disc ml-6 text-gray-300 text-left text-lg">
            <li>User Interface (React): Sends requests to and receives responses from the backend.</li>
            <li>API Gateway (Express.js): Processes frontend requests, applies business logic, and communicates with the database.</li>
            <li>Database (MySQL): Stores and retrieves data as required by the backend.</li>
          </ul>
        </section>
        <PaginationButtons previous={{ name: "User Guide", href: "/user-guide" }} next={{ name: "Technology Stack ", href: "/technology-stack" }}/>
      </div>

      <TableOfContents data={tableOfContents}/>
    </div>
  );
};

export default SystemArchitecture;
