const { createPublicAndPrivateKey, publicEncrypt, privateDecrypt } = require("./rsa");

let message = "Merhaba arkadaşlar!"
const {publicKey, privateKey, n} = createPublicAndPrivateKey()

console.log(publicKey, privateKey, n);

let en = publicEncrypt(message, privateKey, n)
let de = privateDecrypt(en, publicKey, n)

console.log("en", en)
console.log("de", de)