import React from 'react'
import "./explore.css"
import ExploreItem from './ExploreItem'



const Explore = () => {
    return (
        <div className='explore'>
            <div className="header">
                <p className="heading">Explore</p>
                <p className="see-all">See all</p>
            </div>
            <div className="explore-item-box">

                <ExploreItem />
                <ExploreItem />
                <ExploreItem />
            </div>
        </div>
    )
}

export default Explore
