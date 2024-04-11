import React from 'react'
import Suggested from './Suggested/Suggested'
import "./rightside.css"
import Advertisement from './Advertisment/Advertisement'

const RightSide = () => {
  return (
    <div className='rightbar'>
      <Advertisement />
      <Suggested />
    </div>
  )
}

export default RightSide
