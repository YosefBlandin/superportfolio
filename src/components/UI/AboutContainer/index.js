import React from "react";
import { aboutSection } from "./styles.module.scss";


export const AboutContainer = ({ children }) => {
    return (
        <section className={aboutSection}>
            {children}
        </section>
    )
}