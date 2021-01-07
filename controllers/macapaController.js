exports.insert = function(req,res)  {
  const {contacts} = req.body
  const mySqlConnection = require('../utils/mysql/connectToMySql')
  const formattedContacts = contacts.map(contact => {
      return [contact.name, contact.cellphone]
  })

	console.log('funciona')
  try {
      mySqlConnection.connect((err) => {
				let query = 'INSERT INTO contacts (nome, celular) VALUES ?;';
      	if (err) {
      	  console.error('error connecting: ' + err.stack);
      	  return;
      	}
        mySqlConnection.query(query, [formattedContacts], (error, result) => {
					if(error) {
						console.log(error)
						// res.status(500).json({message: 'error on inserting data to macapa db'})
					}
					// inserted rows -> 4
				});
        
      });        
			res.status(200).json({message:'success in inserting data to macapa'})
  } catch(e) {
      res.status(500).json({message: 'error on inserting data to macapa db'})
  }
}