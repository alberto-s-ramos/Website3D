import React from 'react'
import Typical from 'react-typical'
import "../style/HeaderText.scss";
import { CustomButton } from './CustomButton';

function HeaderText() {    

    const traits = 
    [
        'Software engineer.', 1000,
        'Frontend developer.', 1000,
        'Fullstack developer.', 1000,
        'Game developer.', 1000,
    ]

    return (
        <section className="landingPage">
            <div className="landingPage__container">
                <div className="landingPage__text">
                    <h1>Hello, I'm <span>Alberto</span>, a </h1>
                    <h1>
                        <span><Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={traits}
                        /></span>
                    </h1>  
                    <p>Originally from Portugal - currently living in Berlin, Germany - I am  a well-organized and hardworking person with a creativity vein and attention to detail. Always keen to improve my skills and to learn new technologies that excite me. Animal lover, huge fan of climbing, traveling and photography. Interested in the entire software development spectrum with a special passion for frontend, game development and design.</p>
                </div>
                <CustomButton 
                    className="landingPage__btn"
                    name="Resume"
                    link="./Resume.pdf"
                />
                {/* <svg id="landingPage__svg" width="258" height="296" viewBox="0 0 568 606" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M106.918 468.503C98.6583 463.039 93.6908 457.323 82.9338 456.839C65.6255 456.06 48.4147 467.579 38.0506 479.77C15.7162 506.043 5.45245 562.745 42.8194 582.895C60.6881 592.53 88.0115 586.859 105.656 579.581C137.967 566.252 160.945 537.895 179.854 510.92C237.108 429.241 270.01 334.12 294.376 239.588C303.292 204.996 315.655 171.384 324.602 136.795C326.814 128.244 329.871 119.774 331.405 111.08C331.744 109.156 332.649 103.436 332.807 105.381C334.012 120.181 331.615 135.649 331.615 150.514C331.615 184.189 331.54 217.847 331.054 251.518C330.419 295.488 333.533 339.457 336.103 383.34C337.5 407.178 339.625 430.923 342.415 454.652C344.665 473.786 345.826 494.415 352.724 512.709C359.013 529.389 370.458 547.7 386.106 557.975C400.221 567.243 419.027 567.19 435.337 565.067C480.068 559.243 515.685 533.44 550 507.871M168.26 286.025C168.26 304.29 168.006 322.009 147.059 330.669C123.42 340.443 110.639 318.24 102.814 301.051C86.4022 265.002 92.3124 224.281 101.892 187.371C113.756 141.662 146.896 92.6588 187.618 65.0889C223.82 40.5785 258.845 25.6823 303.185 20.4444C349.434 14.9811 390.509 17.5899 431.889 39.4999C520.77 86.5617 535.307 190.453 502.289 274.7C474.062 346.726 412.902 398.183 340.633 430.847C339.064 431.556 329.734 434.719 317.811 438.113M317.811 438.113C292.321 445.367 254.981 453.674 256.29 441.3C257.03 434.308 288.8 434.985 293.161 434.985C301.386 434.985 309.734 436.053 317.811 438.113ZM317.811 438.113C326.953 440.445 335.749 444.048 343.628 448.814C362.387 460.159 384.693 469.422 407.231 470.156C436.019 471.094 471.135 472.767 487.656 446.745" stroke="url(#paint0_linear_7_4)" stroke-width="35" stroke-linecap="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_7_4" x1="41" y1="315" x2="542" y2="344" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#3566AF"/>
                            <stop offset="1" stop-color="#B4D9FB" stop-opacity="0.75"/>
                        </linearGradient>
                    </defs>
                </svg> */}

            </div>
        </section>  
    )
}

export default HeaderText