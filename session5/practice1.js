document.getElementById('getText').addEventListener('click',getText);
document.getElementById('getUser').addEventListener('click',getUser);
document.getElementById('getPost').addEventListener('click',getPost);
document.getElementById('addpost').addEventListener('submit',addpost);


function getText(){
    // fetch('samp.txt')
    // .then(function(res){
    //     //console.log(res.text());
    //     return res.text();
    // })
    // .then(function(data){
    //     console.log(data);
    // });

    fetch('samp.txt')
    .then((res)=>{
        return res.text();
    })
    .then((data)=>{
       document.getElementById("output").innerHTML=data;  
     }).catch((err)=>console.log(err))

}

function getUser(){
    fetch('user.json')
    .then((res)=>res.json())
    .then((data)=> {
        let output='<h2>User</h2>';
        data.forEach(function(user){
            output +=`
            <ul>
            <li>ID: ${user.id}</li>

            <li>name: ${user.name}    </li>
            <li>email: ${user.email}   </li>
            </ul>
            `;
        });
        document.getElementById('output').innerHTML=output
    })
}

function getPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        let output='<h2>Post</h2>';
        data.forEach(function(post){
            
            output +=`
            <div>
            <h3> ${post.title} </h3>
            <p> ${post.body} </p>
            </div>
            
            `;
        });
        document.getElementById('output').innerHTML=output;
    })

    }
