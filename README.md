# angular-q-extras

<!-- [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) -->
[![NPM version][npm-image]][npm-url]
[![Build Status](https://travis-ci.org/niqdev/angular-q-extras.svg?branch=master)](https://travis-ci.org/niqdev/angular-q-extras)
[![devDependency Status](https://david-dm.org/niqdev/angular-q-extras/dev-status.svg)](https://david-dm.org/niqdev/angular-q-extras#info=devDependencies)

Adds `$q.allSettled` to angular $q.

> The `$q.all` function returns a promise for an array of values. When this promise is fulfilled, the array contains the fulfillment values of the original promises, in the same order as those promises. If one of the given promises is rejected, the returned promise is immediately rejected, not waiting for the rest of the batch. If you want to wait for all of the promises to either be fulfilled or rejected, you can use `$q.allSettled`.

TODO
- example
- codecov
- comment https://github.com/angular/angular.js/issues/8737

### Setup

Install via bower

`bower install angular-q-extras --save`

Require it into your application

`<script src="path/to/angular-q-extras.min.js"></script>`

Add the module as a dependency to your application

`angular.module('yourApplication', ['angular-q-extras'])`

### Example
```javascript
TODO
$q.isFulfilledState
$q.isRejectedState
$q.allSettled
```

### Development
```
npm install
grunt build
grunt test
```

[npm-image]: https://img.shields.io/npm/v/angular-q-extras.svg
[npm-url]: https://www.npmjs.com/package/angular-q-extras
