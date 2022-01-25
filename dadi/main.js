let dadoUtente = Math.floor(Math.random() * 6) + 1;
console.log(dadoUtente);

let dadoComputer = Math.floor(Math.random() * 6) + 1;
console.log(dadoComputer);

if (dadoUtente > dadoComputer) {
    console.log("utente vince")
} else if (dadoUtente < dadoComputer){
    console.log("computer vince")
}else{
    console.log("pareggio")
}
