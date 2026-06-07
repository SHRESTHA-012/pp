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

  useFrame(({ clock, camera }) => {
    if (!ref.current) return;

    // Gentle sine-wave bobbing
    ref.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.3 + 2;

    // Flip direction at screen edges relative to camera
    if (ref.current.position.x > camera.position.x + 10) {
      ref.current.rotation.y = Math.PI;
    } else if (ref.current.position.x < camera.position.x - 10) {
      ref.current.rotation.y = 0;
    }

    // Move across the screen
    if (ref.current.rotation.y === 0) {
      ref.current.position.x += 0.01;
      ref.current.position.z -= 0.01;
    } else {
      ref.current.position.x -= 0.01;
      ref.current.position.z += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={[5, 2, -2]} scale={[0.5, 0.5, 0.5]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
