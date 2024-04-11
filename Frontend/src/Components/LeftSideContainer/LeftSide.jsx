import React from 'react'
import './leftside.css'
import Notification from './Notifiaction/Notification'
import Explore from './Explore/Explore'

const LeftSide = () => {

    return (
        <div className='leftbar'>
            <Notification />
            <Explore/>
        </div>
    )
}

export default LeftSide
