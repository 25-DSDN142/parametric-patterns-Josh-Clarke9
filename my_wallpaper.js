//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;

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
  background(6, 2, 112); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  strokeWeight(0);
fill(93,226,231);//turquoise
ellipse(midX+0,midY+0,200,200);

strokeWeight(0.5);
stroke(204,108,231);//pink
fill(6,2,112);//purple
ellipse(midX-25,midY-20,wing,wing-10);//top left wing
ellipse(midX-25,midY+10,wing,wing-10);//top right wing
ellipse(midX+25,midY-20,wing,wing-10);//bottom left wing
ellipse(midX+25,midY+10,wing,wing-10);//bottom right wing

//innerwing
fill(93,226,231);//turqoise
ellipse(midX-25,midY-20,wing-15,wing-25);
ellipse(midX-25,midY+10,wing-15,wing-25);
ellipse(midX+25,midY-20,wing-15,wing-25);
ellipse(midX+25,midY+10,wing-15,wing-25);

fill(6,2,112);
ellipse(midX-25,midY-20,wing-25,wing-35);
ellipse(midX-25,midY+10,wing-25,wing-35);
ellipse(midX+25,midY-20,wing-25,wing-35);
ellipse(midX+25,midY+10,wing-25,wing-35);

//body
strokeWeight(1);
stroke(6,2,112);
fill(204,108,231);
ellipse(midX,midY-5,20,100);

//eyes
strokeWeight(0);
fill(0);
ellipse(midX-3,midY-43,3,3);
ellipse(midX+3,midY-43,3,3);
ellipse(midX,midY-38,5,3);



}
