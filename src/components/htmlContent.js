import React, { useEffect, useRef } from "react";
import { Html } from "drei";
import Model from "./model"
import { useFrame } from "react-three-fiber";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from 'react-responsive';

function HTMLContent({ yPosition, gltfPath, bgColor, rightSide, ...props }) {
    const ref = useRef()

    useFrame(() => (rightSide ? ref.current.rotation.y -= 0.002 : ref.current.rotation.y += 0.002))
    const [refItem, inView] = useInView({
        threshold: 0
    })

    useEffect(() => {
        inView && (document.body.style.background = bgColor)
    }, [inView])

    const xPosition = rightSide ? 75 : -75

    const styleContainer = rightSide ? "gameDetailsRightContainer" : "gameDetailsLeftContainer"
    const styleChild = rightSide ? "gameDetailsRight" : "gameDetailsLeft"

    const isMobile = useMediaQuery({ query: `(max-width: 900px)` });
    const modelScale = isMobile ? 0.45 : 0.85
    const modelPositionX = isMobile ? 0 : xPosition
    const modelPositionY = isMobile ? 90 : -10

    return(
            <group position={[0, yPosition, 0]} x={xPosition}>

                <mesh ref={ref} position={[modelPositionX, modelPositionY, 0]} scale={[modelScale, modelScale, modelScale]}> 
                        <Model gltfPath={gltfPath}></Model>
                </mesh>

                <Html portal={props.domContent} fullscreen>
                    <div ref={refItem} className={styleContainer}>
                        <div className={styleChild}>
                            <div>{props.children}</div>
                        </div>
                    </div>
                </Html>

            </group>
    )
}

export default HTMLContent
