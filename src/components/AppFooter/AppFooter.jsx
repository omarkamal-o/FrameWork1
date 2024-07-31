// import React from 'react'
import './AppFooter.css'
export default function AppFooter() {
  return (
    <div className="bg-appfooter">
        <div className="container">
            <div className="row pt-5 pb-3">

                <div className="col-md-4 pt-4 text-white text-center">
                    <h2>LOCATION</h2>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>

                <div className="col-md-4 pt-4 text-center text-white">
                    <h2>AROUND THE WEB</h2>
                 <div className="appFooter-icon">
                 <ul className="list-unstyled d-flex">
                        <li><i className="fa-brands fa-facebook"></i></li>
                        <li><i className="fa-brands fa-twitter"></i></li>
                        <li><i className="fa-brands fa-linkedin-in"></i></li>
                        <li><i className="fa-solid fa-globe"></i></li>
                    </ul>
                 </div>
                </div>

                <div className="col-md-4 pt-4 text-white text-center">
                    <h2>ABOUT FREELANCER</h2>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}
