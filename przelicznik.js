function obliczKoszt() {
    const cena = document.getElementById('cena').valueAsNumber;
    const ilosc = document.getElementById('ilosc').valueAsNumber;
    const uzycie = document.getElementById('uzycie').valueAsNumber;
    const okresElement = document.querySelector('input[name="okres"]:checked');
    const okres = okresElement ? parseFloat(okresElement.value) : NaN;

    if (isNaN(cena) || isNaN(ilosc) || isNaN(uzycie) || isNaN(okres)) {
        alert("Proszę wprowadzić wszystkie wartości");
        return;
    }

   
    const czasUzytkowania = ilosc / uzycie;

  
    const kosztUzytkowania = (cena / ilosc) * (uzycie * okres);

   
    document.getElementById('wynikCzas').textContent = `Czas na jaki wystarczy kosmetyk przy obecnym zużyciu: ${czasUzytkowania.toFixed(2)} dni`;
    document.getElementById('wynikKoszt').textContent = `Koszt użytkowania za wprowadzony okres czasu: ${kosztUzytkowania.toFixed(2)} PLN`;
}
