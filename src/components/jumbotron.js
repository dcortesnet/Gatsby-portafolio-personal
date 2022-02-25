import React from "react"
import gastbyIcon from "../images/gatsby-icon.png"
import "../styles/jumbotron.css"

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="jumbotron__profile__hero">
        <img className="jumbotron__profile__hero__img" src={gastbyIcon}></img>
      </div>
      <div className="jumbotron__profile__resume">
        <h1 className="jumbotron__profile__resume__title">
          Hi, I am John, Creative Technologist
        </h1>
        <p className="jumbotron__profile__resume__description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="jumbotron__profile__resume__download">
          <a href="#" className="jumbotron__profile__resume__download__button">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
