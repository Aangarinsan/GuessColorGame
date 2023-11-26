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

let cnt1 = 0;
let cnt2 = 0;

const con = document.getElementById('colour_container');

function gamestart(){

con.innerHTML=""

const cb1 = document.createElement('div');
cb1.setAttribute('class','colour');
const cb2 = document.createElement('div');
cb2.setAttribute('class','colour');
const cb3 = document.createElement('div');
cb3.setAttribute('class','colour');    

const cb = [cb1,cb2,cb3];

cb.forEach((i)=>{
    con.appendChild(i);
})

const ca1 = colorVal();
cb1.style.backgroundColor=('rgb('+ca1[0]+','+ca1[1]+','+ca1[2]+')')
const ca2 = colorVal();
cb2.style.backgroundColor=('rgb('+ca2[0]+','+ca2[1]+','+ca2[2]+')')
const ca3 = colorVal();
cb3.style.backgroundColor=('rgb('+ca3[0]+','+ca3[1]+','+ca3[2]+')')

const que = getComputedStyle(cb[randomNumber(0,2)]).backgroundColor;

const cg = document.getElementById('ic_text');
const ig = document.getElementById('cc_text');

const fc = document.getElementById('find_colour');
fc.innerText=que;

cb[0].addEventListener('click',()=>{
    assert(0);
    gamestart();
})

cb[1].addEventListener('click',()=>{
    assert(1);
    gamestart();
})

cb[2].addEventListener('click',()=>{
    assert(2);
    gamestart();
})

const assert =(i)=>{
    if(que === getComputedStyle(cb[i]).backgroundColor){
        cnt1++;
        cg.style.transform = 'scale(1.5)';
        setTimeout(function() {
            cg.style.transform = 'scale(1)';
        }, 500);
    }
    else{
        cnt2++;
        ig.style.transform = 'scale(1.5)';
        setTimeout(function() {
            ig.style.transform = 'scale(1)';
        }, 500);
    }
}

cg.innerText = 'Correct Guess✅:'+cnt1;
ig.innerText = 'Incorrect Guess❌:'+cnt2;
}

if(cnt1==0 && cnt2==0){
    gamestart();
}