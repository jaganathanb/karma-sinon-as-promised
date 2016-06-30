# karma-sinon-as-promised
sinon-as-promised for Karma

## [](#installation)Installation

```sh
$ npm install --save-dev karma-sinon-as-promised
```

## [](#requirements)Requirements

This plugin has two peerDependencies with `*` requirement versions:

*   [karma-sinon](https://github.com/yanoosh/karma-sinon)
*   [sinon-as-promised](https://github.com/bendrucker/sinon-as-promised)

Karma and Sinon versions will be resolved by these plugins

## [](#usage)Usage

Add `sinon-as-promised` to the `frameworks` array in your Karma configuration:

```source-js
module.exports = function(config) {
  'use strict';
  config.set({
    frameworks: ['mocha', 'sinon-as-promised', 'sinon'],
    plugins: [ ... , 'karma-sinon-as-promised']
    #...
  });
}
```

> karma would resolve the frameworks from reverse order. So keep the framework order as per the dependencies as shown in the above 
> exaplle

## [](#license)License

MIT
