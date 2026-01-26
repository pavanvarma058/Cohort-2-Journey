const jwt = require("jsonwebtoken");

// decode, verifty and generate

const value = {
  name: "Pavan Varma",
  accountNum: "1234567890",
};

// jwt
// sign - to generate token
const token = jwt.sign(value, "secretKey");
console.log("Generated Token: ", token);
// this token has been generated using secret key, and hence this token
// can be verified only using the same secret key

// verify - to verify token
const verifiedData = jwt.verify(token, "secretKey");
console.log("Verified Data: ", verifiedData);

// decode - to decode token
const decodedData = jwt.decode(token);
console.log("Decoded Data: ", decodedData);
// decode does not require secret key
