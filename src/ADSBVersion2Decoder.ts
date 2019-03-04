/**
 * MIT License
 * Copyright (c) 2019 Matt Laver
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/mattlaver/ads-b/blob/master/LICENSE
 */

import { IDecoder } from './IDecoder';
import { crc } from './lib/crc24';
import { MessageBuilder } from './messageDecoders/MessageBuilder';

export class ADSBVersion2Decoder implements IDecoder<IADS_B_Version2> {
  private _messageBuilder = new MessageBuilder();

  public isValid(message: string): boolean {
    return crc(message) === message.substr(22, 6);
  }

  public decode(message: string): IADS_B_Version2 {
    const firstByte: number = parseInt(message.substr(0, 2), 16);
    const data: string = message.substr(8, 14);
    const typeCode: number = (parseInt(data.substr(0, 2), 16) >> 3) & 0x1f;

    return {
      ca: this.capability(firstByte),
      data: this._messageBuilder.messageFromTypeCode(typeCode, data),
      df: this.dataLinkFormat(firstByte),
      icao: message.substr(2, 6),
      pi: message.substr(22, 6),
      tc: typeCode,
    };
  }

  private dataLinkFormat = (byte: number): number => (byte >> 3) & 0x1f;
  private capability = (byte: number): number => byte & 0x7;
}

export interface IADS_B_Version2 {
  df: number;
  ca: number;
  icao: string;
  tc: number;
  data: any;
  pi: string;
}
