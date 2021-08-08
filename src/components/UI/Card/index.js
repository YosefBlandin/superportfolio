import React from 'react';
import { ProjectDescription } from '../../ProjectDescription';
import { CardText } from '../CardText';
import { card } from './styles.module.scss';

export const Card = ({ imgSrc = "", imgAlt = "project", title = "Weather App", subtitle = "React js" }) => {
    const [showDescription, setShowDescription] = React.useState(false);

    const cardTextProps = { showDescription, setShowDescription, title, subtitle };

    return (
        <>
        <article className={card}>
            <CardText {...cardTextProps}/>
        </article>
        {showDescription && (
            <ProjectDescription showDescription={showDescription} setShowDescription={setShowDescription}/>
        )}
        </>
    )
}