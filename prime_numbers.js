let prime =0 
let i,j 
for(j = 2;j <= 10000;j++)
{
for( i=1;i<=j;i++)
{    
    if(j % i === 0)
    prime++

}

if(prime===2)
console.log(j)
prime=0




}