import React, {useState} from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroHeader from "../components/heroheader"
import EducationBee from "../images/EducationBee.png"
import Diseases from '../components/education/Diseases'
import Pests from '../components/education/Pests'
import Parasites from '../components/education/Parasites'
import Predators from '../components/education/Predators'
import Index from '../components/education/index'
import Intro from '../components/education/Intro'

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const GridContainer = styled.div`
  display: grid;
  /* grid-template-areas: "index content"; */
  grid-template-columns: 1fr 2fr;
  margin-top: 40px;
  grid-gap: 110px;

  @media (max-width: 1265px) {
    display: block;
  }
`

const StickyContainer = styled.div`
  position: fixed;
  z-index: 2;
  display: ${props=>props.show? "inline-block" : "none"};
  top: 50px;
  left: auto;

  @media(max-width: 500px){
    left: 16px;
  }

  @media(min-width: 1265px){
    display: none;
  }
`
const StickyContainer2 = styled.div`
  display: none;
  @media (min-width: 1265px) {
    display: inline-block;
    grid-column: 1 / 2;
    grid-template-rows: repeat(12, 1fr);
    position: sticky;
    top: 0;
    height: 100vh;
    margin-left: 40px;
  }
`

const StickyButton = styled.button`
  position: sticky;
  /* left: -16px; */
  z-index: 1;
  top: 16px;


  @media (min-width: 1265px) {
    visibility: hidden;
  }
`

const Icon = styled.div`
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
`

const OverLay = styled.div`
  position: fixed;
  display: ${props => (props.show ? "default" : "none")};
  width: 100vw;
  height: 115vh;
  top: -100px;
  background-color: rgba(100, 100, 100, 0.8);
  z-index: 1;
`

function DiseasesPestsParasites() {
    const [toggle, setToggle] = useState(false)
    return (
        <Layout>
            <SEO title="Diseases, Pests and Parasites" />
            <OverLay onClick={() => setToggle(!toggle)} show={toggle} />
            <HeroHeader img={EducationBee} text={"diseases, pests & parasites"} />
            <FlexContainer>
                <GridContainer>
                    <StickyButton onClick={() => setToggle(!toggle)}>
                        <Icon />
                        <Icon />
                        <Icon />
                    </StickyButton>
                    <StickyContainer show={toggle}>
                        {/* <MobileGuide show={toggle} setToggle={setToggle} /> */}
                    </StickyContainer>
                    <StickyContainer2>
                        <Index />
                    </StickyContainer2>
                    <div style={{ gridColumn: "2 / 3" }}>
                        <Intro />
                        <Diseases />
                        <Pests />
                        <Parasites />
                        <Predators />
                    </div>
                </GridContainer>
            </FlexContainer>





        </Layout>
    )
}

export default DiseasesPestsParasites