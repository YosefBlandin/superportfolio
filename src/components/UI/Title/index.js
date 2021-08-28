import React from 'react';
import { titleh1 } from "./styles.module.scss";

export const Title = ({title}) => {
    return (
        <h1 className={titleh1}>{title}</h1>
    )
}