// if (window.matchMedia("(min-width: 2400px)").matches) {
//   /* the view port is at least 2400 pixels wide */
//   console.log("something");
//   $( "div.container" ).replaceWith( ".container-fluid" );
// } else {
//   /* the view port is less than 2400 pixels wide */
//   console.log("something");
// }


var mq = window.matchMedia('@media all and (max-width: 2400px)');
if(mq.matches) {
    // the width of browser is more then 2400px
    console.log(test);
} else {
    // the width of browser is less then 2400px
}

mq.addListener(function(changed) {
    if(changed.matches) {
        // the width of browser is more then 2400px
    } else {
        // the width of browser is less then 2400px
    }
});