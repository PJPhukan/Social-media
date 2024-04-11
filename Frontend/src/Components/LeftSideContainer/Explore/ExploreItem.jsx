import React from 'react'
import "./exploreitem.css"
import img1 from "../../../assets/image/img-6.jpg"
import img2 from "../../../assets/image/img-4.jpg"
import img3 from "../../../assets/image/img-5.jpg"

const ExploreItem = ({ image }) => {
    return (
        <div className='expl-box'>
            <div className="img-box">
                <img src={img1} alt="" />
            </div>
            <div className="img-box">
                <img src={img2} alt="" />
            </div>
            <div className="img-box">
                <img src={img3} alt="" />
            </div>
        </div>
    )
}

export default ExploreItem
