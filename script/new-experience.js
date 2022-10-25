

/*DESPLEGABLE "WHAT YOU SHOULD KNOW"*/
function deploy(){

    let container = document.querySelector('.Add-info')
    if (container.style.display === 'flex'){
        container.style.display = 'None';
    }else {
        container.style.display = 'flex'
    }
}
