import * as React from "react"
import { container, container__section } from "./styles.module.scss"
import reactIcon from "../images/reactIcon.svg"
import { Card } from "../components/Card"
// markup
const IndexPage = () => {
  return (
      <main className={container}>
        <img src={reactIcon} alt="Atom"/>
        <section className={container__section}>
        <h1>I'm very passionate about Front End Development</h1>
        <p>I'm always improving my skills to bring you a better service</p>
        <button>See projects</button>
        </section>
        <section className={container__section}>
          <Card />
          <Card />
          <Card />

        </section>
      </main>
  )
}
export default IndexPage
