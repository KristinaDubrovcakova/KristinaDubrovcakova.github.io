<?php

    require("databaza.php");
    $con ->set_charset("utf-8");
   
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Dashboard - Stránka klienta</title>
    <link rel="stylesheet" href="styles.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css" />
    <style>
        .blue {
            color: blue;
        }
    </style>
</head>
<body>
    <div class="form">
        <p>Ahojte, <?php echo $_SESSION['username']; ?>!</p>
        <p>Nachádzate sa na stránke používateľa.</p>
        <?php
    session_start();
    if ($_SESSION['username'] ==- "admin") {
        require('databaza.php');
        $query = "SELECT * FROM maciatko";
        $result = mysqli_query($con, $query);


        echo "<div>";
        echo "<table>";
        echo "<thead><tr><th>Meno</th><th>Priezvisko</th><th>Email</th><th>Správa</th></tr></thead>";
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                echo "<tr>
                    <td>" . $row['meno'] . "</td>
                    <td>" . $row['priezvisko'] . "</td>
                    <td>" . $row['email'] . "</td>
                    <td>" . $row['sprava'] . "</td>
                </tr>";
            }
            
            echo "</table>";
        }

        echo "</div>" ;
    } 
    ?>
        <p><a href="odhlasenie.php">Odhlásiť sa</a></p>
    </div>
    </div>
        <footer style="background-color: #ffff ;" class="text-center p-3 m-4 black">
            <h5 style="color: black;"> © 2023 All rights reserved. Kristína Dubrovčáková</h5>
        </footer>
    </div>

</body>
</html>


