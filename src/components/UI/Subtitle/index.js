import React from "react";
import { subtitle } from "./styles.module.scss";


export const Subtitle = ({ content }) => {
    return (
        <p className={subtitle}>{content}</p>
    )
}