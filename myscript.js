const cb1 = document.getElementById('c1');
const cb2 = document.getElementById('c2');
const cb3 = document.getElementById('c3');

const randomNumber = (min,max) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const colorVal = () =>{
const rgbRed = randomNumber(0,255);
const rgbGreen = randomNumber(0,255);
const rgbBlue = randomNumber(0,255);
const ca = [rgbRed,rgbGreen,rgbBlue];
return ca;
}

const ca1 = colorVal();
cb1.style.backgroundColor=('rgb('+ca1[0]+','+ca1[1]+','+ca1[2]+')')
const ca2 = colorVal();
cb2.style.backgroundColor=('rgb('+ca2[0]+','+ca2[1]+','+ca2[2]+')')
const ca3 = colorVal();
cb3.style.backgroundColor=('rgb('+ca3[0]+','+ca3[1]+','+ca3[2]+')')

const cb = [cb1,cb2,cb3];

const que = getComputedStyle(cb[randomNumber(0,2)]).backgroundColor;

const fc = document.getElementById('find_colour');
fc.innerText=que;

cb[0].addEventListener('click',()=>{
    if(que === getComputedStyle(cb[0]).backgroundColor)
    alert('correct guess ✅')
    else
    alert('incorrect guess! ❌')
    location.reload();
})

cb[1].addEventListener('click',()=>{
    if(que === getComputedStyle(cb[1]).backgroundColor)
    alert('correct guess ✅')
    else
    alert('incorrect guess! ❌')
    location.reload();
})

cb[2].addEventListener('click',()=>{
    if(que === getComputedStyle(cb[2]).backgroundColor)
    alert('correct guess ✅')
    else
    alert('incorrect guess! ❌')
    location.reload();
})