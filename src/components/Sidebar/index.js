import React from "react"
import { sidebar, sidebarActive,sidebar__list } from "./styles.module.scss"
import { LiSidebar } from "../UI/LiSidebar"



export const Sidebar = ({ showSidebar, handleClick }) => {
    return (
        <aside className={showSidebar ? `${sidebar+" "+sidebarActive}` : sidebar}>
            <ul className={sidebar__list}>
                <LiSidebar handleClick={handleClick} to="/" home/>
                <LiSidebar handleClick={handleClick} to="/projects" projects/>
                <LiSidebar handleClick={handleClick} to="/contact" contact/>
                <LiSidebar handleClick={handleClick} to="/about" about/>
            </ul>
        </aside>
    )
}