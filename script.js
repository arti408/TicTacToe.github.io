let turnaudio = new Audio("turn.mp3")
turn = "X"

const changeturn = ()=>{
    return turn === "X" ? "0" : "X"
}

const checkwin = () =>{
    let boxtext=document.getElementsByClassName("boxtext")
    let win = [[0,1,2],
               [3,4,5],
               [6,7,8],
               [0,3,6],
               [1,4,7],
               [2,5,8],
               [0,4,8],
               [2,4,6]]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            window.alert(boxtext[e[0]].innerText + "  Won");
            let box=document.querySelectorAll('.boxtext');
            Array.from(box).forEach(element =>{
                element.innerText="";
            });
            turn="X";
            document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
        }
    })
}



let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener("click", ()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText = turn;
            turn = changeturn()
            turnaudio.play();
            checkwin();
            document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
        }
    })
})


reset.addEventListener("click", ()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText="";
    });
    turn="X";
    document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
})
