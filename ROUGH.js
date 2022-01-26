// function to write prime numbers 
const  Cprime = (num)=>{
    for(let i=2;i<Math.ceil(num/2);i++){
    if(num % i === 0)
        return false        
    }
    return true
}
let k = [1,2,3,4,5,6,7,15,8,9]
k.filter(item=>Cprime(item) )
   