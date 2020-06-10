## Name
chxw

## Date
6/10/2020


## Summary:
*Objectives*
1. Practice parsing JSON data.
2. Practice using JavaScript associative arrays.

Given a string of data in JSON format, output the data to a section of a completely loaded HTML file.

## Files:
```
.
├── README.md
└── index.html
```

## Reflection:
The string in JSON format was parsed into a JSON object, then using a `for..in` loop the JSON object is formatted and outputted to `<div id="messages"></div>` using `document.getElementById("messages").innerHTML`. These steps were correctly implemented. There are no errors in the console. 

This lab took 2-3 hours. I fell down a rabbit hole of creating a `.json` file with the contents of `jsonData` and tried to import that `.json` file to be used in my JS scriptings, only to realize it's not some easy line like `import "data.json"` or something similar. This [link](https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript) was helpful for understanding what needs to be down in order to import an external local JSON file.

>You cannot make a AJAX call to a local resource as the request is made using HTTP.
>
>A workaround is to run a local webserver, serve up the file and make the AJAX call to localhost.
>
>In terms of helping you write code to read JSON, you should read the documentation for jQuery.getJSON():
>
>[http://api.jquery.com/jQuery.getJSON/](http://api.jquery.com/jQuery.getJSON/) 

## References:

[https://stackoverflow.com/questions/21450227/how-would-you-import-a-json-file-into-javascript](https://stackoverflow.com/questions/21450227/how-would-you-import-a-json-file-into-javascript)

[https://stackoverflow.com/questions/51317294/importing-external-data-json-file-into-javascript-variable](https://stackoverflow.com/questions/51317294/importing-external-data-json-file-into-javascript-variable)

[https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript](https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript)
