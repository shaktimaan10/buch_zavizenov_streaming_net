<?php
    require('connect.php');

    function getMoviesContent($conn, $age) {

        $getData = 'SELECT * FROM tbl_movie WHERE movie_pg <= "' . $age . '"';
        $runQuery = $conn->query($getData);

        $result = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getMusicContent($conn, $age) {

        $getData = 'SELECT * FROM tbl_music WHERE music_pg <= "' . $age . '"';
        $runQuery = $conn->query($getData);

        $result = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getTvContent($conn, $age) {

        $getData = 'SELECT * FROM tbl_tv WHERE tv_pg <= "' . $age . '"';
        $runQuery = $conn->query($getData);

        $result = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getRecomContent($conn, $age) {

        $getData = 'SELECT * FROM tbl_movie WHERE movie_pg <= "' . $age . '" ORDER BY movie_score DESC LIMIT 5';
        $runQuery = $conn->query($getData);

        $result = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getSingleMovie($conn, $con_id){
        $getData = 'SELECT * FROM tbl_movie WHERE movie_id = "' . $con_id . '"';
        $runQuery = $conn->query($getData);

        $result = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getSingleMusic($conn, $con_id){
        $getData = 'SELECT * FROM tbl_music WHERE music_id = "' . $con_id . '"';
        $runQuery = $conn->query($getData);

        $result = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getSingleTv($conn, $con_id){
        $getData = 'SELECT * FROM tbl_tv WHERE tv_id = "' . $con_id . '"';
        $runQuery = $conn->query($getData);

        $result = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getSingleType($conn, $con_id, $con_age){
        $getData = 'SELECT * FROM tbl_' . $con_id . ' WHERE ' . $con_id . '_pg <= ' . $con_age;
        $runQuery = $conn->query($getData);

        $result = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function getAllUsers($conn){
        $getData = 'SELECT * FROM tbl_users';
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
