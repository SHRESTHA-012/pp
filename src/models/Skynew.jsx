import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import skynew from '../assets/3d/skynew.glb'

export default function Skynew(props) {
  const { nodes, materials } = useGLTF(skynew)
  const ref = useRef()

  useFrame(() => {
    if (!ref.current) return
    ref.current.rotation.y += 0.0005
  })

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials['Material.001']}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials['Material.003']}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials['Material.002']}
      />
    </group>
  )
}

useGLTF.preload(skynew)
