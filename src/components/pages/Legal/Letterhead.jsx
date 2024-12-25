import { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { SideBar } from "../../components/Sidebar";
import { RiFileTextLine } from "react-icons/ri";
// import html2pdf from "html2pdf.js";
// import { Document, Packer, Paragraph } from "docx"; // Using docx for DOCX generation

export const Letterhead = () => {
  const [businessName, setBusinessName] = useState("Your Company Name");
  const [address, setAddress] = useState("123 Main St, City, Country");
  const [contact, setContact] = useState("contact@example.com");
  const [email, setEmail] = useState("email@example.com");
  const [location, setLocation] = useState("City, State");
  const postalCode = "12345";
  const [taxNumber, setTaxNumber] = useState("123-456-789");

  const htmlContentRef = useRef(null); // Reference to the HTML content div

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      businessName,
      address,
      contact,
      email,
      location,
      postalCode,
      taxNumber,
    });
  };

  // const handlePDFDownload = () => {
  //   const element = document.getElementById("letterhead-content");

  //   const options = {
  //     margin: 1,
  //     filename: "letterhead.pdf",
  //     image: { type: "jpeg", quality: 0.98 },
  //     html2canvas: { scale: 2 },
  //     jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  //   };

  //   html2pdf().set(options).from(element).save();
  // };

  const handleDocDownload = async () => {
    // const htmlContent = htmlContentRef.current.innerText; // Get text content from the ref

    // try {
    //   const doc = new Document({
    //     sections: [
    //       {
    //         children: [new Paragraph(htmlContent)],
    //       },
    //     ],
    //   });

    //   const blob = await Packer.toBlob(doc);
    //   const link = document.createElement("a");
    //   link.href = URL.createObjectURL(blob);
    //   link.download = "letterhead.docx";
    //   link.click();
    // } catch (error) {
    //   console.error("Error generating DOCX:", error);
    // }
  };

  return (
    <>
      <Helmet>
        <title>Letterhead | ideax</title>
      </Helmet>
      <div className="dashboard container">
        <SideBar />
        <div className="content">
          <h1 id="heading">
            <RiFileTextLine /> Letterhead
          </h1>

          {/* Displaying Letterhead */}
          <div className="row">
            <div
              id="letterhead-content"
              className="letterhead-preview"
              ref={htmlContentRef}
            >
              <div className="letterhead-header">
                <h2>{businessName}</h2>
                <p>{address}</p>
                <p>
                  {location} {postalCode}
                </p>
                <p>{contact}</p>
              </div>
              <div className="letterhead-footer">
                <p>
                  {businessName} | {contact} | {email} | {location} | Tax Number: {taxNumber}
                </p>
              </div>
            </div>

            <form
              className="form"
              onSubmit={handleSubmit}
              style={{ maxWidth: "500px", marginTop: "20px" }}
            >
              {/* Business Name */}
              <div className="input-group">
                <label htmlFor="businessName">Business Name</label>
                <input
                  type="text"
                  id="businessName"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Enter Business Name"
                  required
                />
              </div>

              {/* Address */}
              <div className="input-group">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter company address"
                  required
                  rows={3}
                />
              </div>

              {/* Contact */}
              <div className="input-group">
                <label htmlFor="contact">Contact Number</label>
                <input
                  type="text"
                  id="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Enter contact number"
                  required
                />
              </div>

              {/* Email */}
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                />
              </div>

              {/* Location */}
              <div className="input-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter location"
                  required
                />
              </div>

              {/* Tax Number */}
              <div className="input-group">
                <label htmlFor="taxNumber">Tax Number</label>
                <input
                  type="text"
                  id="taxNumber"
                  value={taxNumber}
                  onChange={(e) => setTaxNumber(e.target.value)}
                  placeholder="Enter tax number"
                  required
                />
              </div>

              {/* Submit Buttons */}
              Download
              <div className="row" style={{ marginTop: "20px" }}>
                {/* <button type="button" className="btn" onClick={handlePDFDownload}>
                   PDF
                </button> */}
                <button type="button" className="btn" onClick={handleDocDownload}>
                   DOC
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
