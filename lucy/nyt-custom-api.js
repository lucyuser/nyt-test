var Client = require('./nyt-raw-api.js');
Client.API('http://api.nytimes.com');

exports.getArticlesAboutObama = function(begin_date, end_date, callback) {
  var params = {
    'q': 'Obama',
    'begin_date': begin_date,
    'end_date': end_date,
  };
  if (exports.Secrets) {
    for (var secret in exports.Secrets) {
      params[secret] = exports.Secrets[secret];
    }
  }
  return Client.articleSearch(params)
  .then(function(result) {callback(null, JSON.parse(result.response.body))},
        function(err) {callback(err)});
}

