exports.insert = function(req,res)  {
	const pgClient = require('../utils/postgres/connectToPostgres')
	const query = require('../utils/postgres/queries')
	const { contacts } = req.body
	pgClient.connect()
	console.log('funciona')
	try{
		contacts.forEach(async (contact) => {
				const {name, cellphone} = contact
				const values =  [ name, cellphone ]
				try {
					await pgClient.query(query, values)
				}catch(err) {
					console.log(err)
				}
			})
			res.status(200).json({message:'success in inserting data to varejao'})
	}catch(e) {
			res.status(500).json({message: `error on inserting data to varejao db. Error: ${e}`})
	}
}