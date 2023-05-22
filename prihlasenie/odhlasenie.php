<?php
    session_start();
    header("Location: prihlasenie.php");
    // Zatvorí session
    if(session_destroy()) {
        // Presmeruje na prihlásenie
        
    }
?>
