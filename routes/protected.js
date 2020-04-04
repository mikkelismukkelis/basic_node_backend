const router = require('express').Router()
const verifyToken = require('./verifyToken')

// Protected route, if verify ok then acces to user information
router.get('/getdata', verifyToken, (req, res) => {
  res.send(`Data from protected route, logged in user email: ${req.user.email}`)
})

module.exports = router
