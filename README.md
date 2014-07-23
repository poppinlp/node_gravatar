# Gravatar4node

[![Build Status](https://travis-ci.org/poppinlp/node_gravatar.png?branch=master)](https://travis-ci.org/poppinlp/node_gravatar)

Node module to get gravatar info.

### Getting Started

Install with this command:

```shell
npm install gravatar4node --save-dev
```

### Usage Examples

#### Basic

```js
var gravatar = require('gravatar4node');
var img = gravatar.getAvatar('poppinlp@gmail.com');
```

#### With options

```js
gravatar.getAvatar('poppinlp@gmail.com', {s: 100, d: 'retro'});
```

For more details about options please visit [options](http://en.gravatar.com/site/implement/images/)

### Demo

```shell
node demo.js
```

### History

- Ver 0.0.3 init
