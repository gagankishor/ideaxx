
import { EnterpriseLaunch } from "@/components/components/EnterpriseLaunch";
import { RiSeoLine } from "react-icons/ri";

export const RegistrationCertificate = () => {
return (
    <>
      <div className="dashboard container">
        <div className="content">
          <h1 id="heading">
            <RiSeoLine />
            Registration Certificate
          </h1>
          <div className="form">
          <div className="row">
            <div className="col">
              <img src="/RegistrationCertificate.png" alt="Registration Certificate" />
            </div>
            <div className="col" style={{display:'flex' ,justifyContent:'center' , flexDirection:'column',alignItems:'center'}}>
              <div>

            <label htmlFor="">
              
              Apply for your business RC
              </label>
              <button type="button" className="btn" style={{margin:'auto'}}>Apply
              </button>
              </div>
              <EnterpriseLaunch/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
