import { ReactNode } from "react";

export interface IPositionContext {
  position: {
    x: number;
    y: number;
  }
}

export interface IPositionProvider {
  children: ReactNode;
}