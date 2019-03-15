/**
 * MIT License
 * Copyright (c) 2019 Matt Laver
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/mattlaver/ads-b/blob/master/LICENSE
 */

import { MessageType } from '../messages/IMessage';
import { ISurfacePosition } from '../messages/ISurfacePosition';
import { IMessageDecoder } from './IMessgeDecoder';

export class SurfacePositionDecoder implements IMessageDecoder<ISurfacePosition> {
  public isValid(typeCode: number): boolean {
    return typeCode >= 5 && typeCode <= 8;
  }

  public decode(message: string): ISurfacePosition {
    return {
      data: {
        position: '',
      },
      messageType: MessageType.SurfacePosition,
    };
  }
}
