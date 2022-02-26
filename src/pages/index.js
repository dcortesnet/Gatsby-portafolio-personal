import * as React from "react"
//import { Link } from "gatsby"
import Jumbotron from "../components/jumbotron"
import RecentPosts from "../components/recent-posts"
import "../styles/index.css"
import FeatureWorks from "../components/feature-works"
import Footer from "../components/footer"

const IndexPage = () => (
  <div>
    <Jumbotron />
    <RecentPosts />
    <FeatureWorks />
    <Footer />
  </div>
)

export default IndexPage

/**
 *   // <Link to="/page-2/">Go to page 2</Link> <br />
      //{" "}
 */
