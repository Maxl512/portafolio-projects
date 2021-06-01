let contactName = document.querySelector("#contact-name");
let contactEmail = document.querySelector("#contact-email");
let contactMessage = document.querySelector("#contact-message");
let contactBtnSubmit = document.querySelector("#contact-button-submit");
function getError(){
    let error = [];
    if(contactName.value.length < 8 || contactName.value.length > 16){
        error[0] = true;
        error[1] = "El nombre debe estar entre 8 y 16 caracteres";
        return error;
    };
    if(contactEmail.value.indexOf("@") < 0 || contactEmail.value.indexOf(".") < 0){
        error[0] = true;
        error[1] = "El email que ha escrito es invalido.";
        return error;
    };
    if(contactMessage.value.length == 0 || contactMessage.value.length > 600){
        error[0] = true;
        error[1] = "El mensaje debe ser entre 0 y 600 caracteres";
        return error;
    };
    error[0]= false;
    return error;
};
contactBtnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let error = getError();
    if(error[0]){
        alert(error[1]);
    } else{
        alert("Su mensaje se ha enviado correctamente!");
    };
});