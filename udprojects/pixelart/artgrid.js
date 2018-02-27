/* UDACITY FRONT END DEVELOPER COURSE
   Project #3: Pixel Art Maker
   Submission by Jon Rude (jrkrelix)
*/

/**************************************
        SETUP
****************************************/

let isPainting = false;
const CANVAS = $('#grid');

$('document').ready(function() {
    makeGrid();
});

/**************************************
        EVENT LISTENERS
****************************************/

// Create new grid upon form submission
$('form').on('submit', function() {
    makeGrid();
    return false;
});

// Remaining listeners paint grid cells
// with click & drag painting
CANVAS.on('mousedown', 'td', function(){ 
    $( this ).css('background-color', $('#colorSelector').val());
    isPainting = true;
});

CANVAS.on('mouseover', 'td',function() {
    if(isPainting){
        $( this ).css('background-color', $('#colorSelector').val());
    }
});

$('body').on('mouseup', function() {
    isPainting = false;
});

/**************************************
        makeGrid  (Helper function)
****************************************/

/*
@description Creates a html table used as painting canvas
*/
function makeGrid () {
    const WIDTH = $('#gridWidth').val();
    const HEIGHT = $('#gridHeight').val();
    
    //clear canvas of any existing grid
    CANVAS.html(''); 

    // for loop to create table rows
    for (let row = 0; row < HEIGHT; row++) {
        CANVAS.append('<tr> </tr>');
        let columns = 0;

        // while loop to create table cells 
        while (columns < WIDTH) {
            CANVAS.children().last().append('<td></td>');
            columns++;
        }
    }
}
