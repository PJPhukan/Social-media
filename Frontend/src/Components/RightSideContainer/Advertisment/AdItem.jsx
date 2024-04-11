import React from 'react'
import "./aditem.css"

const AdItem = ({ image }) => {
    return (
        <div className='aditem'>
            <img src={image} />
            <div className='box-ad'>
                <p className="name">CodeDam</p>
                <p className="promotions">Buy codedam course</p>
            </div>
        </div>
    )
}

export default AdItem
