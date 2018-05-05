<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
</head>

  <body>
  <?php
    require_once('./db_connections.php');
    require('./get.php');
?>

  <div id="nav">
    <ul >
      <li><a class="active" href="">Home</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </div>
  
  <div id="sort-wrap">
    <h5>Sort By</h5>
    <select id="sort-news">
      <option value="Dateold">Date new to old</option>
      <option value="Datenew">Date old to new  </option>
      <option value="reviewsHigh">reviews high to low </option>
      <option value="reviewslow">reviews low to high </option>
      <option value="StarsHigh">Stars high to low </option>
      <option value="Starslow">Stars low to high </option>
    </select>
  </div>

<ul id="books-list">
<?php get_all_books();?>
</ul> 

 <hr>
  <br>
  <p id = "r">Copyright © 2018 osama alsarhani . All rights reserved. </p>
  <script src="script.js"></script>
</body>
</html>
