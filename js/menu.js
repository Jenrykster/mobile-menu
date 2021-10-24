let options = [];
let menu = document.querySelector('.menu');
let optionsContainer = menu.querySelector('.menu-options-container');

menu.addEventListener('mouseenter', onMenuHover);
menu.addEventListener('mouseleave', onMenuClose);

for (let option of optionsContainer.children){
    options.push(option);
    option.addEventListener('click', toggleSelected);
}

let selectedOptionIndex = findIndex(document.querySelector('.selected'));
changeOptionDisplay();

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