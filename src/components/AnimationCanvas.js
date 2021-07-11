import { Canvas } from 'react-three-fiber'
import React, { Suspense } from 'react';
import  CameraControls from './CameraControls'
import Points from './Points'

function AnimationCanvas(){
    return (
      <Canvas
        colorManagement={false}
        camera={{position: [110,10,0], fov: 50}}
      >
        <Suspense fallback={null}>
          <Points/>
        </Suspense>
        <CameraControls/>
      </Canvas>
    )
  }

export default AnimationCanvas