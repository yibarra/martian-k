import React, { useContext } from 'react';
import { Layer, Stage } from 'react-konva';

import Martian from '../../components/Martian';
import { PositionContext } from '../../providers/PositionProvider';

import SpriteProvider from '../../providers/SpriteProvider';

const { PUBLIC_URL } = process.env; // public

// main
const Main = () => {
  const { setPosition } = useContext<any>(PositionContext);
  
  document.addEventListener("keydown", (ev: any) => {
    console.log('move', ev);
  });

  // render
  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}>
      <Layer>
        <SpriteProvider
          url={`${PUBLIC_URL}/images/spritesheet`}
          perChunk={28}>
          <Martian />
        </SpriteProvider>
      </Layer>
    </Stage>
  );
};

export default Main;