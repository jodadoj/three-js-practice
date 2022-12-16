//import react 
//import React from "react";
// import 'canvas' from react three fibre (assumably different from other canvases)
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D } from "@react-three/drei";
import { Suspense, useState } from 'react'

// import { Stage } from "@react-three/drei";
// import { useGLTF } from "@react-three/drei";
// import { Float } from "@react-three/drei";
// import PhyPlane from "./physPlane";

// import { useThree } from "@react-three/fiber";

import { Pokeball } from "./pokeball"; 

import { Plane } from "@react-three/drei";

import { CuboidCollider } from "@react-three/rapier";

import { Physics } from "@react-three/rapier";

import { Float } from "@react-three/drei";

// function more(currentArr:number[]):number[] {
//   if (currentArr.length < 30){
//     currentArr.push(1); 
//   }
//   return currentArr;
// }
// function less(currentArr:number[]):number[] {
//   if (currentArr.length > 0){
//     currentArr.pop();
//   }
//   return currentArr;
// }



function App():JSX.Element{

  const [pokeballList, setPokeballList] =useState<number[]>([]);

  function handleAddBall(){ //in function to use useState
    const newList = [...pokeballList]; //spread operator to shallow copy og list, avoids mutation error
    if (newList.length > 0){
      const newId = newList[newList.length-1]+1;
      newList.push(newId);
    }
    else {
      newList.push(1);
    }  
    setPokeballList(newList);
  }

  return(
    <div className="canvas-container">


      <Canvas > 
        <Float>
          <Text3D position={[-2,0,0]} font={'/fonts/Roboto Mono_Bold.json'}
          onClick={ handleAddBall }> Click 
            <meshStandardMaterial color={0x75e6da} />
          </Text3D>
        </Float>
        <OrbitControls />
        <ambientLight intensity={1}/>
        <Suspense>
          <Physics gravity={[0, -9.81, 0]}>

            {pokeballList.map( (currentPokeballId) => 
            {return <Pokeball id={currentPokeballId} key={currentPokeballId} />} )}

            <CuboidCollider position={[0, -4, 0]} args={[20, .1, 20]} >
              <Plane args={[20, 20]} rotation-x={Math.PI * -0.5}>
                <meshStandardMaterial color={0x75e6da} />
              </Plane>
            </CuboidCollider>
          </Physics>
        </Suspense>  
      </Canvas>
    </ div>
  );
}

export default App;