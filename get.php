<?php 
function get_all_books(){
    $get_all_books_query = "SELECT title, date_published, author, reviews, rate, image FROM book;";
    $response = $GLOBALS['conn']->query($get_all_books_query);
    
    $num = 0;
    echo "<p id='numR'>".$response->num_rows."</p>";
    
    if ($response && $response->num_rows > 0) {
           while ($row = $response->fetch_array()) {
            echo "<li id='title".$num."'>".$row[0]."</li>";
            echo "<li id='date_published".$num."'>".$row[1]."</li>";
            echo "<li id='author".$num."'>".$row[2]."</li>";
            echo "<li id='reviews".$num."'>".$row[3]."</li>";
            echo "<li id='rate".$num."'>".$row[4]."</li>";
            echo "<li id='image".$num."'>".$row[5]."</li>";
            $num++;
        }
    } else {
        echo '<h2>book  is empty!</h2>';
    }
}
?>

