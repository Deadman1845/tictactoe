let boxes= document.querySelectorAll(".box");
let resetbutton=document.querySelector(".reset");
let msgcon=document.querySelector(".msgcontainer");
let message=document.querySelector(".msg");
let newgame=document.querySelector(".new");
let turn1=true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

const resetbtn=()=>{
    turn1=true;
    enbablebox();
    msgcon.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn1) {
            box.innerText="X";
            turn1=false;
        }else{
            box.innerText="O";
            turn1=true;
        }
        box.disabled=true;
        checkwinner();
     });
});
const disablebox = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enbablebox = ()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
       
    }
}
let showwinner=(winner)=>{
    message.innerText=`Congratulations, The winner is ${winner}`;
    msgcon.classList.remove("hide");
    disablebox();

}
const checkwinner=()=>{
    for(let pattern of winPatterns){
       let  pos1value =boxes[pattern[0]].innerText;
       let  pos2value=boxes[pattern[1]].innerText;
       let pos3value=boxes[pattern[2]].innerText;
    if(pos1value != "" && pos2value!= "" && pos3value!= ""){
        if(pos1value===pos2value && pos2value===pos3value){
            console.log("winner",pos1value);
            showwinner(pos1value);


        }
    }}
}
newgame.addEventListener("click",resetbtn);
resetbutton.addEventListener("click",resetbtn);
