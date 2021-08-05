import React from "react"
import { 
    FiLinkedin,
    FiInstagram, 
    FiTwitter
} from "react-icons/fi";
import { container, container__section } from "./styles.module.scss";

export const Footer = () => {
    return (
        <footer className={container}>
            <section className={container__section}>
                <a href="https://www.linkedin.com/in/yosef-blandin-a587241b0/">
                    <FiLinkedin />
                </a>
                <a href="https://www.instagram.com/yosef_blandin/">
                    <FiInstagram />
                </a>
                <a href="https://twitter.com/yosef_rios">
                    <FiTwitter />
                </a>
            </section>

            <p>Yosef Blandin All Rights Reserved</p>
        </footer>
    )
}