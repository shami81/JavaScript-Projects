//let word1 = "abc";
//let word2 = "pqr";
//Output: "apbqcr"

//word1 = "ab", word2 = "pqrs"
//Output: "apbqrs"

//Input: word1 = "abcd", word2 = "pq"
//Output: "apbqcd"

merge_Letters('ab','pqrstuvwxyz');

function merge_Letters(word1, word2){
  
  let str1 = word1;
  let len1 = str1.length;
  
  let str2 = word2;
  let len2 = str2.length;
  
  let loop_limit = 0;
  let str_chkr = 1; // 1 means word1 has more letters than word2, 2 means otherwise
  let rem_word = "";
  let merged_word = "";

  if(len1>len2){
    loop_limit = len2;
    console.log("The word with larger letters is word 1")
  }
  else{
    loop_limit = len1;
    str_chkr = 2;
    console.log("The word with larger letters is word 2")
  } 
  
  for(i=0; i<loop_limit; i++){
    merged_word = merged_word + str1[i] + str2[i];
  }
  console.log("Initially merged word: " + merged_word + "\n");

    if(str_chkr == 1){
      rem_word = str1.substring(loop_limit);
      merged_word = merged_word + rem_word;
    }
    if(str_chkr == 2){
      rem_word = str2.substring(loop_limit);
      merged_word = merged_word + rem_word;
    }
    console.log("The remaining letters: " + rem_word + "\n");
    console.log("The final merged word is: " + merged_word);
}
