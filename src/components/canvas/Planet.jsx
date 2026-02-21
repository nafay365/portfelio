import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const PlanetModel = () => {
    const planet = useGLTF("./PLANET2/scene.gltf");
    const planetRef = useRef();

    // Auto-rotate the planet continuously
    useFrame((state, delta) => {
        if (planetRef.current) {
            planetRef.current.rotation.y += delta * 0.5; // Adjust speed as needed
        }
    });

    return (
        <primitive
            ref={planetRef}
            object={planet.scene}
            scale={1.8}
            position={[0, -2, 0]}
            rotation={[0, 0, 0]}
        />
    );
};

const PlanetCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='always'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <PlanetModel />

            {/* OrbitControls is disabled for mouse interaction */}
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />

            <Preload all />
        </Canvas>
    );
};

export default PlanetCanvas;
