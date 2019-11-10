import {currentElement, prevElement} from './activeColor.js';

let activeButton = localStorage.getItem('activeButton');
let canvas = document.querySelector('.canvas').getContext('2d');


if(activeButton=='button__choose-color'){
    chooseColor();
}

function chooseColor(){
    document.addEventListener('click',function(el){
       
        if(el.target.className=='canvas'){
            let x = el.clientX - 496;
            let y = el.clientY - 115;
            let colorItem = canvas.getImageData(x,y,1,1).data;
            let rgbColor = toRgb(colorItem[0],colorItem[1],colorItem[2]);
            addColor(rgbColor);
        }
        console.log(el.target.tagName)
        if(el.target.tagName=='H1'){
            let colorItem = getComputedStyle(el.target).color;
            addColor(colorItem);
        }
        else{
            let colorItem = getComputedStyle(el.target).backgroundColor;
            addColor(colorItem);
        }
    })
}

function toRgb(a,b,c){
    let rgb = 'rgb('+a+','+b+','+c+')';
    return rgb;
}

function addColor(rgbColor){
    let prevColor = localStorage.getItem('activeColor');
            
    currentElement.style.backgroundColor=rgbColor;
    prevElement.style.backgroundColor=prevColor;

    localStorage.setItem('activeColor',rgbColor);
    localStorage.setItem('prevColor',prevColor);
}
