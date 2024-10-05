import React from 'react'

export const Blogs = ({blogs,title}) => {
  return (
    <>
    <h2 id="section-heading" style={{marginTop:'40px'}}>Blogs</h2>
            <div className="slider">
              {blogs.map((item) => {
                return (
                  <div key={item.id} className="card">
                    <a href={item.link} target="_blank" className="item">
                      <img src={"/platforms/" + item.logo} alt={item.name} />
                    </a>
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
    </>
  )
}
