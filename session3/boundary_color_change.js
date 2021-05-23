// document.getElementById("outerbox").addEventListener("click",function(){
    
   
// });
// function outer(){
//     changeBackground(outerbox,'#c0c0c0');

// }

// var color=["#3C9EE7", "#E7993C", 
//         "#E73C99", "#3CE746", "#E7993C"];

//  document.querySelector("outerbox").addEventListener(
//             "click", function () {    
//             document.querySelector("outerbox").style.background 
//                 = color[Math.floor(Math.random() * color.length)];
//             }   
//         );

// document.getElementById("middlebox").addEventListener("click",()=>{
    
//    document.getElementById("middlebox").style.backgroundColor ="blue";
// });

// document.getElementById("innerbox").addEventListener("click",()=>{
    
//    document.getElementById("innerbox").style.backgroundColor ="white";
// });


const out=document.getElementById("outerbox");
const inn=document.getElementById("innerbox");
const mid=document.getElementById("middlebox");
var divs=document.querySelectorAll("div");
// out.addEventListener('click',e =>{
//     console.log(e);
// })

document.addEventListener('click',e=>{
    if(e.target.matches('div'))
    {
        console.log('clicked a div');
    }
})

divs.forEach(div=>{
    div.addEventListener('click',()=>{console.log("U clicked a div")}
)
})
out.addEventListener("click",()=>{
    colorChange("green",out);
});

inn.addEventListener("click",()=>{
    colorChange("blue",inn);

});

mid.addEventListener("click",()=>{
    colorChange("white",mid);
})


function colorChange(color,x){
    x.style.backgroundColor=color;
}

