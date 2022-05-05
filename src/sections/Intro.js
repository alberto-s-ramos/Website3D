import React, {useEffect} from 'react'
import Typical from 'react-typical'
import "../style/Intro.scss";
import { CustomButton } from '../components/CustomButton';

export const Intro = () => {    
    useEffect(() => {
        document.getElementById('emoji_vid').play();
    },[])

    const traits = 
    [
        'Software engineer.', 1000,
        'Frontend developer.', 1000,
        'Fullstack developer.', 1000,
        'Game developer.', 1000,
    ]

    return (
        <section id="Intro" className="landingPage">
            <div className="landingPage__container">
                <div className="landingPage__text">
                    <div className="landingPage__titleArea">
                        <video id="emoji_vid" autoPlay loop muted >
                            <source src="emoji.mp4" type="video/mp4" />
                        </video>
                        <h1>Hello, I'm <span>Alberto</span>, a <br/>
                            <span> <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={traits}
                            /></span>
                        </h1>  

                    </div>
                    <p>
                        Originally from Portugal - currently living in Berlin, Germany - I am
                        a hardworking person with a creativity vein and
                        attention to detail. I am always excited with by new challenges, and to improve
                        my skillset in technologies that excite me.<br/>
                        Dog person, huge fan of climbing, traveling and photography.                        
                        Interested in the entire spectrum of software development, with a special passion
                        for frontend, design and game development.
                    </p>
                </div>
                <CustomButton 
                    className="landingPage__btn"
                    name="Resume"
                    link="Resume.pdf"
                />
            </div>
        </section>  
    )
}
