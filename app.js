let boxes =document.querySelectorAll(".box");
let resetbtn =document.querySelector("#reset-btn")

let turn0 =true;

const winPatternS =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8], 
    [3,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        console.log("you click me")
       if(turn0){
        box.innerText ="X";
        turn0 = false;
       }else{
         box.innerText ="o";
        turn0 = true;
       }
       box.disabled =true;

    })
})