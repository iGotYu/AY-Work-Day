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

    // for detemining css backgroundcolor: "backgroundcolor" :unknown word.
        //use moment to get current time (soecifically the hour)
        //then iterate over all hour elements
        //using an id/data attribute determining what hour the current time block represents 
            //e.g moment time "timeblock"; unknown time
                //if the current element time is:
                //;ess than moment time, is grey
                //same as moment time, its red
                // greater than moment time its green


