import React from 'react'
import './mainpost.css'
import Post from "./Post/Post"
import Posted from "./Posted/Posted"
import image from "../../assets/Profile/profile-6.jpg"
const MainPost = () => {
  return (
    <div className='mainpostcontainer'>
      <Post image={image} />
      <Posted/>
    </div>
  )
}

export default MainPost
