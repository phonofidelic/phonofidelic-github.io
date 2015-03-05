if (window.matchMedia("(min-width: 2400px)").matches) {
  /* the view port is at least 2400 pixels wide */
  $( "div.container" ).replaceWith( ".container-fluid" );
} else {
  /* the view port is less than 2400 pixels wide */
  console.log("something");
}