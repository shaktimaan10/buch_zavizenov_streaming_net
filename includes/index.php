<?php
    require('functions.php');

    if(isset($_GET["getMoviesContent"])) {
        $movies = getMoviesContent($pdo);
     
        echo json_encode($movies);
    } 

    if(isset($_GET["getMusicContent"])) {
        $music = getMusicContent($pdo);
     
        echo json_encode($music);
    } 

    if(isset($_GET["getTvContent"])) {
        $tv = getTvContent($pdo);
     
        echo json_encode($tv);
    } 

    if(isset($_GET["getRecomContent"])) {
        $recom = getRecomContent($pdo);
     
        echo json_encode($recom);
    } 

    if (isset($_GET['user'])) {
        $user = getUser($pdo);

        echo json_encode($user);
    }

    