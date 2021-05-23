//new Promise(executor:(resolve:(value:any)=>void reject))

let fetchData =function(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('fetching data');
            resolve({
                name:'supriya',
                id:166,
                dept:'isee',
                inst:'Nmit'

            })
        },3000)
    })
}

let parseData =function(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('parsing ....');
            let parsedData=`paresd out - ${data.name},${data.id}, ${data.dept},${data.inst}`
                           
                            
            resolve({
                pars:parsedData

            })
        },3000)
    })
}

let printData =function(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
            console.log(data.pars);
            console.log('successful')
        })
    },2000)
}

fetchData().then(parseData).then(printData)

// let fetchData=new Promise((resolve,reject)=>{
//     let sum=5+5;
//     if (sum==9){
//         resolve('Answer is correct');
//     }
//     else{
//         reject('sum is not proper');
//     }
// })

// fetchData.then(data=>{
//     console.log('inside the resole -${data}');
// }).catch(e=>{
//   console.log('from rejection - ${e}');
//   //console.error  
// })