# angular-q-extras

<!-- [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) -->
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![devDependency Status][dependency-image]][dependency-url]

Adds `$q.allSettled` to angular $q.

> The `$q.all` function returns a promise for an array of values. When this promise is fulfilled, the array contains the fulfillment values of the original promises, in the same order as those promises. If one of the given promises is rejected, the returned promise is immediately rejected, not waiting for the rest of the batch. If you want to wait for all of the promises to either be fulfilled or rejected, you can use `$q.allSettled`.

### Setup

Install

```
bower install angular-q-extras --save
npm install angular-q-extras --save
```

Require it into your application

`<script src="path/to/angular-q-extras.min.js"></script>`

Add the module as a dependency to your application

`angular.module('yourApplication', ['angular-q-extras'])`

### Types

Typescript definitions are available on NPM : [@types/angular-q-extras](https://www.npmjs.com/package/@types/angular-q-extras).

### Example

```javascript
var promises = [
  $q.when('SUCCESS_0');
  $q.reject('FAIL_1');
  $q.when('SUCCESS_2');
];

$q.allSettled(promises)
  .then(function (data) {
    expect(data).toBeArrayOfSize(3);

    expect($q.isFulfilledState(data[0])).toBeTrue();
    expect(data[0].value).toBe('SUCCESS_0');
    
    expect($q.isRejectedState(data[1])).toBeTrue();
    expect(data[1].reason).toBe('FAIL_1');
    
    expect($q.isFulfilledState(data[2])).toBeTrue();
    expect(data[2].value).toBe('SUCCESS_2');
  });
```

### Development

* [nvm](https://github.com/creationix/nvm)

```
# setup
npm install

npm start
npm test

# publish
npm login
npm publish
```

[npm-image]: https://img.shields.io/npm/v/angular-q-extras.svg
[npm-url]: https://www.npmjs.com/package/angular-q-extras
[travis-image]: https://travis-ci.org/niqdev/angular-q-extras.svg?branch=master
[travis-url]: https://travis-ci.org/niqdev/angular-q-extras
[dependency-image]: https://david-dm.org/niqdev/angular-q-extras/dev-status.svg
[dependency-url]: https://david-dm.org/niqdev/angular-q-extras#info=devDependencies
