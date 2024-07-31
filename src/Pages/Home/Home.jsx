// import React from 'react'
import './Home.css'
import HomeImg from "../../../public/avataaars.svg"
export default function Home() {
  return (
    <div className='bg-home'>
        <div className="home-img text-center pt-5 pb-5">
            <img src={HomeImg} alt="" />
        </div>
        <div className="home-content text-center pb-4 text-white">
            <h1>START FRAMEWORK</h1>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-3"></div>
          </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
  )
}
