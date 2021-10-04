import React, { createContext, FC, useState } from 'react';

import { IPositionContext, IPositionProvider } from './interfaces';

// position context
const PositionContext = createContext<any>({} as IPositionContext);

// position provider
const PositionProvider: FC<IPositionProvider> = ({
  children
}) => {
  const [ position, setPosition ] = useState<any>({ x: 0, y: 0 });

  // render
  return (
    <PositionContext.Provider
      value={{
        position,
        setPosition
      }}>
      {children}
    </PositionContext.Provider>
  );
};

export { PositionContext, PositionProvider };
export default PositionProvider;