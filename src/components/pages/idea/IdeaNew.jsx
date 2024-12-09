"use client"
import axios from "axios";
import { useEffect, useState } from "react";
// import { SideBar } from "../../components/Sidebar";
import { FaPlus, FaRobot } from "react-icons/fa";
// import { HoverNote } from "../../components/HoverNote";
import { CustomCheckbox } from "../../components/Checkbox";
import { userToken } from "../../config/Auth";
import SuggestionInput from "./components/Suggestion";
import { RestAPI } from "../../config/Api";
import { RxPlus, RxTrash } from "react-icons/rx";
import SuggestionInvestment from "./components/SuggestionInvestment";
import FinancialProjection from "./components/Finance";
import { Helmet } from "react-helmet";
import useAxiosWithAuth from "../../config/useAxiosWithAuth";
import SideBar from "../Sidebar";

export default function IdeaNew() {
  // useState
  const loggedToken = userToken();
  const [step, setStep] = useState(1);
  const [sectors, setSectors] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [successes, setSuccess] = useState([{ success: "" }]);
  const [weaknesses, setWeakness] = useState([{ weakness: "" }]);
  const [products, setProducts] = useState([
    { name: "", description: "", sectorId: "" },
  ]);
  const axiosInstance = useAxiosWithAuth();

  // Formating answer
  const contentToDisplay = generatedPlan ? generatedPlan.ai : "";

  // Form data remember
  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem("formData");
    return savedFormData
      ? JSON.parse(savedFormData)
      : {
          sector_id: "",
          sector_name: "",
          idea_description: "",
          idea_state: "",
          idea_reason: "",
          idea_name: "",
          employees_num: "",
          service_type: "",
          logistics: "",
          service_area: "",
          clients: "",
          success_drivers: [], // Ensure this is initialized as an array
          weaknesses: [], // Ensure this is initialized as an array
          currency: "",
          initial_investment: "",
          operation_costs: [], // Ensure this is initialized as an array
          operation_costs_names: [], // Ensure this is initialized as an array
          investment_items: [], // Ensure this is initialized as an array
          status: "",
          first_year_profit: "",
          expected_revenue: "",
          expected_year_cost: "",
          net_profit_margin: "",
        };
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);
  useEffect(() => {
    const fetchSectors = async () => {
      try {
        const response = await axiosInstance.get(`${RestAPI}/sectors`);
        // console.log('API Response:', response.data); 
        setSectors(response.data); // Adjust based on the actual response structure
      } catch (error) {
        console.error('Error fetching sectors:', error);
      }
    };
  
    fetchSectors();
  }, []);

  // Data lists --------------

  const ideaReasonOptions = [
    "Business plan",
    "Requesting funding from investors or banks",
    "For self-learning",
    "As a reference for school/university projects",
    "As a reference for workplace projects",
    "To submit to a non-financial institution for approval (e.g., getting VISA approval, franchise approval, tenant approval)",
    "Other reasons",
  ];

  const ideaStateOptions = ["Still an idea", "Already Started"];

  const countries = [
    "United States",
    "China",
    "Japan",
    "Germany",
    "India",
    "United Kingdom",
    "France",
    "Italy",
    "Brazil",
    "Canada",
    "Russia",
    "South Korea",
    "Australia",
    "Spain",
    "Mexico",
    "Indonesia",
    "Netherlands",
    "Saudi Arabia",
    "Turkey",
    "Switzerland",
    "Sweden",
    "Poland",
    "Belgium",
    "Thailand",
    "Argentina",
    "Norway",
    "Austria",
    "Iran",
    "United Arab Emirates",
    "Nigeria",
    "Israel",
    "South Africa",
    "Hong Kong SAR",
    "Ireland",
    "Denmark",
    "Singapore",
    "Malaysia",
    "Philippines",
    "Colombia",
  ];

  // -------------------------

  // Axios connfigs for Auth & Submit
  const axiosConfig = {
    headers: {
      Accept: "application/vnd.api+json",
      Authorization: `Bearer ${loggedToken}`,
    },
  };

  // Add products or services
  const addProductOrService = () => {
    setProducts([...products, { name: "", description: "", sectorId: "" }]);
  };

  // Add
  const addSuccessDriver = () => {
    setSuccess([...successes, { success: "" }]);
  };

  // Add
  const addWeaknessDriver = () => {
    setWeakness([...weaknesses, { weakness: "" }]);
  };

  // Remove product or service block
  const removeProductOrService = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  // Remove
  const removeSuccess = (index) => {
    const newSuccess = [...successes];
    newSuccess.splice(index, 1);
    setSuccess(newSuccess);
  };

  // Remove
  const removeWeakness = (index) => {
    const newWeakness = [...weaknesses];
    newWeakness.splice(index, 1);
    setWeakness(newWeakness);
  };

  // Next step handle
  const nextStep = () => {
    let canProceed = true;
    const alertMessages = [];

    switch (step) {
      case 1:
        if (!formData.sector_id) alertMessages.push("Sector is required.");
        if (!formData.idea_state) alertMessages.push("Idea state is required.");
        if (!formData.idea_description)
          alertMessages.push("Idea description is required.");
        if (!formData.idea_reason)
          alertMessages.push("Idea reason is required.");
        break;
      case 2:
        if (!formData.idea_name)
          alertMessages.push("Business name is required.");
        if (!formData.employees_num)
          alertMessages.push("Number of employees is required.");
        if (!formData.service_type)
          alertMessages.push("Service type is required.");
        break;
      case 3:
        // if (!formData.products) {
        //   alertMessages.push(
        //     "At least one product or service with complete information is required."
        //   );
        // }
        break;
      case 4:
        // if (!formData.success_driver)
        //   alertMessages.push("At least one success driver is required.");
        // if (!formData.success_driver)
        //   alertMessages.push("At least one weakness is required.");
        break;
      case 5:
        //
        break;
      default:
        canProceed = true;
    }

    if (alertMessages.length > 0) {
      alert(alertMessages.join("\n"));
      canProceed = false;
    }

    if (canProceed) {
      setStep(step + 1);
    }
  };

  // Save generated idea
  const saveIdea = async () => {
    const ideaformData = new FormData();
    // console.log(formData)
    ideaformData.append("idea_name", formData?.idea_name?formData?.idea_name:"");
    ideaformData.append("idea_description", formData?.idea_description?formData?.idea_description:"");
    ideaformData.append("status", "Active");
    ideaformData.append("sector_id", formData?.sector_id ?formData?.sector_id:"");
    ideaformData.append("idea_plan", contentToDisplay);
    

    try {
      const response = await axios({
        method: "post",
        url: `${RestAPI}/idea/save-new`,
        data: ideaformData,
        headers: {
          Accept: "application/vnd.api+json",
          Authorization: `Bearer ${loggedToken}`,
          "Content-Type": "multipart/form-data",
        },
      });

      // Redirect on successful POST request
      if (response.status === 200) {
        // history.push("/idea/my");
        localStorage.setItem('idea',response.data.idea)
        window.location.href = "/idea/my";
      }   
    } catch (error) {
      console.error("There was an error saving the idea:", error);
    }
  };

  const handleTextareaChange = (e) => {
    setFormData({ ...formData, idea_description: e.target.value });
    setIsEditing(true);
  };

  // Handle checkbox change
  const handleCheckboxChange = (fieldName, newValue) => {
    setFormData({ ...formData, [fieldName]: newValue });
  };

  // Find idea button
  const findIdea = () => {
    setIsFetching(true);
    const requestBody = {
      concept: formData.idea_description,
    };

    axios
      .post(`${RestAPI}/ai/concept`, requestBody, axiosConfig)
      .then((response) => {
        setFormData({ ...formData, idea_description: response.data.data });
        setIsEditing(false);
        setIsFetching(false);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching concept:", error);
        setIsFetching(false);
      });
  };

  // Form submit
  const handleSubmit = async (e) => {
    try{


    e.preventDefault();
    setIsLoading(true); // Start loading

    window.scrollTo(0, 0);
    // console.log(formData)
    const formDataToSend = new FormData();
    formDataToSend.append("sector_id", formData.sector_id);
    formDataToSend.append("idea_description", formData.idea_description);
    formDataToSend.append("idea_state", formData.idea_state);
    formDataToSend.append("idea_reason", formData.idea_reason);
    formDataToSend.append("idea_name", formData.idea_name);
    formDataToSend.append("employees_num", formData.employees_num);
    formDataToSend.append("service_type", formData.service_type);
    formDataToSend.append("logistics", formData.logistics);
    formDataToSend.append("service_area", formData.service_area);
    formDataToSend.append("clients", formData.clients);
    formDataToSend.append("currency", formData.currency);
    formDataToSend.append("initial_investment", formData.initial_investment);
    formDataToSend.append("status", formData.status);
    formDataToSend.append("first_year_profit", formData.first_year_profit);
    formDataToSend.append("expected_revenue", formData.expected_revenue);
    formDataToSend.append("expected_year_cost", formData.expected_year_cost);
    formDataToSend.append("net_profit_margin", formData.net_profit_margin);


    // Append array fields
    if (formData?.success_drivers) {
      formData.success_drivers.forEach((driver, index) => {
        formDataToSend.append(`success_driver${index + 1}`, driver);
      });
    }
    
    if (formData?.weaknesses) {
      formData.weaknesses.forEach((weakness, index) => {
        formDataToSend.append(`weakness_${index + 1}`, weakness);
      });
    }
    
    if (formData?.operation_costs) {
      formData.operation_costs.forEach((cost, index) => {
        formDataToSend.append(`operation_cost_${index + 1}`, cost);
      });
    }
    
    if (formData?.operation_costs_names) {
      formData.operation_costs_names.forEach((name, index) => {
        formDataToSend.append(`operation_cost_name_${index + 1}`, name);
      });
    }
    
    if (formData?.investment_items) {
      formData.investment_items.forEach((item, index) => {
        if (item) {
          formDataToSend.append(`investment_item_${index + 1}`, item);
        }
      });
    }

    const axiosConfig = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${loggedToken}`,
      },
    };
    // console.log("formDataToSend",formDataToSend)
    try {
      const response = await axios.post(
        `${RestAPI}/ai/generate-plan`,
        formDataToSend,
        axiosConfig
      );
      setGeneratedPlan(response.data); // Save the response data to state
      setIsLoading(false); // End loading
      localStorage.removeItem("formData"); 
      
    } catch (error) {
      console.error(error);
      setIsLoading(false); // End loading in case of error
    }
  }
  catch(error){
    console.error(error);
      setIsLoading(false);
  }
  };

  return (
    <>
      <Helmet>
        <title>New Idea | ideax</title>
      </Helmet>

      <div className="dashboard container">
        <SideBar />
        <div className="content">
          {isLoading ? (
            <>
              <h1 id="heading">
                <FaRobot /> Generating you plan..
              </h1>
              <div className="generated">
                <div className="spinner"></div>
              </div>
            </>
          ) : generatedPlan ? (
            <>
              <h1 id="heading">
                <FaRobot /> Generated Plan
              </h1>
              <div
                className="generated fading"
                dangerouslySetInnerHTML={{ __html: contentToDisplay }}
              />
              <div className="panel-btns">
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    setGeneratedPlan(null);
                    setStep(1);
                  }}
                >
                  Create New Idea
                </button>
                <button type="button" className="btn" onClick={saveIdea}>
                  Save this idae
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 id="heading">
                <FaPlus /> New Idea
              </h1>
              <form className="form" onSubmit={handleSubmit}>
                {step === 1 && (
                  <>
                    <div className="form-group">
                      <label htmlFor="sector_id">
                        <div className="left-label">
                          Choose your sector
                          {/* <HoverNote
                            text="Choose a business sector aligned with your passion and skills, ensuring
                            scalability and addressing current market trends. Conduct thorough
                            research and consider the financial viability, legal aspects, and
                            adaptability for longterm success"
                          /> */}
                        </div>
                      </label>
                      <select
                        name="sector_id"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            sector_id: e.target.value,
                          })
                        }
                        value={formData.sector_id}
                      >
                        <option value="">- Select sector -</option>
                        {sectors.map((sector) => (
                          <option key={sector.id} value={sector.id}>
                            {sector.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <div className="label-flex">
                        <div className="left-label">
                          Describe your idea
                          {/* <HoverNote text="Capture the essence of your idea concept concisely, focusing on its innovation and benefit in a brief, compelling phrase" /> */}
                        </div>
                        <div className="right-label">
                          {isEditing ? (
                            <button
                              type="button"
                              className="btn"
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent event from bubbling up if necessary
                                findIdea();
                              }}
                            >
                              {isFetching ? (
                                <div className="spinner"></div>
                              ) : (
                                <>
                                  Edit <FaRobot />
                                </>
                              )}
                            </button>
                          ) : null}
                        </div>
                      </div>
                      <textarea
                        name="idea_description"
                        placeholder="Enter.."
                        rows="5"
                        value={formData.idea_description}
                        onChange={handleTextareaChange}
                      ></textarea>
                    </div>

                    <h2 id="section-heading">Idea Plan</h2>

                    <div className="form-group">
                      <div className="paragraph-heading">
                        Is it still an idea or you already started?
                      </div>
                      {ideaStateOptions.map((option) => (
                        <CustomCheckbox
                          key={option}
                          type="radio"
                          label={option}
                          name="idea_state"
                          checked={formData.idea_state === option}
                          onChange={() =>
                            handleCheckboxChange("idea_state", option)
                          }
                        />
                      ))}
                    </div>

                    <div className="form-group">
                      <div className="paragraph-heading">
                        Always remember you can use this idea plan for many
                        reasons beside your business
                      </div>
                      {ideaReasonOptions.map((option) => (
                        <CustomCheckbox
                          key={option}
                          type="radio"
                          label={option}
                          name="idea_reason"
                          checked={formData.idea_reason === option}
                          onChange={() =>
                            handleCheckboxChange("idea_reason", option)
                          }
                        />
                      ))}
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="form-group">
                      <label>
                        <div className="left-label">
                          Your&rsquo;e business name
                          {/* <HoverNote text="Choose a clear, memorable, and unique business name that aligns with your brand, ensuring availability online and legally, while also considering scalability and emotional appeal" /> */}
                        </div>
                      </label>
                      <input
                        name="idea_name"
                        placeholder="Enter.."
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            idea_name: e.target.value,
                          })
                        }
                        value={formData.idea_name}
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        <div className="left-label">
                          Number of employees
                          {/* <HoverNote text="Selecting the Ideax team guarantees not only expertise but also a strategic partnership that nurtures your business growth. Our collaborative approach, tailored solutions, and commitment to excellence empower your venture to thrive in a dynamic market. With a dedicated team, you gain not just services, but a reliable ally invested in propelling your success story" /> */}
                        </div>
                      </label>
                      <select
                        name="employees_num"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            employees_num: e.target.value,
                          })
                        }
                        value={formData.employees_num}
                      >
                        <option value="">- Select</option>
                        <option value="ideax">I use ideax</option>
                        <option value="0 - 10">0 - 10</option>
                        <option value="10 - 25">10 - 25</option>
                        <option value="25 - 50">25 - 50</option>
                      </select>
                      {formData.employees_num === "ideax" && (
                        <div className="static-note">
                          <p>
                            Ideax is a dynamic and innovative platform offering
                            comprehensive solutions tailored to enhance your
                            business&rsquo;s operational efficiency and market
                            presence. It focuses on delivering strategic
                            partnerships, expert guidance, and customized
                            services that are designed to meet your unique
                            business challenges and goals. With Ideax, you&rsquo;re
                            not just getting a service provider; you&rsquo;re gaining
                            a dedicated ally committed to your success
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <div className="paragraph-heading">
                        <label>
                          <div className="left-label">
                            Do you offer a product or service?
                            {/* <HoverNote text="Consider your strengths, market demand, and business goals. If you possess specialized skills, opt for services; if scalability is crucial, go for products. Striking a balance or offering both can also provide a comprehensive solution" /> */}
                          </div>
                        </label>
                      </div>
                      <CustomCheckbox
                        type="radio"
                        label="Product"
                        name="service_type"
                        checked={formData.service_type === "Product"}
                        onChange={() =>
                          handleCheckboxChange("service_type", "Product")
                        }
                      />
                      <CustomCheckbox
                        type="radio"
                        label="Service (Retail Businesses are Considered Service)"
                        name="service_type"
                        checked={formData.service_type === "Service"}
                        onChange={() =>
                          handleCheckboxChange("service_type", "Service")
                        }
                      />
                    </div>

                    <div className="form-group">
                      <div className="paragraph-heading">
                        <label>
                          <div className="left-label">
                            How can customers get your product or service?
                            {/* <HoverNote text="Offering your product or service through both online and offline channels provides customers with flexibility and convenience. Online platforms enable easy accessibility and quick transactions, while offline options, such as physical stores or offices, cater to those who prefer in-person interactions. This dual approach enhances your reach, ensuring a broader customer base and a more inclusive experience for all." /> */}
                          </div>
                        </label>
                      </div>
                      <CustomCheckbox
                        type="radio"
                        label="Online"
                        name="logistics"
                        checked={formData.logistics === "Online"}
                        onChange={() =>
                          handleCheckboxChange("logistics", "Online")
                        }
                      />
                      <CustomCheckbox
                        type="radio"
                        label="Physical location"
                        name="logistics"
                        checked={formData.logistics === "Physical location"}
                        onChange={() =>
                          handleCheckboxChange("logistics", "Physical location")
                        }
                      />
                      <CustomCheckbox
                        type="radio"
                        label="Both online and physical location"
                        name="logistics"
                        checked={
                          formData.logistics ===
                          "Both online and physical location"
                        }
                        onChange={() =>
                          handleCheckboxChange(
                            "logistics",
                            "Both online and physical location"
                          )
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="service_area">
                        <div className="left-label">
                          Where do you serve your customers?
                        </div>
                      </label>
                      <select
                        name="service_area"
                        value={formData.service_area}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            service_area: e.target.value,
                          })
                        }
                      >
                        <option value="">- Select Country -</option>
                        {countries.map((service_area) => (
                          <option key={service_area} value={service_area}>
                            {service_area}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <div className="paragraph-heading">
                        Who is your clients?
                      </div>
                      <SuggestionInput
                        name="clients"
                        sectorId={formData.sector_id}
                        endpoint="/ai/client"
                        ideaDescription = {formData.idea_description}
                        clients= {formData.clients}
                      />
                    </div>
                  </>
                )}

                {step == 3 && (
                  <>
                    {products.map((product, index) => (
                      <div key={index}>
                        <h2 id="section-heading">
                          Product Or Service {index + 1}
                        </h2>

                        <div className="form-group">
                          <div className="paragraph-heading pos">
                            Product or service name
                            {products.length > 1 && (
                              <button
                                type="button"
                                className="btn btn-icon danger"
                                onClick={() => removeProductOrService(index)}
                              >
                                <RxTrash />
                              </button>
                            )}
                          </div>
                          <SuggestionInput
                            endpoint="/ai/product-or-service"
                            name={`product-name-${index}`}
                            sectorId={formData.sector_id}
                            serviceName=""
                            ideaDescription = {formData.idea_description}
                            clients= {formData.clients}
                          />

                          <div className="paragraph-heading">
                            Product or service description
                          </div>
                          <SuggestionInput
                            endpoint="/ai/give-product-description"
                            name={`product-description-${index}`}
                            sectorId={formData.sector_id}
                            serviceName={`product-name-${index}`}
                          />
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      className="btn btn-icon"
                      onClick={addProductOrService}
                    >
                      <RxPlus /> Add Product or Service
                    </button>
                  </>
                )}

                {step == 4 && (
                  <>
                    {successes.map((success, index) => (
                      <div key={index}>
                        <h2 id="section-heading">Success Driver {index + 1} (Optional)</h2>

                        <div className="form-group">
                          <div className="paragraph-heading pos">
                            Enter your success driver
                            {successes.length > 1 && (
                              <button
                                type="button"
                                className="btn btn-icon danger"
                                onClick={() => removeSuccess(index)}
                              >
                                <RxTrash />
                              </button>
                            )}
                          </div>
                          <input type="text" name="" placeholder="Type.." />
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-icon btn-more"
                      onClick={addSuccessDriver}
                    >
                      <RxPlus /> Add Success driver
                    </button>

                    {weaknesses.map((weakness, index) => (
                      <div key={index}>
                        <h2 id="section-heading">
                          Weakness Driver {index + 1} (Optional)
                        </h2>

                        <div className="form-group">
                          <div className="paragraph-heading pos">
                            Enter your weakness driver
                            {weaknesses.length > 1 && (
                              <button
                                type="button"
                                className="btn btn-icon danger"
                                onClick={() => removeWeakness(index)}
                              >
                                <RxTrash />
                              </button>
                            )}
                          </div>
                          <input type="text" name="" placeholder="Type.." />
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-icon btn-more"
                      onClick={addWeaknessDriver}
                    >
                      <RxPlus /> Add Weakness driver
                    </button>
                  </>
                )}

                {step == 5 && (
                  <>
                    <h2 id="section-heading">
                      Currency and Initial Investment Details
                    </h2>
                    <div className="form-group">
                      <div className="flex">
                        <label htmlFor="currency">Select plan currency</label>
                        <select
                          name="currency"
                          className="special-select"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              currency: e.target.value,
                            })
                          }
                          value={formData.currency}
                        >
                          <option value="USD">USD $</option>
                          <option value="EUR">EUR €</option>
                          <option value="INR">INR ₹</option>
                        </select>
                      </div>
                    </div>
                    <div className="static-note">
                      <p>
                        <span>Note</span>: If your business sells a physical
                        product, don&rsquo;t include the cost of making or buying the
                        first batch of product in your initial investment. You
                        should list this expense under Cost of Goods Sold
                        (COGS) on the next page.
                      </p>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">
                        Total Initial Investment (optional)
                      </label>
                      <input
                        type="number"
                        name="initial_investment"
                        min="0"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            initial_investment: e.target.value,
                          })
                        }
                        value={formData.initial_investment}
                      />
                    </div>
                    <h2 id="section-heading">
                      What will you spend your initial investment on?
                    </h2>
                    <div className="form-group">
                      <label htmlFor="investment">
                        <div className="left-label">
                          Investment Item (optional)
                        </div>
                      </label>
                      <SuggestionInvestment />
                    </div>
                    <h2 id="section-heading">Plan Language</h2>
                    <div className="form-group">
                      <label htmlFor="">Select your plan language</label>
                      <select name="">
                        <option>English</option>
                      </select>
                    </div>
                  </>
                )}

                {step == 6 && <FinancialProjection />}

                <div className="panel-btns">
                  {step > 1 && (
                    <button
                      type="button"
                      className="btn"
                      onClick={() => {
                        setStep(step - 1);
                      }}
                    >
                      Back
                    </button>
                  )}

                  {step < 6 && (
                    <button type="button" className="btn" onClick={nextStep}>
                      Next Step
                    </button>
                  )}

                  {step === 6 && (
                    <button className="btn" type="submit">
                      Generate Idea
                    </button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
