"use strict";

import { expect } from "chai";
import { crc } from "./crc24";

describe("Mode-S Cyclic Redundancy Check 24", () => {
  describe("Long Message 8D4840D6202CC371C32CE0", () => {
    it("it should calculate expected crc 576098", () =>
      expect(crc("8D4840D6202CC371C32CE0")).to.equal("576098"));
  });
});
