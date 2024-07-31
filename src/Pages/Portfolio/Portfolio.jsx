import { useState, useEffect, useRef } from "react";
import "./Portfolio.css";
import Img1 from "../../../public/poert1.png"
import Img2 from "../../../public/port2.png"
import Img3 from "../../../public/port3.png"
export default function Portfolio() {
    
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='text-center'>
        <h1 className='portfolio pt-4'>PORTFOLIO COMPONENT</h1>
        <div className="d-flex align-items-center justify-content-center mb-3 portfolio-icon pt-1 pb-2">
            <div className="portfolio-line me-3"></div>
          <i className="fa-solid fa-star"></i>
          <div className="portfolio-line ms-3"></div>
        </div>
        <div className="container" ref={containerRef}>
            <div className="row g-5">
                <div className="col-md-6 col-lg-4">
                    <div onClick={(e) => { e.stopPropagation(); toggleActive(0); }} className="rounded-3 position-relative portfolio-img">
                        <img src={Img1} alt="" className='w-100 rounded-3 ' />
                        <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                            <i className='fa-solid fa-plus fa-6x text-white'></i>
                        </div>
                        <div className={`test position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center z-3 ${activeIndex === 0 ? "" : "d-none"}`}>
                            <img src={Img1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div onClick={(e) => { e.stopPropagation(); toggleActive(1); }} className="rounded-3 position-relative portfolio-img">
                        <img src={Img2} alt="" className='w-100 rounded-3 ' />
                        <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                            <i className='fa-solid fa-plus fa-6x text-white'></i>
                        </div>
                        <div className={`test position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center z-3 ${activeIndex === 1 ? "" : "d-none"}`}>
                            <img src={Img2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div onClick={(e) => { e.stopPropagation(); toggleActive(2); }} className="rounded-3 position-relative portfolio-img">
                        <img src={Img3} alt="" className='w-100 rounded-3 ' />
                        <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                            <i className='fa-solid fa-plus fa-6x text-white'></i>
                        </div>
                        <div className={`test position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center z-3 ${activeIndex === 2 ? "" : "d-none"}`}>
                            <img src={Img3} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 pb-4">
                    <div onClick={(e) => { e.stopPropagation(); toggleActive(3); }} className="rounded-3 position-relative portfolio-img">
                        <img src={Img1} alt="" className='w-100 rounded-3 ' />
                        <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                            <i className='fa-solid fa-plus fa-6x text-white'></i>
                        </div>
                        <div className={`test position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center z-3 ${activeIndex === 3 ? "" : "d-none"}`}>
                            <img src={Img1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 pb-4">
                    <div onClick={(e) => { e.stopPropagation(); toggleActive(4); }} className="rounded-3 position-relative portfolio-img">
                        <img src={Img2} alt="" className='w-100 rounded-3 ' />
                        <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                            <i className='fa-solid fa-plus fa-6x text-white'></i>
                        </div>
                        <div className={`test position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center z-3 ${activeIndex === 4 ? "" : "d-none"}`}>
                            <img src={Img2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 pb-4">
                    <div onClick={(e) => { e.stopPropagation(); toggleActive(5); }} className="rounded-3 position-relative portfolio-img">
                        <img src={Img3} alt="" className='w-100 rounded-3 ' />
                        <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                            <i className='fa-solid fa-plus fa-6x text-white'></i>
                        </div>
                        <div className={`test position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center z-3 ${activeIndex === 5 ? "" : "d-none"}`}>
                            <img src={Img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
