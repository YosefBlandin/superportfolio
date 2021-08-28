import React from 'react';
import { ProjectDescription } from '../../ProjectDescription';
import { MdInfo } from "react-icons/md"
import { card } from './styles.module.scss';

export const Card = ({ imgSrc = "", imgAlt = "project", title = "Weather App", subtitle = "React js" }) => {
    const [showDescription, setShowDescription] = React.useState(false);

    return (
        <>
        <article className={card}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <MdInfo onClick={() => setShowDescription(!showDescription)}/>
        </article>
        {showDescription && (
            <ProjectDescription showDescription={showDescription} setShowDescription={setShowDescription}/>
        )}
        </>
    )
}