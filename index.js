const input=document.getElementById("inp");

const nums=document.querySelectorAll(".num,.sym");
let cou=false;
nums.forEach(btn => {
    btn.addEventListener("click",()=>{
        if(btn.textContent==="()"){
            if(cou){
                input.value +=")";
                cou=false;
            }
            else{
                input.value +="(";
                cou=true;
            }
        }
        else{
        input.value +=btn.textContent;
        }
    })
});


document.querySelector(".cler").addEventListener("click",()=>{
    input.value="";
});

document.querySelector(".back").addEventListener("click",()=>{
    input.value=input.value.slice(0,-1);
});

document.querySelector(".equal").addEventListener("click",()=>{
    try{
        input.value=eval(input.value);
    }
    catch{
        input.value="Error";
        


        setTimeout(()=>{
            input.value="";
        },2000);
    }
});