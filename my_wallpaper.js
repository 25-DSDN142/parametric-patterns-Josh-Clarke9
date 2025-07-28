//your parameter variables go here!

let midX = 100;
let midY = 100;
let size = 40;
let wing = 60;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
 // pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {

  //background(204,108,231);//pink background
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  let red = color(255,0,0);
  let blue = color(0,0,255);
  let pink = color(204,108,231);
  let turquoise = color(93,226,231);
  let purple = color(6,2,112);
  let black = color(0);

  let BGC = blue


  // // background(6, 2, 112); //blue background
  
  // if( BGC == blue){
  //   ellipse(0,0,40)
    
  // }
  
  
  
  var e = 5//eye sizing
  var z = 60 //outer wing widths
  var x = 50 //outer wing height
  
  if (  e>4 ){
    BGC=pink
    
  }

  background(BGC); //blue background

strokeWeight(0);
fill(turquoise);
ellipse(midX+0,midY+0,200,200);

strokeWeight(2);
stroke(pink);
fill(purple);
ellipse(midX-25,midY-20,z,x);//top left wing
ellipse(midX-25,midY+10,z,x);//top right wing
ellipse(midX+25,midY-20,z,x);//bottom left wing
ellipse(midX+25,midY+10,z,x);//bottom right wing

//innerwing
fill(turquoise);
ellipse(midX-25,midY-20,z-15,x-15);
ellipse(midX-25,midY+10,z-15,x-15);
ellipse(midX+25,midY-20,z-15,x-15);
ellipse(midX+25,midY+10,z-15,x-15);

fill(purple);
ellipse(midX-25,midY-20,z-25,x-25);
ellipse(midX-25,midY+10,z-25,x-25);
ellipse(midX+25,midY-20,z-25,x-25);
ellipse(midX+25,midY+10,z-25,x-25);

//body
strokeWeight(1.3);
stroke(6,2,112);
fill(204,108,231);
ellipse(midX,midY-5,20,100);

//eyes
strokeWeight(0);
fill(black);
ellipse(midX-3,midY-43,e,e);
ellipse(midX+3,midY-43,e,e);
ellipse(midX,midY-38,e+2,e);

}



