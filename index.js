let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let color1=document.getElementById("c1");
let color2=document.getElementById("c2");
let copytext=document.querySelector('#copycode');
let rgb1="#000";
let rgb2="#fff";

const hexcode=()=>{
    let myhexvalue="0123456789abcdef";
    let color="#";
    for (let index = 0; index < 6; index++) {
        color+=myhexvalue[Math.floor(Math.random()*16)];
    }
    return color;
}

const handlebtn1=()=>{
    rgb1=hexcode();
    // let rgb2=hexcode();
    document.querySelector('.main').style.background = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    color1.innerText=rgb1;
    btn1.style.background=rgb1;
    btn1.innerText=rgb1;
}
const handlebtn2=()=>{
    rgb2=hexcode();
    document.querySelector('.main').style.background = `linear-gradient(to right, ${rgb1},${rgb2})`;
    color2.innerText=rgb2;
    btn2.style.background=rgb2;
    btn2.innerText=rgb2;
}
btn1.addEventListener("click",handlebtn1);
btn2.addEventListener("click",handlebtn2);

copytext.addEventListener("click",()=>{
    navigator.clipboard.writeText(copytext.innerText);
    alert("color copied the clipboard");
})