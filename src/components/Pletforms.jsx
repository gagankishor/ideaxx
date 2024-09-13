import React from 'react'

export const Pletforms = ({platforms,title}) => {
  return (
    <>
    <h2 id="section-heading" style={{marginTop:'40px'}}>{title}</h2>
            <div className="slider">
              {platforms.map((item) => {
                return (
                  <div className="card">
                    <a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      className="item"
                    >
                      <img src={item.logo} alt={item.name} />
                    </a>
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
    </>
  )
}
