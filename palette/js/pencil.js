document.addEventListener('click',function(el){
    activeButton = localStorage.getItem('activeButton');
    if(activeButton=='button__pencil'){
        pencil(el);
    }
})

function pencil(el){
    let canvas = document.getElementById('canvas4').getContext('2d');
    let color = localStorage.getItem('activeColor');
        if(el.target.id=='canvas4'){
            let x = el.clientX - 495;
            let y = el.clientY - 140;
            canvas.fillStyle = color;
            canvas.fillRect(x, y, 1, 1);
        }
}