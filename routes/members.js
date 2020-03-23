var express = require('express');
var router = express.Router();

const member = require('../models/Member');

/* GET members listing. */
router.get('/', async function (req, res, next) {
  try {
    const members = await member.find();
    res.render('members', {
      title: 'no dunks crew',
      members,
      count: members.length,
      isFiltered: false,
    });
  } catch (e) {
    console.log(`fetch members => error: ${e}`);
    res.status(500);
    res.json(error);
  }
});

router.get('/country/:country', async function (req, res, next) {
  const country = req.params.country;
  try {
    const members = await member.find({ country });
    const memberCountries = members.map(member => member.country);
    res.render('members', {
      title: 'no dunks crew',
      members,
      count: members.length,
      isFiltered: true,
    });
  } catch (e) {
    console.log(`fetch members => error: ${e}`);
    res.status(500);
    res.json(error);
  }
});

module.exports = router;
