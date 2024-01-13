let btns=document.querySelectorAll('.game button');
let turnX=true;
let head=document.querySelector('h1');
let reset=document.querySelector('.reset');
let pattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
for(let btn of btns){
    btn.addEventListener('click',()=>{
        if(turnX==true){
            btn.innerText='X';
            btn.disabled=true;
            turnX=false;
        }
        else{
            btn.innerText='O'
            btn.disabled=true;
            turnX=true;
        }
        checkWinner(btn);
    })
}

function gameOver(){
    for(let btn of btns){
        btn.disabled=true;
    }
}


function checkWinner(btn){
    for(win of pattern){
        let play1=btns[win[0]];
        let play2=btns[win[1]];
        let play3=btns[win[2]];
        if(play1.innerText!='' &&play2.innerText!='' && play3.innerText!=''){
            if(play1.innerText==play2.innerText && play2.innerText==play3.innerText){
                console.log("Winner",play1.innerText);
                gameOver();
                head.innerText=`Winner is ${play1.innerText}`;
                
            }
        }
    }
}

// Reset Game
reset.addEventListener('click',()=>{
    for(let btn of btns){
        btn.disabled=false;
        btn.innerHTML='';
        head.innerText="Tic-Tac";
        turnX=true
    }
});