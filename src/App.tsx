//import react 
import React, { useState } from "react";
// import 'canvas' from react three fibre (assumably different from other canvases)
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
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
        <ambientLight intensity={0.1} />
        <directionalLight color="blue" position={[2,3,5]} />
        <directionalLight color="yellow" position={[-5,-2,-1]} />

        
        <Suspense fallback={null}>
          <Float><primitive object={pokeball.scene} /></Float>
        </Suspense>

        {/* An React component different from 'canvas' - unseen UI while undefined */}
        {/* Code is eqivalent to:*/}

        <mesh position={[5,0,0]}>
          {/* Should be drawn unseen by HTML */}
          <boxGeometry args={[2,2,2]} />
          {/* Research but assuming is the function that generates a (default) box
           and the below adds a material to colour/texture it */}
          <meshStandardMaterial />
          {/* Code is eqivalent to:

              const mesh = new THREE.Mesh()
              mesh.geometry = new THREE.BoxGeometry()
              mesh.material = new THREE.MeshStandardMaterial()
          */}
        </mesh>
              {/*const scene = new THREE.Scene()
              const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)

              const renderer = new THREE.WebGLRenderer()
              renderer.setSize(width, height)
              document.querySelector('#canvas-container').appendChild(renderer.domElement)
        */}

        <mesh position={[0,-5,0]} onClick={ () => {setIsBox(toggle)} }>
          {/* Should be drawn unseen by HTML */}
          {isBox ? <boxGeometry args={[2,2,2]} />
          : <sphereGeometry args={[1,16,16]} />
          }
          {/* Research but assuming is the function that generates a (default) box
           and the below adds a material to colour/texture it */}
          <meshStandardMaterial />
          {/* Code is eqivalent to:

              const mesh = new THREE.Mesh()
              mesh.geometry = new THREE.BoxGeometry()
              mesh.material = new THREE.MeshStandardMaterial()
          */}
        </mesh>
        <mesh position={[5,0,0]}>
          {/* Should be drawn unseen by HTML */}
          <boxGeometry args={[2,2,2]} />
          {/* Research but assuming is the function that generates a (default) box
           and the below adds a material to colour/texture it */}
          <meshStandardMaterial />
          {/* Code is eqivalent to:

              const mesh = new THREE.Mesh()
              mesh.geometry = new THREE.BoxGeometry()
              mesh.material = new THREE.MeshStandardMaterial()
          */}
        </mesh>
        <mesh position={[-5,0,0]}>
          {/* Should be drawn unseen by HTML */}
          <boxGeometry args={[2,10,2]} />
          {/* Research but assuming is the function that generates a (default) box
           and the below adds a material to colour/texture it */}
          <meshStandardMaterial />
          {/* Code is eqivalent to:

              const mesh = new THREE.Mesh()
              mesh.geometry = new THREE.BoxGeometry()
              mesh.material = new THREE.MeshStandardMaterial()
          */}
        </mesh>
          {/* Code is eqivalent to:

              scene.add(mesh)

              function animate() {
                requestAnimationFrame(animate)
                renderer.render(scene, camera)
              }

              animate()
          */}
      </Canvas>
    </ div>
  );
}

export default App;