//+ Canvas

const canvas = document.getElementById('canvas');

const dif = canvas.getBoundingClientRect();

const ctx = canvas.getContext("2d");


// ctx.lineWidth = "6";
// ctx.strokeStyle = "#48e";
// ctx.fillStyle = "#26a";
// ctx.strokeRect(30, 50, 400, 200);
// ctx.fillStyle(10, 20, 400, 200);
// ctx.lineTo(80,300);
// ctx.lineTo(120,350);
// ctx.lineTo(100,400);
// ctx.lineTo(120,450);
// ctx.stroke();
// ctx.closePath();
// ctx.beginPath();
// ctx.lineTo(80,300);
// ctx.lineTo(80,200);
// ctx.stroke();
// ctx.arc(120,120,100,10,40);
// ctx.stroke();




// * Paint Canvas
let painting, color, linewidth, difX, difY;


canvas.addEventListener("mousedown", e=>{
    difX = e.clientX - dif.left;
    difY = e.clientY - dif.top;
    painting = true;
    color = document.getElementById("color").value;
    linewidth = document.getElementById("lw").value;
    ctx.beginPath();
})


canvas.addEventListener("mousemove", e=>{
    if(painting){
        dibujar(difX, difY, e.clientX - dif.left, e.clientY - dif.top);
        difX = e.clientX - difX.left;
        difY = e.clientY - difY.top;
    }
})

canvas.addEventListener("mouseup",()=>{
    ctx.closePath();
    painting = false;
})


const dibujar = (x1,y1,x2,y2)=>{
    ctx.strokeStyle = color;
    ctx.lineWidth = linewidth;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}