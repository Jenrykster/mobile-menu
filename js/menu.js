let options = [];
let body = document.querySelector('body');
let menu = document.querySelector('.menu');
let optionsContainer = menu.querySelector('.menu-options-container');
let isOpen = false;

for (let option of optionsContainer.children){
    options.push(option);
    option.addEventListener('click', toggleSelected);
}
let selectedOptionIndex = findIndex(document.querySelector('.selected'));

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    body.addEventListener('click', closeMenu);
    menu.addEventListener('click', toggleMenuState);
}else{
    menu.addEventListener('mouseenter', onMenuHover);
    menu.addEventListener('mouseleave', onMenuClose);
    changeOptionDisplay();
}

function onMenuHover(e){
    if(e.target.classList.contains('menu')){
        optionsContainer.style.marginTop = '0rem';
        e.stopPropagation();
    }
}
function onMenuClose(e){
    if(e.target.classList.contains('menu') ){
        changeOptionDisplay(); 
    }
    e.stopPropagation();
}
function changeOptionDisplay(){
    optionsContainer.style.marginTop = `${9 - 9*selectedOptionIndex}rem`;   
}
function toggleMenuState(e){
    if(e.target.classList.contains('menu') ){
        if(isOpen){
            closeMenu(e);
        }else{
            optionsContainer.style.marginTop = '0rem';
            menu.style.height = '16rem';
            isOpen = true;
        }
    }
    e.stopPropagation();
}
function toggleSelected(e){
    for(let option of options){
        option.classList.remove('selected');
    }
    selectedOptionIndex = findIndex(e.target);
    e.target.classList.add('selected');
}
function findIndex(element){
    return options.findIndex(e =>{
        return e === element;
    })
}
function closeMenu(e){
    if(isOpen){
        menu.style.height = '4rem';
        isOpen = false;
        changeOptionDisplay();
    }
}