import * as React from "react"
import { Link } from "gatsby"
import Jumbotron from "../components/jumbotron"
import RecentPosts from "../components/recent-posts"
import "../styles/index.css"
import FeatureWorks from "../components/feature-works"

const IndexPage = () => (
  <div>
    <Jumbotron />
    <RecentPosts />
    <FeatureWorks />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </div>
)

export default IndexPage
