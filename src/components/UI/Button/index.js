import React from 'react';
import { button } from "./styles.module.scss";



export const Button = ({ title }) => {
    return (
        <button className={button}>{title}</button>
    )
}