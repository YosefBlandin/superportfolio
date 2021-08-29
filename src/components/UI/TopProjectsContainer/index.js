import React, { useRef } from "react"
import { MdKeyboardArrowRight, MdKeyboardArrowLeft  } from "react-icons/md"
import { containerRelative,projectsContainer, projectsContainer__leftButton, projectsContainer__rightButton } from "./styles.module.scss";



export const TopProjectsContainer = ({ children }) => {
	const container = useRef(null)
	const handleLeft = () => {
		container.current.scrollLeft += 150;
	}
	const handleRight = () => {
		container.current.scrollLeft -= 150;
	} 
	return (
		<div className={containerRelative}>
			<section ref={container} className={projectsContainer}>
				<button className={projectsContainer__leftButton} onClick={handleLeft}><MdKeyboardArrowRight /></button>
				{children}
				<button className={projectsContainer__rightButton} onClick={handleRight}><MdKeyboardArrowLeft /></button>
		</section>
		</div>
	)
}
