// Day planner 

//sett up HTML
    //get bootstrap cdn links
    //layout the HTML
        // add a jumbotron that display current day and date
            //(e.g Wed. Mar 31st)
    //Create Rows for hours 9-5
        //parent div/ hour div/ text input/ save button
    
            //save icon
                //bootstrap icons cdn links button
                //font awesome link and button

//Javascript
    // set up click event on save buttons
        //jquery .on click
    //using event.target, traverse the dom from the button to the text area
    //also grab a unique identifier for placing teh hour input value into local storage

    // on pageload, pull all data from localStorage and use unique label identifier mentioned above to determine where you put the value
        //should be able to use query to find children

        //id to data id grabbing

    // for detemining css backgroundcolor: "backgroundcolor" :unknown word.
        //use moment to get current time (soecifically the hour)
        //then iterate over all hour elements
        //using an id/data attribute determining what hour the current time block represents 
            //e.g moment time "timeblock"; unknown time
                //if the current element time is:
                //;ess than moment time, is grey
                //same as moment time, its red
                // greater than moment time its green

var saveBtn = $('.saveBtn');
var currentDay = $('#currentDay');
var row = $('.row');
var container = $('.container');

currentHour = moment().format('kk');

var currentDay = null,
    date= null;


var today = function(){
    date = moment(new Date())
    currentDay.html(date.format('dddd,MMMM Do YYYY'));
};

function rowColors (){
    row.each(function(){
        if ($(this).data('hour') > currentHour) {
            $(this).children('textarea').css('background-color', '#90EE90')
        } else if ($(this).data('hour') < currentHour) {
            $(this).children('textarea').css('background-color', '#C0C0C0')
        }else{
            $(this).children('textarea').css('background-color', '#DB7093')
        }
    })
}
console.log (rowColors());

$(document).ready(function(){
    currentDay = $('#currentDay')
    today();
    rowColors();
    setInterval(today,1000);
    setInterval(rowColors,1000);
});

saveBtn.on('click', $(this).prev(),function(){
    var rowHour= $(this).parent().data('hour');
    var saveText = $(this).prev().val();
    localStorage.setItem(rowHour, JSON.stringify(saveText));
    saveText= JSON.parse(localStorage.getItem(rowHour));
})