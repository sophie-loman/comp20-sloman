***COMP 20 Lab 6: Messages***
By: Sophie Loman
Date: 3/10/16

I updated a JavaScript file with a function to parse some JSON data containing two messages and gave the website some styling to make it resemble text messages. I believe everything is implemented correctly. I discussed the assignment with Frankie Caiazzo in order to understand the "parse is not defined" error. I spent about an hour on the assignment.

Questions:

Is it possible to request the data from a different origin (http://messagehub.herokuapp.com/) or from your local machine (from file:///) using XMLHttpRequest? Why or why not?

It is not possible to do either, due to the same-origin policy. The same-origin policy prevents scripts from one webpage to access data from another webpage, unless the two webpages have the same origin. This helps to keep sensitive data secure. The same-origin policy also extends to loading pages through file:/// for most browsers- if the webpage you are attempting to open loads other resources, even if they are in the same directory, http:// protocol must be used. This likely prevents local files from accessing all other files on the disk, which could be harmful in some cases.
