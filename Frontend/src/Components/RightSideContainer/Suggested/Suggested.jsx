import React from 'react'
import "./Suggested.css"
import SuggestedUser from './SuggestedUser'
import image1 from "../../../assets/Profile/profile-1.jpg"
import image2 from "../../../assets/Profile/profile-2.jpg"
import image3 from "../../../assets/Profile/profile-3.jpg"
import image4 from "../../../assets/Profile/profile-4.jpg"
import image5 from "../../../assets/Profile/profile-5.jpg"
import image6 from "../../../assets/Profile/profile-6.jpg"
import image7 from "../../../assets/Profile/profile-7.jpg"

const image = {
  image1, image2, image3, image4, image5, image6, image7
}
const Seggested = () => {
  return (
    <div className='suggested'>
      <p className="heading">Suggested for you</p>

      <div className="user-item-box">
        <SuggestedUser image={image.image1} />
        <SuggestedUser image={image.image2} />
        <SuggestedUser image={image.image3} />
        <SuggestedUser image={image.image4} />
        <SuggestedUser image={image.image5} />
        <SuggestedUser image={image.image6} />
      </div>
    </div>
  )
}

export default Seggested
