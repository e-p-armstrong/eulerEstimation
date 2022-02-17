let summedNum = 0
for (let i = 1; i < 1000000000; i += 1){
    /*console.log(`Current num: ${summedNum}`)
    console.log(`1/(i**2) is ${1/(i**2)}`)
    console.log(`Adding 1/${(i**2)}`)*/
    summedNum += (1/(i**2))
}
console.log(summedNum)