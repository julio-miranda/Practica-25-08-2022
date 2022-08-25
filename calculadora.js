var n1 = document.getElementById('ans').value;
var n2 = document.getElementsById('ans1').value;
var resultado = document.getElementById('ans2');

document.getElementById('ans').addEventListener("click", function(){
    document.getElementById("b1").setAttribute("onclick","document.calculator.ans.value+='1'")
    document.getElementById("b2").setAttribute("onclick","document.calculator.ans.value+='2'")
    document.getElementById("b3").setAttribute("onclick","document.calculator.ans.value+='3'")
    document.getElementById("b4").setAttribute("onclick","document.calculator.ans.value+='4'")
    document.getElementById("b5").setAttribute("onclick","document.calculator.ans.value+='5'")
    document.getElementById("b6").setAttribute("onclick","document.calculator.ans.value+='6'")
    document.getElementById("b7").setAttribute("onclick","document.calculator.ans.value+='7'")
    document.getElementById("b8").setAttribute("onclick","document.calculator.ans.value+='8'")
    document.getElementById("b9").setAttribute("onclick","document.calculator.ans.value+='9'")
    document.getElementById("b0").setAttribute("onclick","document.calculator.ans.value+='0'")
});
document.getElementById('ans1').addEventListener("click", function(){
    document.getElementById("b1").setAttribute("onclick","document.calculator.ans1.value+='1'")
    document.getElementById("b2").setAttribute("onclick","document.calculator.ans1.value+='2'")
    document.getElementById("b3").setAttribute("onclick","document.calculator.ans1.value+='3'")
    document.getElementById("b4").setAttribute("onclick","document.calculator.ans1.value+='4'")
    document.getElementById("b5").setAttribute("onclick","document.calculator.ans1.value+='5'")
    document.getElementById("b6").setAttribute("onclick","document.calculator.ans1.value+='6'")
    document.getElementById("b7").setAttribute("onclick","document.calculator.ans1.value+='7'")
    document.getElementById("b8").setAttribute("onclick","document.calculator.ans1.value+='8'")
    document.getElementById("b9").setAttribute("onclick","document.calculator.ans1.value+='9'")
    document.getElementById("b0").setAttribute("onclick","document.calculator.ans1.value+='0'")
});
const calculadora = () =>{
    var suma = (n1,n2) => {
        var sumaop = this.n1+this.n2;
        resultado.textContent = sumaop;
    };
    var resta = (n1,n2) => {
        var restaop = this.n1-this.n2;
        resultado.textContent = restaop;
    };
    var multiplicacion = (n1,n2) => {
        var multiplicacionop = this.n1*this.n2;
        resultado.textContent = multiplicacionop;
    };
    var division = (n1,n2) => {
        var divisionop = this.n1/this.n2;
        resultado.textContent = divisionop;
    };
    var potencias = (n1,n2) => {
        var potenciaop = Math.pow(this.n1,this.n2);
        resultado.textContent = potenciaop;
    };
    var raizcuadrada = (n1,n2) => {
        var raizop = Math.sqrt(this.n1,this.n2);
        resultado.textContent = potenciaop;
    };
    var absoluto = (n1,n2) => {
        var absolutoop = Math.abs(this.n1,this.n2);
        resultado.textContent = absolutoop;
    };
}
var form1 = document.getElementById("calculator1");
form1.addEventListener("load", CalculadoraCientifica = () =>{
    document.getElementById("suma").addEventListener("click",calculadora.suma(n1,n2));
    document.getElementById("resta").addEventListener("click",calculadora.resta(n1,n2));
    document.getElementById("multiplicacion").addEventListener("click",calculadora.multiplicacion(n1,n2));
    document.getElementById("division").addEventListener("click",calculadora.division(n1,n2));
    document.getElementById("abs").addEventListener("click",calculadora.absoluto(n1,n2));
    document.getElementById("raiz").addEventListener("click",calculadora.raizcuadrada(n1,n2));
    document.getElementById("potencia").addEventListener("click",calculadora.potencias(n1,n2));
  });

//bryan josue paredes
var form2 = document.getElementById("calculator2");
form2.addEventListener("load", calculadoraBasica = () => {
    document.getElementById("suma").addEventListener("click",calculadora.suma(n1,n2));
    document.getElementById("resta").addEventListener("click",calculadora.resta(n1,n2));
    document.getElementById("multiplicacion").addEventListener("click",calculadora.multiplicacion(n1,n2));
    document.getElementById("division").addEventListener("click",calculadora.division(n1,n2));
});
