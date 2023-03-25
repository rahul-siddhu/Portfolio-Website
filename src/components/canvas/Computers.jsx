import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer=useGLTF("./desktop_pc/scene.gltf")
  
  return (
    <mesh>
      
      <hemisphereLight intensity={0.15}
      groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight
        position={[-20, 20, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
      object={computer.scene}
      scale={isMobile? 0.45: 0.63}
      position={isMobile? [-1,-3,-2.2]:[-1, -1.90, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile]=useState(false)
  
  useEffect(()=>{
    //Adding a event listener for change in screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)")

    //Setting the initial value of the isMobile state variable
    setIsMobile(mediaQuery.matches)

    //Defining a callback function to handle a change in the media query
     const handleMediaQueryChange=(event)=>{
      setIsMobile(event.matches)
     }

     //Adding a callback function as a listener for change to the media query
     mediaQuery.addEventListener("change", handleMediaQueryChange)

     //Removing event listener when the component is unmounted
     return()=>{
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
     }
  }, [])

  return (
    <Canvas
    frameloop="demand"
    shadows
    camera={{position: [20, 3, 5], fov: 15}}
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

// export default Computers 
export default ComputersCanvas 