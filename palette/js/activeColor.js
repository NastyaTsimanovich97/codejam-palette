let currentElement = document.querySelector('.circle-color');
let prevElement = document.querySelector('.circle-prev-color');

let currentColor;
let prevColor;

if(!localStorage.getItem('activeColor')){
    currentColor = getComputedStyle(currentElement).background;
    localStorage.setItem('activeColor', currentColor);

    prevColor = getComputedStyle(prevElement).background;
    localStorage.setItem('prevColor', prevColor);
}
else{
    currentColor = localStorage.getItem('activeColor');
    currentElement.style.background = currentColor;

    prevColor = localStorage.getItem('prevColor');
    prevElement.style.background = prevColor;
}

document.addEventListener('click',function(el){
    if(el.target.id=='button__color'){
        if(!el.target.classList.contains('button__current-color')){
            let activeElement = el.target.firstChild;
            currentColor = getComputedStyle(activeElement).background;
            currentElement.style.background = currentColor;

            prevColor = localStorage.getItem('activeColor');
            prevElement.style.background = prevColor;

            localStorage.setItem('activeColor', currentColor);
            localStorage.setItem('prevColor', prevColor);
        }
    }
})
