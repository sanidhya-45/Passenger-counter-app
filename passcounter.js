// document.getElementById("count-el").innerText=5;
// the above line of code changes the value from 0 to 5

//variable
let countvar=document.getElementById("count-el")
let savevar=document.getElementById("save-el")

let count =0

function increment()
{
    count=count+1;
    countvar.innerText=count;
}
function save()
{
    let countstr=count+ " - "
    savevar.textContent += countstr
    count=0
    countvar.innerText=count
}
function reset()
{
    savevar.textContent="Previous Entries: "
}
