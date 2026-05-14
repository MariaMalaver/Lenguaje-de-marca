function calcular(operacion) 
{

    var num1 = parseFloat(document.getElementById("operando1").value);
    var num2 = parseFloat(document.getElementById("operando2").value);
    var resultado = document.getElementById("resultado");

    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Error introduce números correctos";
        return;
    }

    var res;

    if (operacion == "+") 
    {
        res = num1 + num2;
    }
    else if (operacion == "-") 
    {
        res = num1 - num2;
    } 
    else if (operacion == "*") 
    {
        res = num1 * num2;
    } 
    else if (operacion == "/") 
    {

        if (num2 == "0") 
        {
            resultado.textContent = "Error";
            return;
        }
        res = num1 / num2;
    }

    resultado.textContent = "Resultado: " + res;
}