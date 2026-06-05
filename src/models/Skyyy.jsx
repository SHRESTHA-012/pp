
import * as THREE from 'three';

const MagicalSky = () => {
  return (
    <mesh>
      <sphereGeometry args={[500, 64, 64]} />
      <shaderMaterial
        side={THREE.BackSide}
        // "false" is critical here. It prevents Three.js from clamping bright colors.
        toneMapped={false} 
        uniforms={{
          // Slightly punchier "Hot Baby Pink"
          uColorA: { value: new THREE.Color('#ff9aeb') }, 
          // Vibrant "Electric Baby Blue"
          uColorB: { value: new THREE.Color('#78cfff') }  
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 uColorA;
          uniform vec3 uColorB;
          varying vec2 vUv;
          void main() {
            vec3 color = mix(uColorA, uColorB, vUv.y);
            
            // MULTIPLY by 1.5 to make it "shine" (values > 1.0 glow)
            gl_FragColor = vec4(color * 1.5, 1.0); 
          }
        `}
      />
    </mesh>
  );
};

export default MagicalSky;
