let isPX = true,lck=false,inp = Array(9).fill(null),turn ="X",gameActive = true;
const px = document.getElementById("px"),ng = document.getElementById("ng");

const resultOverlay = document.getElementById("resultOverlay");
const winningMessageText = document.getElementById("winningMessage");
const newGameBtnOverlay = document.getElementById("newGameBtn");
const bodyElement = document.body;

const resetGame = () => location.reload();
ng.addEventListener("click", resetGame);
newGameBtnOverlay.addEventListener("click", resetGame);

function lockInitialTurn() {
  if (lck) return;
  lck = true;
  px.disabled = true;
  px.removeEventListener("click", pxHandler);//just help in preventing accedental js assingmnets
}

const pxHandler = () => {
  if (lck) return;
  isPX = !isPX;

  if(isPX){
    px.innerText = "P1: X / P2: O";
    turn="X";
  }else{
    px.innerText="P1: O / P2: X";
    turn ="O";
  }
};
px.addEventListener("click",pxHandler);

// function checkWin(){
//     if(inp[0]!==null && inp[0]==inp[1] && inp[1]==inp[2] ||
//         inp[3]!==null && inp[3]==inp[4] && inp[4]==inp[5] ||
//         inp[6]!==null && inp[6]==inp[7] && inp[7]==inp[8] ||
//         inp[0]!==null && inp[0]==inp[1] && inp[1]==inp[2] ||
//         inp[0]!==null && inp[0]==inp[3] && inp[3]==inp[6] ||  
//         inp[1]!==null && inp[1]==inp[4] && inp[4]==inp[7] ||  
//         inp[2]!==null && inp[2]==inp[5] && inp[5]==inp[8] ||  
//         inp[0]!==null && inp[0]==inp[4] && inp[4]==inp[8] ||  
//         inp[2]!==null && inp[2]==inp[4] && inp[4]==inp[6]   
//     ){
//         document.write(`Winner is ${turn}`);//blur the backround and then write over it 
//         return;
//     }

//     if(!inp.some(e=>e===null)){
//         document.write(`DRAW`);
//         return;
//     }
// }

const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function checkWinner(inp){
    for(let[a,b,c] of win){
        if(inp[a] && inp[a]===inp[b] && inp[b]===inp[c]){
            endGame(`Winner is ${turn}! 🎉`);
            return;
        }
    }
    if(!inp.some(e=>e===null)){
        endGame(`It's a DRAW! 🤝`);
        return;
    }
};

function endGame(message){
    gameActive = false;
    winningMessageText.innerText = message;
    bodyElement.classList.add('game-over');

    setTimeout(() => {
        resultOverlay.classList.add('show');
    }, 300);
}

function handleClick(el){
    if(!gameActive) return;
    const BId=Number(el.id);
    if(inp[BId]=="X"||inp[BId]=="O") return;//prevents overwriting

    if (!lck) lockInitialTurn();//P1 can't change  their choice now

    inp[BId]=turn;
    el.innerText = turn;
    el.classList.add(turn);
    checkWinner(inp);

    if(gameActive){turn = turn === "X"?"O":"X";}//switch turns
}