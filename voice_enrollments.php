<?php
include('config.php');
$allVoiceEnrollments = $myVoiceIt->getAllVoiceEnrollments($_SESSION["voiceit_user_id"]);
$allVoiceEnrollmentsArr = json_decode($allVoiceEnrollments, true);
$voiceEnrollments = $allVoiceEnrollmentsArr['voiceEnrollments'];
$allPhrases = $myVoiceIt->getPhrases($contentLanguage);
$allPhrasesArr = json_decode($allPhrases, true);
$phrases = $allPhrasesArr['phrases'];
?>

