let activeButton;
if(!localStorage.getItem('activeButton')){
    activeButton = document.querySelector('.button__pencil');
    activeButton.classList.toggle("isActive__button");
    localStorage.setItem('activeButton', 'button__pencil')
}else{
    let classActive = localStorage.getItem('activeButton');
    activeButton = document.querySelector("."+classActive);
    activeButton.classList.toggle("isActive__button");
}

document.addEventListener('click',function(event){
    if(event.target.id=='button__palette'){
        activeButton.classList.remove("isActive__button");
        activeButton = event.target;
        activeButton.classList.toggle("isActive__button");
        if(activeButton.classList.contains("button__choose-color")){
            localStorage.setItem('activeButton', 'button__choose-color');
        }
        if(activeButton.classList.contains("button__pencil")){
            localStorage.setItem('activeButton', 'button__pencil');
        }
        if(activeButton.classList.contains("button__transform")){
            localStorage.setItem('activeButton', 'button__transform');
        }
        if(activeButton.classList.contains("button__paint-bucket")){
            localStorage.setItem('activeButton', 'button__paint-bucket');
        }
    }
})

