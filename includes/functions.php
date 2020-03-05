<?php
    require('connect.php');

    function getUser($conn) {
        $liveUser = $_POST["username"];
        // echo $liveUser;

        $getUser = 'SELECT * FROM users WHERE username = "' . $liveUser . '"';
        $runQuery = $conn->query($getUser);

        $result = array();

        while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            // push each row of data into our arry to make it easy to iterate over
            $result[] = $row;
        }

        return $result;
    }
