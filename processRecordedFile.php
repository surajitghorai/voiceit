<?php
$upload_path = 'uploads';
if(!is_dir($upload_path)) {
    mkdir($upload_path);
}

$record_type = $_POST['record_type'];
$filename = $_POST['filename'];
$blob_url = $_POST['blob_url'];

$filenameArr = explode(".", $filename);
$ext = end($filenameArr);
$filename = time().$record_type.'.'.$ext;
$filepath = $upload_path."/".$filename;

// baseFromJavascript will be the javascript base64 string retrieved of some way (async or post submited)
$baseFromJavascript = $_POST['base64']; //your data in base64 'data:image/png....';
// We need to remove the "data:image/png;base64,"
$base_to_php = explode(',', $baseFromJavascript);
// the 2nd item in the base_to_php array contains the content of the image
$data = base64_decode(end($base_to_php));
// here you can detect if type is png or jpg if you want

// Save the image in a defined path
file_put_contents($filepath,$data);


?>