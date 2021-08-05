import React from 'react'
import { card } from './styles.module.scss'

export const Card = () => {
    return (
        <article className={card}>
            <img />
            <section>
                <h2>Weather Application</h2>
                <p>React JS, Context API</p>
            </section>
        </article>
    )
}