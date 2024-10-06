function random_color(){r = Math.floor(Math.random()*256);   // function generate random numbers between 0 and 255
return r}

boxes= document.querySelectorAll(".box");


for(box of boxes){
    x=random_color();
    y=random_color();
    z=random_color();
    box.style.backgroundColor=`rgb(${x},${y},${z})`;
};
