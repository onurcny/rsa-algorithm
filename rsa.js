const { calcE, calcD, getRandomPrimeNumber } = require("./utils");

const createPublicAndPrivateKey = () => {
    let p, q
    p = getRandomPrimeNumber()
    do{
        q = getRandomPrimeNumber()
    }while(p == q)
    let n = p * q
    let phiN = (p-1)*(q-1)
    let e = calcE(phiN)
    let d = calcD(phiN, e)
    return {
        publicKey: e,
        privateKey: d,
        n
    }
}

const {publicKey, privateKey} = createPublicAndPrivateKey()
console.log(publicKey, privateKey);



