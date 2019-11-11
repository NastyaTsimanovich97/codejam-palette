 import {currentElement, prevElement} from './activeColor.js';
 
 
let activeButton = localStorage.getItem('activeButton');
let canvas = document.querySelector('.canvas').getContext('2d');
let colorInput = document.querySelector("#input__choose-color");

if(activeButton=='button__choose-color'){
    chooseColor();
}


 function chooseColor(){
    let canvas = document.querySelector('.canvas').getContext('2d');
        document.addEventListener('click',function(el){
        if(!el.target.classList.contains('button__choose-color') && el.target.id!='input__choose-color' && el.target.className!='label__choose-color'){
            if(el.target.className=='canvas'){
                let x = el.clientX - 495;
                let y = el.clientY - 140;
                let colorItem = canvas.getImageData(x,y,1,1).data;
                let rgbColor = toRgb(colorItem[0],colorItem[1],colorItem[2]);
                addColor(rgbColor);
            }
            if(el.target.tagName=='H1'){
                let colorItem = getComputedStyle(el.target).color;
                addColor(colorItem);
            }
            if(el.target.className!='canvas' && !el.target.classList.contains('button__icon') && event.target.id!='button__palette'){
                let colorItem = getComputedStyle(el.target).backgroundColor;
                addColor(colorItem);
            }
           
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

    window.addEventListener("load", startup, false);

    function startup(){
        let colorInput = document.querySelector("#input__choose-color");
        let defaultColor = localStorage.getItem('activeColor')
        colorInput.value = defaultColor;
        colorInput.addEventListener("change", updateAll, false);
        colorInput.select();
        }
    function updateAll(event) {
        addColor(event.target.value)
    }

