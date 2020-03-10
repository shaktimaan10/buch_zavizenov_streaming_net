<?php
    require('connect.php');

    function getMoviesContent($conn) {

        $getData = 'SELECT * FROM tbl_movies';
        $runQuery = $conn->query($getData);

        $result = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getMusicContent($conn) {

        $getData = 'SELECT * FROM tbl_music';
        $runQuery = $conn->query($getData);

        $result = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getTvContent($conn) {

        $getData = 'SELECT * FROM tbl_tv';
        $runQuery = $conn->query($getData);

        $result = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getRecomContent($conn) {

        $getData = 'SELECT * FROM tbl_movies ORDER BY movie_score DESC LIMIT 10';
        $runQuery = $conn->query($getData);

        $result = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getUser($conn) {
        $liveUser = $_POST["username"];
        // echo $liveUser;

        $getUser = 'SELECT * FROM tbl_users WHERE user_uname = "' . $liveUser . '"';
        $runQuery = $conn->query($getUser);

        $result = array();

        while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            // push each row of data into our arry to make it easy to iterate over
            $result[] = $row;
        }

        return $result;
    };
