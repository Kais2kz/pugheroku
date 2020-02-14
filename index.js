const express = require('express');
const app = express();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('fd47197061764123b91602ea392d3611');
var port = process.env.PORT || 3000
app.set('view engine', 'pug')


newsapi.v2.topHeadlines({
  sources: '',
  q: '',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(response => {
  app.get('/', function(req, res){
    res.render('index',{title:
    JSON.stringify(response["totalResults"]), paragraf:
    JSON.stringify(response["articles"])})
  });
});
app.listen(3000);
