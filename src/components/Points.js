import React, { useCallback, useMemo, useRef } from 'react';
import { useFrame, useLoader } from 'react-three-fiber'
import glowingOrb from '../assets/glowingorb2.png'
import * as THREE from 'three'

function Points(){
    const imageTexture = useLoader(THREE.TextureLoader, glowingOrb)
    const bufferedRef = useRef() 
  
    let t = 0;
    let f = 0.002;
    let a = 1.5;
    const graph = useCallback((x,z) => {
      return Math.sin(f * ( x ** 2 + z ** 2 + t)) * a;
    }, [t,f,a])
  
  
    const count = 60 // number of point accross 1 axis
    const sep = 3 // separation between each point
  
    let positions = useMemo(() => {
      let positions = []
  
      for(let xi = 0; xi < count; xi++){
        for(let zi = 0; zi < count; zi++){
          let x = sep * (xi - count/2)
          let z = sep * (zi - count/2)
          let y = graph(x,z)
          positions.push(x,y,z)
        }
      } 
      return new Float32Array(positions);
    }, [count, sep, graph])
  
    useFrame(()=>{
      t += 15
      const positions = bufferedRef.current.array
      let i = 0;
      for(let xi = 0; xi < count; xi++){
        for(let zi = 0; zi < count; zi++){
          let x = sep * (xi - count/2)
          let z = sep * (zi - count/2)
          positions[i+1]= graph(x,z)
          i+=3;
        }
      } 
      bufferedRef.current.needsUpdate=true 
    })
  
    return(
      <points>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            ref={bufferedRef}
            attachObject={['attributes', 'position']}
            array={positions}
            count={positions.length/3}
            itemSize={3}
          />
        </bufferGeometry>
  
        <pointsMaterial 
          attach="material"
          map={imageTexture}
          color={0xFFFFFF}
          size={.6}
          sizeAttenuation
          transparent={false}
          alphaTest={.1}
          opacity={1}
          />
     
      </points>
    )
  }

  export default Points