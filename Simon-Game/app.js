let seq=[];
let user_seq=[];
let button=["red","blue","green","yellow"];
let level=0;
let start=false;

let h3=document.querySelector("h3");
let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    btn.classList.add("dis")
    start=true;
    levelup();
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },1000);
}
let i=-1;
function levelup(){
    level++;
    h3.innerText=` Level ${level}`;
    i=0;
    let index=Math.floor(Math.random()*3);
    let rancolor=button[index];
    seq.push(rancolor);
    btnflash(document.querySelector(`.${rancolor}`));
}
function press(){
    console.log("helo");
    user_seq.push(this.classList[1]);
    btnflash(this);
    // btnflash(this.ansbtn);
}
let ansbtns=document.querySelectorAll("span");
for(ansbtn of ansbtns){
    ansbtn.addEventListener("click",press);
}