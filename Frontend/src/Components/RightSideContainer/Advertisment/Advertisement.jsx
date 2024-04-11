import React from 'react'
import "./advertisement.css"
import AdItem from './AdItem'

import adImg1 from "../../../assets/image/img-1.jpg"
import adImg2 from "../../../assets/image/img-2.jpg"
import adImg3 from "../../../assets/image/img-3.jpg"
import adImg4 from "../../../assets/image/img-4.jpg"

const image={
  adImg1: adImg1,
  adImg2: adImg2,
  adImg3: adImg3,
  adImg4: adImg4,
}


const Advertisement = () => {
  return (
    <div className='advertisment'>
      <div className="adItem-box">
        <AdItem image={image.adImg1}/>
        <AdItem image={image.adImg2}/>
      </div>
    </div>
  )
}

export default Advertisement
