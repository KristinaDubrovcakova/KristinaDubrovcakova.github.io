<?php
    //všetky údaje nájdete vo Webglobe -> Hosting -> Databázy
    //nižšie doplniť vlastné údaje podľa schémy -> mysqli_connect("servername", "username", "password", "databasename");
    //servername je v tvare edudb.....nameserver.sk
    $con = mysqli_connect("edudb-02.nameserver.sk", "kristinadubrovc1", "Kikuska2006", "kristinadubrovc1");
    if (mysqli_connect_errno()){
        echo "Nepodarilo sa pripojiť k databáze MySQL: " . mysqli_connect_error();
    }
?>



