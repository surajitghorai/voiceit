<?php
include('config.php');
//$myVoiceIt = new VoiceIt\VoiceIt2("key_de0c518aa16640b68f8bf2cce9c9f846", "tok_3012bab91e924dcc89ae4f600c419c0f");

$allUsers = $myVoiceIt->getAllUsers();
$allPhrases = $myVoiceIt->getPhrases("en-US");
//$getUser = $myVoiceIt->createUser();

echo '<pre>';
print_r($allUsers);
die();

?>