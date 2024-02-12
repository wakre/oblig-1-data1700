function billett() {
    const forNavn = document.getElementById("Fornavn").value;
    const etterNavn = document.getElementById("Etternavn").value;
    const telefonNr = document.getElementById("Telefonnr").value;
    const epost = document.getElementById("Epost").value;
    var billetter = []; // Array for å lagre billetter

    function addToArray() {
        var film = document.getElementById('film').value;
        var antall = document.getElementById('antall').value;
        var fornavn = document.getElementById('fornavn').value;
        var etternavn = document.getElementById('etternavn').value;
        var telefonnr = document.getElementById('telefonnr').value;
        var epost = document.getElementById('epost').value;

        // Opprett et billettobjekt og legg til i arrayet
        var billett = {
            film: film,
            antall: antall,
            fornavn: fronavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost
        };
        billetter.push(billett);

        // Tøm input-feltene
        document.getElementById('film').selectedIndex = 0;
        document.getElementById('antall').value = '';
        document.getElementById('fronavn').value = '';
        document.getElementById('etternavn').value = '';
        document.getElementById('telefonnr').value = '';
        document.getElementById('epost').value = '';

        // Vis billettene
        showTickets();
    }

    function showTickets() {
        var ticketList = document.getElementById('ticketList');
        ticketList.innerHTML = ''; // Tøm listen før vi legger til billetter på nytt

        billetter.forEach(function(ticket) {
            var listItem = document.createElement('li');
            listItem.textContent = 'film: ' + ticket.film + ', antall: ' + ticket.antall + ', fornavn: ' + ticket.fornavn + ', etternavn' + ticket.etternavn + ', telefonnr: ' + ticket.telefonnr + ', epost: ' + ticket.epost;
            ticketList.appendChild(listItem);
        });
    }
}