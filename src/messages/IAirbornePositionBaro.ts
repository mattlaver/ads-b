/**
 * MIT License
 * Copyright (c) 2019 Matt Laver
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/mattlaver/ads-b/blob/master/LICENSE
 */

import { IMessage } from './IMessage';

export interface IAirbornePositionBaro extends IMessage {
  Position: string;
}
