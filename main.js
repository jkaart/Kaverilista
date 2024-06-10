let nimet = [];

const nimienMaara = 10;
let listaTyyppi = "ol";

btnAloita.addEventListener("click", kysyNimi);
btnLisaa.addEventListener("click", lisaaNimi);
btnPoista.addEventListener("click", poistaNimi);
btnJarjesta.addEventListener("click", jarjestaNimet);

function versionVaihto(versio) {
    let versio1 = document.getElementById("versio1");
    let versio2 = document.getElementById("versio2");

    /* Piilotetaan ei käytössä olevan version div ja näytetään toisen */
    if (versio == 1) {
        versio1.style.display = "block";
        versio2.style.display = "none";
        listaTyyppi = "ol";
    }

    if (versio == 2) {
        versio1.style.display = "none";
        versio2.style.display = "block";
        listaTyyppi = "ul";
    }
    /* Päivitetään otsikkoon ja titleen versio numero */
    document.getElementsByTagName("title")[0].textContent = "Kaverilista Versio " + versio;
    document.getElementsByTagName("h1")[0].textContent = "Kaverilista Versio " + versio;
    
    document.getElementById("alku").style.display = "none";
    nimet.length = 0; /* Tyhjennetään edellisen version nimet */
    paivitaLista();
}

function paivitaLista() {
    let lista = document.createElement(listaTyyppi);

    function luoLi(nimi) {
        const li = document.createElement("li");
        li.innerText = nimi;
        lista.appendChild(li);
    }

    nimet.forEach(luoLi);

    document.getElementById("nimet").innerHTML = ""; /* Tyhjennettään UI:n nimet div */
    document.getElementById("nimet").appendChild(lista); /* Laitetaan luotu lista nimet diviin */
}

function kysyNimi(event) {
    event.preventDefault();
    for (let i = 0; i < nimienMaara; i++) {
        const nimi = prompt("Anna kaverin nimi");
        console.log("Nimi:", nimi);
        if (nimi == null) { /* Jos käyttäjä painaa promptin cancel namiskaa */
            break;
        }
        if (nimi != null || nimi.length > 0) {
            nimet.push(nimi);
        }
    }
    paivitaLista();
}

function lisaaNimi(event) {
    event.preventDefault();

    const nimi = document.getElementById("inputNimi").value;
    if (nimi.length > 0) {
        nimet.push(nimi);
    }
    inputNimi.value = "";
    paivitaLista();
}

function poistaNimi() {
    const nimi = document.getElementById("inputNimi").value;
    if (nimi != "") {
        const index = nimet.indexOf(nimi);
        if (index != -1) {
            nimet.splice(index, 1);
            inputNimi.value = "";
        }
    }

    paivitaLista();
}

function jarjestaNimet() {
    nimet.sort();
    paivitaLista();
}

