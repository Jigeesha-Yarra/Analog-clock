Create an Analog Clock using HTML, CSS and JavaScript
An analog clock displays time using a traditional clock face with hour, minute, and second hands. 
Creating an analog clock using HTML, CSS, and JavaScript involves designing the clock face with HTML and CSS, 
and using JavaScript to dynamically rotate the hands according to the current time.

Approach
HTML: It is a simple file having the basic structure of the webpage and ID for the clock’s body and for the second, minute, and hour hands.
CSS: The CSS is used just for making the clock actually look a bit nicer. We have basically centered our clock in the middle of the webpage.
JavaScript: The JavaScript file will provide the logic behind the rotation of the hands.
  i.First, we have selected the hour, minute, and second from HTML.
  ii.To get the current time we have used the Date() object provided by the JavaScript. 
  This will give the current seconds, minutes, and hours respectively.
  iii.Now, we have got our hour, minute, and second, and we know that the clock rotates 360 degrees. 
  So, we will convert to convert the rotation of the hands of the clock into degrees. The degree calculation is based on a simple unary method.
