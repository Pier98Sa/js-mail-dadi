const emailArray = ['laroccapierluigi1998@gmail.com', 'yakoiyeicafroi-2435@gmail.com', 'weilofrappipri-7097@gmail.com', 'togreugreyawau-5046@gmail.com','sazefrafrubi-6574@gmail.com'];

let userEmail = prompt('Inserisci la tua e-mail?');

let control = false;
for(let i = 0; i < emailArray.length; i++) {
    if (emailArray[i] == userEmail){
        
        control = true
    }  
}
 
if(control == true){
    alert('email presente');
}
else{
    alert('Email non presente')
}
