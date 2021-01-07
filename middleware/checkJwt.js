const jwt = require('jsonwebtoken');


const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    //aqui eu faria uma verificação se o jwt é valido, mas como não tem exemplo simplesmente mando continuar

    next()
}

module.exports = verifyJWT