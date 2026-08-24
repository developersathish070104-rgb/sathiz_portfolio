"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Box, Sphere, MeshDistortMaterial, Line, OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

// A glowing node representing a container or pod
function Node({ position, color, delay }: { position: [number, number, number], color: string, delay: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={mesh} args={[0.3, 32, 32]} position={position}>
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

// A stylized humanoid operator sitting at a desk with a laptop
function HologramOperator() {
  const group = useRef<THREE.Group>(null);
  const toolsGroup = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      // Gentle breathing/typing animation
      group.current.position.y = Math.sin(t * 2) * 0.02;
    }
    if (toolsGroup.current) {
      // Rotate the tools around the operator
      toolsGroup.current.rotation.y = t * 0.3;
    }
  });

  const skinMaterial = (
    <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.2} roughness={0.3} metalness={0.5} />
  );
  
  const clothingMaterial = (
    <meshStandardMaterial color="#0f172a" roughness={0.7} metalness={0.2} />
  );
  
  const deskMaterial = (
    <meshStandardMaterial color="#1e293b" roughness={0.1} metalness={0.8} />
  );
  
  const laptopMaterial = (
    <meshStandardMaterial color="#94a3b8" roughness={0.2} metalness={0.9} />
  );

  const screenMaterial = (
    <meshStandardMaterial color="#00ffcc" emissive="#00ffcc" emissiveIntensity={0.8} />
  );

  return (
    <group position={[0, -1, 0]}>
      {/* Operator Figure */}
      <group ref={group}>
        {/* Head */}
        <Sphere args={[0.35, 32, 32]} position={[0, 2.2, -0.2]}>
          {skinMaterial}
        </Sphere>
        {/* Torso (leaning slightly forward) */}
        <Box args={[0.9, 1.2, 0.5]} position={[0, 1.2, -0.3]} rotation={[0.1, 0, 0]}>
          {clothingMaterial}
        </Box>
        {/* Upper Arms */}
        <Box args={[0.25, 0.8, 0.25]} position={[-0.6, 1.4, -0.3]} rotation={[0.3, 0, 0.1]}>
          {clothingMaterial}
        </Box>
        <Box args={[0.25, 0.8, 0.25]} position={[0.6, 1.4, -0.3]} rotation={[0.3, 0, -0.1]}>
          {clothingMaterial}
        </Box>
        {/* Lower Arms (reaching for laptop) */}
        <Box args={[0.2, 0.7, 0.2]} position={[-0.6, 0.9, 0.1]} rotation={[-1, 0, 0.1]}>
          {skinMaterial}
        </Box>
        <Box args={[0.2, 0.7, 0.2]} position={[0.6, 0.9, 0.1]} rotation={[-1, 0, -0.1]}>
          {skinMaterial}
        </Box>
      </group>

      {/* Desk */}
      <Box args={[3, 0.1, 1.5]} position={[0, 0.8, 0.5]}>
        {deskMaterial}
      </Box>
      {/* Desk Legs */}
      <Box args={[0.1, 0.8, 0.1]} position={[-1.4, 0.4, -0.1]}>
        {deskMaterial}
      </Box>
      <Box args={[0.1, 0.8, 0.1]} position={[1.4, 0.4, -0.1]}>
        {deskMaterial}
      </Box>
      <Box args={[0.1, 0.8, 0.1]} position={[-1.4, 0.4, 1.1]}>
        {deskMaterial}
      </Box>
      <Box args={[0.1, 0.8, 0.1]} position={[1.4, 0.4, 1.1]}>
        {deskMaterial}
      </Box>

      {/* Laptop Base */}
      <Box args={[0.8, 0.05, 0.6]} position={[0, 0.85, 0.4]}>
        {laptopMaterial}
      </Box>
      {/* Laptop Screen (tilted open) */}
      <group position={[0, 0.85, 0.1]} rotation={[-0.2, 0, 0]}>
        <Box args={[0.8, 0.6, 0.05]} position={[0, 0.3, 0]}>
          {laptopMaterial}
        </Box>
        {/* Glowing Screen display */}
        <Box args={[0.75, 0.55, 0.01]} position={[0, 0.3, 0.03]}>
          {screenMaterial}
        </Box>
      </group>

      {/* Orbiting DevOps Tools / Infrastructure Nodes */}
      <group ref={toolsGroup} position={[0, 1.5, 0]}>
        <Node position={[2.5, 0.5, 0]} color="#ff4d00" delay={0} />   {/* Tool 1 */}
        <Node position={[-1.5, 1, 2]} color="#00ffcc" delay={1} />    {/* Tool 2 */}
        <Node position={[-2, -0.5, -1.5]} color="#ff1a1a" delay={2} /> {/* Tool 3 */}
        <Node position={[1, 1.5, -2.5]} color="#8b5cf6" delay={3} /> {/* Tool 4 */}

        {/* Data Streams connecting tools */}
        <Line points={[[2.5, 0.5, 0], [-1.5, 1, 2]]} color="#00ffcc" opacity={0.3} transparent lineWidth={1} />
        <Line points={[[-1.5, 1, 2], [-2, -0.5, -1.5]]} color="#ff4d00" opacity={0.3} transparent lineWidth={1} />
        <Line points={[[-2, -0.5, -1.5], [1, 1.5, -2.5]]} color="#8b5cf6" opacity={0.3} transparent lineWidth={1} />
        <Line points={[[1, 1.5, -2.5], [2.5, 0.5, 0]]} color="#ff1a1a" opacity={0.3} transparent lineWidth={1} />
      </group>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full opacity-70 lg:opacity-100 z-0 pointer-events-none lg:pointer-events-auto relative mt-[-2rem] md:mt-0">
      <Canvas camera={{ position: [5, 1.5, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ff4d00" />
        <directionalLight position={[-5, 5, -5]} intensity={1} color="#00ffcc" />
        {/* Glow from the laptop screen */}
        <pointLight position={[0, 1, 0.5]} intensity={2} color="#00ffcc" distance={3} />
        
        <HologramOperator />
        
        {/* Subtle environment reflection */}
        <Environment preset="city" />
        
        {/* Allow slight mouse rotation but disable zoom/pan to not interfere with page scroll */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 2 - 0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
