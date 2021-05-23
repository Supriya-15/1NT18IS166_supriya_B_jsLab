
function dis(val){
document.getElementById("ipt").value+=val;
   // document.write(p);
}
function solve(){
    let x= document.getElementById("ipt").value;
    let y=eval(x);
    document.getElementById("ipt").value=y

}
function clr()
{
document.getElementById("ipt").value = " "
}


// var p=document.getElementById("submit");
//  p.addEventListener("click",()=>{
//     var w=document.getElementById("cal").value;
// switch(w){
//     case '1':
//       sum(10,20);
//       break;
//     case '2':

//        diff(30,10);
//        break;
//        case '3':
//            mul(2,3);
//            break;
//            case '4':
//                devi(6,3);   
//                break;
// }
// function sum(a,b)
// {
//     console.log(a+b);
// }

// function diff(a,b)
// {
//     console.log(a-b);
// }

// function mul(a,b)
// {
//     console.log(a*b);
// }

// function devi(a,b)
// {
//     console.log(a/b);
// }
//  })