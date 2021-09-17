import React from 'react';
import { button, button__spinner1, button__spinner2 } from "./styles.module.scss";



export const Button = ({ title, handleClick, loading }) => {
    return (
        <>
        {loading ? (
            <button disabled onClick={handleClick} className={button}>
                <div className={button__spinner1}></div>
                <div className={button__spinner2}></div>
            </button>
        ) : (
            <button onClick={handleClick} className={button}>{title}</button>
        )}
        </>
    )
}