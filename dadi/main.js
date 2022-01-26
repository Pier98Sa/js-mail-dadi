//variabile button 
let buttonPlay = document.getElementById("play-game");
let buttonReset = document.getElementById("reset-game");

//evento del click su gioca
buttonPlay.addEventListener('click',
    function() {
        //numero dell'utente
        let dadoUtente = Math.floor(Math.random() * 6) + 1;
        console.log(dadoUtente);

        //numero del computer
        let dadoComputer = Math.floor(Math.random() * 6) + 1;
        console.log(dadoComputer);
        
        //variabile dell'esito della partita inizializzata
        let esitoPartita;

        //ciclo per trovare l'esito della partita
        if (dadoUtente > dadoComputer) {
        //vittoria utente
        esitoPartita = "Complimenti hai vinto !!!"
        } else if (dadoUtente < dadoComputer){
         //vittoria computer
        esitoPartita = "Mi dispiace il computer ha vinto"
        }else{
        //pareggio
        esitoPartita = "Avete pareggiato"
        }

    //stampa del numero dell'utente
    document.getElementById('user-number').innerHTML = dadoUtente;

    //stampa del numero del computer
    document.getElementById('computer-number').innerHTML = dadoComputer;

    //stampa del prezzo del biglietto
    document.getElementById('esito').innerHTML = esitoPartita;
    
    //aggiunta della classe active per mostrare il risultato
    const htmlEsitoPartita = document.getElementById('box-esito');
    htmlEsitoPartita.classList.remove('ms_none');

}    
    
);

//evento del click su reset
buttonReset.addEventListener('click',
    function(){
        //resetto i dati alla versione iniziale
        document.getElementById('user-number').innerHTML = "";
        document.getElementById('computer-number').innerHTML = "";
        //riaggiungo la classe ms-none
        const htmlEsitoPartita = document.getElementById('box-esito');
        htmlEsitoPartita.classList.add('ms_none');
    
    }   
);