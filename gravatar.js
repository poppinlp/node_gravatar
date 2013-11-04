var crypto = require('crypto'),
    qs = require('querystring'),
    gravatar = module.exports = {
        getUrl: function (email, params, https) {
            var baseUrl = (https && 'https://secure.gravatar.com/avatar/') || 'http://www.gravatar.com/avatar/',
                md5 = crypto.createHash('md5').update(email.toLowerCase().trim()).digest('hex'),
                query = (params && '?' + qs.stringify(params)) || '';
            return baseUrl + md5 + query;
        }
    };
