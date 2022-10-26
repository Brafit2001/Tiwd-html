
/*Loads header and footer*/
$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});

$(document).ready(setup);
let admin = false;

function load_header_footer(){
    $("#header").innerHTML = "footer.html";
    $("#footer").load("footer.html");
}


/*Menu pop up*/
function popup(){
    let container = document.querySelector('.popup')
    if (container.style.display === 'flex'){
        container.style.display = 'None';
    }else {
        container.style.display = 'flex'
    }
}

function enter_admin_mode(){
    admin = true;
    console.log("Set admin true");
}

function checkAdmin(){
    console.log("Checking...")
    if (admin === true){
        $(".admin-service").css("display", "flex");
        console.log("Changed css");
    }
}

function addTicketsPage(){
    window.location.href = "add-tickets.html";
}

function eventsPage(){
    window.location.href = "experience.html";
}

function setup(){
    load_header_footer();
    $(".ticket-col").click(addTicketsPage);
    $(".card-img").click(eventsPage);
    setInterval(checkAdmin, 3000);
}

