//<----- creating a functoin in prime number js------>
// we can use two ways to create a function 
//---first---->
//usin g the arrow function
const mPrime = (num)=>{
    for(let i = 2;Math.floor(i<num/2);1++){
        if(num % i === 0)
         return false
    }
    return true
}
// printing to the console 
function pPrime(num){
    for (let i = 0; i < 100; i++) {

        if(mPrime(i)===true) 
        console.log(i)
        }

    }
// linking functions with functions
const addition = (a,b)=>{
    return a + b
}
const subtraction = (a,b)=>{
    return a - b
}
const multiplication = (a,b)=>{
    return a * b
}
const division = (a,b)=>{
    return a / b
}
// allmighty formula
const almightyformula =(a,b,c) =>{
    const denominator = multiplication(2,a)
    const positive_numerator = addition ( -b , Math.sqrt(subtraction (Math.pow(b,2),muitiplcation(4,muiltiplcation(a,c)
    ) )))
    const   negative_numerator   = addition ( -b , Math.sqrt(subtraction (Math.pow(b,2),muitiplcation(4,muiltiplcation(a,c)
    ) )))
    const postiveX = division(positive_numerator,denominator)    
    const negativeX = division(positive_numerator,denominator)
    return(postiveX,negativeX)
}
    console.log(almightyformula(1,5,6))




