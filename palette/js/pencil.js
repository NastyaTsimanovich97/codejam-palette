function pencil(el){
    const canvas = document.getElementById('canvas4').getContext('2d');
    const color = localStorage.getItem('activeColor');
        if(el.target.id==='canvas4'){
            const x = el.clientX - 495;
            const y = el.clientY - 140;
            canvas.fillStyle = color;
            canvas.fillRect(x, y, 1, 1);
        }
}

document.addEventListener('click',(el)=>{
    const activeButton = localStorage.getItem('activeButton');
    if(activeButton==='button__pencil'){
        pencil(el);
    }
})

