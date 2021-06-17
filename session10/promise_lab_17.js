

let numb=4;

let checktheNumber = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(numb >= 0){
            const propert={
                digit:'even or old',
                num:'prime or non prime'
            };
          resolve(propert);
        }
     else{
            const reason= new Error('number is negative');
            reject(reason);
        }

    },3000);
});

const show = function (propert) {
    const message = 'This number greater than zero  either the number is ' +
                propert.digit + ' or it is ' + propert.num + ' ';
    return Promise.resolve(message);
};



const checknum = function () {
    checktheNumber
        .then(show)
        .then(fulfilled => console.log(fulfilled))
        .catch(error => console.log(error.message)); 
};

checknum();