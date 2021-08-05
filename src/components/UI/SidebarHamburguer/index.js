import React from 'react'
import { sidebarHamburguer, sidebarHamburguerActive } from "./styles.module.scss"


export const SidebarHamburguer = ({ handleClick, showSidebar }) => {
    return (
        <button
         onClick={handleClick} 
         className={
            showSidebar ? 
            `${sidebarHamburguer+" "+sidebarHamburguerActive}`:
             sidebarHamburguer}
        >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </button>
    )
}