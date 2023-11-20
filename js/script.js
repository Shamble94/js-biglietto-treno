let km = prompt ("Quanti chilometri desideri percorrere")
let eta = prompt ("Inserisci la tua eta")
let tariffa = 0.21
let biglietto = tariffa * km;
let biglietto_scontato;
console.log(km)
console.log(eta)

if(eta <= 18){
    biglietto_scontato = biglietto - biglietto * 0.20;
    let biglietto_arrotondato = biglietto_scontato.toFixed(2);
    console.log(biglietto_arrotondato);
    document.getElementById(`biglietto`).innerHTML = biglietto_arrotondato;
}else if (eta >= 65){
    biglietto_scontato = biglietto - biglietto * 0.40
    let biglietto_arrotondato = biglietto_scontato.toFixed(2)
    console.log(biglietto_arrotondato)
    document.getElementById(`biglietto`).innerHTML = biglietto_arrotondato;
}else
{
    biglietto = tariffa * km 
    let biglietto_arrotondato = biglietto.toFixed(2)
    console.log(biglietto_arrotondato)
    document.getElementById(`biglietto`).innerHTML = biglietto_arrotondato;
}