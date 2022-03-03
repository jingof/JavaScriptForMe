const para = document.querySelector('div.error');
para.innerText += ". Nope, its not an error";
para.textContent += ". Nope, its not an error";
//console.log(para);

let par = document.querySelectorAll('p');
//console.log(par);


let newOne = document.getElementById('class-title');
let newTwo = document.querySelector('#class-title');
console.log(newOne);
console.log(newTwo);

let pTags = document.querySelectorAll('p');
pTags.forEach(function(pTag)
{
    if(pTag.innerText.includes("error") && pTag.innerText.includes("success"))
        pTag.classList = ["error","success"];
    else if(pTag.innerText.includes("error"))
        pTag.className = "error";
    else if(pTag.innerText.includes("success"))
        pTag.className = "success";
    console.log(pTag);
});
//console.log(pTags);
