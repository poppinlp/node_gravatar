# Gravatar4node

[![Build Status](https://travis-ci.org/poppinlp/node_gravatar.png?branch=master)](https://travis-ci.org/poppinlp/node_gravatar)
[![Dependency Status](https://david-dm.org/poppinlp/node_gravatar.svg)](https://david-dm.org/poppinlp/node_gravatar)
[![devDependency Status](https://david-dm.org/poppinlp/node_gravatar/dev-status.svg)](https://david-dm.org/poppinlp/node_gravatar#info=devDependencies)

Node module to get gravatar info.

### Getting Started

Install with this command:

```shell
npm install gravatar4node --save
```

### API

#### getAvatar(email, [params, https])

Return avatar url.

For more details about `params` options, please see [options page](http://en.gravatar.com/site/implement/images/).

#### getProfile(email, [https])

Return profile json url.

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

### Demo

```shell
node demo.js
```

### History

- Ver 0.0.3 init
