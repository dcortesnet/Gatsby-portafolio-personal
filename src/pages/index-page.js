import * as React from "react"
import Jumbotron from "../components/jumbotron"
import RecentPosts from "../components/recent-posts"
import FeatureWorks from "../components/feature-works"
import Footer from "../components/footer"
import Header from "../components/header"

const IndexPage = () => (
  <div>
    <Header />
    <Jumbotron />
    <RecentPosts />
    <FeatureWorks />
    <Footer />
  </div>
)

export default IndexPage
