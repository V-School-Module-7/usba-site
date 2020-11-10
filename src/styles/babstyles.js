import styled from "styled-components"


export const TextHeader = styled.h1`
  position: relative;
  height: 33px;
  margin: auto;
  display: inline-block;
  border-bottom: 6px solid #63966a;
  padding-bottom: 16px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-transform: uppercase;
  color: #000000;

  @media (max-width: 900px) {
    font-size: 31px;
  }

  @media (max-width: 550px) {
    font-size: 20px;
  }
`

export const ParagraphTextBottomMargin = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 32px;

  color: #000000;

  @media (max-width: 900px) {
    font-size: 19px;
  }

  @media (max-width: 550px) {
    font-size: 16px;
  }
`

export const ParagraphText = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;

  color: #000000;

  @media (max-width: 900px) {
    font-size: 19px;
  }

  @media (max-width: 550px) {
    font-size: 16px;
  }
`



export const SubHeaderMarginBottom = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 32px;

  color: #000000;

  @media (max-width: 900px) {
    font-size: 20px;
  }

  @media (max-width: 550px) {
    font-size: 16px;
  }
`
