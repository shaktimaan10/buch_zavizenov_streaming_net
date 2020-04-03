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

    function getAllUsers($conn, $group){
        $getData = 'SELECT * FROM tbl_users WHERE user_group = "' . $group . '"';
        $runQuery = $conn->query($getData);

        $result = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function updateUser($conn, $userId, $userName, $userPermissions){
        $getData = 'UPDATE tbl_users SET user_fname = "' . $userName . '" , user_permissions = "' . $userPermissions . '" WHERE user_id = "' . $userId . '"';
        $runQuery = $conn->query($getData);

        $result = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function deleteUser($conn, $userId){
        $getData = 'DELETE FROM tbl_users WHERE user_id = "' . $userId . '"';
        $runQuery = $conn->query($getData);

        $result = array();

        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        return $result;
    };

    function updateUserId($conn, $userId, $userName){
        $userImg = $_FILES["image"];

        if(empty($userImg)){
            $getData = 'UPDATE tbl_users SET user_fname = "' . $userName . '" WHERE user_id = "' . $userId . '"';
            $runQuery = $conn->query($getData);

            $result = array();

            while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
                $result[] = $row;
            }

            return $result;
        } else {
            $image = $userImg['name'];
            // Moving img to /images folder
            $img_path = '../images/';
            move_uploaded_file($userImg['tmp_name'], $img_path.$image);

            $getDataImg = 'UPDATE tbl_users SET user_fname = "' . $userName . '" , user_avatar = "' . $image . '" WHERE user_id = "' . $userId . '"';
            $runQueryImg = $conn->query($getDataImg);

            $result = array();

            while ($row = $runQueryImg->fetch(PDO::FETCH_ASSOC)) {
                $result[] = $row;
                var_dump($result);
            }

            return $result;
        }
        
    };

    function getUser($conn) {
        $liveUser = $_POST["username"];
        $livePassword = $_POST["password"];

        $getUser = 'SELECT * FROM tbl_login WHERE login_uname = "' . $liveUser . '" AND login_password = "' . $livePassword . '"';
        $runQuery = $conn->query($getUser);

        $result = array();

        while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            // push each row of data into our arry to make it easy to iterate over
            $result[] = $row;
        }

        return $result;
    };
