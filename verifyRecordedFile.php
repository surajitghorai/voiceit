<?php
include('config.php');
$baseFromJavascript = $_POST['base64']; //your data in base64 'data:image/png....';
$base_to_php = explode(',', $baseFromJavascript);
$data = base64_decode(end($base_to_php));
$blob_url = $_POST['blob_url'];
$selected_phrase = $_POST['selected_phrase'];
echo $blob_url;
die();
if($_POST['record_type'] == 'audio'){
    $apiResponce = $myVoiceIt->voiceVerificationByUrl($_SESSION["voiceit_user_id"], $contentLanguage, $selected_phrase, $data);
    print_r($apiResponce);
} else if($_POST['record_type'] == 'video'){

} else {
    echo 'Method not found!';
}

?>