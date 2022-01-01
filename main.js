const { createPublicAndPrivateKey, publicEncrypt, privateDecrypt, privateEncrypt, publicDecrypt } = require("./rsa");

let message = "Hello World!"
const {publicKey, privateKey, n} = createPublicAndPrivateKey()

let private_en = publicEncrypt(message, privateKey, n)
let public_de = privateDecrypt(private_en, publicKey, n)
let public_en = privateEncrypt(message, privateKey, n)
let private_de = publicDecrypt(public_en, publicKey, n)

console.log("\nprivate encrypted:", private_en)
console.log("\npublic decrypted:", public_de)
console.log("\npublic encrypted:", public_en)
console.log("\nprivate decrypted:", private_de)