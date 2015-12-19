[![Build Status](https://travis-ci.org/tandrewnichols/safe-splice.png)](https://travis-ci.org/tandrewnichols/safe-splice) [![downloads](http://img.shields.io/npm/dm/safe-splice.svg)](https://npmjs.org/package/safe-splice) [![npm](http://img.shields.io/npm/v/safe-splice.svg)](https://npmjs.org/package/safe-splice) [![Code Climate](https://codeclimate.com/github/tandrewnichols/safe-splice/badges/gpa.svg)](https://codeclimate.com/github/tandrewnichols/safe-splice) [![Test Coverage](https://codeclimate.com/github/tandrewnichols/safe-splice/badges/coverage.svg)](https://codeclimate.com/github/tandrewnichols/safe-splice) [![dependencies](https://david-dm.org/tandrewnichols/safe-splice.png)](https://david-dm.org/tandrewnichols/safe-splice) ![Size](https://img.shields.io/badge/size-199b-brightgreen.svg)

# safe-splice

A wrapper for splice that returns a spliced copy, instead of modifying the original

## Installation

`npm install --save safe-splice`

## Summary

There are times when it would be nice to call Array#splice and get the modified array as the return value, rather than the removed items (the normal implementation). This thin wrapper clones the original array (leaving it intact) and returns the modified copy.

## Usage

```
var splice = require('safe-splice');
var arr = [1, 2, 4];
var newArr = splice(arr, 2, 0, 3);
console.log(newArr); // [1, 2, 3, 4]
console.log(oldArr); // [1, 2, 4]
var splice = require('safe-splice');
var arr = [1, 2, 4];
var newArr = splice(arr, 2, 0, 3);
console.log(newArr); // [1, 2, 3, 4]
console.log(oldArr); // [1, 2, 4]
```

### Browser

Serve `dist/safe-splice.js` or `dist/safe-splice.min.js` however you serve javascript files in your application.

## Contributing

Please see [the contribution guidelines](CONTRIBUTING.md).
