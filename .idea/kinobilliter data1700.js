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
