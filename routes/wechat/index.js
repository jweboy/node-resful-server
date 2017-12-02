const router = require('koa-router')()
const accessToken = require('./access_token')
const customMenu = require('./custom_menu')
const auth = require('./auth')

router.use('/auth', auth().routes())
router.use('/accessToken', accessToken().routes())
router.use('/customMenu', customMenu().routes())

module.exports = router