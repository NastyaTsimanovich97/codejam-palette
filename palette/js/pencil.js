let canvas = document.getElementById('canvas4').getContext('2d');
let activeButton = localStorage.getItem('activeButton');
let color = localStorage.getItem('activeColor');

if(activeButton=='button__pencil'){
    console.log(color)
    pencil();
}

function pencil(){
    document.addEventListener('mousedown',function(el){
        console.log(el.clientX,el.clientY);
        console.log();
        if(el.target.id=='canvas4'){
            let x = el.clientX - 495;
            let y = el.clientY - 140;
            canvas.fillStyle = color;
            canvas.fillRect(x, y, 1, 1);
        }
    });
}