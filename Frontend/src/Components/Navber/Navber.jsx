import React from 'react'
import './navber.css'
import ProfileImg from "../../assets/Profile/profile-6.jpg"
import searchImg from "../../assets/icons/searchImg.png"

import { IoSearchSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiChat } from "react-icons/bi";


const Navber = () => {
    return (
        <div className='navber'>
            <div className="logo">
                <p className="name">ChitChatHub</p>
            </div>
            <div className="search">
                <input type="text" placeholder='search your friends'/>
                <IoSearchSharp />
            </div>
            <div className="profile">
                <IoMdNotificationsOutline />
                <BiChat />
                <p className="user-name">pjphukan</p>
                <img src={ProfileImg} alt="" className="user-prof-img" />

            </div>
        </div>
    )
}

export default Navber
