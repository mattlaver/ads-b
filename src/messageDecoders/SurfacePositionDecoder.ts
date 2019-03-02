"use strict";

import { IMessageDecoder } from "./IMessgeDecoder";
import { ISurfacePosition } from "../messages/ISurfacePosition";

export class SurfacePositionDecoder
  implements IMessageDecoder<ISurfacePosition> {
  isValid(typeCode: number): boolean {
    return typeCode >= 5 && typeCode <= 8;
  }

  decode(message: string): ISurfacePosition {
    return {
      Position: ""
    };
  }
}
