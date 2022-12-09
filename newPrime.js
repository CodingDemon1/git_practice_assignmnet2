//This is a program to find out if a number is a prime or not

let num =29,count =0;
    for(let i=2;i<Math.sqrt(num);i++){
        if(num%i==0){
            count++
        }
    }
if(count==0){
  console.log("It is Prime Number")
}else{
  console.log("It is not a Prime Number")
}

