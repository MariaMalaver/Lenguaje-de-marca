/* -- 1
var x = prompt("Introduce un numero");

var suma = parseFloat(x) + parseFloat(x); // si ponemos parseFloat, o parseInt se sumara como una suma normal, pero si no lo ponemos se pone como una cadena emplan 5 + 5 = 55, y si lo ponemos es 5 + 5 = 10.

//alert(suma);
console.log(suma); // con el alert se muestra en una ventana emergente, y con el console.log se muestra en la consola del navegador. la suma aparecera hay.
*/

// =======================================================================================================

/** eston con onclick en el html -- 2 
 * function saludar() {
 *   alert("Hola, ¿Cómo estás?");
 * }
 */

// =======================================================================================================

// -- 3, es lo mismo qeu el dos pero desde javascrpt
document.getElementById("botonSaludar").onclick = function() 
{ 
    alert("Hola");
};

/**
 * TAMBIEN TENEMOS APARTE DEL ONCLICK ESTOS
 * 
 * 1. ONKEYDOWN: se ejecuta cuando se presiona una tecla.
 * 2. ONKEYUP: se ejecuta cuando se suelta una tecla.
 * 3. ONMOUSEENTER: se ejecuta cuando el puntero del mouse entra en un elemento.
 * 4. ONCLICK: se ejecuta cuando se hace clic en un elemento.
 * ETC...
 * 
 * HAY MUCHOS MAS, ESTOS SON SOLO ALGUNOS EJEMPLOS DE LOS EVENTOS QUE EXISTEN EN JAVASCRIPT.
 */

// =======================================================================================================

// -- 4
document.getElementById("botonCopiar").onclick = function() 
{ 
    var x = document.getElementById("origen").value;

    document.getElementById("destino").value = x;
};

// =======================================================================================================

// -- 5
document.getElementById("botonTriple").onclick = function() 
{ 
    var x = document.getElementById("numero1").value;

    /**
     * parseFloat se utiliza para convertir el valor de x a un número decimal, 
     * ya que por defecto los valores de los inputs son cadenas de texto.
     */ 
    document.getElementById("numero2").value = parseFloat(x) * 3; 

};

// =======================================================================================================

// -- 6
document.getElementById("botonTriple").onclick = function() 
{ 
    var x = document.getElementById("numero1").value;

    if(x == "0")
    {
        alert("error")
    }
    else
    {
        document.getElementById("numero2").value = parseFloat(x) * 3;
    }
};

// =======================================================================================================


