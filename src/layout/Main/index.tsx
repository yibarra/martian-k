import React from 'react';
import { Layer, Stage } from 'react-konva';

import Martian from '../../components/Martian';

import SpriteProvider from '../../providers/SpriteProvider';

const { PUBLIC_URL } = process.env; // public

// main
const Main = () => {
  
  document.addEventListener("keydown", ev => {
    console.log('move');
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