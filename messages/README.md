## Name
chxw

## Date
6/7/2020

## Summary:
Parse data in JSON format and output the data to a section of a completely loaded HTML file. Given the following HTML below:
```
<!DOCTYPE html>

<html>

<head>
  <meta charset="utf-8" />
  <title>Messages</title>
  <script>
    function loadMessages() {
      jsonData = '[{"id":1,"content":"Do you really want to hurt me?","username":"Boy"},{"id":2,"content":"Do you really want to make me cry?","username":"George"}]';
      // Your code here......
    }
  </script>
</head>

<body onload="loadMessages()">
  <h1>Messages</h1>
  <div id="messages"></div>
</body>

</html>
```
Modify the JavaScript function `loadMessages` to parse the JSON data, and output the messages with corresponding usernames in the "messages" section of the HTML, as ordered in JSON file. *We cannot modify the HTML body or user jQuery.*


## Files:
```
.
├── README.md
└── index.html
```

## Reflection:

Attempts that weren't successful:

```
      jsonData = '[{"id":1,"content":"Do you really want to hurt me?","username":"Boy"},{"id":2,"content":"Do you really want to make me cry?","username":"George"}]';
      var obj = JSON.parse(jsonData);

      document.getElementById("messages").innerHTML = obj[0].content + " " + obj[0].username + "<br>" + obj[1].content + " " + obj[1].username;
```

```
      jsonData = '[{"id":1,"content":"Do you really want to hurt me?","username":"Boy"},{"id":2,"content":"Do you really want to make me cry?","username":"George"}]';
      var obj = JSON.parse(jsonData);

      for (var i in obj){
        document.getElementById("messages").innerHTML = obj[i].content + " " + obj[i].username + "<br>"; 
      }
```

```
      jsonData = '[{"id":1,"content":"Do you really want to hurt me?","username":"Boy"},{"id":2,"content":"Do you really want to make me cry?","username":"George"}]';
      var obj = JSON.parse(jsonData);

      var output = "";

      // for (var i = 0; l = obj.length; i < l; i++){
      // 	output += obj[i].content + " " + obj[i].username + "<br>";
      // }
```

