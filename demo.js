var gravatar = require('./gravatar.js');

// http
console.log(gravatar.getAvatar('poppinlp@gmail.com'));
// params
console.log(gravatar.getAvatar('poppinlp@gmail.com', {s: 100, d: 'retro'}));
// https
console.log(gravatar.getAvatar('poppinlp@gmail.com', {s: 100}, 1));
