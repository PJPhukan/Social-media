import React from 'react'
import './home.css'
import Navber from '../../Components/Navber/Navber'
import LeftSide from '../../Components/LeftSideContainer/LeftSide'
import MainPost from '../../Components/MainPostContainer/MainPost'
import RightSide from '../../Components/RightSideContainer/RightSide'
const Home = () => {
    return (
        <div className='home'>
            <Navber />
            <div className='componet-container'>
                <LeftSide/>
                <MainPost/>
                <RightSide/>

            </div>
        </div>
    )
}

export default Home
