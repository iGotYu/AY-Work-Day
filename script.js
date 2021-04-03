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

saveBtn.on('click',function(){
    var rowHour= $(this).parent().data('hour');
    var saveText = $(this).prev().val();
    
    //get local data
    const data = JSON.parse(localStorage.getItem("data")) || [];

    const filteredData = data.filter((datum) => datum.id !== rowHour);
    
    //create a new entry for
    const entry  = {
        id: rowHour,
        txt: saveText
    }

    //push the entry to the
    filteredData.push(entry);

    //set the updated data and overwrite old data on storage
    localStorage.setItem("data",JSON.stringify(filteredData));
    console.log ("hello");
})

const data = JSON.parse(localStorage.getItem("data")) || [];
data.forEach(datum => {
    $(`[data-hour=${datum.id}]`).find(".text").val(datum.txt);
});

