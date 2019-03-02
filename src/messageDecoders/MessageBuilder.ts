"use strict";

import { AircraftIdentificationDecoder } from "./AircraftIdentificationDecoder";
import { SurfacePositionDecoder } from "./SurfacePositionDecoder";
import { IMessageDecoder } from "./IMessgeDecoder";
import { IMessage } from "../messages/IMessage";

export class MessageBuilder {
  private messageDecoders: IMessageDecoder<IMessage>[] = [
    new AircraftIdentificationDecoder(),
    new SurfacePositionDecoder()
  ];

  messageFromTypeCode(typeCode: number, message: string) {
    const messageDecoder = this.messageDecoders.find(x => x.isValid(typeCode));

    if (!messageDecoder) {
      return {};
    }

    return messageDecoder.decode(message);
  }
}
