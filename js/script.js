//Selezioniamo i bottoni e l'etichetta
document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('btn');
    var label = document.getElementById('label');
    var btn2 = document.getElementById('btn-2');


// Variabile da cui iniziare l'incremento o il decremento
    var i = 0;

// Event listener per l'incremento
    btn.addEventListener('click', function() {
        i++;
        label.innerHTML = i;
    });
// Event listener per il decremento con funzione per non andare sotto lo zero
    btn2.addEventListener('click', function() {
        if (i>0){
        i--;
        label.innerHTML = i;
        }
    });
});