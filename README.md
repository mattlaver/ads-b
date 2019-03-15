[![Build Status](https://travis-ci.org/mattlaver/ads-b.svg?branch=master)](https://travis-ci.org/mattlaver/ads-b)

# ads-b

Node package to decode ADS-B messages

# Status

There are a number of messages that can be emitted from an aircraft, this library currently supports the following:

| TypeCode | Description            | Status |
| -------- | ---------------------- | ------ |
| 1-4      | Identification         | ✅     |
| 5-8      | Surface Position       | ❌     |
| 9-18     | Airborne Position BARO | ❌     |
| 19       | Airborne Velocities    | ❌     |
| 20-22    | Airborne Position GNSS | ❌     |
| 28       | Aircraft Status        | ❌     |
| 29       | Target State & Status  | ❌     |
| 31       | Operation Status       | ❌     |

# Message Example

The library takes input like `8D4840D6202CC371C32CE0576098` and, if successfull, will return the decoded message as:

```
{
  ca: 5,
  data: {
    callsign: 'KLM1023_'
  },
  df: 17,
  icao: '4840D6',
  pi: '576098',
  tc: 4
}
```

# Install

`npm i ads-b`

# Usage

## JavaScript

```javascript
const decoders = require('ads-b');

const adsb = new decoders.ADSBVersion2Decoder();
const message = adsb.decode('8D4840D6202CC371C32CE0576098');
console.log(message);
```
