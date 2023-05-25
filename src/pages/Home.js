import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/liquorBG.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
        <div className="headerContainer">
            <h1> All Star Wine & Liquor </h1>
            <p> BEST SELECTION IN TOWN </p>
            <Link to="/menu">
                <button> ORDER NOW </button>
            </Link>
        </div>
    </div>
  )
}

export default Home