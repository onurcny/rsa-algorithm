const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const isPrime = (n) => {
    let res = true
    for(let i = 2; i < n; i++){
        if(n%i==0){
            res = false
            break
        }
    }
    return res
}

const getFactors = (num) => {
    let factors = []
    for(let i = 2; i < Math.ceil(num / 2); i++){
        if(num % i == 0)
            factors.push(i)
    }
    return factors
}

const coPrime = (a, b) => {
    let aFactors = getFactors(a)
    let bFactors = getFactors(b)
    for(f of aFactors){
        if(bFactors.indexOf(f) != -1)
            return false
    }
    return true
}

const getRandomPrimeNumber = (min = 50, max = 100) => {
    let prime
    do{
        prime = getRndInteger(min, max)
    }while(!isPrime(prime))
    return prime
}

const calcE = (phiN, n) => {
    let e
    do {
        e = getRndInteger(2, phiN)
    } while (!coPrime(e, n) || !coPrime(phiN, e))
    return e
}

const calcD = (phiN, e) => {
    let k = 1
    while (true)
    {
        let d = ((k * phiN) + 1) / e
        if (Number.isInteger(d))
            return Number(d)
        k++;
    }
}

module.exports = {
    getRndInteger,
    isPrime,
    calcE,
    calcD,
    getRandomPrimeNumber
}