import { ReactNode } from "react";

export interface ISpriteContext {
  animations: any;
  data: {
    frames: any[];
  };
  error: any;
  imgOptions: any;
}

export interface ISpriteProvider {
  children: ReactNode;
  url: string;
  perChunk?: number;
}