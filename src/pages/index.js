import * as React from "react"

import { container, hero, grid } from "./styles.module.scss";
import reactIcon from "../images/reactIcon.svg";
import { Card } from "../components/UI/Card";
import { Button } from "../components/UI/Button";
import { Title } from "../components/UI/Title";
import { Subtitle } from "../components/UI/Subtitle";
import { TopProjectsContainer } from "../components/UI/TopProjectsContainer";
// markup
const IndexPage = () => {

  return (
      <main className={container}>
        
        <section className={grid}>
          <img src={reactIcon} alt="Atom"/>
          <section className={hero}>
            <Title title="I am very passionate about Frontend Development"/>
            <Subtitle content="Always improving my skills to bring you a better service"/>
            <Button title="See projects" />
          </section>
        </section>
        
        <TopProjectsContainer>
          <Card />
          <Card />
          <Card />
          <Card />
        </TopProjectsContainer>
      </main>
  )
}
export default IndexPage
