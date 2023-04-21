import React from "react";
import style from './PrivatePage.module.css';
import image from '../../img/private.png'

const PrivatePage = () => {
    return (
        <div className={style.private}>
            <h2>Welcome to Private Page!</h2>
            <img src={image} alt={'private'} />
        </div>      
    )
}

export default PrivatePage;