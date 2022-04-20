function codificar(){
    document.getElementById(resultado).innerHTML= "";

    var cambiar = {

        a:"ai",
        e:"enter",
        i:"imes",
        o:"ober",
        u:"ufat"

     };

     var codificar = new RegExp(Object.keys(cambiar).join("|"),"g");

     texto = texto.replace(codificar, function(cambio){

          return cambiar[cambio];

     });


     document.getElementById("resultado").innerHTML = texto;


 }
    
