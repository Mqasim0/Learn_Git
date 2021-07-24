
const isZigzag = (numbers) => {
    for(i=0; i<numbers.length - 2 ; i++){
        if(numbers[i] < numbers[i+1] && numbers[i+1] > numbers[i+2]){
          result.push(1) 
          console.log("if statement", i)       
        }
        else{
          result.push(0)
          
          console.log("else statement", i) 
        }
        
    }
    return result
}

let result = [];
let numbers = [1,2,1,3,4];
var i;

console.log(isZigzag(numbers));