'use strict';

import { IMessage } from '../messages/IMessage';
import { AircraftIdentificationDecoder } from './AircraftIdentificationDecoder';
import { IMessageDecoder } from './IMessgeDecoder';
import { SurfacePositionDecoder } from './SurfacePositionDecoder';

export class MessageBuilder {
  private messageDecoders: Array<IMessageDecoder<IMessage>> = [
    new AircraftIdentificationDecoder(),
    new SurfacePositionDecoder(),
  ];

  public messageFromTypeCode(typeCode: number, message: string) {
    const messageDecoder = this.messageDecoders.find(x => x.isValid(typeCode));

    if (!messageDecoder) {
      return {};
    }

    return messageDecoder.decode(message);
  }
}
