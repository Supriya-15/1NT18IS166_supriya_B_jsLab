//Task
var cust_name=document.getElementById("name");
var id=document.getElementById("id");
var num=document.getElementById("num");
var item=document.getElementById("item");
var amount=document.getElementById("amount");
var details=[];
let str=item;
//console.log(item);
//let numitem=[]
 //console.log(item.value);

//numitem.push(num_item);
//console.log(num_item);
var list=[];
// j=0;
// while(j!=num)
// {
   
//     cust_items.push(item.value);
//     j++;
// }
// //var obj= new Object()
const add_cst=()=>{
   // var num_item= str.split(',');
    //e.preventDefault();
    let customer={
        name:cust_name.value,
        id:id.value,
        num:num.value,
        item:item.value.split(','),
        amount:amount.value
    }
    list.push(customer);

console.log(list)
}
document.getElementById("submit").addEventListener("click",add_cst);
console.log("sup");

document.getElementById("search").addEventListener('click',()=>
{
   
    var cust_id=document.getElementById("cust_id").value;
    for(var i=0;i<=list.length;i++)
    {
        if(list[i].id== cust_id)
        {
            document.getElementById("output").innerHTML=list[i].name;
        }
        
        else
        {
            document.getElementById("output").innerHTML="Element not found";
        }
    
    }
   
})


