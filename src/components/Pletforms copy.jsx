import React from 'react'

export const PletformsNew = ({platforms,title}) => {
  return (
    <>
        <div  style={{backgroundColor:'rgba(244, 248, 251)' ,borderRadius:'12px'}}>
          <div className="row" style={{alignItems:'center',justifyContent:'space-between',padding:'10px 15px'}}>
            <div className='row' style={{alignItems:'center'}}>

            <h2 id="section-headin" style={{marginTop:'0px' ,marginLeft:'0px' ,paddingTop:'0px'}}>{title}</h2>
            <p>Starting From  USD 300$</p>
            </div>
            <div style={{color:'rgb(79, 173, 234)', cursor:'pointer'}}>View All Templets</div>
          </div>

            <div className="slider" style={{justifyContent:'center', borderTop:'2px solid var(--bg-highlight)',gap:'2rem' ,paddingTop:'20px'}}>
              {platforms.map((item) => {
                return (
                  <div className="card" style={{marginRight:'unset'}}>
                    <a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      className="item"
                      style={{backgroundColor:'white'}}
                    >
                      <img src={item.logo} alt={item.name} />
                    </a>
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
              </div>
    </>
  )
}
