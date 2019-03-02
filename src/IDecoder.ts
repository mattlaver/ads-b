"use strict";

export interface IDecoder<T> {
  isValid(message: string): boolean;
  decode(message: string): T;
}
