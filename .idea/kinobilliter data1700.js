let filmArray = []; // Array for å lagre billetter
function addToArray() {
    console.log("arrayet startet");
    const film = document.getElementById("film").value;
    const Antall = document.getElementById("Antall").value;
    const fornavn= document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;
    filmArray.push({filmKey :film, AntallKey : Antall, fornavnKey :fornavn, etternavnKey : etternavn, telefonnrKey : telefonnr, epostKey : epost});
    console.log (filmArray);
    populateHTML(filmArray);

}
function validerAntall(antall){
    const regexp = /^[0-9]{1,2}$/;
    const ok = regexp.test(antall);
    if(!ok){
        $("#feilAntall").html("Velg minst 1, og maks  2 siffer");
        return false;
    }else{
        $("#feilAntall").html("");
    }
}
function validerFornavn(fornavn){
    const regexp = /^[a-zA-ZæøåÆØÅ.\-]{2,20}$/;
    const ok = regexp.test(fornavn);
    if(!ok){
        $("#feilFornavn").html("Må skrive noe gyldig i Fornavnet");
        return false;
    }else{
        $("#feilFornavn").html("");
    }
}

function validerEtternavn(etternavn){
    const regexp = /^[a-zA-ZæøåÆØÅ.\-]{2,20}$/;
    const ok = regexp.test(etternavn);
    if(!ok){
        $("#feilEtternavn").html("Må skrive noe gyldig i Etternavn");
        return false;
    }else{
        $("#feilEtternavn").html("");
    }
}
function validerTelefonnr(telefonnr){
    const regexp = /^[0-9. \-]{8}$/;
    const ok = regexp.test(telefonnr);
    if(!ok){
        $("#feilTelefonnr").html("Må skrive noe gyldig inni Telefonnr");
        return false;
    }else{
        $("#feilTelefonnr").html("");
    }
}
function validerEpost(epost){
    const regexp = /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z\-]{2,}$/;
    const ok = regexp.test(epost);
    if(!ok){
        $("#feilEpost").html("Må skrive noe gyldig i Eposten");
        return false;
    }else{
        $("#feilEpost").html("");
    }
}

function populateHTML(objArr){
    console.log("film")
    let html = "<ol>";
    console.log(objArr)
    for (let i in objArr){
        console.log(objArr[i].fornavnKey)
        html += "<li>" +"Filmen er "+ objArr[i].filmKey  + ": Antall Billetter er" + objArr[i].AntallKey +", Navnet er "+ objArr[i].fornavnKey + " " + objArr[i].etternavnKey + ", Telefonnr er"+ objArr[i].telefonnrKey + " og eposten er " + objArr[i].epostKey  + "</li>";
    }
    html += "</ol>"
    document.getElementById("kjøpte billetter").innerHTML = html;
    console.log(html)
}

function tomArray(){
    filmArray=[];
    populateHTML(filmArray);
}