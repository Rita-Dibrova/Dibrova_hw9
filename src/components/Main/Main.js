import React from 'react';
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
      <div style={{border:"3px solid green", margin: "50px"}}>
        <h2 style={{color:"orange"}}>Hello! This is Main page!</h2>
        <Outlet/>
      </div>
    )
  }

export default Main;
