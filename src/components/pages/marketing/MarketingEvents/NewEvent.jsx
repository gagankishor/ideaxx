"use client";
import { useState } from "react";
import { RiSeoLine } from "react-icons/ri";
import axios from "axios";
import { RestAPI } from "@/config/Api";
import { Blogs } from "@/components/components/Blogs";
import { EnterpriseLaunch } from "@/components/components/EnterpriseLaunch";

export const NewEvent = () => {
  const [selectedEvent, setSelectedEvent] = useState("Choose Your Event");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectEvent = (eventType, eventLabel) => {
    setSelectedEvent(eventLabel);
    setIsDropdownOpen(false);
    console.log(eventType)
  };
  const blogs = [
    { id: 1, name: "Blog", logo: "/blog.webp", link: "#" },
    { id: 2, name: "Blog", logo: "/blog.webp", link: "#" },
    { id: 3, name: "Blog", logo: "/blog.webp", link: "#" },
    { id: 4, name: "Blog", logo: "/blog.webp", link: "#" },
  ];
  const platforms = [
    {
      id: 1,
      name: "Workshop",
      logo: "/ahrefs.png",
      link: "https://ahrefs.com/",
    },
    {
      id: 2,
      name: "Webinar",
      logo: "/semrush.png",
      link: "https://www.semrush.com/",
    },
    {
      id: 3,
      name: "Product Sampling",
      logo: "/keyword-tool-logo.webp",
      link: "https://keywordtool.io/",
    },
  ];

  const [eventDetails, setEventDetails] = useState({
    purposeAndGoals: "",
    targetAudience: "",
    budget: "",
    venue: "",
    eventDate: "",
    planAndTimeline: "",
    invitationMarketing: "",
    speakersAndPresenters: "",
    presentationMaterials: "",
    engagementActivities: "",
    workshopObjectives: "",
    workshopAudience: "",
    workshopTopics: "",
    contentStructure: "",
    engagingFormats: "",
    technologyPlatform: "",
    workshopPromotion: "",
    exhibitionObjectives: "",
    researchEvents: "",
    costsAndBudget: "",
    boothSpace: "",
    engagingBooth: "",
    promotionalMaterials: "",
    promoteAttendance: "",
    trainStaff: "",
    leadCapture: "",
    attractiveDisplay: "",
    engageAttendees: "",
    followUp: "",
    activitiesFile:null,
    designSamples:null
  });
  const handleInputChange = (e) => {
    setEventDetails({
      ...eventDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("selectedEvent", selectedEvent);
    // formData.append("platforms", JSON.stringify(platforms));
    // Append event details to formData
    Object.keys(eventDetails).forEach((key) => {
      formData.append(key, eventDetails[key]);
    });
    try {
      const response = await axios.post(`${RestAPI}/event/save`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Event saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };
  return (
    <>
      <div className="dashboard container">
        <div className="content">
          <h1 id="heading">
            <RiSeoLine />
            New Event
          </h1>
          <form className="form">
            <h2
              id=""
              style={{ fontSize: "16px", fontWeight: "600px", color: "#333" }}
            >
              Event Type
            </h2>
            <div className="custom-select">
              <div className="select-box" onClick={toggleDropdown}>
                {selectedEvent}
              </div>
              {isDropdownOpen && (
                <div className="dropdown">
                  <div
                    onClick={() => selectEvent("launch-event", "Launch Event")}
                  >
                    <h2>Launch Event</h2>
                    <p>
                      Host an event to launch a new product, service, or a
                      significant business milestone.
                    </p>
                  </div>
                  <div
                    onClick={() =>
                      selectEvent("workshop-webinar", "Workshops and Webinars")
                    }
                  >
                    <h2>Workshops and Webinars</h2>
                    <p>
                      Conduct interactive sessions to educate or inform your
                      audience.
                    </p>
                  </div>
                  <div onClick={() => selectEvent("exhibition", "Exhibition")}>
                    <h2>Exhibition</h2>
                    <p>
                      Showcase your products or services in an exhibition
                      format.
                    </p>
                  </div>
                  <div
                    onClick={() => selectEvent("themed-event", "Themed Event")}
                  >
                    <h2>Themed Event</h2>
                    <p>
                      Host an event centered around a specific theme or idea.
                    </p>
                  </div>
                  <div
                    onClick={() =>
                      selectEvent("product-sampling", "Product Sampling")
                    }
                  >
                    <h2>Product Sampling</h2>
                    <p>
                      Let your audience experience your products first-hand with
                      sampling opportunities.
                    </p>
                  </div>
                  <div
                    onClick={() =>
                      selectEvent(
                        "innovative-promotion",
                        "Innovative Promotion"
                      )
                    }
                  >
                    <h2>Innovative Promotion</h2>
                    <p>
                      Promote your brand using creative and innovative
                      strategies.
                    </p>
                  </div>
                </div>
              )}
            </div>
            {selectedEvent === "Launch Event" && (
              <>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Define the Purpose and Goals
                    <p style={{ textAlign: "left" }}>
                      Clearly outline why you are hosting the launch event.
                      Whether it&rsquo;s introducing a new product, service, or
                      celebrating a milestone, understanding your goals will
                      shape the entire event.
                    </p>
                  </h3>
                  <textarea
                    name="purposeAndGoals"
                    value={eventDetails.purposeAndGoals || ""}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Describe your event purpose.."
                  />
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Identify Your Target Audience
                    <p style={{ textAlign: "left" }}>
                      Determine who your key audience is. Tailor the event to
                      resonate with their interests and preferences. Different
                      segments may require different approaches.
                    </p>
                  </h3>
                  <textarea
                    name="targetAudience"
                    value={eventDetails.targetAudience || ""}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Who is your audience.."
                  />
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Set a Budget
                    <p style={{ textAlign: "left" }}>
                      Establish a budget that covers venue, technology,
                      marketing, catering, and any other associated costs.
                      Ensure that your budget aligns with your goals.
                    </p>
                  </h3>
                  <textarea
                    name="budget"
                    value={eventDetails.budget || ""}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Your estimate budget.."
                  />
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Choose a Venue (Virtual or Physical)
                    <p style={{ textAlign: "left" }}>
                      Depending on the nature of your business and the event,
                      decide whether it will be an in-person or virtual event.
                      Select a venue or online platform that suits your needs
                      and accommodates your audience.
                    </p>
                  </h3>
                  <textarea
                    name="venue"
                    value={eventDetails.venue || ""}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Choose a venue.."
                  />
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Select a Date and Time
                    <p style={{ textAlign: "left" }}>
                      Choose a date and time that is convenient for your target
                      audience. Be mindful of holidays, industry events, and
                      other potential conflicts.
                    </p>
                  </h3>
                  <input
                    type="datetime-local"
                    name="eventDate"
                    value={eventDetails.eventDate || ""}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Choose a date and time.."
                  />
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Detailed Plan and Timeline
                    <p style={{ textAlign: "left" }}>
                      Develop a comprehensive plan that outlines all the
                      necessary tasks leading up to the event. Create a timeline
                      with milestones to ensure everything stays on track.
                    </p>
                  </h3>
                  <textarea
                    name="planAndTimeline"
                    value={eventDetails.planAndTimeline || ""}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Plan and timeline.."
                  />
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Develop Invitations and Marketing Materials
                    <p style={{ textAlign: "left" }}>
                      Design invitations and marketing materials that
                      effectively communicate the event details and generate
                      excitement. Use multiple channels such as email, social
                      media, and your website to promote the event.
                    </p>
                  </h3>
                  <textarea
                    name="invitationMarketing"
                    value={eventDetails.invitationMarketing || ""}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Invitation and marketing material"
                  />
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Coordinate Speakers and Presenters
                    <p style={{ textAlign: "left" }}>
                      If your event includes speakers or presenters, confirm
                      their participation well in advance. Share guidelines,
                      expectations, and any relevant information with them.
                    </p>
                  </h3>
                  <textarea
                    name="speakersAndPresenters"
                    value={eventDetails.speakersAndPresenters || ""}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Invite speakers and presenters"
                  />
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Prepare Presentation Materials
                    <p style={{ textAlign: "left" }}>
                      Prepare any visuals, presentations, or demonstrations that
                      will be part of the event. Ensure that all materials align
                      with your messaging and goals.
                    </p>
                  </h3>
                  <textarea
                    name="presentationMaterials"
                    value={eventDetails.presentationMaterials || ""}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Presentation files"
                  />
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Engagement Activities
                    <p style={{ textAlign: "left" }}>
                      Incorporate interactive elements into the event to keep
                      attendees engaged. Q&A sessions, polls, or networking
                      opportunities can enhance the overall experience.
                    </p>
                  </h3>
                  <textarea
                    name="engagementActivities"
                    value={eventDetails.engagementActivities || ""}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Activities.."
                  />
                </div>
              </>
            )}

            {selectedEvent === "Workshops and Webinars" && (
              <>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Define Objectives
                    <p style={{ textAlign: "left" }}>
                      Clearly outline the objectives of the workshop or webinar.
                      Identify what knowledge or skills participants should gain
                      by the end.
                    </p>
                  </h3>
                  <textarea
                    name="workshopObjectives"
                    value={eventDetails.workshopObjectives || ""}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Describe your objectives.."
                  />
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Understand Your Audience
                    <p style={{ textAlign: "left" }}>
                      Tailor the content to your target audience&rsquo;s needs,
                      knowledge level, and interests. This ensures relevance and
                      engagement.
                    </p>
                  </h3>
                  <textarea
                    name="workshopAudience"
                    value={eventDetails.workshopAudience || ""}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Target audience"
                  />
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Choose Topics
                    <p style={{ textAlign: "left" }}>
                      Select topics that align with your expertise and provide
                      valuable insights to your audience. Address common
                      challenges or emerging trends.
                    </p>
                  </h3>
                  <textarea
                    name="workshopTopics"
                    value={eventDetails.workshopTopics || ""}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Choose workshop topic.."
                  />
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Plan Content Structure
                    <p style={{ textAlign: "left" }}>
                      Organize the content logically with a clear introduction,
                      main points, and conclusion. Maintain a balance between
                      theory and practical examples.
                    </p>
                  </h3>
                  <textarea
                    name="contentStructure"
                    value={eventDetails.contentStructure || ""}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Content structure"
                  />
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Engaging Formats
                    <p style={{ textAlign: "left" }}>
                      Incorporate various formats such as presentations, case
                      studies, Q&A sessions, and interactive activities to keep
                      participants engaged.
                    </p>
                  </h3>
                  <input
                    type="file"
                    name="engagingFormats"
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,  
                        engagingFormats: e.target.files[0],
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Upload files.."
                  />
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Leverage Technology
                    <p style={{ textAlign: "left" }}>
                      Choose a reliable platform for hosting webinars. Ensure
                      that participants can easily access the session and
                      interact with the content.
                    </p>
                  </h3>
                  <textarea
                    name="technologyPlatform"
                    value={eventDetails.technologyPlatform || ""}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Choose workshop platform"
                  />
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Promote Effectively
                    <p style={{ textAlign: "left" }}>
                      Build awareness about your workshop or webinar through
                      targeted marketing. Utilize email campaigns, social media,
                      and other channels.
                    </p>
                  </h3>
                  <textarea
                    name="workshopPromotion"
                    value={eventDetails.workshopPromotion || ""}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Promote workshop event.. (Email - Social media – Calls –SMS - WhatsApp.."
                  />
                </div>
              </>
            )}

            {selectedEvent === "Exhibition" && (
              <>
                <div>
                  <h3 id="" style={{ textAlign: "left", maxWidth: "500px" }}>
                    Set Clear Objectives
                    <p style={{ textAlign: "left" }}>
                      Define specific goals for participating in the exhibition.
                      Whether it&rsquo;s increasing brand visibility, generating
                      leads, or launching a new product, having clear objectives
                      guides the entire process.
                    </p>
                  </h3>
                  <textarea
                    name="exhibitionObjectives"
                    value={eventDetails.exhibitionObjectives}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Type your objectives…"
                  ></textarea>
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Research Relevant Events
                    <p style={{ textAlign: "left" }}>
                      Identify exhibitions or trade shows that align with the
                      client&rsquo;s industry and objectives.
                    </p>
                  </h3>
                  <textarea
                    name="researchEvents"
                    value={eventDetails.researchEvents}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="I Found….."
                  ></textarea>
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Understand Costs and Budget
                    <p style={{ textAlign: "left" }}>
                      Evaluate the overall costs associated with participating.
                    </p>
                  </h3>
                  <textarea
                    name="costsAndBudget"
                    value={eventDetails.costsAndBudget}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Notes to start"
                  ></textarea>
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Book a Booth Space
                    <p style={{ textAlign: "left" }}>
                      Contact the event organizers and secure a booth space.
                    </p>
                  </h3>
                  <textarea
                    name="boothSpace"
                    value={eventDetails.boothSpace}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Notes to start"
                  ></textarea>
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Design an Engaging Booth
                    <p style={{ textAlign: "left" }}>
                      Create a visually appealing and interactive booth.
                    </p>
                  </h3>
                  <textarea
                    name="engagingBooth"
                    value={eventDetails.engagingBooth}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Notes to start"
                  ></textarea>
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Develop Promotional Materials
                    <p style={{ textAlign: "left" }}>
                      Prepare marketing collateral for the exhibition.
                    </p>
                  </h3>
                  <textarea
                    name="promotionalMaterials"
                    value={eventDetails.promotionalMaterials}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Notes to start"
                  ></textarea>
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Promote Attendance
                    <p style={{ textAlign: "left" }}>
                      Utilise channels to promote the client&rsquo;s participation.
                    </p>
                  </h3>
                  <textarea
                    name="promoteAttendance"
                    value={eventDetails.promoteAttendance}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Notes to start"
                  ></textarea>
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Train Staff
                    <p style={{ textAlign: "left" }}>
                      Provide training to booth staff.
                    </p>
                  </h3>
                  <textarea
                    name="trainStaff"
                    value={eventDetails.trainStaff}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Notes to start"
                  ></textarea>
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Prepare a Lead Capture System
                    <p style={{ textAlign: "left" }}>
                      Set up a system for capturing leads efficiently.
                    </p>
                  </h3>
                  <textarea
                    name="leadCapture"
                    value={eventDetails.leadCapture}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Notes to start"
                  ></textarea>
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Create an Attractive Display
                    <p style={{ textAlign: "left" }}>
                      Design an eye-catching display for the exhibition.
                    </p>
                  </h3>
                  <textarea
                    name="attractiveDisplay"
                    value={eventDetails.attractiveDisplay}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Notes to start"
                  ></textarea>
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Engage Attendees
                    <p style={{ textAlign: "left" }}>
                      Actively engage with attendees during the event.
                    </p>
                  </h3>
                  <textarea
                    name="engageAttendees"
                    value={eventDetails.engageAttendees}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Notes to start"
                  ></textarea>
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Follow Up After the Event
                    <p style={{ textAlign: "left" }}>
                      Implement a comprehensive follow-up strategy.
                    </p>
                  </h3>
                  <textarea
                    name="followUp"
                    value={eventDetails.followUp}
                    onChange={handleInputChange}
                    style={{ width: "400px" }}
                    placeholder="Notes to start"
                  ></textarea>
                </div>
              </>
            )}

            {selectedEvent === "Themed Event" && (
              <>
                <div>
                  <h3 id="" style={{ textAlign: "left", maxWidth: "500px" }}>
                    Organizing themed events
                    <p style={{ textAlign: "left" }}>
                      around holidays, seasons, or festivals can be a creative
                      and engaging way to connect with your audience. Fill the
                      steps to help you plan and execute a themed event.
                    </p>
                  </h3>
                  <textarea
                    name="themedNotes"
                    value={eventDetails.themedNotes || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        themedNotes: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Notes to start"
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Choose a Theme
                    <p style={{ textAlign: "left" }}>
                      Select a theme that aligns with the occasion, such as
                      holidays, seasons, or festivals. Ensure it resonates with
                      your target audience and reflects your brand.
                    </p>
                  </h3>
                  <textarea
                    name="chooseTheme"
                    value={eventDetails.chooseTheme || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        chooseTheme: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Notes to start"
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Define Objectives
                    <p style={{ textAlign: "left" }}>
                      Clearly outline the goals and objectives of the themed
                      event. Whether it to increase brand awareness, promote
                      products, or foster community engagement, having clear
                      objectives will guide your planning.
                    </p>
                  </h3>
                  <textarea
                    name="defineObjectives"
                    value={eventDetails.defineObjectives || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        defineObjectives: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Notes to start"
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Plan Activities
                    <p style={{ textAlign: "left" }}>
                      Develop a list of activities and experiences that tie into
                      the chosen theme. This could include special performances,
                      interactive elements, or themed contests to keep attendees
                      engaged.
                    </p>
                  </h3>
                  <input
                    type="file"
                    name="activitiesFile"
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        activitiesFile: e.target.files[0] || null,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Upload files.."
                  ></input>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Create a Budget
                    <p style={{ textAlign: "left" }}>
                      Establish a budget that covers all aspects of the event,
                      including venue rental, decorations, entertainment,
                      catering, and promotional materials. Ensure you allocate
                      resources wisely based on the importance of each element
                      to the theme.
                    </p>
                  </h3>
                  <textarea
                    name="budget"
                    value={eventDetails.budget || ""}
                    onChange={(e) =>
                      setEventDetails({ 
                        ...eventDetails,
                        budget: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Budget details"
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Select a Venue
                    <p style={{ textAlign: "left" }}>
                      Choose a venue that complements the theme and can
                      accommodate the planned activities. Consider the
                      logistics, space requirements, and overall atmosphere of
                      the venue.
                    </p>
                  </h3>
                  <textarea
                    name="selectVenue"
                    value={eventDetails.selectVenue || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        selectVenue: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Venue details"
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Design Invitations and Promotional Material
                    <p style={{ textAlign: "left" }}>
                      Craft invitations and promotional materials that convey
                      the theme and generate excitement. Use visuals, colours,
                      and messaging that align with the chosen concept.
                    </p>
                  </h3>
                  <textarea
                    name="designInvitations"
                    value={eventDetails.designInvitations || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        designInvitations: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Invitation and promotional material details"
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Coordinate Decorations
                    <p style={{ textAlign: "left" }}>
                      Plan and arrange decorations that enhance the thematic
                      atmosphere. This includes signage, banners, table
                      settings, and any other visual elements that contribute to
                      the overall ambiance.
                    </p>
                  </h3>
                  <textarea
                    name="coordinateDecorations"
                    value={eventDetails.coordinateDecorations || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        coordinateDecorations: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Decoration details"
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Collaborate with Partners
                    <p style={{ textAlign: "left" }}>
                      If applicable, collaborate with partners or sponsors who
                      can contribute to the event&rsquo;s success. This could involve
                      co-hosting, sponsorship of activities, or providing
                      promotional support.
                    </p>
                  </h3>
                  <textarea
                    name="collaboratePartners"
                    value={eventDetails.collaboratePartners || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        collaboratePartners: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Partner collaboration details"
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Organize Catering
                    <p style={{ textAlign: "left" }}>
                      Plan a menu that aligns with the theme and caters to the
                      preferences of your audience. Whether it&rsquo;s seasonal
                      treats, festive cuisine, or holiday-inspired drinks, the
                      catering should complement the overall experience.
                    </p>
                  </h3>
                  <textarea
                    name="organizeCatering"
                    value={eventDetails.organizeCatering || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        organizeCatering: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Catering details"
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Coordinate Entertainment
                    <p style={{ textAlign: "left" }}>
                      Arrange entertainment that fits the theme. This might
                      include live performances, DJs, or activities that enhance
                      the overall experience for attendees.
                    </p>
                  </h3>
                  <textarea
                    name="coordinateEntertainment"
                    value={eventDetails.coordinateEntertainment || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        coordinateEntertainment: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Entertainment details"
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Implement Marketing and Promotion
                    <p style={{ textAlign: "left" }}>
                      Promote the themed event through various channels,
                      including social media, email newsletters, and traditional
                      advertising. Create a buzz around the event and highlight
                      what makes it unique.
                    </p>
                  </h3>
                  <textarea
                    name="marketingPromotion"
                    value={eventDetails.marketingPromotion || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        marketingPromotion: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Marketing and promotion details"
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Manage Logistics
                    <p style={{ textAlign: "left" }}>
                      Ensure that all logistical aspects are well-managed,
                      including registration, attendee check-in, and any
                      technical requirements for activities or performances.
                    </p>
                  </h3>
                  <textarea
                    name="manageLogistics"
                    value={eventDetails.manageLogistics || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        manageLogistics: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Logistics management details"
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Capture Memories
                    <p style={{ textAlign: "left" }}>
                      Plan to capture photos and videos during the event to
                      create lasting memories. These can be used for future
                      marketing and to further engage with attendees after the
                      event.
                    </p>
                  </h3>
                  <textarea
                    name="captureMemories"
                    value={eventDetails.captureMemories || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        captureMemories: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Memory capturing details"
                  ></textarea>
                </div>
              </>
            )}

            {selectedEvent === "Product Sampling" && (
              <>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Set Clear Objectives
                    <p style={{ textAlign: "left" }}>
                      Define the goals of your product sampling campaign.
                      Whether it&rsquo;s to increase brand awareness, gather feedback,
                      or drive sales, having clear objectives will guide your
                      strategy.
                    </p>
                  </h3>
                  <textarea
                    name="setObjectives"
                    value={eventDetails.setObjectives || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        setObjectives: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Describe your objectives.."
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Identify Target Audience
                    <p style={{ textAlign: "left" }}>
                      Determine the demographic and psychographic
                      characteristics of your target audience. Understanding
                      your ideal consumers will help you choose the right
                      locations and tailor your approach.
                    </p>
                  </h3>
                  <textarea
                    name="targetAudience"
                    value={eventDetails.targetAudience || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        targetAudience: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Target audience"
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Select Sampling Locations
                    <p style={{ textAlign: "left" }}>
                      Choose high-traffic locations where your target audience
                      is likely to be present. This could include shopping
                      malls, busy streets, events, or relevant public spaces.
                    </p>
                  </h3>
                  <textarea
                    name="samplingLocations"
                    value={eventDetails.samplingLocations || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        samplingLocations: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Sampling locations"
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Obtain Necessary Permits
                    <p style={{ textAlign: "left" }}>
                      Check local regulations and obtain any necessary permits
                      for conducting sampling activities in public spaces.
                      Ensure compliance with legal requirements.
                    </p>
                  </h3>
                  <textarea
                    name="obtainPermits"
                    value={eventDetails.obtainPermits || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        obtainPermits: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Permit details"
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Design Appealing Samples
                    <p style={{ textAlign: "left" }}>
                      Create visually appealing and well-packaged product
                      samples. The presentation should align with your brand and
                      make a positive first impression.
                    </p>
                  </h3>
                  <input
                    type="file"
                    name="designSamples"
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        designSamples: e.target.files[0],
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Upload files.."
                  ></input>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Train Sampling Team
                    <p style={{ textAlign: "left" }}>
                      Train your sampling team to engage with consumers
                      effectively. They should be knowledgeable about the
                      product, able to answer questions, and capable of
                      providing a positive brand experience.
                    </p>
                  </h3>
                  <textarea
                    name="trainTeam"
                    value={eventDetails.trainTeam || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        trainTeam: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Training details"
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Prepare Marketing Materials
                    <p style={{ textAlign: "left" }}>
                      Develop supporting marketing materials, such as brochures,
                      flyers, or promotional cards, to accompany the product
                      samples. Include essential product information and calls
                      to action.
                    </p>
                  </h3>
                  <textarea
                    name="marketingMaterials"
                    value={eventDetails.marketingMaterials || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        marketingMaterials: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Marketing materials"
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Implement Data Collection
                    <p style={{ textAlign: "left" }}>
                      Set up a system to collect feedback and data from
                      consumers. This could involve surveys, QR codes linked to
                      online forms, or other methods to gather valuable
                      insights.
                    </p>
                  </h3>
                  <textarea
                    name="dataCollection"
                    value={eventDetails.dataCollection || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        dataCollection: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Data collection details"
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Ensure Hygiene and Safety
                    <p style={{ textAlign: "left" }}>
                      Prioritize hygiene and safety in the handling and
                      distribution of product samples. Comply with health and
                      safety guidelines to build trust with consumers.
                    </p>
                  </h3>
                  <textarea
                    name="hygieneSafety"
                    value={eventDetails.hygieneSafety || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        hygieneSafety: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Hygiene and safety measures"
                  ></textarea>
                </div>

                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Create an Engaging Booth Setup
                    <p style={{ textAlign: "left" }}>
                      Design an attractive booth or setup that draws attention.
                      Use signage, banners, and branding elements to create a
                      visually appealing space.
                    </p>
                  </h3>
                  <textarea
                    name="boothSetup"
                    value={eventDetails.boothSetup || ""}
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        boothSetup: e.target.value,
                      })
                    }
                    style={{ width: "400px" }}
                    placeholder="Booth setup details"
                  ></textarea>
                </div>
              </>
            )}

            {selectedEvent === "Innovative Promotion" && (
              <>
                <div
                  className="slider"
                  style={{
                    gap: "50px",
                    justifyContent: "unset",
                    margin: "50px 0px",
                  }}
                >
                  {platforms.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className=""
                        style={{
                          border: "2px solid var(--bg-highlight)",
                          borderRadius: "10px",
                          width: "250px",
                          height: "100px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          boxShadow: "0px 4px 4px rgba(29, 140, 242, 0.08)",
                          backgroundColor: "rgba(244, 248, 251, 0.342)",
                          cursor: "pointer",
                        }}
                      >
                        <p>{item.name}</p>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <h3 id="" style={{ textAlign: "left", maxWidth: "500px" }}>
                    Define Objectives Clearly
                    <p style={{ textAlign: "left" }}>
                      outline the objectives of the workshop or webinar.
                      Identify what knowledge or skills participants should gain
                      by the end.
                    </p>
                  </h3>
                  <textarea
                    style={{ width: "400px" }}
                    placeholder="Describe your objectives.."
                  ></textarea>
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Understand Your Audience
                    <p style={{ textAlign: "left" }}>
                      Tailor the content to your target audience&rsquo;s needs,
                      knowledge level, and interests. This ensures relevance and
                      engagement.
                    </p>
                  </h3>
                  <textarea
                    style={{ width: "400px" }}
                    placeholder="Target audience"
                  ></textarea>
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Choose Topics Select topics
                    <p style={{ textAlign: "left" }}>
                      that align with your expertise and provide valuable
                      insights to your audience. Address common challenges or
                      emerging trends.
                    </p>
                  </h3>
                  <textarea
                    style={{ width: "400px" }}
                    placeholder="Choose workshop topic.."
                  ></textarea>
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Plan Content Structure
                    <p style={{ textAlign: "left" }}>
                      Organize the content logically with a clear introduction,
                      main points, and conclusion. Maintain a balance between
                      theory and practical examples.
                    </p>
                  </h3>
                  <textarea
                    style={{ width: "400px" }}
                    placeholder="Content structure"
                  ></textarea>
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Engaging Formats Incorporate
                    <p style={{ textAlign: "left" }}>
                      various formats such as presentations, case studies, Q&A
                      sessions, and interactive activities to keep participants
                      engaged.
                    </p>
                  </h3>
                  <input
                    type="file"
                    style={{ width: "400px" }}
                    placeholder="Upload files.."
                  ></input>
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Leverage Technology
                    <p style={{ textAlign: "left" }}>
                      Choose a reliable platform for hosting webinars. Ensure
                      that participants can easily access the session and
                      interact with the content.
                    </p>
                  </h3>
                  <textarea
                    type="date"
                    style={{ width: "400px" }}
                    placeholder="Choose workshop platform"
                  ></textarea>
                </div>
                <div>
                  <h3 style={{ textAlign: "left", maxWidth: "500px" }}>
                    Promote Effectively
                    <p style={{ textAlign: "left" }}>
                      Build awareness about your workshop or webinar through
                      targeted marketing. Utilize email campaigns, social media,
                      and other channels.
                    </p>
                  </h3>
                  <textarea
                    type="date"
                    style={{ width: "400px" }}
                    placeholder="Promote workshop event.. (Email - Social media – Calls –SMS - WhatsApp.."
                  ></textarea>
                </div>
              </>
            )}
            {selectedEvent != "Choose Your Event" && (
              <>
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "30px",
                  }}
                >
                  <button onClick={handleFormSubmit} type="button" className="btn">
                    Start Event
                  </button>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/034/621/871/large_2x/vip-glyph-icon-vector.jpg"
                    style={{
                      width: "50px",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                    alt="ent"
                  />
                </div>
                {/* <div
              style={{
                justifyContent: "center",
                display: "flex",
                marginTop: "30px",
              }}
            >
              <div className="card-globle">
                An email has been sent to your team to start planning for the
                event
              </div>
            </div> */}
                <EnterpriseLaunch />{" "}
              </>
            )}
            <Blogs blogs={blogs} title="Blogs" />
          </form>
        </div>
      </div>
    </>
  );
};
