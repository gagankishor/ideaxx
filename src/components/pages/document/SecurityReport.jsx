// import React from 'react';
import {
  ChevronDown,
  FileText,
  Tool,
  AlertTriangle,
  Book,
  Calendar,
  CheckCircle,
} from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";

const SecurityReport = () => {
  const [activeSection, setActiveSection] = useState("");

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? "" : section);
  };

  const SectionHeader = ({ title, icon: Icon, sectionKey }) => (
    <div
      className="flex items-center justify-between bg-blue-50 p-4 rounded-t-lg cursor-pointer"
      onClick={() => toggleSection(sectionKey)}
    >
      <h3 className="text-xl font-semibold flex items-center">
        {Icon && <Icon className="w-5 h-5 mr-2" />}
        {title}
      </h3>
      <ChevronDown
        className={`w-5 h-5 transform transition-transform ${
          activeSection === sectionKey ? "rotate-180" : ""
        }`}
      />
    </div>
  );
  SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
    sectionKey: PropTypes.string.isRequired,
  };
  return (
    <div className="max-w-6xl mx-auto p-6 bg-black">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">
          Level 1 Web Application Security Report of IDEAX Platform
        </h1>
        <h2 className="text-2xl text-blue-600 mb-6">For IDEAX</h2>

        <div className="text-lg font-semibold mb-2">Audited By:</div>
        <div className="text-white mb-6">
          <p className="font-bold text-white">
            CYBER  SECURITY SERVICES, Jaipur
          </p>
          <p className="italic text-white">LLP Id No. EAK-9018</p>
        </div>

        {/* <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p>
                CERT-In Empanelled Information Security Auditing Organization
                (2020-2024)
              </p>
              <p>Certified ISO 9001:2015 (No. IAS0508Q2286)</p>
              <p>ISO/IEC 27001:2013 (No. IS-205021080918)</p>
              <p>Registered with MSME No.: UDYAM-RJ-17-0052608</p>
            </div>
            <div>
              <p>
                Certificate of Recognization as #Startupindia No.: DIPP77174
              </p>
              <p>Registered with iSTART Rajasthan No. : 5F7054D</p>
              <p>
                Registered with Government e-Marketplace GeM Seller Id :
                IZ8O210002192567
              </p>
              <p>
                Member Data Security Council of India (DSCI): DSCI/AM/2018/03
              </p>
            </div>
          </div>
        </div> */}
        <div className="text-right text-gray-100">
          <p className="text-white">December 23, 2024</p>
        </div>
      </div>
      <section className="mb-8">
        <SectionHeader
          title="Document Control"
          icon={FileText}
          sectionKey="docControl"
        />
        {activeSection === "docControl" && (
          <div className="p-4 border border-blue-100 rounded-b-lg">
            <table className="w-full">
              <tbody className="divide-y">
                <tr>
                  <td className="py-3 font-semibold w-1/3">Document Title</td>
                  <td>
                    Level 1 Web Application Security Report - IDEAX Platform
                  </td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Document ID</td>
                  <td>IDEAX-SEC-2024-001</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Document Version</td>
                  <td>1.0</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Prepared by</td>
                  <td>Ravi Kumar</td>
                </tr>
                {/* <tr>
                  <td className="py-3 font-semibold">Verified by</td>
                  <td>[Verifier Name]</td>
                </tr> */}
                <tr>
                  <td className="py-3 font-semibold">Release date</td>
                  <td>December 23, 2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>
      <section className="mb-8">
        <SectionHeader title="Introduction" icon={Book} sectionKey="intro" />
        {activeSection === "intro" && (
          <div className="p-4 border border-blue-100 rounded-b-lg">
            <p className="mb-4 text-white">
              The Audit Team conducted a comprehensive web-based vulnerability
              assessment and penetration testing (VAPT) of the IDEAX Platform, a
              comprehensive business management solution that includes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Project Management System</li>
              <li>Real-time Analytics Dashboard</li>
              <li>Document Management System</li>
              <li>Collaboration Tools</li>
              <li>Automated Workflow System</li>
              <li>Customizable Dashboards</li>
              <li>Integration Capabilities</li>
            </ul>
            <table className="w-full mt-6">
              <thead className="bg-[#1E1E1E]">
                <tr>
                  <th className="py-2 px-4 text-left">S.No</th>
                  <th className="py-2 px-4 text-left">Website/Portal Name</th>
                  <th className="py-2 px-4 text-left">Test URL</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">1.</td>
                  <td className="py-2 px-4">IDEAX Platform</td>
                  <td className="py-2 px-4">https://idxsolana.io/</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>
      <section className="mb-8">
        <SectionHeader
          title="Audit Activities and Timelines"
          icon={Calendar}
          sectionKey="timeline"
        />
        {activeSection === "timeline" && (
          <div className="p-4 border border-blue-100 rounded-b-lg">
            <table className="w-full">
              <tbody className="divide-y">
                <tr>
                  <td className="py-3 font-semibold w-1/2">
                    Work Order Received
                  </td>
                  <td>December 1, 2024</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">URL Received</td>
                  <td>December 5, 2024</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">L1 Report Submitted</td>
                  <td>December 23, 2024</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">
                    Audit conducted (From-To)
                  </td>
                  <td>December 7, 2024 - December 21, 2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>
      <section className="mb-8">
        <SectionHeader title="Tools Used" icon={Tool} sectionKey="tools" />
        {activeSection === "tools" && (
          <div className="p-4 border border-blue-100 rounded-b-lg overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#1E1E1E]">
                <tr>
                  <th className="py-2 px-4 text-left">S.No.</th>
                  <th className="py-2 px-4 text-left">Tool Name</th>
                  <th className="py-2 px-4 text-left">Version</th>
                  <th className="py-2 px-4 text-left">License</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 px-4">1</td>
                  <td className="py-2 px-4">BurpSuite Professional</td>
                  <td className="py-2 px-4">2024.3.1</td>
                  <td className="py-2 px-4">Licensed</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">2</td>
                  <td className="py-2 px-4">OWASP ZAP</td>
                  <td className="py-2 px-4">2.14.0</td>
                  <td className="py-2 px-4">Open Source</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">3</td>
                  <td className="py-2 px-4">SQL MAP</td>
                  <td className="py-2 px-4">1.7.11</td>
                  <td className="py-2 px-4">Open Source</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>
      <section className="mb-8">
        <SectionHeader
          title="Executive Summary"
          icon={AlertTriangle}
          sectionKey="summary"
        />
        {activeSection === "summary" && (
          <div className="p-4 border border-blue-100 rounded-b-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-700">High Severity</h4>
                <p className="text-2xl font-bold text-red-600">3</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-700">
                  Medium Severity
                </h4>
                <p className="text-2xl font-bold text-yellow-600">5</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700">Low Severity</h4>
                <p className="text-2xl font-bold text-blue-600">8</p>
              </div>
            </div>

            <table className="w-full mt-6">
              <thead className="bg-gray-500">
                <tr>
                  <th className="py-2 px-4 text-left">Vulnerable Point</th>
                  <th className="py-2 px-4 text-left">Severity</th>
                  <th className="py-2 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-3 px-4">
                    <div className="font-medium">
                      Cross-Site Scripting (XSS) in Dashboard
                    </div>
                    <div className="text-sm text-gray-600">
                      Custom dashboard widgets vulnerable to XSS attacks
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      High
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-orange-600 font-medium">
                      Pending Fix
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">
                    <div className="font-medium">
                      Insecure Direct Object Reference (IDOR)
                    </div>
                    <div className="text-sm text-gray-600">
                      Project management module allows unauthorized access to
                      documents
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      High
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-green-600 font-medium">Fixed</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">
                    <div className="font-medium">
                      SQL Injection Vulnerability
                    </div>
                    <div className="text-sm text-gray-600">
                      Analytics report generator contains SQL injection
                      vulnerability
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      High
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-orange-600 font-medium">
                      In Progress
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">
                    <div className="font-medium">Weak Password Policy</div>
                    <div className="text-sm text-gray-600">
                      System allows weak passwords that don&lsquo;t meet security
                      standards
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Medium
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-orange-600 font-medium">
                      Pending Fix
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">
                    <div className="font-medium">
                      Missing HTTP Security Headers
                    </div>
                    <div className="text-sm text-gray-600">
                      Critical security headers not implemented
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Medium
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-green-600 font-medium">Fixed</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">
                    <div className="font-medium">
                      Session Timeout Not Implemented
                    </div>
                    <div className="text-sm text-gray-600">
                      No automatic session expiry after period of inactivity
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Medium
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-blue-600 font-medium">
                      Under Review
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">
                    <div className="font-medium">Insufficient Logging</div>
                    <div className="text-sm text-gray-600">
                      Security-relevant events not properly logged
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Low
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-orange-600 font-medium">
                      In Progress
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">
                    <div className="font-medium">
                      Cross-Origin Resource Sharing (CORS) Misconfiguration
                    </div>
                    <div className="text-sm text-gray-600">
                      CORS policy too permissive in API endpoints
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Low
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-green-600 font-medium">Fixed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>
      <section className="mb-8">
        <SectionHeader
          title="Platform-Specific Recommendations"
          icon={CheckCircle}
          sectionKey="recommendations"
        />
        {activeSection === "recommendations" && (
          <div className="p-4 border border-blue-100 rounded-b-lg text-white">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  Project Management System
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Implement role-based access control</li>
                  <li>Secure data transmission between components</li>
                  <li>Regular security audits of project data</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">
                  Real-time Analytics
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Secure API endpoints</li>
                  <li>Data encryption in transit and at rest</li>
                  <li>Regular monitoring of data access patterns</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">
                  Document Management
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Implement secure document storage</li>
                  <li>Version control security measures</li>
                  <li>Access logging and monitoring</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">
                  General Security Recommendations
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Server Security and OS hardening for production servers
                  </li>
                  <li>Proper SSL configuration and deployment</li>
                  <li>GIGW compliance implementation</li>
                  <li>Latest TLS protocol implementation</li>
                  <li>Regular security audits and updates</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
export default SecurityReport;
