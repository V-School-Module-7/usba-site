import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from '../components/heroheader'
import Beeimg from "../images/heroheader1.png"
import Whybeekeeping from "../components/homepage/WhyBeekeeping"
import coneimg from "../images/homebeecones.png"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroHeader img={Beeimg} text={"WELCOME TO THE UTAH COUNTY BEEKEEPERS ASSOCIATION"} />
    <Whybeekeeping img={coneimg}></Whybeekeeping>
  </Layout>
)

export default IndexPage