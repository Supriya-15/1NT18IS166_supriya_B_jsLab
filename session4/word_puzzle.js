//const { ENGINE_METHOD_PKEY_ASN1_METHS } = require("node:constants");

//const { AsyncLocalStorage } = require("node:async_hooks");

const myarr=[];
let p1= document.getElementById("alpha1");
let p2= document.getElementById("alpha2");
var p3= document.getElementById("alpha3");
var p4= document.getElementById("alpha4");
var p5= document.getElementById("alpha5");
var p6= document.getElementById("alpha6");
var p7= document.getElementById("alpha7");
var p8= document.getElementById("alpha8");
var p9= document.getElementById("alpha9");
var reset=document.getElementById("reset");

var list1=[];
var p=document.getElementById('list1')
var text=document.getElementById('list1');
var count=0;
var count1=0;
var  point=0;
let sub=document.getElementById("submit");

var total=[];


//reset.onclick=myfunction;

var strcomp=["CAT","DOG","BAT","GOAT"];
var str=[];
var x=[];

// text.addEventListener('click',()=>{
//    count++;
//    console.log(count);
// });





 p1.addEventListener("click",()=>{
    myarr.push("A");
    //str=myarr;
    console.log(myarr);
 });
 
 p2.addEventListener("click",()=>{
    myarr.push("B");
    // str=myarr;
     console.log(myarr);
  });   
 
  p3.addEventListener("click",()=>{ 
    myarr.push("C");
   // str=myarr;
     console.log(myarr);
  });

  p4.addEventListener("click",()=>{ 
    myarr.push("D");
    //str=myarr;
     console.log(myarr);
  });

  p5.addEventListener("click",()=>{ 
    myarr.push("E");
    //str=myarr;

     console.log(myarr);
  });

  p6.addEventListener("click",()=>{ 
    myarr.push("F");
    //str=myarr;
     console.log(myarr);
  });
 
p7.addEventListener("click",()=>{ 
    myarr.push("G");
//str=myarr;
     console.log(myarr);
  });

p8.addEventListener("click",()=>{ 
    myarr.push("O");
    //str=myarr;
    console.log(myarr);
     
  });

  p9.addEventListener("click",()=>{ 
    myarr.push("T");
     //str=myarr;
     console.log(myarr);
  });

 
//if(!(reset.onclick ))  
//{
   
var list=new Object();
    
 //var input1=document.getElementById("input1").value;
input1.addEventListener("click",()=>{

 sub.addEventListener("click",()=>{
                 str=myarr;
                 x=(str.join('')); //JOIN the word
     console.log(x);
      while(str.length >0)
       {
          str.pop();
       }

     count1++;
     console.log("the number of times ",count1);
       
for(var i=0;i<4;i++)
//strcomp.forEach(function(strcomp)
   {
     if(x==strcomp[i])
         {
               var suc=checking(x);
               console.log("checking",strcomp)
               
               document.getElementById("score").innerHTML= "Point obtained is one "+suc;
                point_checking(suc);
                  {break;}
         }
   
     else {
    
            document.getElementById("score").innerHTML="Enter the correct word";
         }
}

   
function checking(x){
         
      total.push(x);
      document.getElementById("word").innerHTML=total;
       console.log(total);
      console.log(str.length);
      
      point=point+1;
      return(point);
   }
var input1=document.querySelector('input').value;
 console.log(input1);
   
 list={"name":input1,"point":point,"log":total};
   console.log(list);
   document.getElementById("name").innerHTML=list.name;  
   list1.push(list);
   console.log("this is a ",list1)

 }
 );
})
 function point_checking(suc)
 {
if(suc==4)
{
   document.getElementById("win").innerHTML="You have won the game";
} 
 }



/*else{
    document.getElementById("win").innerHTML="Better luck next time";
}
*/


//}






// for(var i=0;i<count1;i++)
   // {
   // console.log(total[i]);
   // }


//.toString();
  //total.splice(0,x.length);
  //p.addEventListener("click",()=>{
     
      //total.spe
     // total.splice(start,end);
// while(!reset)
// {
  //function  
//})
//}
//  alert("enter the correct word");
//  alert("enter the correct word");
//document.getElementById("text").innerHTML=total;
      //   
   // x=new Array();
//strcomp.forEach(function(strcom)
 //break;
        //print("enter the correct word");
//document.getElementById("text").innerHTML=x;