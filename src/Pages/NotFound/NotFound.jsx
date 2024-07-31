// import React from 'react'
import './NotFound.css'
import ImgNotFound from "../../../public/pasted image 0.png"
export default function NotFound() {
  return (
    <div>
        <div className=" notfound w-100 d-flex justify-content-center p-5">
            <img src={ImgNotFound}  alt="" />
        </div>
    </div>
  )
}
