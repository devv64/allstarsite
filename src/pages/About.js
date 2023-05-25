import React from 'react'
import BG from '../assets/liquorBG2.webp'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div 
        className='aboutTop' 
        style={{ backgroundImage: `url(${BG})`}}>
        </div>
        <div className='aboutBottom'>
            <h1> ABOUT US </h1>
            <p> 
                Welcome to our liquor store! We are passionate about providing you with the finest selection of spirits, wines, and beers. With years of experience in the industry, we curate a wide range of premium products to cater to your taste preferences. Whether you're looking for a rare whiskey, a crisp white wine, or a craft beer, we have something for every occasion. Our knowledgeable staff is dedicated to offering exceptional customer service and helping you discover new and exciting beverages. Explore our collection and embark on a delightful journey of flavors. Cheers!
            </p>
        </div>
    </div>
  )
}

export default About