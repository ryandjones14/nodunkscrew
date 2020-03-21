var express = require('express');
var router = express.Router();
var axios = require('axios');

const member = require('../models/Member');

router.get('/', async function(req, res, next) {
  const countries = await axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code')
    .then(response => response.data);
  res.render('addMember', {
    title: 'no dunks crew',
    pageTitle: 'add yourself as a no dunks crew member',
    countries,
  });
});

router.post('/addMember', async function(req, res, next) {
  if (req.body.twitterHandle) req.body.twitterHandle = `@${req.body.twitterHandle}`;
  try {
    await member.create([req.body]);
    res.redirect(`/`);
  } catch(e) {
    console.log('error', e);
  }
});

module.exports = router;
