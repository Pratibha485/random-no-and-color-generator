/** 
let x = document.querySelector("h1");
x.style.color = "red";
x.style.backgroundColor ="blue";
x.style.fontFamily = "Arial";


let y= document.querySelector("h2");
setTimeout(function(){
    y.innerHTML="changed";
},2000)

let z=document.querySelector("h3");
x.addEventListener("click", function(){
    x.style.color = "red";
    x.style.backgroundColor ="blue";
    x.style.fontFamily = "Arial";

},2000)
*/

/**
let x= document.getElementById("ele1");
x.addEventListener("click",function(){
    x.style.color="yellow";
    x.style.backgroundColor="red";
})

let y= document.getElementById("ele2");
y.addEventListener("mousemove",function(){
    y.style.color="white";
    y.style.backgroundColor="orange";
})

let z= document.getElementById("ele3");
y.addEventListener("click",function(){
    z.style.color="white";
    z.style.backgroundColor="purple";
})
**/
let s1 = document.getElementById("sq1");
s1.addEventListener("mouseenter",function(){
    let r = Math.floor(Math.random()*1000);
    s1.innerHTML=`<h1>${r}</h1>`;
})
s1.addEventListener("mouseleave",function(){
    s1.innerHTML=`<h1>1</h1>`;
})


let s2 = document.getElementById("sq2");
clr="green";
s2.addEventListener("mouseenter",function(){
    if(clr=="green"){
        s2.style.backgroundColor="green";
        clr="red";
    }
    else if(clr=="red"){//clr=="red"
        s2.style.backgroundColor="red";
        clr="blue";
    }
    else{
        s2.style.backgroundColor="blue";
        clr="green";
    }
})
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor="white";
})


let s3 = document.getElementById("sq3");
s3.addEventListener("mouseenter",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s3.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
})
s3.addEventListener("mouseleave",function(){
   s3.style.backgroundColor="white";
})


let s4 = document.getElementById("sq4");
s4.addEventListener("click",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s1.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
    s2.style.backgroundColor=`rgb(${r3},${r1},${r2})`;
    s3.style.backgroundColor=`rgb(${r2},${r3},${r1})`;
})
s4.addEventListener("mouseleave",function(){
   s1.style.backgroundColor="white";
   s2.style.backgroundColor="white";
   s3.style.backgroundColor="white";
})




