function openProject(el) {
    console.log(el.getAttribute('id'));
    document.getElementById('one-project').style.transition = "all .75s ease";
    document.getElementById('one-project').style.right = "0";

    var title = document.getElementById('title');

    if(el.getAttribute('id') == "project-one") {
        title.innerText = "Cote de Jade Ramonage";
    }

    if(el.getAttribute('id') == "project-two") {
        title.innerText = "Leads Empire";
    }

    if(el.getAttribute('id') == "project-three") {
        title.innerText = "Cat-Berro Orléans";
    }

    if(el.getAttribute('id') == "project-four") {
        title.innerText = "SODC";
    }

    if(el.getAttribute('id') == "project-five") {
        title.innerText = "World Cup 2018";
    }

    if(el.getAttribute('id') == "project-six") {
        title.innerText = "Ouest Habitat Conseil";
    }
}

function backProjects() {
    document.getElementById('one-project').style.transition = "all .5s ease";
    document.getElementById('one-project').style.right = "-60%";
}