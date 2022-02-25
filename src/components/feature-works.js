import * as React from "react"
import "../styles/feature-works.css"
import design1 from "../images/design1.png"
import design2 from "../images/design2.png"

const FeatureWorks = () => {
  return (
    <div className="feature-works">
      <p className="feature-works__title">Recent posts</p>
      <div className="feature-works__cards">
        <div className="feature-works__cards__card">
          <div className="feature-works__cards__card__media">
            <img
              width={250}
              height={230}
              alt="design1"
              src={design1}
              className="feature-works__cards__card__media__img"
            />
          </div>
          <div className="feature-works__cards__card__info">
            <h2 className="feature-works__cards__card__info__title">
              Designing Dashboards
            </h2>
            <div className="feature-works__cards__card__info__tags">
              <p className="feature-works__cards__card__info__tags__tag">
                2020
              </p>
              <p>Dashboard</p>
            </div>
            <p className="feature-works__cards__card__info__title__text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="feature-works__cards__card">
          <div className="feature-works__cards__card__media">
            <img
              width={250}
              height={230}
              alt="design2"
              src={design2}
              className="feature-works__cards__card__media__img"
            />
          </div>
          <div className="feature-works__cards__card__info">
            <h2 className="feature-works__cards__card__info__title">
              Designing Dashboards
            </h2>
            <div className="feature-works__cards__card__info__tags">
              <p className="feature-works__cards__card__info__tags__tag">
                2020
              </p>
              <p>Dashboard</p>
            </div>
            <p className="feature-works__cards__card__info__title__text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureWorks
