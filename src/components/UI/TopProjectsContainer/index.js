import React from "react";
import { grid } from "./styles.module.scss";



export const TopProjectsContainer = ({ children }) => {
	return (
		<section className={grid}>
			{children}
		</section>
	)
}
