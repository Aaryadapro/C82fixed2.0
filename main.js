var mouseEvent= "empty";
var last_position_of_x, last_position_of_y;

canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
colour= "red";
width_of_line = 5;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
mouseEvent="mousedown";
console.log("event is mousedown");
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
mouseEvent="mouseup";
console.log("event is mouseup");
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";
console.log("event is mouseleave");
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_x, current_position_of_y, 40, 0, 2*Math.PI);
        
        console.log("Last position of x = "+ last_position_of_x +", Last position of y = "+ last_position_of_y);
        

        console.log("Current position of x = "+ current_position_of_x +", Current position of y = "+ current_position_of_y);

        ctx.stroke();
        
    }
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}

    


