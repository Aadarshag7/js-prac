let count=0;
let con=
document.getElementById("count");
let iny=
document.getElementById("inc");
let de=
document.getElementById("dec");
let res=
document.getElementById("reset");
iny.addEventListener("click",function(){
    count++;
    con.textContent=count;
});

de.addEventListener("click",function(){
    count--;
    con.textContent=count;
    
});

res.addEventListener("click",function(){
    // count=0;   
    con.textContent=count;

});

