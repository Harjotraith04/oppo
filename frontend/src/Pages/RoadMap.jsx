import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import React, { useMemo } from 'react';
import { Experience } from '../components/RoadMap/Experience';
import { Overlay } from "../components/RoadMap/Overlay";
import { PlayProvider, usePlay } from "../contexts/Play";
import './RoadMap.css';

const RoadMap = () => {
  const { play, end } = usePlay();

  const effects = useMemo(
    () => (
      <EffectComposer>
        <Noise opacity={0.08} />
      </EffectComposer>
    ),
    []
  );

  return (
    <>
    <section id="root2" className="mt-0 2xl:h-[600px]">
      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls
          pages={play && !end ? 20 : 0}
          damping={0.5}
          style={{
            top: "10px",
            left: "0px",
            bottom: "10px",
            right: "10px",
            width: "auto",
            height: "auto",
            animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
            opacity: 0,
          }}
        >
          <Experience />
        </ScrollControls>
        {effects}
      </Canvas>
      <Overlay />
      </section>

      <section>
      <div className="mt-[30px]">
                    <p className="text__para mt-0 font-semibold text-headingColor">Available Lecture Slots:</p>
                    <ul className="mt-3">
                        <li className="flex items-center justify-between mb-2">
                            <p className='text-[15px] leading-6 text-textColor font-semibold'>Sunday</p>
                            <p className='text-[15px] leading-6 text-textColor font-semibold'>9:00 AM to 1:30 PM</p>
                        </li>
                        <li className="flex items-center justify-between mb-2">
                            <p className='text-[15px] leading-6 text-textColor font-semibold'>Tuesday</p>
                            <p className='text-[15px] leading-6 text-textColor font-semibold'>4:00 PM to 9:30 PM</p>
                        </li>
                        <li className="flex items-center justify-between mb-2">
                            <p className='text-[15px] leading-6 text-textColor font-semibold'>Friday</p>
                            <p className='text-[15px] leading-6 text-textColor font-semibold'>1:30 PM to 6:30 PM</p>
                        </li>
                    </ul>
                </div>
      </section>

    </>
  );
}

export default RoadMap