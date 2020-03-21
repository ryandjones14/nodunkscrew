var express = require('express');
var router = express.Router();

const member = require('../models/Member');

/* GET members listing. */
router.get('/', async function (req, res, next) {
  try {
    const members = await member.find();
    res.render('members', {
      title: 'no dunks crew',
      pageTitle: 'add yourself as a no dunks crew member',
      members,
      count: members.length,
    });
  } catch (e) {
    console.log(`fetch members => error: ${e}`);
    res.status(500);
    res.json(error);
  }
});

module.exports = router;
