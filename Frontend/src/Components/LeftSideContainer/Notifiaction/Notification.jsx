import React from 'react'
import "./notification.css"
import NotificationItem from './NotificationItem'


import ProfilePic1 from "../../../assets/Profile/profile-1.jpg"
import ProfilePic2 from "../../../assets/Profile/profile-2.jpg"
import ProfilePic3 from "../../../assets/Profile/profile-3.jpg"
import ProfilePic4 from "../../../assets/Profile/profile-4.jpg"
import ProfilePic5 from "../../../assets/Profile/profile-5.jpg"
import ProfilePic6 from "../../../assets/Profile/profile-6.jpg"
import ProfilePic7 from "../../../assets/Profile/profile-7.jpg"
import ProfilePic8 from "../../../assets/Profile/profile-8.jpg"
import ProfilePic9 from "../../../assets/Profile/profile-9.jpg"

const Notification = () => {

    const profile = {
        ProfilePic1: ProfilePic1,
        ProfilePic2: ProfilePic2,
        ProfilePic3: ProfilePic3,
        ProfilePic4: ProfilePic4,
        ProfilePic5: ProfilePic5,
        ProfilePic6: ProfilePic6,
        ProfilePic7: ProfilePic7,
        ProfilePic8: ProfilePic8,
        ProfilePic9: ProfilePic9,
    }
    return (
        <div className='notification'>
            <div className="header">
                <p className="heading">Notifications</p>
                <p className="see-all">See all</p>
            </div>
            <div className="notification-item-box">
                <NotificationItem profileImgLeft={profile.ProfilePic1} profileImgRight={profile.ProfilePic2} />
                <NotificationItem profileImgLeft={profile.ProfilePic2} profileImgRight={profile.ProfilePic3} />
                <NotificationItem profileImgLeft={profile.ProfilePic3} profileImgRight={profile.ProfilePic4} />
                <NotificationItem profileImgLeft={profile.ProfilePic4} profileImgRight={profile.ProfilePic5} />
                <NotificationItem profileImgLeft={profile.ProfilePic5} profileImgRight={profile.ProfilePic6} />
                <NotificationItem profileImgLeft={profile.ProfilePic6} profileImgRight={profile.ProfilePic7} />
                <NotificationItem profileImgLeft={profile.ProfilePic7} profileImgRight={profile.ProfilePic8} />
                <NotificationItem profileImgLeft={profile.ProfilePic8} profileImgRight={profile.ProfilePic9} />
            </div>
        </div>
    )
}

export default Notification
