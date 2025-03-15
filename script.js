let button=document.querySelector('button')
button.addEventListener('click',col)
let a=document.getElementById('color')
let b=document.getElementById('but')
let c=document.querySelector('body')
let hex=[1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F']
function ran(){
    let z=Math.floor(Math.random()*16)
    return hex[z]
}
function col(){
    let w='#'
    for(let i=1;i<=6;i++){
        w=w+ran()
    }
    a.innerHTML= w
    c.style.backgroundColor= w
}
























