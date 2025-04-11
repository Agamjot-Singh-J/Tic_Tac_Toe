let buttons=document.querySelectorAll('.bu');
let h2=document.getElementById("h");
console.log("hello")
console.log(buttons)
let res=document.getElementById('res')
let buttonsArray=Array.from(buttons);
buttonsArray.forEach(f1)



console.log(buttonsArray)
let  turn=0;
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

function f1(button)
{

    button.addEventListener('click',f2)
}


function f2(e)
{
    document.getElementById("mySound").play();
    if(turn==0)
    {
        e.target.innerText="X"
        e.target.style.backgroundColor = "lightblue";
        e.target.style.fontSize="30px"
        e.target.style.color = "darkblue";
        turn=1
    }
    else
    {
        e.target.style.backgroundColor = "lightpink";
        e.target.style.color = "purple";
        e.target.innerText="O"
        e.target.style.fontSize="30px"
        turn=0
    }
    e.target.disabled=true;
    checkWinner()

}


function checkWinner()
{  
    for (let pattern of winPatterns) 
    {
        let pos1Val = buttonsArray[pattern[0]].innerText;
        let pos2Val = buttonsArray[pattern[1]].innerText;
        let pos3Val = buttonsArray[pattern[2]].innerText;
      
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") 
        {
            if (pos1Val === pos2Val && pos2Val === pos3Val) 
            {
                h2.innerText=pos1Val+" Won"
                h2.style.display="block"
                disable()
                drawline(pattern[0],pattern[1],pattern[2])
                document.getElementById("winsound").play();

                return;
            }
            draw()
        }
    }
}

let l1=document.getElementById('line');
let l2=document.getElementById('line2');
let l3=document.getElementById('line3');
function drawline(a,b,c)
{
    if(a==0 && b==1 && c== 2)
    {
        l1.style.display="block";
        l1.style.top="14%"
        l1.style.opacity="1"
    }
    if(a==0 && b==3 && c== 6)
    {
        l2.style.display="block";
        l2.style.opacity="1"
        l2.style.top="14.5%"
        l2.style.left="16%"
    }
    if(a==0 && b==4 && c== 8)
    {
        l3.style.opacity="1"
        l3.style.display="block";
        l3.style.top="4%"
        l3.style.transform="rotate(-45deg)"
    }
    if(a==1 && b==4 && c== 7)
    {
        l2.style.opacity="1"
        l2.style.display="block";
        l2.style.top="6%"
        // l2.style.left="0%"
    }
    if(a==2 && b==5 && c== 8)
    {
        l2.style.display="block";
        l2.style.opacity="1"
        l2.style.top="14.5%"
        l2.style.left="83.5%"   
    }
    if(a==2 && b==4 && c== 6)
    {
        l3.style.display="block";
        l3.style.opacity="1"
        l3.style.top="4%"
        l3.style.transform="rotate(45deg)"
    }
    if(a==3 && b==4 && c== 5)
    {
        l1.style.opacity="1"
        l1.style.display="block";
        l1.style.top="42.2%"
    }
    if(a==6 && b==7 && c== 8)
    {
        l1.style.display="block";
        l1.style.opacity="1"
        l1.style.top="68%"
    }
}

function draw()
{
    let t=0;
    let inc=0;
    buttonsArray.forEach(button => {
        if(button.innerText!="")
        {
            t=1
            inc=inc+1
        }
        else
            t=0
    });
    if(inc==9)
    {
        h2.innerText="Draw"
        h2.style.display="block"
    }
}



function disable() {
    buttonsArray.forEach(button => {
        button.disabled = true;  // Properly disable all buttons
    });
}
res.addEventListener('click',f3)
function f3()
{
    document.getElementById("oldSound").play();

    buttonsArray.forEach(button => {
        button.innerText =""; 
        button.disabled=false;
        h2.style.display="none"
        button.style.backgroundColor="#B3D8A8"

        
        l1.style.opacity="0"
        l2.style.opacity="0"
        l3.style.opacity="0"

    });
}