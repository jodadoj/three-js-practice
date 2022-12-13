//import react 
import React, { useState } from "react";
// import 'canvas' from react three fibre (assumably different from other canvases)
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Suspense } from 'react'
import { Float } from "@react-three/drei";



function toggle(currentValue:boolean):boolean{
 return !currentValue;
}

function App():JSX.Element{

  const [isBox, setIsBox] = useState(true);

  const pokeball = useGLTF('/models/quikPokeball.gltf');

  return(
    <div className="canvas-container">
      <Canvas> 
        <OrbitControls />
        
        <Stage>
          <Suspense fallback={null}>
            <Float><primitive object={pokeball.scene} /></Float>
          </Suspense>
        </Stage>

      </Canvas>
    </ div>
  );
}

export default App;