function zegar() {
    const teraz= new Date();
    let godzina= teraz.getHours();
    let minuta=teraz.getMinutes();
    let sekunda= teraz.getSeconds();

    let czas="";
    czas+= (godzina>12)? godzina-12 : godzina;
    czas+= ((minuta<10)? ":0" : ":") + minuta;
    czas+= ((sekunda<10)? ":0" : ":") + sekunda;
    czas+=  (godzina>12 )? " PM": " AM";

    let el_intxt= document.querySelector("#zegarTXT");
    el_intxt.value=czas;
    setTimeout(zegar,1);
}
function pokazDate() {
    const teraz = new Date();
    const dzien = teraz.getDate();
    const miesiac = teraz.getMonth() + 1;
    const rok = teraz.getFullYear();

    const data = (dzien < 10 ? '0' : '') + dzien + '.'
               + (miesiac < 10 ? '0' : '') + miesiac + '.'
               + rok;
    document.querySelector("#dataTXT").value = data;
}


function licznikOdwiedzin() {
    var n = localStorage.getItem('on_load_counter');
    if (n === null) {
        n = 0;
    }
    n++;

    localStorage.setItem("on_load_counter", n);
    document.getElementById('visitCount').value = n;
}


function czasNaStronie() {
    if (!sessionStorage.getItem("startTime")) {
        sessionStorage.setItem("startTime", Date.now());
    }
    let startTime = Number(sessionStorage.getItem("startTime"));
    let teraz = Date.now();
    let timeSpent = Math.floor((teraz - startTime) / 1000);

    let godziny = Math.floor(timeSpent / 3600);
    let minuty = Math.floor((timeSpent % 3600) / 60);
    let sekundy = timeSpent % 60;

    let czas = (godziny < 10 ? '0' : '') + godziny + ':'
             + (minuty < 10 ? '0' : '') + minuty + ':'
             + (sekundy < 10 ? '0' : '') + sekundy;

    document.querySelector("#timeSpent").value = czas;
    setTimeout(czasNaStronie, 1000);
}

