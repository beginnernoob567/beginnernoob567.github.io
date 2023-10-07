// const myvarialbe= document.querySelector('h1').addEventListener("click",()=>{
//     myvarialbe.textContent="Hello worlds"
// })

let myvariable=document.querySelector("h1")
myvariable.addEventListener("click", function () {
    myvariable.textContent="Mozilla is cool"
  });

let button=document.querySelector('button')
let heading=document.querySelector('h1')
  
function username(){
    const myname=prompt("Enter name")
    if(!myname){
        username();
    }
    else{
    localStorage.setItem('name',myname);
    heading.textContent=`${myname},is cool`;
}
}

button.addEventListener("click",()=>{
    username()
}
)