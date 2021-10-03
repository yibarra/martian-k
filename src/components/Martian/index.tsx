import React, { FC, useContext, useEffect, useRef } from 'react';
import { Group, Sprite } from 'react-konva';
import { SpriteContext } from '../../providers/SpriteProvider';
import { ISpriteContext } from '../../providers/SpriteProvider/interfaces';

// martian
const Martian: FC<any> = () => {
  const { data, animations, imgOptions } = useContext(SpriteContext) as ISpriteContext;

  const spriteRef: any = useRef<any | null>(null); // sprite

  console.log(animations);

  // use effect
  useEffect(() => {
    if (imgOptions instanceof Object) {
      spriteRef.current.start();
    }
  }, [ imgOptions ]);

  // render
  return (
    <Group>
      {animations &&
        <Sprite
          ref={spriteRef}
          image={imgOptions.image}
          animation="normal_0"
          frameRate={28}
          frameIndex={0}
          animations={animations}
          x={0}
          y={0} />}
    </Group>
  );
};

export default Martian;