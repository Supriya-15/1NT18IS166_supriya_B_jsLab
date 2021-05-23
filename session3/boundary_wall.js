let arr={};
document.getElementById("outerbox").addEventListener("click",()=>{
    arr="it is the dead zone";
   alert(arr);
});

document.getElementById("middlebox").addEventListener("mouseout",()=>{
    console.log("U have enter the danger zone");
    
});

document.getElementById("innerbox").addEventListener("mouseover",()=>{
    arr="It is the save zone";
    alert(arr);
})
