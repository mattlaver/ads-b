'use strict';

export interface IMessageDecoder<IMessage> {
  isValid(typeCode: number): boolean;
  decode(message: string): IMessage;
}
