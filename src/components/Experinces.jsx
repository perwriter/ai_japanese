"use client";
import { CameraControls, Environment, Gltf, Html} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Teacher from './Teacher';
import { degToRad } from 'three/src/math/MathUtils';
import { TypingBox } from './TypingBox';
import { MessagesList } from './MessagesList';
import { BoardSettings } from './BoardSettings';


const Experiences = () => {
  return (
    <>
     <div className="z-10 md:justify-center fixed bottom-4 left-4 right-4 flex gap-3 flex-wrap justify-stretch">
        <TypingBox />
      </div>
    <Canvas camera={
        {
            position:[0,0,0.001],
        }
    }>
        <CameraManager/>
        <Environment preset="sunset"/>
        <ambientLight intensity={0.8} color="pink"/>
        <Html position={[0.22,0.192,-3]} transform distanceFactor={0.5}>
            <MessagesList/>
            <BoardSettings/>

        </Html>
        <Teacher teacher={"Nanami"} position={[-1,-1.7,-3]} scale={1.5} rotation-y={degToRad(20)}/>
        <Gltf src='/models/classroom_default.glb'position={[0.2, -1.7,-2]} />
    </Canvas>   
    </>
  )
}

export default Experiences

const CameraManager=()=>{
    return<CameraControls    
    //  ref={controls}
    minZoom={1}
    maxZoom={3}
    polarRotateSpeed={-0.3} // REVERSE FOR NATURAL EFFECT
    azimuthRotateSpeed={-0.3} // REVERSE FOR NATURAL EFFECT
    mouseButtons={{
      left: 1, //ACTION.ROTATE
      wheel: 16, //ACTION.ZOOM
    }}
    touches={{
      one: 32, //ACTION.TOUCH_ROTATE
      two: 512, //ACTION.TOUCH_ZOOM
    }}
  />
};