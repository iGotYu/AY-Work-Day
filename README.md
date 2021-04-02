# AY-Work-Day

## OverView
For this homework we were tasked to create a simple calendar application that allows a user to save elements for each hour of the day. 

## HTML
For this assignment we were given a base template that included the links to bootstrap, google fonts, and scripted to the jquery and moments pages. So all that needed to be done was to create the time, text area and the spaces for the save buttons.

To do that they all had to be in a set container and then broken up into each individual time slot. In order to get each time block to line up I had to take the col space of 12 and divide it between the 3 sections. To get the Save Button I went to FontAwesome to get the image to place into the actual button area. Then to endure the colorization to work based on times the data-hours were set from 9-17 as if it was a 24 hour clock instead of a 12 hour clock.

## CSS
For the CSS I used the given template.

## JavaScript
For this script sheet it was a bit simpler with the help of jQuery. So to begin I made a couple variables and formatted how I wanted the moment hours to read. then to give my function today something to read I set a standard month day year. Then I broke down the background spacing based on the time of day that has passed and the color of the text area will change based on the current 24 hour time. Afterwards I set a ready function so that at the start of the page it will display all the functions that have been created. To conclude it we have to create a function that was set to when the save button is clicked it will save the information put into the textarea to LocalStorage and be able to extract it and redisplay it even if the page is refreshed.

## Conclusion
In conclusion this homework required the use age of creating a page and adding content to it and adjusting the format with JS adjustments while implementing factors from jquery, bootstrap, and moment. 