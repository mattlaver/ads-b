'use strict';

import { expect } from 'chai';
import { ADSBVersion2Decoder, IADS_B_Version2 } from './ADSBVersion2Decoder';

describe('ADS-B Version 2 Decoder', () => {
  describe('Aircraft Identification TC (4)', () => {
    const rawMessage = '8D4840D6202CC371C32CE0576098';
    let decoder: ADSBVersion2Decoder;
    let message: IADS_B_Version2;

    beforeEach(() => {
      decoder = new ADSBVersion2Decoder();
      message = decoder.decode(rawMessage);
    });

    it('it is valid', () => expect(decoder.isValid(rawMessage)).to.be.true);
    it('it parses Downlink Format (DF) as 17', () => expect(message.df).to.equal(17));
    it('it parses Capability (CA) as 5', () => expect(message.ca).to.equal(5));
    it('it parses ICAO as 4840D6', () => expect(message.icao).to.equal('4840D6'));

    it('it parses Data.TC as 4', () => expect(message.tc).to.equal(4));

    it('it parses Data.AircraftIdentitifcation', () => expect(message.data.CallSign).to.equal('KLM1023_'));

    it('it parses CRC (PI) as 576098', () => expect(message.pi).to.equal('576098'));
  });
});