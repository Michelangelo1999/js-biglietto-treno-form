const form = document.getElementById('form');
form.addEventListener('submit', mostraBiglietto);

function mostraBiglietto(event) {
    event.preventDefault();
    
    let ageInput = document.getElementById('age-input').value;
    let numeroKmInput = document.getElementById('distance-input').value;
    let nameInput = document.getElementById('name-input').value;

    let prezzo = calcolaBiglietto(numeroKmInput, ageInput);

    const ul = document.getElementById('items');
    const li = document.createElement('li');
    li.innerHTML = "Nome: " + nameInput + "; Età: " + ageInput + "; Distanza: " + numeroKmInput + "km -> prezzo finale: €" + prezzo;
    // aggiungo li a ul
    ul.appendChild(li);
    
}



function calcolaBiglietto(numeroKm, etaPasseggero) {
    let prezzo = numeroKm*0.21;

    if(etaPasseggero < 18){
        prezzo -= prezzo*0.21;
    }else if(etaPasseggero > 60){
        prezzo -= prezzo*0.40;
    }

    return prezzo;

}