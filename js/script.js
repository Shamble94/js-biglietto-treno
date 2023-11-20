let nome = prompt ("Inserisca il suo nome")
let cognome = prompt ("Inserisca il suo cognome")
let km = prompt ("Quanti chilometri desidera percorrere")
let eta = prompt ("Inserisca la sua eta")
let tariffa = 0.21
let biglietto = tariffa * km;
let biglietto_scontato;
let messaggio;

console.log(nome)
console.log(cognome)
console.log(km)
console.log(eta)

document.getElementById(`cliente`).innerHTML = nome + " " + cognome

if(eta <= 18){
    messaggio = "Le è stato attribuito uno sconto del 20%, quindi:"
    biglietto_scontato = biglietto - biglietto * 0.20;
    let biglietto_arrotondato = biglietto_scontato.toFixed(2);
    console.log(biglietto_arrotondato);
    document.getElementById(`biglietto`).innerHTML = biglietto_arrotondato + "€";
    document.getElementById(`messaggio_sconto`).innerHTML = messaggio;
    document.getElementById(`biglietto_intero`).innerHTML = `Invece di ${biglietto}€`

}else if (eta >= 65){
    messaggio = "Le è stato attribuito uno sconto del 40%, quindi:"
    biglietto_scontato = biglietto - biglietto * 0.40
    let biglietto_arrotondato = biglietto_scontato.toFixed(2)
    console.log(biglietto_arrotondato)
    document.getElementById(`biglietto`).innerHTML = biglietto_arrotondato + "€";
    document.getElementById(`messaggio_sconto`).innerHTML = messaggio ;
    document.getElementById(`biglietto_intero`).innerHTML = `Invece di ${biglietto}€`

}else
{
    biglietto = tariffa * km 
    let biglietto_arrotondato = biglietto.toFixed(2)
    console.log(biglietto_arrotondato)
    document.getElementById(`biglietto`).innerHTML = biglietto_arrotondato;
}
