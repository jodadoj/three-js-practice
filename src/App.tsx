//import react 
//import React from "react";
// import 'canvas' from react three fibre (assumably different from other canvases)
import { Canvas, Euler } from "@react-three/fiber";
import { OrbitControls, Text3D } from "@react-three/drei";
import { Suspense, useState } from 'react'

// import { Stage } from "@react-three/drei";
// import { useGLTF } from "@react-three/drei";
// import { Float } from "@react-three/drei";
// import PhyPlane from "./physPlane";

// import { useThree } from "@react-three/fiber";

import { Pokeball } from "./pokeball";

import { Plane } from "@react-three/drei";

import { RigidBody } from "@react-three/rapier";

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



function App(): JSX.Element {

  const [pokeballList, setPokeballList] = useState<number[]>([]);
  // const [floorRotation, setFloorRotation] = useState<Euler|undefined>([ Math.PI*-0.5,0,0 ]);

  // function handleResetFloor() {
  //   setFloorRotation([ Math.PI*-0.5,0,0 ]);
  // }

  function handleAddBall() { //in function to use useState
    const newList = [...pokeballList]; //spread operator to shallow copy og list, avoids mutation error
    if (newList.length > 0) {
      const newId = newList[newList.length - 1] + 1;
      newList.push(newId);
    }
    else {
      newList.push(1);
    }
    setPokeballList(newList);
  }

  function handleRemoveBall() { //in function to use useState
    const newList = [...pokeballList]; //spread operator to shallow copy og list, avoids mutation error
    if (newList.length > 0) {
      newList.shift();
    }
    setPokeballList(newList);
  }

  return (
    <div className="canvas-container">


      <Canvas>
        <Float>
          <Text3D position={[-30, 4, 0]} font={'/fonts/Roboto Mono_Bold.json'}
            onClick={handleAddBall}> Click here to ADD a Pokeball!
            <meshStandardMaterial color={0xdb1f48} />
          </Text3D>
        </Float>
        <Float>
          <Text3D position={[3, 6, 0]} font={'/fonts/Roboto Mono_Bold.json'}
            onClick={handleRemoveBall}> Click here to REMOVE a Pokeball!
            <meshStandardMaterial color={0xdb1f48} />
          </Text3D>
        </Float>
        <OrbitControls />
        <ambientLight intensity={1} />
        <Suspense> { /* Allows async operations in React */}
          <Physics>

            {pokeballList.map((currentPokeballId) => {
              return <Pokeball id={currentPokeballId} key={currentPokeballId}
                onClick={() => console.log(currentPokeballId + ' hi')} />
            })}

            <RigidBody colliders="trimesh" type="fixed">
              <Plane
                position={[0, -20, 0]}
                args={[60, 60]}
                rotation={[ Math.PI*-0.5,0,0 ]}
                receiveShadow>
                <shadowMaterial opacity={0.2} />
                <meshStandardMaterial color={0x75e6da} />
              </Plane>
            </RigidBody>
          </Physics>
        </Suspense>
      </Canvas>
    </ div>
  );
}

export default App;