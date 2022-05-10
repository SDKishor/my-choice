import React from 'react'
import "./reviewCard.css"

export const ReviewCard = () => {
  return (
    <div className='ReviewCard'>
        <div className="upper">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aperiam repudiandae dignissimos asperiores eum aspernatur.
        </div>
        <div className="lower">
            <div className="imgsec">
                <img src="https://randomuser.me/api/portraits/men/51.jpg"  />
            </div>
            <div className="userInfo">
                <h3>user Name</h3>
                <h4>4.5</h4>
            </div>
        </div>
    </div>
  )
}
