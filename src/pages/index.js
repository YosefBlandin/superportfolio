import * as React from "react"

import { container, hero, grid, reactImage } from "./styles.module.scss";
import { Card } from "../components/UI/Card";
import { Button } from "../components/UI/Button";
import { Title } from "../components/UI/Title";
import { Subtitle } from "../components/UI/Subtitle";
import yosefImg from "../images/yosefblandin.jpg";

import { TopProjectsContainer } from "../components/UI/TopProjectsContainer";
import AtomSvg from "../components/UI/AtomSvg";
import { AboutContainer } from "../components/UI/AboutContainer";
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
        
        <TopProjectsContainer>
          <Card 
          title="Ultra Morty" 
          subtitle="Redux, React JS, Sass"
          />
          <Card
           title="Blandin's chat"
           subtitle="Next JS, Socket IO, MongoDB"
           />
          <Card 
          title="Weatherstonishing"
          subtitle="Next JS, Sass, Openweather API"
          />
        </TopProjectsContainer>

        <AboutContainer>
          <img src={yosefImg} alt="Yosef Blandin"/>
          <div></div>
          <section>
            <h2>With a good experience working on startups developing features with teams</h2>
            <p>I know how to solve problems and how to learn to learn, due as a Software Developer our mission is to provide solutions in order to impulse the mission of the company</p>
          </section>
        </AboutContainer>

      </main>
      
      </>
  )
}
export default IndexPage
