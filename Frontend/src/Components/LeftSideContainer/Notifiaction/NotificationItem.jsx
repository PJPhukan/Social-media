import React from 'react'
import "./notificationitem.css"
const NotificationItem = ({ profileImgLeft, profileImgRight }) => {
    return (
        <div className='notification-item'>
            <div className="img-name">
                <img src={profileImgLeft} />
                <p className="text">Parag's likes your post</p>
            </div>
            <img src={profileImgRight} />
        </div>
    )
}

export default NotificationItem
