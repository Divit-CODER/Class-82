var MouseEvent="empty";
var LastPosOf_X,LasPostOf_Y;
var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="teal";
var widthofline=2;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    MouseEvent="mousedown";

}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
     CurrentPosOf_X=e.clientX-canvas.offsetLeft;
     CurrentPosOf_Y=e.clientY-canvas.offsetTop;
     if(MouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        ctx.moveTo(LastPosOf_X,LasPostOf_Y);
        ctx.lineTo(CurrentPosOf_X,CurrentPosOf_Y);
        ctx.stroke();
     }
     LastPosOf_X=CurrentPosOf_X;
     LasPostOf_Y=CurrentPosOf_Y;

    }

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    MouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    MouseEvent="mouseleave";
}