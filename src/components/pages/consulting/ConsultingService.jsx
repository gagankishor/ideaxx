"use client"
import { useState } from 'react';

const ConsultingService = ({ title, description, isSelected, onClick }) => (
    <div
        className={`bg-gray-50 rounded-lg p-6 h-full hover:shadow-md transition-shadow duration-200 cursor-pointer ${isSelected ? 'border-2 border-blue-500' : ''}`}
        onClick={onClick}
    >
        <h3 className="text-lg font-semibold mb-3 text-center">{title}</h3>
        <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
);

const ConsultingServices = () => {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            title: "Financial Consulting",
            description: "Provides financial expertise and advice to businesses",
            brief: "Helps businesses manage finances, optimize budgets, and plan for future growth. Financial consultants analyze financial statements, create financial models, and offer strategic advice to improve financial performance. They assist in investment decisions, risk management, and financial planning to ensure long-term sustainability and profitability."
        },
        {
            title: "IT Consulting",
            description: "Offers guidance on IT strategy, system, cybersecurity, and software development",
            brief: "Assists in developing IT strategies, securing systems, and improving software solutions. IT consultants evaluate current IT infrastructure, recommend improvements, and implement new technologies to enhance efficiency and security. They also provide training and support to ensure smooth transitions and ongoing success."
        },
        {
            title: "Human Resources (HR) Consulting",
            description: "Specializes in providing HR-related services to businesses.",
            brief: "Supports businesses in managing employee relations, recruitment, and compliance. HR consultants help develop policies, improve workplace culture, and ensure legal compliance. They also assist in talent acquisition, performance management, and employee development to foster a productive and engaged workforce."
        },
        {
            title: "Marketing Consulting",
            description: "Assists businesses in developing and implementing effective marketing strategies.",
            brief: "Provides insights and strategies to enhance marketing efforts and reach target audiences. Marketing consultants analyze market trends, identify target demographics, and create campaigns to boost brand awareness and sales. They also measure campaign effectiveness and adjust strategies to maximize ROI."
        },
        {
            title: "Strategy Consulting",
            description: "Involves market analysis, competitive positioning, and strategic planning",
            brief: "Helps businesses analyze markets, position competitively, and plan strategically. Strategy consultants conduct market research, assess competitive landscapes, and develop long-term plans to achieve business objectives. They provide actionable insights and recommendations to drive growth and success."
        },
        {
            title: "Legal Consulting",
            description: "Offers legal expertise to businesses on specific issues.",
            brief: "Provides legal advice and solutions for business-related legal challenges. Legal consultants assist with contract drafting, compliance issues, and dispute resolution. They help businesses navigate complex legal environments and mitigate risks associated with legal matters."
        },
        {
            title: "Sales Consulting",
            description: "Focuses on improving sales processes and performance. Offers strategies for lead generation, customer relationship management, and sales training.",
            brief: "Enhances sales processes, boosts performance, and trains teams for better results. Sales consultants analyze sales data, identify areas for improvement, and develop strategies to increase revenue. They also provide training to sales teams to improve skills and effectiveness."
        },
        {
            title: "Marketing Strategy",
            description: "Assists businesses in developing and implementing effective marketing strategies.",
            brief: "Crafts and implements marketing strategies to achieve business goals. Marketing strategy consultants work closely with businesses to understand their goals and create tailored marketing plans. They focus on brand positioning, messaging, and campaign execution to drive growth."
        },
        {
            title: "Risk Management Consulting",
            description: "Specializes in identifying and mitigating business risks.",
            brief: "Identifies potential risks and develops strategies to mitigate them. Risk management consultants assess operational, financial, and strategic risks, and create plans to minimize their impact. They help businesses implement risk management frameworks and ensure compliance with regulations."
        },
        {
            title: "Supply Chain Consulting",
            description: "Offers expertise in optimizing supply chain processes.",
            brief: "Improves supply chain efficiency and reduces operational costs. Supply chain consultants analyze logistics, inventory management, and procurement processes to identify inefficiencies. They recommend and implement solutions to streamline operations and enhance overall supply chain performance."
        },
        {
            title: "Social Media Consulting",
            description: "Provides guidance on utilizing social media for business growth.",
            brief: "Helps businesses leverage social media platforms to enhance their online presence. Social media consultants create content strategies, manage social media accounts, and analyze engagement metrics. They aim to increase brand visibility, drive traffic, and foster customer engagement through effective social media practices."
        }
    ];
    return (
        <div className="container mx-auto p-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <ConsultingService
                        key={index}
                        title={service.title}
                        description={service.description}
                        isSelected={selectedService === index}
                        onClick={() => setSelectedService(index)}
                    />
                ))}
            </div>
            {selectedService !== null && (
                <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2">{services[selectedService].title}</h4>
                    <p className="text-gray-700">{services[selectedService].brief}</p>
                </div>
            )}
        </div>
    );
};


export default ConsultingServices;