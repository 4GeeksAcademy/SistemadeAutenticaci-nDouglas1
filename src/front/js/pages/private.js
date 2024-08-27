import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useLocalStorage } from "../hooks/hooks";
import "../../styles/private.css"

const Private = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(store.token);
    !store.token && navigate("/login");
  }, [store.token]);
  console.log(store.profile);

  return (
    <div className="text-center mt-5">
    <h1 className="home-title">Bienvenido</h1>
    <img
        src="https://storage.googleapis.com/twg-content/original_images/TwG-Privacy-and-Trust-W-Figure2_JLWwKoX.gif"
        alt="Loading..."
        className="private-page"
      />
  </div>
  );
};

export default Private;