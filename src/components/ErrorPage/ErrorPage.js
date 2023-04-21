import React from "react";
import { useNavigate} from "react-router-dom";
import style from './ErrorPage.module.css';
import image from '../../img/error.png'

const ErrorPage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/main')
    }    

    return (
        <div className={style.error} >
            <img src={image} alt={'error'}/> 
            <button className={style.button} onClick={handleClick}> Transfer to Main Page </button>
        </div>
    )
}

export default ErrorPage;