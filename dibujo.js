var d = document.getElementById("dibujito");
var texto = document.getElementById("texto_lineas");//este llama al texto linea
var boton = document.getElementById("botoncito");//esto llama a la accion del boton
boton.addEventListener("click",dibujoPorClick);//esto activa el boton

var ancho = d.width;
var lienzo = d.getContext("2d");

dibujarLinea(colorcito, 1,1,1,599);
dibujarLinea(colorcito, 1,599,599,599);
dibujarLinea(colorcito, 599,599,599,1);
dibujarLinea(colorcito, 599,1,1,1);

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial,yinicial);
lienzo.lineTo(xfinal,yfinal);
lienzo.stroke();
lienzo.closePath();   
}
function dibujoPorClick()
{
    console.log(texto.value);
    var tx = parseInt(texto.value);
    var lineas = tx;
var l=0;
var xi,xf,yi,yf;
var nfx,nyf;
var colorcito = "CDCDCD"
var espacio = ancho / lineas;
while(l < lineas)
{
    xf = espacio * l;
    yi = espacio * (l+1);
    xi = espacio * l;
    yf = espacio * (l+1);
    nxf = ancho - xf;
    nyf = ancho - yf;
    dibujarLinea("#2E0E54", xi, 600, 600, nyf); //IZQUIERDA ABAJO
    dibujarLinea("540E1C", 0, xf, nxf, 0);// IZQUIERDA ARRIBA
    dibujarLinea("0E1054", 0, yf, yi, 600); //DERECHA ABAJO
    dibujarLinea("0E541A", xi, 0, 600, yf); //DERECHA ARRIBA
console.log("linea" + l);
l=l+1;

}
}