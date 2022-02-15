// Check out: https://github.com/auth0/node-jsonwebtoken#usage
// to learn how to use JWT Authentication

const jwt = require("jsonwebtoken");

// jwt.sign(payload, secretOrPrivateKey, [options, callback])
const token = jwt.sign({name:"Penny"}, "buttons");

// jwt.verify(token, secretOrPublicKey, [options, callback])
const transformedBack = jwt.verify(token, "buttons");


// node explore in terminal
console.log(token);
console.log(transformedBack);