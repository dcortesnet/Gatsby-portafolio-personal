import React from "react"
import gastbyIcon from "../images/gatsby-icon.png"
import "../styles/jumbotron.css"

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="jumbotron__profile__hero">
        <img className="jumbotron__profile__hero-img" src={gastbyIcon}></img>
      </div>
    </div>
  )
}

export default Jumbotron
