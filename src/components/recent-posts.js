import React from "react"
import "../styles/recent-posts.css"

const RecentPosts = () => {
  return (
    <div className="recent-posts">
      <p className="recent-posts__title">Recent posts</p>
      <div className="recent-posts__cards">
        <div className="recent-post__cards__card">
          <h3 className="recent-post__cards__card__title">
            Making a design system from scratch
          </h3>
          <div className="recent-post__cards__card__subtitle">
            <p>12 Feb 2020</p>
            <p>Design, Pattern</p>
          </div>
          <p className="recent-post__cards__card__text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RecentPosts
