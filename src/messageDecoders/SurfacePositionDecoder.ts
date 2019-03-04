'use strict';

import { ISurfacePosition } from '../messages/ISurfacePosition';
import { IMessageDecoder } from './IMessgeDecoder';

export class SurfacePositionDecoder implements IMessageDecoder<ISurfacePosition> {
  public isValid(typeCode: number): boolean {
    return typeCode >= 5 && typeCode <= 8;
  }

  public decode(message: string): ISurfacePosition {
    return {
      Position: '',
    };
  }
}
