import React, { Component } from 'react'
import Typical from 'react-typical'

function HeaderText() {    

    const traits = 
    [
      ' software engineer.',
      1000,
      ' developer.',
      1000,
      ' game designer.',
      1000,
    ]

    return (
        <div className="landingPage">
            <p >
                My name is <b>Alberto</b> and <br/>
                I'm a 
                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={traits}
                />  
            </p>  
        </div>  
    )
}

export default HeaderText