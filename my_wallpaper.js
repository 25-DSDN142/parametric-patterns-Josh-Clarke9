//your parameter variables go here!

let midX = 100;
let midY = 100;
let size = 40;
let wing = 60;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {

background(6, 2, 112); //blue background
//background(204,108,231);//pink background
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

var e = 3 //eye sizing
var z = 60 //outer wing widths
var x = 50 //outer wing height

strokeWeight(0);
fill(93,226,231);//turquoise
ellipse(midX+0,midY+0,200,200);

strokeWeight(0.5);
stroke(204,108,231);//pink
fill(6,2,112);//purple
ellipse(midX-25,midY-20,z,x);//top left wing
ellipse(midX-25,midY+10,z,x);//top right wing
ellipse(midX+25,midY-20,z,x);//bottom left wing
ellipse(midX+25,midY+10,z,x);//bottom right wing

//innerwing
fill(93,226,231);//turqoise
ellipse(midX-25,midY-20,z-15,x-15);
ellipse(midX-25,midY+10,z-15,x-15);
ellipse(midX+25,midY-20,z-15,x-15);
ellipse(midX+25,midY+10,z-15,x-15);

fill(6,2,112);
ellipse(midX-25,midY-20,z-25,x-25);
ellipse(midX-25,midY+10,z-25,x-25);
ellipse(midX+25,midY-20,z-25,x-25);
ellipse(midX+25,midY+10,z-25,x-25);

//body
strokeWeight(1);
stroke(6,2,112);
fill(204,108,231);
ellipse(midX,midY-5,20,100);

//eyes
strokeWeight(0);
fill(0);
ellipse(midX-3,midY-43,e,e);
ellipse(midX+3,midY-43,e,e);
ellipse(midX,midY-38,e+2,e);

}
