'use strict';

import { IAircraftIdentification } from '../messages/IAircraftIdentification';
import { IMessageDecoder } from './IMessgeDecoder';

export class AircraftIdentificationDecoder implements IMessageDecoder<IAircraftIdentification> {
  private characterSet: string = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ     _               0123456789      ';

  public isValid(typeCode: number): boolean {
    return typeCode >= 0 && typeCode <= 4;
  }

  public decode(message: string): IAircraftIdentification {
    return {
      CallSign: this.decodeAircraftCallsign(message),
    };
  }

  private decodeAircraftCallsign = (data: string): string =>
    this.chunkFour(data.substr(2, 6)) + this.chunkFour(data.substr(8, 6));

  private chunkFour = (data: string): string => {
    const firstByte = parseInt(data.substr(0, 2), 16);
    const secondByte = parseInt(data.substr(2, 2), 16);
    const thirdByte = parseInt(data.substr(4, 2), 16);
    const one = firstByte >> 2;
    const two = ((firstByte & 0x3) << 4) | (secondByte >> 4);
    const three = ((secondByte & 0xf) << 2) | (thirdByte >> 6);
    const four = thirdByte & 0x3f;
    return this.characterSet[one] + this.characterSet[two] + this.characterSet[three] + this.characterSet[four];
  };
}