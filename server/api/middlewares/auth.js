const jwt = require('jsonwebtoken');
const { jwtToken } = require('../../../config/index');

module.exports = function( req, res, next ) {
    const token = req.header('Auth-Token');
    if( !token ) return res.status(401).send('Access Denied');

    try{
        const verified = jwt.verify(token, jwtToken.secretKey);
        req.user = verified;
        next();
    } catch( err ) {
        res.status(400).send('Invalid Token');
    }
};