//import react 
import React, { useState } from "react";
// import 'canvas' from react three fibre (assumably different from other canvases)
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Suspense } from 'react'
import { Float } from "@react-three/drei";
import PhyPlane from "./physPlane";

import { Physics } from "@react-three/cannon";

import { useThree } from "@react-three/fiber";

import { Pokeball } from "./pokeball"; 


import { Physics, RigidBody, Debug } from "@react-three/rapier";

function more(currentArr:number[]):number[] {
  if (currentArr.length < 30){
    currentArr.push(1); 
  }
  return currentArr;
}
function less(currentArr:number[]):number[] {
  if (currentArr.length > 0){
    currentArr.pop();
  }
  return currentArr;
}



function App():JSX.Element{

  //const pokeball = useGLTF('/models/quikPokeball.gltf');
  
  return(
    <div className="canvas-container">
      <Canvas
      
  onClick={(e: any) => console.log('click')}
  onContextMenu={(e: any) => console.log('context menu')}
  onDoubleClick={(e: any) => console.log('double click')}
  onWheel={(e: any) => console.log('wheel spins')}
  onPointerMissed={() => console.log('missed')}
      > 
        <OrbitControls />
        <ambientLight intensity={1}/>
        
          <Physics gravity={[0, -9.81, 0]}>
              <Pokeball position={[3-Math.random()*6,3-Math.random()*6,3-Math.random()*6]} />
              <Pokeball position={[3-Math.random()*6,3-Math.random()*6,3-Math.random()*6]} />
              <Pokeball position={[3-Math.random()*6,3-Math.random()*6,3-Math.random()*6]} />
              <PhyPlane
                    color={0x75e6da}
                    position={[0, -5, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
          </Physics>
      </Canvas>
    </ div>
  );
}

export default App;