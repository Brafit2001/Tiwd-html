
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
    if (admin === true){
        admin = false;
    }else if (admin === false){
        admin = true;
    }
    console.log("Set admin ", admin);
}

function checkAdmin(){
    console.log("Checking...")
    let event_buttons = $(".admin-service");
    let event_creation = $(".create-event");

    if (admin === true){
        event_buttons.css("display", "flex");
        event_creation.css("display", "flex");
        console.log("Changed css");
    }else if (admin !== true){
        event_buttons.css("display", "none");
        event_creation.css("display", "none");
    }
}

function addTicketsPage(){
    window.location.href = "add-tickets.html";
}

function eventsPage(){
    window.location.href = "experience.html";
}

function createEvent(){
    window.location.href = "new-experience.html";
}

function setup(){
    load_header_footer();
    $(".ticket-col").click(addTicketsPage);
    $(".card-img").click(eventsPage);
    $("#create_event_button").click(createEvent);
    setInterval(checkAdmin, 3000);
}

