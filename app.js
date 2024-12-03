const express = require('express');
const app = express();
app.get('/',(req,res) => {
res.sendres.send(
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index Page</title>

    <!-- Internal CSS -->
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #333;
            color: white;
            padding: 20px;
            text-align: center;
        }

        main {
            padding: 20px;
            text-align: center;
        }

        .button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 15px 32px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
            margin: 20px;
        }

        .button:hover {
            background-color: #45a049;
        }

        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>

    <header>
        <h1>Welcome to My Index Page</h1>
    </header>

    <main>
        <h2>Click the button below:</h2>
        <button class="button" onclick="displayMessage()">Click Me!</button>
        <p id="message"></p>
    </main>

    <footer>
        <p>Footer Content - 2024</p>
    </footer>

    <!-- JavaScript -->
    <script>
        function displayMessage() {
            document.getElementById('message').innerText = "Hello, you clicked the button!";
        }
    </script>

</body>
</html>
});
app.listen(3040,() => {
console.log("Server is running on port 3040")
});
