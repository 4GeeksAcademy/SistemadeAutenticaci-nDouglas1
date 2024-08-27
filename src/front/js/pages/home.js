import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()


	return (
		<div className="text-center mt-5">
			<h1 className="home-title">Bienvenido a la Página de Inicio</h1>
			<img
				src="https://limonadaestudio.com/wp-content/uploads/2020/03/ejemplo-p%C3%A1gina-one-page.gif"
				alt="Loading..."
				className="inicio-page"
			/>
		</div>
	);
};
