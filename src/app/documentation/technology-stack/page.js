"use client";

import Breadcrumb from "@/components/pages/document/Breadcrumb";
import PaginationButtons from "@/components/pages/document/PaginationButtons";
import TableOfContents from "@/components/pages/document/TableOfContents";

const TechnologyStack = () => {
    const tableOfContents = [
        {
          title: "Technology Stack",
          links: [
            { label: "Frontend", href: "#Frontend" },
            { label: "Backend", href: "#Backend" },
            { label: "Database", href: "#Database" },
            { label: "Authentication", href: "#Authentication" },
            { label: "Hosting/Deployment", href: "#HostingDeployment" },
            { label: "API Communication", href: "#APICommunication" },
            { label: "Version Control", href: "#VersionControl" },
            { label: "Package Management", href: "#PackageManagement" },
            { label: "Styling", href: "#Styling" },
          ],
        },
      ];
  return (
    <div className="min-h-screen flex bg-[#121212] text-white">
      <div className="flex-1 p-8 max-w-3xl overflow-y-scroll">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Technology Stack", href: "/technology-stack" },
          ]}
        />
        <h1 className="text-6xl font-bold mb-0 text-[#C0C0C0]">
          Technology Stack
        </h1>
        <section id="Frontend" className="pt-16">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">Frontend</h2>
          <ul className="list-disc ml-6 text-gray-300 text-left text-lg">
            <li>
              <strong>React.js:</strong> A JavaScript library for building user interfaces with reusable components.
            </li>
            <li>
              <strong>HTML5/CSS3:</strong> For structuring and styling the frontend.
            </li>
            <li>
              <strong>JavaScript:</strong> For adding interactivity and type safety to the React components.
            </li>
          </ul>
        </section>

        <section id="Backend" className="pt-16">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">Backend</h2>
          <ul className="list-disc ml-6 text-gray-300 text-left text-lg">
            <li>
              <strong>Node.js:</strong> A JavaScript runtime environment for server-side development.
            </li>
            <li>
              <strong>Express.js:</strong> A web application framework for building APIs and handling server-side logic.
            </li>
          </ul>
        </section>

        <section id="Database" className="pt-16">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">Database</h2>
          <ul className="list-disc ml-6 text-gray-300 text-left text-lg">
            <li>
              <strong>MySQL:</strong> For storing and managing data.
            </li>
          </ul>
        </section>

        <section id="Authentication" className="pt-16">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">
            Authentication
          </h2>
          <ul className="list-disc ml-6 text-gray-300 text-left text-lg">
            <li>
              <strong>JWT (JSON Web Tokens):</strong> For user authentication and authorization.
            </li>
            <li>
              <strong>OAuth:</strong> For third-party authentication (Google, LinkedIn).
            </li>
          </ul>
        </section>

        <section id="HostingDeployment" className="pt-16">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">
            Hosting/Deployment
          </h2>
          <ul className="list-disc ml-6 text-gray-300 text-left text-lg">
            <li>
              <strong>Frontend:</strong> Deployed on Hostinger.
            </li>
            <li>
              <strong>Backend:</strong> Deployed on Hostinger.
            </li>
          </ul>
        </section>

        <section id="APICommunication" className="pt-16">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">
            API Communication
          </h2>
          <ul className="list-disc ml-6 text-gray-300 text-left text-lg">
            <li>
              <strong>RESTful APIs:</strong> For communication between frontend and backend.
            </li>
          </ul>
        </section>

        <section id="VersionControl" className="pt-16">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">
            Version Control
          </h2>
          <ul className="list-disc ml-6 text-gray-300 text-left text-lg">
            <li>
              <strong>GitHub:</strong> For code hosting and collaboration.
            </li>
          </ul>
        </section>

        <section id="PackageManagement" className="pt-16">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">
            Package Management
          </h2>
          <ul className="list-disc ml-6 text-gray-300 text-left text-lg">
            <li>
              <strong>npm:</strong> For managing project dependencies.
            </li>
          </ul>
        </section>

        <section id="Styling" className="pt-16">
          <h2 className="text-4xl font-semibold mb-4 text-[#C0C0C0]">
            Styling
          </h2>
          <ul className="list-disc ml-6 text-gray-300 text-left text-lg">
            <li>
              <strong>CSS Frameworks:</strong> TailwindCSS
            </li>
          </ul>
        </section>
        <PaginationButtons previous={{ name: "System Architecture", href: "/system-architecture" }} next={{ name: "API Documentation ", href: "/api-documentation" }}/>
      </div>
      <TableOfContents data={tableOfContents}/>
    </div>
  );
};

export default TechnologyStack;
