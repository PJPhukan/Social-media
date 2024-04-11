import React from 'react'
import "./suggesteduser.css"
import { RiUserAddLine } from "react-icons/ri";


const SuggestedUser = ({ image }) => {
    return (
        <div className='suggested-user'>
            <div className="box">
                <img src={image} alt="" className="user-img" />
                <div className="name-box">
                    <p className="user-name">PJPhukan</p>
                    <p className="user-text">Suggested for you</p>
                </div>
            </div>
            <div className="icon-box">
                <RiUserAddLine />

            </div>

        </div>
    )
}

export default SuggestedUser
