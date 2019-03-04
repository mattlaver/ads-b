/**
 * MIT License
 * Copyright (c) 2019 Matt Laver
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/mattlaver/ads-b/blob/master/LICENSE
 */

export interface IMessageDecoder<IMessage> {
  isValid(typeCode: number): boolean;
  decode(message: string): IMessage;
}
