function generateNoise(opacity) {
   if ( !!!document.createElement('canvas').getContext ) {
      return false;
   }

   var canvas = document.createElement("canvas"),
   ctx = canvas.getContext('2d'),
   x, y,
   number,
   opacity = opacity || .2;

   canvas.width = 100;
   canvas.height = 100;

   for ( x = 0; x < canvas.width; x++ ) {
      for ( y = 0; y < canvas.height; y++ ) {
         number = Math.floor( Math.random() * 60 );
         number = 128 - number;
         ctx.fillStyle = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";
         ctx.fillRect(x, y, 1, 1);
      }
   }

   // document.body.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
   document.getElementById("filter-holder-a").style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";

}
