var mouseEvent="empty";
var lpx, lpy;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
ancho=1;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    ancho = document.getElementById("ancho").value;

    mouseEvent = "mouseDown";

}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    

    mouseEvent = "mouseleave";

}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    

    mouseEvent = "mouseup";

}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    cpx=e.clientX - canvas.offsetLeft;
    cpy=e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        console.log("cpx and cpy coordinatesm" =); 
        console.log("cpx = " + cpx + "cpy = "+ cpy );
    ctx.beginPath();
    ctx.strokeStyle = width_ofline;
    ctx.arc(cpx, cpy, radius ,0, 2 * Math.PI);
ctx.stroke();    
    }

    lpx = cpx;
    lpy = cpy;

}
function limpiar() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }
