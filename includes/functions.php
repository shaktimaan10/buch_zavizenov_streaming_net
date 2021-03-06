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

    function getSingleContent($conn, $con_id, $table){
        $getData = 'SELECT * FROM tbl_'. $table .' WHERE ' . $table . '_id = "' . $con_id . '"';
        $runQuery = $conn->query($getData);

        $result = array();

        $row = $runQuery->fetch(PDO::FETCH_ASSOC);

        return $row;
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
        $userImg = $_FILES["image"];
        // var_dump($userImg);
        if(empty($userImg)){
            $getData = 'UPDATE tbl_users SET user_fname = "' . $userName . '" , user_permissions = "' . $userPermissions . '" WHERE user_id = "' . $userId . '"';
            $runQuery = $conn->query($getData);
        } else {
            $image = $userImg['name'];
            $img_path = '../images/';
            move_uploaded_file($userImg['tmp_name'], $img_path.$image);

            $getData = 'UPDATE tbl_users SET user_fname = "' . $userName . '" , user_permissions = "' . $userPermissions . '" , user_avatar = "' . $image . '" WHERE user_id = "' . $userId . '"';
            $runQuery = $conn->query($getData);
        }

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
                // var_dump($result);
            }

            return $result;
        }
        
    };

    function checkLike($conn, $userId, $contentType, $contentId){
        $getData = 'SELECT * FROM tbl_like WHERE like_content_type = "' . $contentType . '" AND like_content_id = "' . $contentId . '" AND like_user_id = "' . $userId . '"';
        $runQuery = $conn->query($getData);

        $row = $runQuery->fetch(PDO::FETCH_ASSOC);
    
        return $row;
    };

    function removeLike($conn, $userId, $contentType, $contentId){
        $getData = 'DELETE FROM tbl_like WHERE like_content_type = "' . $contentType . '" AND like_content_id = "' . $contentId . '" AND like_user_id = "' . $userId . '"';
        $runQuery = $conn->query($getData);

        $row = $runQuery->fetch(PDO::FETCH_ASSOC);
    
        return $row;
    };

    function addLike($conn, $userId, $contentType, $contentId){
        $getData = 'INSERT INTO tbl_like (like_content_type, like_content_id, like_user_id) VALUES ("' . $contentType . '" ,"' . $contentId . '" ,"' . $userId . '")';
        $runQuery = $conn->query($getData);
        
        return $runQuery;
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

    function addReview($conn){
        $username = $_POST['username'];
        $contentType = $_POST['contentType'];
        $contentId = $_POST['contentID'];
        $reviewText = $_POST['reviewText'];

        $getData = 'INSERT INTO tbl_review (review_content_type, review_content_id, review_username, review_text) VALUES ("' . $contentType . '" ,"' . $contentId . '" ,"' . $username . '" ,"' . $reviewText . '")';
        $runQuery = $conn->query($getData);
        
        return $runQuery;
    };

    function getReviews($conn, $reviewId, $contentType){
        $getData = 'SELECT * FROM tbl_review WHERE review_content_id = "' . $reviewId . '" AND review_content_type = "' . $contentType . '" ORDER BY review_id DESC';
        $runQuery = $conn->query($getData);

        $result = array();

        while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            // push each row of data into our arry to make it easy to iterate over
            $result[] = $row;
        }

        return $result;
    };

