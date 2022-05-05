import React from 'react'
import "../style/CustomButton.scss";


export const CustomButton = (props) => {
    return(
        <a className="custom-btn" href={props.link} target="_blank" rel="noopener noreferrer">
            <p>{props.name}</p>
        </a>
    )  
}  