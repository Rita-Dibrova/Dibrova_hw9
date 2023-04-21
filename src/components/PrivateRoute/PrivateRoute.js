import React, { useState } from 'react';
import {useNavigate } from "react-router-dom";
import style from "./PrivateRoute.module.css";
import PrivatePage from '../PrivatePage/PrivatePage';

  const PrivateRoute = () => {
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
      navigate ('/error')
    }    

    if(!isAuth) {
      return (
        <div className={style.route}>
          <h3>Are you already 18 years old?</h3>
          <div className={style.buttons}>
            <button className={style.yesButton} onClick={() => setIsAuth(true)} > Yes </button>
            <button className={style.noButton} onClick={handleClick}> No </button>
          </div>
        </div>
      )
    }
    return <PrivatePage/> 
}

export default PrivateRoute;