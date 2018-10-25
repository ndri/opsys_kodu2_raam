// Käivitatakse siis, kui lehekülg laaditakse
var main = function() {

    // Lisab päisesse indeksid
    var thead = document.getElementById("mälu").children[0];
    for (var i = 0; i < 50; i++) {
        var lahter = thead.children[0].insertCell();
        // Et lahtrid oleks sama laiad, paneb ühekohalistele nullid ette :S
        lahter.innerHTML = i < 10 ? "0" + i : i;
    }

    // Loob algul uue tühja tabeli
    uustabel([]);

    // Funktsioonide kasutuse näidised
    console.log(kontrolli(0, 2)); // true
    lisa(0, 2, "A"); // lisab A etappi 3 sammule 0
    console.log(kontrolli(0, 2)); // false
    // lisab C-dest ristküliku alates etapist 4 sammust 2, laius 3, kõrgus 6
    ristkülik(2, 3, 3, 6, "C");
}
window.addEventListener("load", main);


// Loob uue tabeli vastavalt järjendile
function uustabel(järjend) {
    var tabel = document.getElementById("mälu");
    var tbody = tabel.children[1];
    var tähestik = "ABCDEFGHIJ"

    // Kustutab tabeli sisu ära
    while (tbody.lastChild) {
        tbody.removeChild(tbody.lastChild);
    }

    // Lisab 10 etappi vastavalt järjendile
    for (var i = 0; i < 10; i++) {
        var rida = tbody.insertRow();
        var etapp = rida.insertCell();
        var protsess = rida.insertCell();
        etapp.innerHTML = i + 1;
        protsess.innerHTML = järjend[i] ? tähestik[i] + " : " + järjend[i] : "-";
        for (var j = 0; j < 50; j++) {
            var lahter = rida.insertCell();
            lahter.innerHTML = "-";
        }
    }
};


/* Funktsioon, mis lisab tabelisse etapile y+1 sammule x tähe täht
 * Värv tuleb vastavalt tähele A kuni J (vt style.css)
 * Näiteks: lisa(0, 2, "C");
 */
function lisa(x, y, täht) {
    var tabel = document.getElementById("mälu");
    var lahter = tabel.children[1].children[y].children[x + 2]
    lahter.innerHTML = täht;
    lahter.classList.add("värv" + täht);
}

/* Funktsioon, mis lisab tabelisse ristküliku etapist y+1, sammust x,
 * laiusega w, kõrgusega h, tähega täht
 * Näiteks: ristkülik(2, 3, 3, 6, "C");
 */
function ristkülik(x, y, w, h, täht) {
    for (var i = 0; i < h; i++) {
        for (var j = 0; j < w; j++) {
            lisa(x + j, y + i, täht)
        }
    }
}

/* Kontrollib, kas etapp y+1 samm x on täidetud
 * Väljastab true, kui on tühi ning false, kui on täis
 * Näiteks:
 * kontrolli(0, 2); => true
 * lisa(0, 2, "C");
 * kontrolli(0, 2); => false
 */
function kontrolli(x, y) {
    var tabel = document.getElementById("mälu");
    var lahter = tabel.children[1].children[y].children[x + 2]
    return lahter.innerHTML === "-";
}

// Uuendab enda sisendi valiku väärtuse tekstikasti sisuks
function uuenda() {
    document.getElementById("endanupp").value = document.getElementById("endatekst").value;
}

// Käivitatakse siis, kui algoritmi nupule vajutatakse
function vajutus(algoritm) {

    // Leiab valitud järjendi
    var järjend = document.querySelector("input[name=\"järjend\"]:checked").value;
    if (!järjend) {
        järjend = document.getElementById("endaoma").value;
    }

    // Muudab tabeli pealkirja vastavalt algoritmile
    document.getElementById("pealkiri").innerHTML = algoritm;

    // Teeb järjendisõnest järjendijärjendid arvudest
    // nt "1,8;35,4" => [[1, 8], [35, 4]]
    järjend = järjend.split(";").map(i => i.split(",").map(j => Number(j)));

    uustabel(järjend);

    // Jooksutab algoritmi vastavalt nupule
    if (algoritm === "First-Fit") {
        firstfit(järjend);
    } else if (algoritm == "Last-Fit") {
        lastfit(järjend);
    } else if (algoritm == "Worst-Fit") {
        worstfit(järjend);
    } else if (algoritm == "Random-Fit") {
        randomfit(järjend);
    }
}

// Edu nendega
// Järjend tuleb sisse kujul [[1, 8], [35, 4], [3, 6], [4, 2]]

function firstfit(järjend) {

}

function lastfit(järjend) {

}

function worstfit(järjend) {

}

function randomfit(järjend) {

}
