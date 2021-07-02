/* JavaScript Document */
/* BARRA LATERALE */
function openBar() {
  let sidebar = document.getElementById("mySidebar").style.width = "250px";
  let menu = document.getElementById("menu").style.marginLeft = "250px";
}

function closeBar() {
  let sidebar = document.getElementById("mySidebar").style.width = "0";
  let menu = document.getElementById("menu").style.marginLeft= "0";
}

/* VERIFICA DEL FORM IN COLLABORAZIONE*/
function verificaForm()
{
    if (document.form_mail.nome.value == "" || document.form_mail.email.value == "" || document.form_mail.msg.value == ""){
        alert("I campi Nome e Cognome, Email e Messaggio sono obbligatori!");
        return false;
    }
        document.form_mail.submit();
        return true;
}

    /* VERIFICA DEL FORM IN CONTATTI*/
function verificaForm2()
{
    if (document.form_mail.nome.value == "" || document.form_mail.cogn.value == "" || document.form_mail.msg.value == ""){
        alert("Tutti i campi sono obbligatori!");
        return false;
    }
    document.form_mail.submit();
    return true;
}