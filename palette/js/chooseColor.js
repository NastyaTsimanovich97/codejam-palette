document.addEventListener('click',function(el){
    activeButton = localStorage.getItem('activeButton');
    if(activeButton=='button__choose-color'){
        chooseColor(el);
    }
})

function chooseColor(el){
    
        let canvasColor = document.querySelector('.canvas').getContext('2d');
        let button = getActiveButton();
        if(button == 'button__choose-color'){  
        if(!el.target.classList.contains('button__choose-color') && el.target.id!='input__choose-color' && el.target.className!='label__choose-color' && el.target.id!='button__color'){
            if(el.target.id=='canvas4'){
                let x = el.clientX - 495;
                let y = el.clientY - 140;
                let colorItem = canvasColor.getImageData(x,y,1,1).data;
                let rgbColor = toRgb(colorItem[0],colorItem[1],colorItem[2]);
                addColor(rgbColor);
            }
            if(el.target.tagName=='H1'){
                let colorItem = getComputedStyle(el.target).color;
                addColor(colorItem);
            }
            if(el.target.id!='canvas4' && !el.target.classList.contains('button__icon') && event.target.id!='button__palette'){
                let colorItem = getComputedStyle(el.target).backgroundColor;
                addColor(colorItem);
            }
            }
          }
    }

    function toRgb(a,b,c){
        let rgb = 'rgb('+a+','+b+','+c+')';
        return rgb;
    }

    function addColor(color){
        let currentElement = document.querySelector('.circle-color');
        let prevElement = document.querySelector('.circle-prev-color');
        let prevColor = localStorage.getItem('activeColor');
                
        currentElement.style.backgroundColor=color;
        prevElement.style.backgroundColor=prevColor;

        localStorage.setItem('activeColor',color);
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

function getActiveButton(){
    return localStorage.getItem('activeButton');
}


