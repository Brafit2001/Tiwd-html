

/*Carga de header y footer a todas las pag*/
$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});


/*Menu pop up*/
function popup(){
    let container = document.querySelector('.popup')
    if (container.style.display === 'flex'){
        container.style.display = 'None';
    }else {
        container.style.display = 'flex'
    }
}

