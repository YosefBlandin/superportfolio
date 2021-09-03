import React, { useRef } from "react"
import { projectsContainer } from "./styles.module.scss";



export const TopProjectsContainer = ({ children }) => {
	const container = useRef(null)
	
	return (
		<section ref={container} className={projectsContainer}>
			{children}
		</section>
	)
}
