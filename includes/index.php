<?php
    require('functions.php');

    if(isset($_GET["getMoviesContent"])) {
        $movies = getMoviesContent($pdo, $_GET["restriction"]);
     
        echo json_encode($movies);
    }; 

    if(isset($_GET["getMusicContent"])) {
        $music = getMusicContent($pdo, $_GET["restriction"]);
     
        echo json_encode($music);
    }; 

    if(isset($_GET["getTvContent"])) {
        $tv = getTvContent($pdo, $_GET["restriction"]);
     
        echo json_encode($tv);
    }; 

    if(isset($_GET["getRecomContent"])) {
        $recom = getRecomContent($pdo, $_GET["restriction"]);
     
        echo json_encode($recom);
    };

    if(isset($_GET["getSingleContent"])) {
        $single = getSingleContent($pdo, $_GET['getSingleContent'], $_GET['table']);
     
        echo json_encode($single);
    }; 

    if(isset($_GET["getSingleType"])) {
        $singleType = getSingleType($pdo, $_GET['getSingleType'], $_GET['allowedAge']);
     
        echo json_encode($singleType);
    }; 

    if(isset($_GET["getAllUsers"])) {
        $allUsers = getAllUsers($pdo, $_GET['userGroup']);
     
        echo json_encode($allUsers);
    }; 

    if(isset($_GET["updateUser"])) {
        $updatedUserAdmin = updateUser($pdo, $_GET['updateUser'], $_GET['updateName'], $_GET['updatePermissions']);
     
        echo json_encode($updatedUserAdmin);
    };

    if(isset($_GET["deleteUser"])) {
        $updatedUserAdmin = deleteUser($pdo, $_GET['deleteUser']);
     
        echo json_encode($updatedUserAdmin);
    };

    if(isset($_GET["updateUserId"])) {
        $updatedUser = updateUserId($pdo, $_GET['updateUserId'], $_GET['updateName']);
     
        echo json_encode($updatedUser);
    };

    if(isset($_GET["deleteUserId"])) {
        $deletedUser = deleteUser($pdo, $_GET['deleteUserId']);
     
        echo json_encode($deletedUser);
    }; 

    if(isset($_GET["checkLike"])) {
        $chekedResult = checkLike($pdo, $_GET['userId'], $_GET['contentType'], $_GET['contentId']);
     
        echo json_encode($chekedResult);
    }; 

    if(isset($_GET["addLike"])) {
        $addedLike = addLike($pdo, $_GET['userId'], $_GET['contentType'], $_GET['contentId']);
     
        echo json_encode($addedLike);
    }; 

    if(isset($_GET["removeLike"])) {
        $removedLike = removeLike($pdo, $_GET['userId'], $_GET['contentType'], $_GET['contentId']);
     
        echo json_encode($removedLike);
    };

    if (isset($_GET['user'])) {
        $user = getUser($pdo);

        echo json_encode($user);
    };

    