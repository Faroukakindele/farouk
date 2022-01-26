// writing the function called hetroes formula
const division = (a,b) =>{
    return a / b
}
const muiltiplcation = (a,b) =>{
    return a * b
}
const division = (a,b) =>{
    return a / b
}
const subtraction=(a,b)=>{
    return a - b
}
// writing th formula for the heroes formula
const hFormula =(a,b,c) =>{

    const S =division(addition(a,addition(b,c)),2)
    const area = Math.sqrt(muiltiplcation(muiltiplcation(S,subtraction(S,a),muiltiplcation(subtraction(S,b),subtraction(S,c)))))
        return area

    }
        console.log(hFormula(1,4,6))