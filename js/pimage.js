let img;

function preload() {
    image_width = windowWidth - 40;
    image_height = windowHeight - 40;
    img = loadImage("https://picsum.photos/id/756/" + image_width + "/" + image_height);
}

function setup() {
    createCanvas(image_width, image_height*2);
    background(255);
    noStroke();
    image(img, 0, 0);
}

function draw(){
    if(mouseIsPressed){

        if( mouseY <  image_height){
            // get color (and opposite color) from photo selection
            let palette = get(mouseX,mouseY);
            let counterPalette = [ 255-palette[0], 255-palette[1], 255-palette[2]];

            // set background and text colors
           
            document.body.style.backgroundColor = "rgba(" + palette[0] + "," + palette[1] + "," + palette[2] + ")";
            fill('rgba('+ palette[0] + ',' + palette[1] + ',' + palette[2] + ',.15)');
        }else{
            ellipse(mouseX, mouseY, 25, 25);
        }
    }
}
