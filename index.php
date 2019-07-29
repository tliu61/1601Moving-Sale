<?php
    // require './flight-master/flight/Flight.php';
    // Flight::route('/', function(){
    //     echo 'hello world!';
    // });
    // Flight::start();
    //$host = 'localhost';
    //$user = 'root';
    //$password = 'pswd';
    //$dbname = 'GarageSale';

    //$dsn = 'mysql:host=' . $host . ';dbname=' . $dbname;

    //$connection = new PDO($dsn, $user, $password);
    //$connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

    //$stmt = $connection->query('SELECT * FROM Inventory');

    // while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    //   echo $row['name'] . '<br>';
    // }
?>
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content = "width=device-width, initial-scale=1.0">
    <title> 1601 Hillcrest St. Garage Sale </title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  </head>

  <body>
    <div id="header">
      <h1>Welcome to 1601 Hillcrest St. Moving Sale!</h1>
      <p>The Moving Sale will take place at 1601 Hillcrest St. Urbana, IL 61801 on July 20, 2019 from 10am to 3pm.</p>
      <p>Feel free to contact me at tliu61@illinois.edu and reserve items that you like before the sale!</p>
      <p>There'll be free soft drinks and beers for whoever stopped by!</P>
    </div>

    <!-- <div id="example-2">
      <button v-on:click="greet">Greet</button>
    </div> -->

    <div id="app">
      <product
        v-for="item in items"
        v-bind:item="item"
        >
      </product>
    </div>
    <p>More items to be added!</p>

    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src = "main.js"></script>
  </body>
</html>
