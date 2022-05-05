import React from 'react'
import "../style/CustomTitle.scss";


export const CustomTitle = (props) => {
    return (
        <h1 className="custom-title">
            {props.title}
        </h1>
    )  
}  