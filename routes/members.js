var express = require('express');
var router = express.Router();

const member = require('../models/Member');

/* GET members listing. */
router.get('/', function(req, res, next) {
  // res.send('all your members will be listed here');
  const allMembers = member.find().then((members) => {
    res.render('members', {
      title: 'nodunksworldwide',
      pageTitle: 'nodunksworldwidearmy',
      members,
      count: members.length,
    });
  }).catch((e) => {
    console.log(`/members => error: ${e}`);
    res.status(500);
    res.json(error);
  });
});

router.post('/addMember', async function(req, res, next) {
  // console.log(req.body);
  await member.create([req.body]).then(newMember => {
    console.log('new member:', newMember);
    req.flash('success', `you added ${newMember.name}, dope`);
    res.redirect(`/members`);
  }).catch(e => {
    console.log('error', e);
  });
});

module.exports = router;
