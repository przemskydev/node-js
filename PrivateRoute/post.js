const router = require('express').Router();
const verify = require('../PrivateRoute/VerifyToken')

router.get('/', verify, (req, res) => {
  res.json({
    post: {
      title: 'Private route',
      desc: 'Things you shouldnt access'
    }
  })
})

module.exports = router