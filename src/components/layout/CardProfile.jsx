import Navbar from "./Navbar"

import './CardProfile.css'
import imageJeremy from '../../images/image-jeremy.png'

const CardProfile = () => {
  return (
    <div className="cardProfileContainer">
        <div className="cardProfile">
            <img src={imageJeremy} alt="Photo Jeremy" />
            <div className="info">
              <span>Report for</span>
              <h1>Jeremy Robson</h1>
            </div>
        </div>

        <Navbar />
    </div>
  )
}

export default CardProfile