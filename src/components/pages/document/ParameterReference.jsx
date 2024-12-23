import PropTypes from 'prop-types';
import  { useState } from 'react';
const parameterValueShape = PropTypes.shape({
  code: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
});

const parameterDetailShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(parameterValueShape).isRequired
});
const parameterDetails = {
  idea_stage: {
    name: "Idea Stage",
    values: [
      { code: 1, description: "Still an idea" },
      { code: 2, description: "Made a plan" },
      { code: 3, description: "Already started" }
    ]
  },
  work_status: {
    name: "Work Status",
    values: [
      { code: 1, description: "Unemployed" },
      { code: 2, description: "Working full-time" },
      { code: 3, description: "Working part-time" },
      { code: 4, description: "Freelancing" },
      { code: 5, description: "Self-employed" }
    ]
  },
  project_type: {
    name: "Project Type",
    values: Array.from({ length: 21 }, (_, i) => ({
      code: i + 1,
      description: [
        "Services", "Retail", "Technology", "Health and Wellness", "Hospitality",
        "Entertainment", "Manufacturing", "Finance", "Real Estate", "Education",
        "Transportation", "Environmental and Energy", "Legal and Compliance",
        "Social and Community", "Communication", "Automotive", "Agriculture and Farming",
        "Innovation and Technology", "Beauty and Personal Care", "Training and Development",
        "Other"
      ][i]
    }))
  },
  job_relation: {
    name: "Job Relation",
    values: [
      { code: 1, description: "No (Current job not related)" },
      { code: 2, description: "Yes (Current job related)" }
    ]
  },
  investment_plan: {
    name: "Investment Plan",
    values: [
      { code: 1, description: "Less than 1 Lakh ₹" },
      { code: 2, description: "1 Lakh ₹ - 10 Lakh ₹" },
      { code: 3, description: "10 Lakh ₹ - 50 Lakh ₹" },
      { code: 4, description: "50 Lakh ₹ - 1 Crore ₹" },
      { code: 5, description: "More than 1 Crore ₹" }
    ]
  },
  work_experience: {
    name: "Work Experience",
    values: [
      { code: 1, description: "No experience" },
      { code: 2, description: "1 - 3 Years" },
      { code: 3, description: "3 - 5 Years" },
      { code: 4, description: "More than 5 years" }
    ]
  },
  daily_hours: {
    name: "Daily Hours",
    values: [
      { code: 1, description: "Less than 1 hour" },
      { code: 2, description: "1 to 2 hours" },
      { code: 3, description: "3 to 4 hours" },
      { code: 4, description: "5 to 6 hours" },
      { code: 5, description: "More than 6 hours" }
    ]
  },
  timeframe: {
    name: "Timeframe",
    values: [
      { code: 1, description: "Less than 3 months" },
      { code: 2, description: "3 to 6 months" },
      { code: 3, description: "6 to 12 months" }
    ]
  }
};

const ParameterCard = ({ details }) => (
  <div className="bg-gray-800 rounded-lg p-6 mb-6">
    <h3 className="text-xl font-bold text-white mb-4">{details.name}</h3>
    <div className="space-y-2">
      {details.values.map(({ code, description }) => (
        <div key={code} className="flex items-start space-x-3 text-gray-300">
          <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded min-w-[2rem] text-center">
            {code}
          </span>
          <span>{description}</span>
        </div>
      ))}
    </div>
  </div>
);
ParameterCard.propTypes = {
  details: parameterDetailShape.isRequired
};
const ParameterReference = () => {
  const [activeTab, setActiveTab] = useState('table');

  return (
    <div className="max-w-7xl mx-auto  bg-[#121212] min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-8">Parameter Reference</h1>
      
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('table')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'table'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Parameter Table
        </button>
        <button
          onClick={() => setActiveTab('details')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'details'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Value Details
        </button>
      </div>

      {activeTab === 'table' ? (
        <div className="overflow-x-auto bg-[#070707] rounded-lg  shadow-xl scrollbar-hover">
          <table className="min-w-full">
            <thead>
              <tr className="bg-[#1E1E1E]">
                <th className="px-6 py-3 text-left text-white font-semibold">Parameter</th>
                <th className="px-6 py-3 text-left text-white font-semibold">Type</th>
                <th className="px-6 py-3 text-left text-white font-semibold">Required</th>
                <th className="px-6 py-3 text-left text-white font-semibold">Validation Rules</th>
                <th className="px-6 py-3 text-left text-white font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-900">
              {Object.entries(parameterDetails).map(([key, details]) => (
                <tr key={key} className="text-gray-300">
                  <td className="px-6 py-4 font-mono">{key}</td>
                  <td className="px-6 py-4">Integer</td>
                  <td className="px-6 py-4">Yes</td>
                  <td className="px-6 py-4">
                    {`One of: ${details.values.map(v => v.code).join(', ')}`}
                  </td>
                  <td className="px-6 py-4">{details.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(parameterDetails).map(([key, details]) => (
            <ParameterCard key={key} parameter={key} details={details} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ParameterReference;