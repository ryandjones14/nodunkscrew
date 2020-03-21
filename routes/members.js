var express = require('express');
var router = express.Router();
var axios = require('axios');

const member = require('../models/Member');

/* GET members listing. */
router.get('/', async function(req, res, next) {
  const countries = await axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code;flag')
    .then(response => response.data);
  try {
    const members = await member.find();
    res.render('members', {
      title: 'no dunks crew',
      pageTitle: 'add yourself as a no dunks crew member',
      members,
      count: members.length,
      countries,
      countryFlags: countries.map(country => country.flag),
      countryCodes: countries.map(country => country.alpha3Code),
    });
  } catch(e) {
      console.log(`fetch members => error: ${e}`);
      res.status(500);
      res.json(error);
    }
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
