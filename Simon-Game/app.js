let seq=[];
let user_seq=[];
let button=["red","blue","green","yellow"];
let start=false;
let level;

let h3=document.querySelector("h3");
let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    btn.classList.add("dis")
    start=true;
    level=0;
    levelup();
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },1000);
}
function userflash(btn){
    btn.classList.add("user_flash");
    setTimeout(()=>{
        btn.classList.remove("user_flash")
    },500);
}
function levelup(){
    level++;
    h3.innerText=` Level ${level}`;
    let index=Math.floor(Math.random()*3);
    let rancolor=button[index];
    seq.push(rancolor);
    btnflash(document.querySelector(`.${rancolor}`));
}
function checkans(idx){
    if(user_seq[idx]==seq[idx]){
        if(user_seq.length==seq.length){
            levelup();
            user_seq=[];
        }
    }
    else{
        h3.innerText="Game over please try again";
        btn.classList.remove("dis")
        user_seq=[];
        seq=[];
        start=false;
    }
}
function press(){
    userflash(this);
    let clas=this.classList[1];
    console.log(clas);
    user_seq.push(clas);
    checkans(user_seq.length-1);
}
let ansbtns=document.querySelectorAll("span");
for(ansbtn of ansbtns){
    ansbtn.addEventListener("click",press);
}