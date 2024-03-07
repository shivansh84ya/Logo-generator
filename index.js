document.getElementById("theme1").addEventListener("click",mytheme1)
document.getElementById("theme2").addEventListener("click",mytheme2)
document.getElementById("theme3").addEventListener("click",mytheme3)
document.getElementById("theme4").addEventListener("click",mytheme4)
document.getElementById("mycolor").addEventListener("change",mycolorfun)
document.getElementById("myuppercase").addEventListener("click",mycasefun)
document.getElementById("shadow1").addEventListener("click",myshadow1fun)
document.getElementById("shadow2").addEventListener("click",myshadow2fun)



function mytheme1(){
let data = document.getElementById("text").value;
document.getElementById("boxData").innerHTML = data
let dataobj= document.getElementById("boxData");
dataobj.style.fontFamily = "Broadway"


// alert("hi")
} 
function mytheme2(){
let data = document.getElementById("text").value;
document.getElementById("boxData").innerHTML = data
 
let dataobj= document.getElementById("boxData");
dataobj.style.fontFamily = "Wide Latin"
} 

function mytheme3(){
let data = document.getElementById("text").value;
document.getElementById("boxData").innerHTML = data
 
let dataobj= document.getElementById("boxData");
dataobj.style.fontFamily = "Magneto"
} 

function mytheme4(){
let data = document.getElementById("text").value;
document.getElementById("boxData").innerHTML = data
 
let dataobj= document.getElementById("boxData");
dataobj.style.fontFamily = "Algerian"
} 


function myshadow1fun(){
    let dataobj = document.getElementById("boxData");
    dataobj.style.textShadow = "0px 3px 3px lightblue";
    alert("hi")
}


function mycasefun(){
    let dataobj = document.getElementById("boxData");
    let value = document.getElementById("myuppercase").value
     dataobj = value.toUpperCase()
    //  alert("hi")
}

let msg2 = msg.toUpperCase()

// to convert into lower / upper case
 
    // for UpperCase:-
    // function Display()
    // {
    //     let msg = "We are Cybrom Student";
    //     document.getElementById("demo1").innerHTML = msg;
    //     let msg2 = msg.toUpperCase()
    //     document.getElementById("demo2").innerHTML = msg2;
    // }
