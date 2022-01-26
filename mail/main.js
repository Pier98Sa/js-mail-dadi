//array
const emailArray = ['laroccapierluigi1998@gmail.com', 'yakoiyeicafroi-2435@gmail.com', 'weilofrappipri-7097@gmail.com', 'togreugreyawau-5046@gmail.com','sazefrafrubi-6574@gmail.com'];

//variabile button accedi
let buttonAccedi = document.getElementById("button-addon2");


buttonAccedi.addEventListener('click',
    function(){
        //acquisizione del dato inserito dall'utente
        let userEmail = document.getElementById("user-email").value;
        //inizializzazione della variabile per il controllo
        let control = false;
        //ciclo per la validazione dell'email
        for(let i = 0; i < emailArray.length; i++) {
            if (emailArray[i] == userEmail){
                control = true;
                break;
            }  
        }
        
        //output successiva alla validazione
        if(control){
            const htmlConsentito = document.getElementById('accesso-consentito');
            htmlConsentito.classList.remove('ms_none');
        } else{
            const htmlNonConsentito = document.getElementById('accesso-negato');
            htmlNonConsentito.classList.remove('ms_none');
        }

    }
);
