const { calcE, calcD, getRandomPrimeNumber } = require("./utils");

const createPublicAndPrivateKey = () => {
    let p, q
    p = getRandomPrimeNumber()
    do{
        q = getRandomPrimeNumber()
    }while(p == q)
    let n = p * q
    let phiN = (p-1)*(q-1)
    let e = calcE(phiN, n)
    let d = calcD(phiN, e)
    return {
        publicKey: e,
        privateKey: d,
        n
    }
}

const publicEncrypt = (message, publicKey, n) => {
    res = ""
    for(c of message){
        res += charConversion(c, publicKey, n)
    }
    return res
}

const publicDecrypt = (cipher, privateKey, n) => {
    let res = ""
    for(c of cipher){
        res += charConversion(c, privateKey, n)
    }
    return res
}

const privateEncrypt = (message, publicKey, n) => {
    res = ""
    for(c of message){
        res += charConversion(c, publicKey, n)
    }
    return res
}

const privateDecrypt = (cipher, privateKey, n) => {
    let res = ""
    for(c of cipher){
        res += charConversion(c, privateKey, n)
    }
    return res
}

const charConversion = (c, key, n) => {
    c = String(c).charCodeAt()
    let convertedChar = 1
    for(let i = 1; i <= key; i++){
        convertedChar = (c * convertedChar) % n
    }
    return String.fromCharCode(convertedChar)
}

module.exports = {
    createPublicAndPrivateKey,
    publicEncrypt,
    publicDecrypt,
    privateEncrypt,
    privateDecrypt,
}