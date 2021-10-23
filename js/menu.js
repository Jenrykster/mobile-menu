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

function onMenuHover(e){
    if(e.target.classList.contains('menu')){
        optionsContainer.style.marginTop = '0rem';
        e.stopPropagation();
    }
}
function onMenuClose(e){
    if(e.target.classList.contains('menu')){
        let actualMargin = optionsContainer.style.marginTop;
        optionsContainer.style.marginTop = `${9 - 9*selectedOptionIndex}rem`;    
    }
    e.stopPropagation();
}
function toggleSelected(e){
    selectedOptionIndex = findIndex(e.target);
}
function findIndex(element){
    return options.findIndex(e =>{
        return e === element;
    })
}