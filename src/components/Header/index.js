import React, { useState } from "react"
import { header, header__container } from "./styles.module.scss"
import { SidebarHamburguer } from "../UI/SidebarHamburguer"
import { Sidebar } from "../Sidebar"
import logo from "../../images/logoDark.svg"

export const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    const handleClick = () => setShowSidebar(!showSidebar)
    const childrenProps = {showSidebar, handleClick}
    return (
        <>
        <header className={header}>
             <section className={header__container}>
             <img
                    className="logo"
                    src={logo}
                    alt="Yosef Blandin logo"
                />
            <SidebarHamburguer {...childrenProps} />
        <Sidebar {...childrenProps} />
             </section>
        </header>
        </>
    )
}