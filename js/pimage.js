let img;

function preload() {
    image_width = windowWidth - 40;
    image_height = windowHeight - 40;
<<<<<<< HEAD
    try{
        img = loadImage("https://source.unsplash.com/collection/5699518/" + image_width + "x" + image_height);
    }catch(error){
        console.log(error);
        console.log("Using default photo");
        img = loadImage("https://source.unsplash.com/R9t48yAqI6U/" + image_width + "x" + image_height);
    }
=======
    img = loadImage("https://picsum.photos/id/756/" + image_width + "/" + image_height);
>>>>>>> cb8cd262f31ff1067cb4f593fce95b9dcbd894d3
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
