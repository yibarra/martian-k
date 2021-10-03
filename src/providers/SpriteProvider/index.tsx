import React, { createContext, FC, useCallback, useEffect, useState } from 'react';

import useLoad from '../../hooks/useLoad';

import { ISpriteContext, ISpriteProvider } from './interfaces';

// sprite context
const SpriteContext = createContext<any>({} as ISpriteContext);

// sprite provider
const SpriteProvider: FC<ISpriteProvider> = ({
  children,
  url,
  perChunk = 28
}) => {
  const [ animations, setAnimations ] = useState<any | null>(null);
  const [ imgOptions, setImgOptions ] = useState<any>({ image: null });

  const { request, error }: any = useLoad(`${url}.json`);

  // load image
  const loadImage = useCallback(() => {
    const image = new window.Image();
    image.src = `${url}.png`;

    image.onload = () => {
      setImgOptions({ image }); // set image only when it is loaded
    };
  }, [ url ]);

  // factory animations
  const factoryAnimations = useCallback((items: any) => {
    const animations: any = {};

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item instanceof Object) {
        animations[`normal_${i}`] = item.flat();
      }
    }

    return animations;
  }, []);

  // split sprites
  const splitSprites = useCallback((sprites: any[]) => {
    if (!sprites) return false;

    const result = sprites.reduce((resultArray, item, index) => { 
      const chunkIndex = Math.floor(index/perChunk)

      if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(Object.values(item.frame));

      return resultArray;
    }, []);

    return factoryAnimations(result);
  }, [ factoryAnimations, perChunk ]);

  // use effect
  useEffect(() => {
    if (request?.data) {
      loadImage();
      setAnimations(splitSprites(request?.data?.frames));
    }
  }, [ loadImage, request, splitSprites ]);

  // render
  return (
    <SpriteContext.Provider
      value={{
        error,
        animations,
        imgOptions,
        data: request,
      }}>
      {children}
    </SpriteContext.Provider>
  );
};

export { SpriteContext, SpriteProvider };
export default SpriteProvider;