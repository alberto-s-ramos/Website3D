import React from 'react'
import Typical from 'react-typical'

function HeaderText() {    

    const traits = 
    [
      ' game developer.',
      1000,
      ' software developer.',
      1000,
      ' game designer.',
      1000,
    ]

    return (
        <div className="landingPage">
            <p>
                My name is <b>Alberto</b> and <br/>
                I'm a 
                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={traits}
                /> <br/>
            </p>  
        </div>  
    )
}

export default HeaderText