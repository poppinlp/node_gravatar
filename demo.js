var gravatar = require('./gravatar.js');

// http
console.log(gravatar.getUrl('poppinlp@gmail.com'));
// params
// for more details please visit http://en.gravatar.com/site/implement/images/
console.log(gravatar.getUrl('poppinlp@gmail.com', {s: 100, d: 'retro'}));
// https
console.log(gravatar.getUrl('poppinlp@gmail.com', {}, 1));