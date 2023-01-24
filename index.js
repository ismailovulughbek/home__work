const aArr = [1,22,5,6,4,7,9,35,13,46];
let sumArr2 = 0;
let sumArr1 = 0;
for (let i = 0; i < aArr.length; i++) {
    
    if (aArr[i] % 2 == 0) {
        sumArr1 += 1;
        console.log(`${aArr[i]} - juft son `)
    }
    else {
        sumArr2 += 1;
        console.log(`${aArr[i]} - toq son `)
    }
    
}
console.log(`\n ${sumArr1} ta juft son mavjud `);
console.log(` ${sumArr2} ta toq son mavjud `);
