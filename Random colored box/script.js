btn = document.querySelector("button");
boxes= document.querySelectorAll(".box");

btn.addEventListener("click",()=>random_color());



function random_num(){r = Math.floor(Math.random()*256);   // function generate random numbers between 0 and 255
return r}

function random_color()
{for(box of boxes){
    x=random_num();
    y=random_num();
    z=random_num();
    box.style.backgroundColor=`rgb(${x},${y},${z})`;
};}
