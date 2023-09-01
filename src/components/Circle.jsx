import React from "react";
import circleStyles from "./Circle.module.css";

const Circle = ({color}) => {
    return (
        <>
        <div className={circleStyles['circle']} style={{background: color}}></div>
        </>
    )
}

export default Circle;