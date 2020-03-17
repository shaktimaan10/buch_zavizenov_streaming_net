<?php
    require('functions.php');

    if(isset($_GET["getMoviesContent"])) {
        $movies = getMoviesContent($pdo, $_GET["restriction"]);
     
        echo json_encode($movies);
    } 

    if(isset($_GET["getMusicContent"])) {
        $music = getMusicContent($pdo, $_GET["restriction"]);
     
        echo json_encode($music);
    } 

    if(isset($_GET["getTvContent"])) {
        $tv = getTvContent($pdo, $_GET["restriction"]);
     
        echo json_encode($tv);
    } 

    if(isset($_GET["getRecomContent"])) {
        $recom = getRecomContent($pdo, $_GET["restriction"]);
     
        echo json_encode($recom);
    } 

    if(isset($_GET["getSingleMovie"])) {
        $single = getSingleMovie($pdo, $_GET['getSingleMovie']);
     
        echo json_encode($single);
    }
    
    if(isset($_GET["getSingleMusic"])) {
        $single = getSingleMusic($pdo, $_GET['getSingleMusic']);
     
        echo json_encode($single);
    } 

    if(isset($_GET["getSingleTv"])) {
        $single = getSingleTv($pdo, $_GET['getSingleTv']);
     
        echo json_encode($single);
    } 

    if(isset($_GET["getSingleType"])) {
        $singleType = getSingleType($pdo, $_GET['getSingleType'], $_GET['allowedAge']);
     
        echo json_encode($singleType);
    } 

    if (isset($_GET['user'])) {
        $user = getUser($pdo);

        echo json_encode($user);
    }

    