// Example 1:

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

// Example 2:

// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false] 
// Explanation: There is only 1 extra candy.
// Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
// Example 3:

// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]

//Testing example 1:
//let candies = [2,3,5,1,3];
//let extraCandies = 3;

//Testing example 2:
// let candies = [4,2,1,1,2]; 
// let extraCandies = 1;

//Testing example 3:
let candies = [12,1,12]; 
let extraCandies = 10;

distribute_candies(candies, extraCandies);

function distribute_candies(candies, extraCandies){
  
  let org_candies = candies;
  let x_candies = extraCandies;
  let tmp_candies = 0;
  let got_max_candies = false;
  let counter = 0;


  for(n = 0; n < org_candies.length; n++){
    
    tmp_candies = org_candies[n] + x_candies;
    
    for(c = 0; c < org_candies.length; c++){

      if(tmp_candies >= org_candies[c]){
        counter+=1;
      }
    }
    //console.log(counter);
      
    if(counter == org_candies.length){
        console.log("The kid no. " + (n+1) + " has the max candies" + "\n");
    }
    counter = 0;
    
  }
  
}


