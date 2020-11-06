<?php
include('VoiceIt2.php');
session_start();
$contentLanguage = 'en-US';
$myVoiceIt = new VoiceIt\VoiceIt2("key_de0c518aa16640b68f8bf2cce9c9f846", "tok_3012bab91e924dcc89ae4f600c419c0f");
if(!isset($_SESSION["voiceit_user_id"]) || $_SESSION["voiceit_user_id"] == ""){
    $userData = $myVoiceIt->createUser();
    $userArr = json_decode($userData,true);
    if(isset($userArr['userId']) && $userArr['userId'] != ''){
      $_SESSION["voiceit_user_id"] = $userArr['userId'];
    }
}

?>