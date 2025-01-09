
import { EnterpriseLaunch } from '@/components/components/EnterpriseLaunch'
import { RiSeoLine } from 'react-icons/ri'

export const LegalConsultation = () => {
    
      
  return (
    <>
      <div className="dashboard container">
        <div className="content">
          <h1 id="heading">
          <RiSeoLine />
          Legal Consultation
          </h1>
          <form className="form">
            <div>

              <label htmlFor="text">Type your legal concern and your team will review it to the lawyer
              </label>
              <textarea style={{width:'500px',height:'300px', padding:'30px'}} name="legal" id=""></textarea>
            </div>
            <button type='button' className='btn' style={{margin:'auto'}}>Apply</button>

            <EnterpriseLaunch/>
          </form>
        </div>
      </div>
    </>
  )
}
