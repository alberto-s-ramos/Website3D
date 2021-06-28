import React from 'react';
import { useGLTFLoader } from "drei";


function Model({gltfPath}){
    const gltf = useGLTFLoader(gltfPath, true)
    return(
        <primitive object={gltf.scene} dispose={null}/>
    )
}

export default Model