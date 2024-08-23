Smallest_Number();
Largest_Number();

function Smallest_Number() {

  var MyNumbers = [7, 11, 3, 12, 9];
  var x, result;

  for(i = 0; i<MyNumbers.length; i++){
    
    if(x<MyNumbers[i]){
      result = x;
    }
    else{
      x = MyNumbers[i];
    }
  }
  console.log("The smallest number is " + result);
  
}

function Largest_Number() {

  var MyNumbers = [7, 11, 3, 12, 9];
  var x, result;

  for(i = 0; i<MyNumbers.length; i++){
    
    if(x>MyNumbers[i]){
      result = x;
    }
    else{
      x = MyNumbers[i];
    }
  }
  console.log("The largest number is " + result);
  
}