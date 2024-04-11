import React from 'react'
import "./posted.css"
import image from "../../../assets/Profile/profile-6.jpg"
import HZicon from "../../../assets/icons/horizental.png"

import { IoEllipsisHorizontalSharp } from "react-icons/io5";
const Posted = () => {
  return (
    <div className="posted">
      <div className="top">
        <div className="user-details">
          <img src={image} alt="" />
          <div className="name">
            <p className="user-name">PJPhukan</p>
            <p className="post-date">2 Fed,2024</p>
          </div>
        </div>
        <IoEllipsisHorizontalSharp className="horizental-icon" />
      </div>
      <p className="caption-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde natus suscipit ipsa quo aspernatur sapiente modi dolor ratione iste. Quia, cumque. Doloremque .</p>
      <div className="post-box">
        <img src={image} alt="" className="postImage" />
      </div>
    </div>
  )
}

export default Posted
