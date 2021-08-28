import * as React from "react"

import { container, hero, grid, reactImage } from "./styles.module.scss";
import reactIcon from "../images/reactIcon.svg";
import { Card } from "../components/UI/Card";
import { Button } from "../components/UI/Button";
import { Title } from "../components/UI/Title";
import { Subtitle } from "../components/UI/Subtitle";
import { ReactSVG } from 'react-svg';

import { TopProjectsContainer } from "../components/UI/TopProjectsContainer";
import AtomSvg from "../components/UI/AtomSvg";
// markup
const IndexPage = () => {

  return (
    <>
      <main className={container}>
        
        <section className={grid}>
          <figure className={reactImage}>
          <AtomSvg />
          </figure>

          <section className={hero}>
            <Title title="A webpage must be a piece of art, in order to dominate the market"/>
            <Subtitle content="I make sure to develop an astonishing business presentation"/>
            <Button title="See projects" />
          </section>
        </section>
      </main>
      <TopProjectsContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </TopProjectsContainer>
      </>
  )
}
export default IndexPage
