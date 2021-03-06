let speed = 20;
let scale = 1.5; // Image scale (I work on 1080p monitor)
let canvas;
let ctx;
let logoColor;

let logo = {
    x: 200,
    y: 300,
    xspeed: 4,
    yspeed: 4,
    img: new Image()
};

(function main(){
    canvas = document.getElementById("screen");
    ctx = canvas.getContext("2d");
    logo.img.src = 'sano.png';

    //Draw the "tv screen"
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    update();
})();

function update() {
    setTimeout(() => {
        //Draw the canvas background
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //Draw logo Logo and his background
        ctx.fillStyle = logoColor;
        ctx.fillRect(logo.x, logo.y, logo.img.width*scale, logo.img.height*scale);
        ctx.drawImage(logo.img, logo.x, logo.y, logo.img.width*scale, logo.img.height*scale);
        //Move the logo
        logo.x+=logo.xspeed;
        logo.y+=logo.yspeed;
        //Check for collision 
        checkHitBox();
        update();   
    }, speed)
}

//Check for border collision
function checkHitBox(){
    if(logo.x+logo.img.width*scale >= canvas.width || logo.x <= 0){
        logo.xspeed *= -1;
    }
        
    if(logo.y+logo.img.height*scale >= canvas.height || logo.y <= 0){
        logo.yspeed *= -1;
    }    
}