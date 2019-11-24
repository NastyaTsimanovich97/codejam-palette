const clickX = [];
const clickY = [];
const clickDrag = [];
const clickColor = [];
let paint;

function addClick(x, y, dragging){
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
  clickColor.push(localStorage.getItem('activeColor'));
}
function redraw(){
    const ctx = document.getElementById('canvas4').getContext("2d");
    
    ctx.lineWidth = 1;
              
    for(let i=0; i < clickX.length; i +=1) {		
      ctx.beginPath();
      if(clickDrag[i] && i){
        ctx.moveTo(clickX[i-1], clickY[i-1]);
       }else{
        ctx.moveTo(clickX[i]-1, clickY[i]);
       }
       ctx.lineTo(clickX[i], clickY[i]);
       ctx.closePath();
       ctx.strokeStyle = clickColor[i];
       ctx.stroke();
    }
  }

const canvas = document.getElementById('canvas4');

canvas.addEventListener('mousedown',(e)=>{
    const activeButton = localStorage.getItem('activeButton');
    if(activeButton === 'button__pencil'){
        if(activeButton)
        paint = true;
        addClick(e.layerX, e.layerY);
        redraw();
    }
  });

  canvas.addEventListener('mousemove',(e)=>{
    const activeButton = localStorage.getItem('activeButton');
    if(activeButton === 'button__pencil'){
        if(paint){
        addClick(e.layerX, e.layerY, true);
        redraw();
        }
    }
  });

  canvas.addEventListener('mouseup',()=>{
    paint = false;
  });

  canvas.addEventListener('mouseleave',()=>{
    paint = false;
  });





