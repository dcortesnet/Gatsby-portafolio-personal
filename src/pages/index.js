import * as React from "react"
import { Link } from "gatsby"
import Jumbotron from "../components/jumbotron"
import "../styles/index.css"

const IndexPage = () => (
  <div className="wrapper">
    <Jumbotron />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </div>
)

export default IndexPage
