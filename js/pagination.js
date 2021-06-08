let projectsInfo = {
    project01 : {
        imgSrc : "image/dog.png",
        name: "Creador de animales",
        description : "Un formulario que le permite al usuario crear un animal a partir de ciertas opciones predeterminadas. Se utiliza un constructor para crear los objetos de cada animal, y estos son almacenados en un Array bi-dimensional.",
        projectUrl : "https://github.com/Maxl512/Creador-de-animales.git",
        projectCode : "https://github.com/Maxl512/Creador-de-animales/archive/refs/heads/main.zip"
    },
    project02 : {
        imgSrc : "image/product-gallery.jpg",
        name: "Galeria de Productos",
        description : "Es una simple galeria en donde se pueden mostrar varios productos, los cuales estan ordenados por categorias. Dichos productos son objetos almacenados en un array. Tambien se pueden crear mas productos, necesitandose una imagen, nombre y descripcion del producto que se creara, ademas del precio y el numero de serie.",
        projectUrl : "https://github.com/Maxl512/Products-gallery.git",
        projectCode : "https://github.com/Maxl512/Products-gallery/archive/refs/heads/main.zip"
    },
    project03 : {
        name: "Proyecto Tres",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veniam fugiat labore nihil suscipit totam. Ea, molestiae rerum quibusdam reprehenderit vitae nostrum aperiam numquam laudantium, laborum possimus exercitationem dolores nobis. 3",
        projectUrl : "#",
        projectCode : "#"
    },
    project04 : {
        name: "Proyecto Cuatro",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veniam fugiat labore nihil suscipit totam. Ea, molestiae rerum quibusdam reprehenderit vitae nostrum aperiam numquam laudantium, laborum possimus exercitationem dolores nobis. 4",
        projectUrl : "#",
        projectCode : "#"
    },
    project05 : {
        name: "Proyecto Cinco",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veniam fugiat labore nihil suscipit totam. Ea, molestiae rerum quibusdam reprehenderit vitae nostrum aperiam numquam laudantium, laborum possimus exercitationem dolores nobis. 5",
        projectUrl : "#",
        projectCode : "#"
    },
    project06 : {
        name: "Proyecto Seis",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veniam fugiat labore nihil suscipit totam. Ea, molestiae rerum quibusdam reprehenderit vitae nostrum aperiam numquam laudantium, laborum possimus exercitationem dolores nobis. 6",
        projectUrl : "#",
        projectCode : "#"
    },
    project07 : {
        name: "Proyecto Siete",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veniam fugiat labore nihil suscipit totam. Ea, molestiae rerum quibusdam reprehenderit vitae nostrum aperiam numquam laudantium, laborum possimus exercitationem dolores nobis. 7",
        projectUrl : "#",
        projectCode : "#"
    },
    project08 : {
        name: "Proyecto Ocho",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veniam fugiat labore nihil suscipit totam. Ea, molestiae rerum quibusdam reprehenderit vitae nostrum aperiam numquam laudantium, laborum possimus exercitationem dolores nobis. 8",
        projectUrl : "#",
        projectCode : "#"
    },
    project09 : {
        name: "Proyecto Nueve",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veniam fugiat labore nihil suscipit totam. Ea, molestiae rerum quibusdam reprehenderit vitae nostrum aperiam numquam laudantium, laborum possimus exercitationem dolores nobis. 9",
        projectUrl : "#",
        projectCode : "#"
    },
    project10 : {
        name: "Proyecto Diez",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veniam fugiat labore nihil suscipit totam. Ea, molestiae rerum quibusdam reprehenderit vitae nostrum aperiam numquam laudantium, laborum possimus exercitationem dolores nobis. 10",
        projectUrl : "#",
        projectCode : "#"
    },
    project11 : {
        name: "Proyecto Once",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veniam fugiat labore nihil suscipit totam. Ea, molestiae rerum quibusdam reprehenderit vitae nostrum aperiam numquam laudantium, laborum possimus exercitationem dolores nobis. 11",
        projectUrl : "#",
        projectCode : "#"
    },
    project12 : {
        name: "Proyecto Doce",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veniam fugiat labore nihil suscipit totam. Ea, molestiae rerum quibusdam reprehenderit vitae nostrum aperiam numquam laudantium, laborum possimus exercitationem dolores nobis. 12",
        projectUrl : "#",
        projectCode : "#"
    }

};

let firstProject = document.querySelector("#first-one-project");
let firstProjectImage = firstProject.children[0];
let firstProjectName = firstProject.children[1];
let firstProjectDescription = firstProject.children[2];
let firstProjectLink = firstProject.children[3];
let firstProjectCode = firstProject.children[4];
  
let secondProject = document.querySelector("#second-one-project");
let secondProjectImage = secondProject.children[0];
let secondProjectName = secondProject.children[1];
let secondProjectDescription = secondProject.children[2];
let secondProjectLink = secondProject.children[3];
let secondProjectCode = secondProject.children[4];

let lastOption = document.querySelector("#last-option");
lastOption.innerHTML = "<<"

const showProjects = (which, button, lastOpt) => {
    which = parseInt(which);
    lastOpt = parseInt(lastOpt) - 1;
    let navigator = button.parentElement;
    switch(which){
        case 1:
        lastOption.style.display="none";
        firstProjectImage.setAttribute("src", projectsInfo.project01.imgSrc);
        firstProjectName.innerHTML = projectsInfo.project01.name;
        firstProjectDescription.innerHTML = projectsInfo.project01.description;
        firstProjectLink.setAttribute("href", projectsInfo.project01.projectUrl);
        firstProjectCode.setAttribute("href", projectsInfo.project01.projectCode);

        secondProjectImage.setAttribute("src", projectsInfo.project02.imgSrc);
        secondProjectName.innerHTML = projectsInfo.project02.name;
        secondProjectDescription.innerHTML = projectsInfo.project02.description;
        secondProjectLink.setAttribute("href", projectsInfo.project02.projectUrl);
        secondProjectCode.setAttribute("href", projectsInfo.project02.projectCode);

        navigator.children[1].innerHTML = "1";
        navigator.children[2].innerHTML = "2";
        navigator.children[3].innerHTML = "3";
        navigator.children[4].innerHTML = "4";

        break;

        case 2:
        lastOption.style.display = "inline-block";
        firstProjectName.innerHTML = projectsInfo.project03.name;
        firstProjectDescription.innerHTML = projectsInfo.project03.description;
        firstProjectLink.setAttribute("href", projectsInfo.project03.projectUrl);
        firstProjectCode.setAttribute("href", projectsInfo.project03.projectCode);

        secondProjectName.innerHTML = projectsInfo.project04.name;
        secondProjectDescription.innerHTML = projectsInfo.project04.description;
        secondProjectLink.setAttribute("href", projectsInfo.project04.projectUrl);
        secondProjectCode.setAttribute("href", projectsInfo.project04.projectCode);

        navigator.children[1].innerHTML = "2";
        navigator.children[2].innerHTML = "3";
        navigator.children[3].innerHTML = "4";
        navigator.children[4].innerHTML = "5";

        break;

        case 3:
            
        lastOption.style.display = "inline-block";
        firstProjectName.innerHTML = projectsInfo.project05.name;
        firstProjectDescription.innerHTML = projectsInfo.project05.description;
        firstProjectLink.setAttribute("href", projectsInfo.project05.projectUrl);
        firstProjectCode.setAttribute("href", projectsInfo.project05.projectCode);

        secondProjectName.innerHTML = projectsInfo.project06.name;
        secondProjectDescription.innerHTML = projectsInfo.project06.description;
        secondProjectLink.setAttribute("href", projectsInfo.project06.projectUrl);
        secondProjectCode.setAttribute("href", projectsInfo.project06.projectCode);

        navigator.children[1].innerHTML = "3";
        navigator.children[2].innerHTML = "4";
        navigator.children[3].innerHTML = "5";
        navigator.children[4].innerHTML = "6";
        navigator.children[5].style.display = "none";

        break;
        
        case 4: 
        lastOption.style.display = "inline-block";    
        firstProjectName.innerHTML = projectsInfo.project07.name;
        firstProjectDescription.innerHTML = projectsInfo.project07.description;
        firstProjectLink.setAttribute("href", projectsInfo.project07.projectUrl);
        firstProjectCode.setAttribute("href", projectsInfo.project07.projectCode);

        secondProjectName.innerHTML = projectsInfo.project08.name;
        secondProjectDescription.innerHTML = projectsInfo.project08.description;
        secondProjectLink.setAttribute("href", projectsInfo.project08.projectUrl);
        secondProjectCode.setAttribute("href", projectsInfo.project08.projectCode);

        navigator.children[1].innerHTML = "3";
        navigator.children[2].innerHTML = "4";
        navigator.children[3].innerHTML = "5";
        navigator.children[4].innerHTML = "6";
        navigator.children[5].style.display = "none";
        break;

        case 5: 
        lastOption.style.display = "inline-block";    
        firstProjectName.innerHTML = projectsInfo.project09.name;
        firstProjectDescription.innerHTML = projectsInfo.project09.description;
        firstProjectLink.setAttribute("href", projectsInfo.project09.projectUrl);
        firstProjectCode.setAttribute("href", projectsInfo.project09.projectCode);

        secondProjectName.innerHTML = projectsInfo.project10.name;
        secondProjectDescription.innerHTML = projectsInfo.project10.description;
        secondProjectLink.setAttribute("href", projectsInfo.project10.projectUrl);
        secondProjectCode.setAttribute("href", projectsInfo.project10.projectCode);
        break;

        case 6:
        lastOption.style.display = "inline-block";
        firstProjectName.innerHTML = projectsInfo.project11.name;
        firstProjectDescription.innerHTML = projectsInfo.project11.description;
        firstProjectLink.setAttribute("href", projectsInfo.project11.projectUrl);
        firstProjectCode.setAttribute("href", projectsInfo.project11.projectCode);

        secondProjectName.innerHTML = projectsInfo.project12.name;
        secondProjectDescription.innerHTML = projectsInfo.project12.description;
        secondProjectLink.setAttribute("href", projectsInfo.project12.projectUrl);
        secondProjectCode.setAttribute("href", projectsInfo.project12.projectCode);
        break;
    }
    switch(lastOpt){
        case undefined:
            break;

        case 1:
        lastOption.style.display="none";
        firstProjectName.innerHTML = projectsInfo.project01.name;
        firstProjectDescription.innerHTML = projectsInfo.project01.description;
        firstProjectLink.setAttribute("href", projectsInfo.project01.projectUrl);
        firstProjectCode.setAttribute("href", projectsInfo.project01.projectCode);

        secondProjectName.innerHTML = projectsInfo.project02.name;
        secondProjectDescription.innerHTML = projectsInfo.project02.description;
        secondProjectLink.setAttribute("href", projectsInfo.project02.projectUrl);
        secondProjectCode.setAttribute("href", projectsInfo.project02.projectCode);

        navigator.children[1].innerHTML = "1";
        navigator.children[2].innerHTML = "2";
        navigator.children[3].innerHTML = "3";
        navigator.children[4].innerHTML = "4";

        break;

        case 2:
        lastOption.style.display = "inline-block";
        firstProjectName.innerHTML = projectsInfo.project03.name;
        firstProjectDescription.innerHTML = projectsInfo.project03.description;
        firstProjectLink.setAttribute("href", projectsInfo.project03.projectUrl);
        firstProjectCode.setAttribute("href", projectsInfo.project03.projectCode);

        secondProjectName.innerHTML = projectsInfo.project04.name;
        secondProjectDescription.innerHTML = projectsInfo.project04.description;
        secondProjectLink.setAttribute("href", projectsInfo.project04.projectUrl);
        secondProjectCode.setAttribute("href", projectsInfo.project04.projectCode);

        navigator.children[1].innerHTML = "2";
        navigator.children[2].innerHTML = "3";
        navigator.children[3].innerHTML = "4";
        navigator.children[4].innerHTML = "5";

        break; 
    };
};