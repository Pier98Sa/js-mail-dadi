const emailArray = ['laroccapierluigi1998@gmail.com', 'yakoiyeicafroi-2435@gmail.com', 'weilofrappipri-7097@gmail.com', 'togreugreyawau-5046@gmail.com','sazefrafrubi-6574@gmail.com'];

const userEmail = prompt('Inserisci la tua e-mail?');

for(let i = 0; i < emailArray.length; i++) {
    console.log("sono all'interno del ciclo for");
    if (emailArray[i] == userEmail){
        
        console.log("hai l'accesso");
    }else{
        console.log("non hai l'accesso");
    }
}

