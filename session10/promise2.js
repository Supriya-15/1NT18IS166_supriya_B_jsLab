let fetchData=function(){
    return new Promise((resolve,reject)=>{
        console.log('fetching data');
        setTimeout(()=>{
        resolve({
            id:'S8008',
            name:'sup',
            dept:'ise',
            inst:'nmit'
        })
    },3000)
    })
}

let  parseData =function(data){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log('parsing data plz wait   .....');
                let parseData =`parsed employee data  ${data.id} ${data.name} ${data.dept} ${data.inst}`;
            })
        })
}

let 