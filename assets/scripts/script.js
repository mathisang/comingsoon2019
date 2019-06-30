function openProject(el) {
    console.log(el.getAttribute('id'));
    document.getElementById('one-project').style.transition = "all .75s ease";
    document.getElementById('one-project').style.right = "0";

    var title = document.getElementById('title');
    var imageOne = document.getElementById('left-images');
    var imageTwo = document.getElementById('right-images');
    var leftSubtitle = document.getElementById('l-subtitle');
    var leftDescription = document.getElementById('l-description');
    var anneeProjet = document.getElementById('r-year');
    var typeProjet = document.getElementById('r-type');
    var projet = document.getElementById('r-project');

    if(el.getAttribute('id') == "project-one") {
        title.innerText = "Cote de Jade Ramonage";
        imageOne.src = "assets/images/ramonage/image-left.jpg";
        imageTwo.src = "assets/images/ramonage/image-right.jpg";
        leftSubtitle.innerText = "Développement complet";
        leftDescription.innerHTML = "- Conception graphique & Webdesign <span>(Photoshop)</span><br>" +
                                    "- Développement complet à venir"
        anneeProjet.innerText = " 2019";
        typeProjet.innerText = " Webdesign & Développement web";
        projet.innerText = "Freelance";
    }

    if(el.getAttribute('id') == "project-two") {
        title.innerText = "Leads Empire";
        imageOne.src = "assets/images/leadsempire/image-left.jpg";
        imageTwo.src = "assets/images/leadsempire/image-right.jpg";
        leftSubtitle.innerText = "Développement partiel";
        leftDescription.innerHTML = "- Développement front-end<br>" +
                                    "- Technologies utilisées : <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>PHP</b>"
        anneeProjet.innerText = " 2019";
        typeProjet.innerText = " Développement web";
        projet.innerText = "Freelance";
    }

    if(el.getAttribute('id') == "project-three") {
        title.innerText = "Cat-Berro Orléans";
        imageOne.src = "assets/images/catberro/image-left.jpg";
        imageTwo.src = "assets/images/catberro/image-right.jpg";
        leftSubtitle.innerText = "Développement complet";
        leftDescription.innerHTML = "- Conception graphique & Webdesign <span>(Photoshop)</span><br>" +
                                    "- Développement front-end : <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b><br>" +
                                    "- Développement back-end : <b>PHP</b>, <b>MySQL</b><br>" +
                                    "- Utilisation et configuration de <b>WordPress</b><br>" +
                                    "- Création de thème WordPress<br>" +
                                    "- Utilisation de modules WordPress";
        anneeProjet.innerText = " 2018";
        typeProjet.innerText = " Webdesign & Développement web";
        projet.innerText = "Freelance";
    }

    if(el.getAttribute('id') == "project-four") {
        title.innerText = "SODC";
        imageOne.src = "assets/images/sodc/image-left.jpg";
        imageTwo.src = "assets/images/sodc/image-right.jpg";
        leftSubtitle.innerText = "Conception Graphique";
        leftDescription.innerHTML = "- Conception graphique & Webdesign <span>(Photoshop)</span>";
        anneeProjet.innerText = " 2018";
        typeProjet.innerText = " Webdesign";
        projet.innerText = "Freelance";
    }

    if(el.getAttribute('id') == "project-five") {
        title.innerText = "World Cup 2018";
        imageOne.src = "assets/images/worldcup/image-left.jpg";
        imageTwo.src = "assets/images/worldcup/image-right.jpg";
        leftSubtitle.innerText = "Développement complet";
        leftDescription.innerHTML = "- Conception graphique & Webdesign <span>(Photoshop)</span><br>" +
                                    "- Développement front-end : <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b><br>" +
                                    "- Développement back-end : <b>PHP</b>, <b>MySQL</b><br>" +
                                    "- Développement d'une administration pour la gestion des matchs, pronostiques et comptes";
        anneeProjet.innerText = " 2018";
        typeProjet.innerText = " Webdesign & Développement web";
        projet.innerText = "Personnel";
    }

    if(el.getAttribute('id') == "project-six") {
        title.innerText = "Ouest Habitat Conseil";
        imageOne.src = "assets/images/ohc/image-left.jpg";
        imageTwo.src = "assets/images/ohc/image-right.jpg";
        leftSubtitle.innerText = "Développement complet";
        leftDescription.innerHTML = "- Conception graphique & Webdesign <span>(Photoshop)</span><br>" +
                                    "- Développement front-end : <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b><br>" +
                                    "- Développement back-end : <b>PHP</b>, <b>MySQL</b><br>" +
                                    "- Développement d'une administration personnalisé";
        anneeProjet.innerText = " 2018";
        typeProjet.innerText = " Webdesign";
        projet.innerText = "Professionnel";
    }
}

function backProjects() {
    document.getElementById('one-project').style.transition = "all .5s ease";
    document.getElementById('one-project').style.right = "-60%";
}