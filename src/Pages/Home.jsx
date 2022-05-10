import React from 'react'
import { ReviewCard } from '../components/ReviewCard'
import "./home.css"

export const Home = () => {
  return (
    <div className='homepage'>
        <div className="heroSection">
            <div className="heroContent">
                <h1>get the best experience <br /><span> money can buy</span> </h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non suscipit repellat cumque obcaecati magni enim quod, dicta excepturi molestiae error!</p>
            </div>
            <div className="heroImage">
                <img src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07966512.png"/>
            </div>
        </div>
        
        <div className="commentSection">
            <h2>customer Reviews</h2>
            <div className="cardContainer">
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
            </div>

            <button className='seeAllBtn'>See All Reviews</button>
        </div>
    </div>
  )
}
