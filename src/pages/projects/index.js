import React from "react"
import { Card } from "../../components/UI/Card";
import { TopProjectsContainer } from "../../components/UI/TopProjectsContainer";
import { container, regularProjects } from "./styles.module.scss"


const projects = () => {
    return (
        <section className={container}>
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
        <div className={regularProjects}>
        <Card 
          title="Machete Store" 
          subtitle="React APIs, Sass, MongoDB"
          />
          <Card
           title="Weather App"
           subtitle="React App"
           />
          <Card 
            title="Defining"
            subtitle="Next JS, Sass"
          />
        </div>
        </section>
    )
}

export default projects