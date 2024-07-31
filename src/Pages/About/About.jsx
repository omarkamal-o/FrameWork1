// import React from 'react'
import "./About.css"
export default function About() {
  return (
    <div className="bg-about text-center pt-5 pb-5 ">
      <h1 className="pt-5">ABOUT COMPONENT</h1>
      <div className="d-flex align-items-center justify-content-center mb-3 text-white pt-1 pb-2">
            <div className="line me-3"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-3"></div>
          </div>
          <div className="container">
            <div className="row px-5 pb-5">
              <div className="col-md-6 ps-md-5 text-white text-center pb-4 pt-2">
                 <div className=""><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                 </div>
              </div>
              <div className="col-md-6 pe-5 text-white text-center pb-4 pt-2">
                <div className="">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
