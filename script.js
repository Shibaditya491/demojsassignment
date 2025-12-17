const header = document.getElementById("header");
const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");
const name1 = document.getElementById("name");
const button = document.getElementById("btn");



box1.addEventListener('click', ()=>{
    box1.classList.toggle("red");
})

box2.addEventListener('click', ()=>{
    box2.classList.toggle("yellow")
})

box3.addEventListener('click', ()=>{
    box3.classList.toggle("green");
})

button.addEventListener('click', ()=>{
    let name = name1.value.trim();
    if (name !== ""){
        header.innerText = `Hello, ${name}`
    }     

})
