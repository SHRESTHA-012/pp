import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF } from '@react-three/drei';
import planeScene from '../assets/3d/galacticv.glb';

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  // Play first available animation if any
  useEffect(() => {
    const firstAction = Object.values(actions)[0];
    if (firstAction) firstAction.play();
  }, [actions]);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    // Spaceship flies LOW — Y around +1, well below the bird
    ref.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.3 + 1;

    // Move toward and away from the island on Z axis
    if (ref.current.position.z > 4) {
      ref.current.rotation.y = Math.PI; // facing away — flying out
    } else if (ref.current.position.z < -20) {
      ref.current.rotation.y = 0; // facing toward — flying in
    }

    if (ref.current.rotation.y === 0) {
      ref.current.position.z += 0.02; // fly toward island
    } else {
      ref.current.position.z -= 0.02; // fly away from island
    }
  });

  return (
    <mesh ref={ref} position={[6, 2, -20]} scale={[0.5, 0.5, 0.5]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
