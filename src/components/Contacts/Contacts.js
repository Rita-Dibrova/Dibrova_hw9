import React from "react";
import style from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <h2>Contacts</h2>
            <p>Phone number for contacting us: +380501234567</p>
            <p>Email address for contacting us: example@gmai.com</p>
        </div>      
    )
}

export default Contacts;