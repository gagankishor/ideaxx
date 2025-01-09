 
import { RiSeoLine } from 'react-icons/ri'

export const MarketingEvents = () => {
   
      const platforms = [
        { id: 1, name: "What is event marketing", logo: "/ahrefs.png", link: "#" },
        { id: 2, name: "How to get the most benefits from your marketing event", logo: "/semrush.png", link: "#" },
        { id: 3, name: "Transforming Ideas into Unforgettable Experiences", logo: "/keyword-tool-logo.webp", link: "#" },
        { id: 4, name: "Blogs", logo: "/moz.png", link: "#" },
      ];
  return (
    <>
      <div className="dashboard container">
        <div className="content">
          <h1 id="heading">
          <RiSeoLine />

          Marketing Events
          </h1>
          <div className="form">

          <div className="slider" style={{gap:'50px',justifyContent:'center'}}>
              {platforms.map((item) => {
                return (
                  <div className="" key={item.id} style={{border:'2px solid var(--bg-highlight)', borderRadius:'10px',width:'300px',height:'300px',display:'flex',justifyContent:'center',alignItems:'center',boxShadow:'0px 4px 4px rgba(29, 140, 242, 0.08)',backgroundColor:'rgba(244, 248, 251, 0.342)'}}>
                    
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
