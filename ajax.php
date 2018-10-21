<?php



if (isset($_POST['key'])) {

    $conn = new mysqli('localhost', 'root', 'root', 'mysqldatamanager');
    $name = $conn->real_escape_string($_POST['name']);
    $abbrev = $conn->real_escape_string($_POST['abbrev']);
    $desc = $conn->real_escape_string($_POST['desc']);

    if ($_POST['key'] == 'addNew') {
        $sql = $conn->query("SELECT id FROM country WHERE countryName = '$name'");
        if ($sql->num_rows > 0)
            exit("Country already exists!");
        else
            $conn->query("INSERT INTO country (countryName, countryAbbrev, countryDesc) 
                VALUES ('$name', '$abbrev', '$desc')");
        exit("Country has been added succesfully!");
    }
}
?>