import React from 'react'
import Typical from 'react-typical'

function HeaderText() {    

    const traits = 
    [
      'Frontend developer.', 1000,
      'Game developer.', 1000,
      'Fullstack developer.', 1000,
      'Game designer.', 1000,
    ]

    return (
        <div className="landingPage">
            <div className="text-wrapper">
                <p>Hello, I'm a </p>  
                 <h1>
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={traits}
                    />
                </h1>
            </div>
        </div>  
    )
}

export default HeaderText