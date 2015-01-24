var cheerio = require('cheerio');
var request = require('request');

request('http://www.kayak.com/flight-routes/United-States-US0/Nashville-Intl-BNA', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    console.log($('.results_price bookitprice').length);
  }
});
