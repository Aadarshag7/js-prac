let textss=
document.getElementById("name");
let btns=
document.getElementById("submit");
let outputs=
document.getElementById("output");
btns.addEventListener("click",function(){
    if(textss.value===""){
        outputs.textContent="validation is required";


    }else{
        outputs.textContent="hello"+ textss.value;
    }
});