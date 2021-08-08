import React from "react";
import { MdInfo } from "react-icons/md"
import { cardTextContainer } from "./styles.module.scss";




export const CardText = ({ title, subtitle, setShowDescription, showDescription }) => {
    return (
    <section className={cardTextContainer}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <MdInfo onClick={() => setShowDescription(!showDescription)}/>
    </section>
    )
}