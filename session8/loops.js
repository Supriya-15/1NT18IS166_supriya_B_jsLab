let x='10';
if (x === '10'){
    console.log(`the value of x is ${x+2}`)
}
let arr=['su','lion','cat'];
console.log(arr)
let objData=[{id:12,status:'active'},{id:13,status:'inactive'}];
console.log(`${arr}`);
console.log(`this is the output ${objData.id}`);

console.log("this is inside a for loop");
//console.log(`${arr[i]}`)
for(var i=0;i<arr.length;i++)
{
    
    console.log(arr[i]);
}
console.log("this is inside 2nd loop");
for(var i=0;i<arr.length;i++)
{
    console.log(  `${arr[i]}`);
}
let av=["weew",'meom','wee','yhee',34,23.56];
console.log("\n");
console.log(typeof av);
console.log (`${av}`)

console.log(av);
console.log("this is inside 2nd loop");
for(var i=0;i<av.length;i++)
{
    console.log(typeof av[i] +"-----"+ av[i]);
}

for(value in objData){
    console.log(objData[value]);
}

const students=[
    {
        "name":"sup",
        "lastname":"heb",
        "usn":"1nt18is166",
        "hobby":['writing','reading','dancing']
    },
    {
         "name":"priya",
        "lastname":"hedge",
        "usn":"1nt18is134",
        "hobby":['writing','painting','dancing']

    },
     {"name":"wall",
        "lastname":"jhon",
        "usn":"1nt18is089",
        "hobby":['instrument','painting','dancing']
     }
]
for(i =0;i<students.length;i++)
{
console.log(`${students[i].name}`);

//console.log(reultdata);
}
findData('wall');

function findData(names)
{
for(i =0;i<students.length;i++)

    if(`${students[i].name}`== names)
    {
        console.log(`${students[i].usn},${students[i].hobby}`)
       // console.log(students[i][prop])
    }
}
findtas('sup');

function findtas(names)
{
    //var j=0;
  // let v=students.length;
//while(j < v)
for(i =0;i<students.length;i++)
{
    if(students[i].name== names)
    {
        console.log(students[i])
    }
    //j++;
}


}
trying("sup");
function trying(names)
{
    for(i =0;i<students.length;i++)
{
    if(students[i].name== names)
    {
        console.log(`${students[i].prop}`);

    }
    //j++;
}
}
//console.log(result);

// var product=[
//     {
//         item_id:"123",
//         item_name:""
//     }
// ]