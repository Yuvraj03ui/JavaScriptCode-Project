// sum of two number

// function sum(x,y){
//     console.log(x+y);
// }
//   sum(2,6);

// pratice question 

function countVowels(str){

    let count =0;

    for (let i = 0; i<str.length ;i ++){
    
        let char = str[i]
        if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u")
         count++;
    }
console.log(count)
}
countVowels("yuvraj");