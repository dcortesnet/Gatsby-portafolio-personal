import * as React from "react"
import { Link } from "gatsby"
import Jumbotron from "../components/jumbotron"
import RecentPosts from "../components/recent-posts"
import FeatureWorks from "../components/feature-works"
import Footer from "../components/footer"

const IndexPage = () => (
  <div>
    <Link to="/blog-page/">Go to page 2</Link> <br />
    <Jumbotron />
    <RecentPosts />
    <FeatureWorks />
    <Footer />
  </div>
)

export default IndexPage

/**
 *   // 
      //{" "}
 */
