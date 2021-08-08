import React from "react";
import { Link } from "gatsby"
import { 
    FiHome,
    FiStar,
    FiInfo,
    FiMessageSquare
    } from "react-icons/fi";
import { list__item, list__itemActive } from "./styles.module.scss"




export const LiSidebar = ({ home,projects,contact,about, to, handleClick}) => {
    return (
        <>
            {home &&
                <Link 
                    to={to} 
                    onClick={handleClick}
                    className={list__item} 
                    activeClassName={list__itemActive}
                >
                    <li>
                        <FiHome /> <span>Home</span>
                     </li>
                </Link>}

            {projects &&
                <Link 
                    to={to} 
                    onClick={handleClick}
                    className={list__item} 
                    activeClassName={list__itemActive}
                >
                    <li>
                        <FiStar /> <span>Projects</span>
                     </li>
                </Link>}

            {contact && 
                <Link 
                to={to} 
                onClick={handleClick}
                className={list__item} 
                activeClassName={list__itemActive}
                >
                    <li>
                        <FiMessageSquare /> <span>Contact</span>
                    </li>
                </Link>}
                
            {about &&
                <Link 
                to={to} 
                onClick={handleClick}
                className={list__item} 
                activeClassName={list__itemActive}
                >
                    <li>
                        <FiInfo /> <span>About</span>
                    </li>
                </Link>}
        </>
    )
}