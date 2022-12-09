//This is a program to find out a number if it is a prime or not

let num =17;
let count=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
          count++
    }
    }if (count==2){
      console.log("its a prime number")
    }else{
      console.log("its not a prime")
    }