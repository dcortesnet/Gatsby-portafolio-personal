import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import Jumbotron from "../components/jumbotron"

const IndexPage = () => (
  <div>
    <Jumbotron />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </div>
)

export default IndexPage
