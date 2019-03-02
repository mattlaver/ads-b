"use strict";

import { IDecoder } from "./IDecoder";

import { crc } from "./lib/crc24";
import { MessageBuilder } from "./messageDecoders/MessageBuilder";

export class ADSBVersion2Decoder implements IDecoder<IADS_B_Version2> {
  private _messageBuilder = new MessageBuilder();

  isValid(message: string): boolean {
    return crc(message) === message.substr(22, 6);
  }

  decode(message: string): IADS_B_Version2 {
    const firstByte: number = parseInt(message.substr(0, 2), 16);
    const data: string = message.substr(8, 14);
    const typeCode: number = (parseInt(data.substr(0, 2), 16) >> 3) & 0x1f;

    return {
      DF: this.dataLinkFormat(firstByte),
      CA: this.capability(firstByte),
      ICAO: message.substr(2, 6),
      TC: typeCode,
      DATA: this._messageBuilder.messageFromTypeCode(typeCode, data),
      PI: message.substr(22, 6)
    };
  }

  private dataLinkFormat = (byte: number): number => (byte >> 3) & 0x1f;
  private capability = (byte: number): number => byte & 0x7;
}

export interface IADS_B_Version2 {
  DF: number;
  CA: number;
  ICAO: string;
  TC: number;
  DATA: any;
  PI: string;
}
