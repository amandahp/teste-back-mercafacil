let router = require('express').Router();
const checkJwt = require('../middleware/checkJwt')

router.get('/',function(req,res){
	res.json({
		status:'API working',
		message:'200',
	});
});

const varejaoController = require('../controllers/varejaoController.js')
const macapaController = require('../controllers/macapaController')

router.route('/varejao')
	.all(checkJwt)
	.post(varejaoController.insert)

router.route('/macapa')
	.all(checkJwt)
	.post(macapaController.insert)

module.exports = router;