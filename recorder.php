<?php
//index.php : embeds app
include('config.php');
$allVoiceEnrollments = $myVoiceIt->getAllVoiceEnrollments($_SESSION["voiceit_user_id"]);
$allVoiceEnrollmentsArr = json_decode($allVoiceEnrollments, true);
$voiceEnrollments = $allVoiceEnrollmentsArr['voiceEnrollments'];
$allPhrases = $myVoiceIt->getPhrases($contentLanguage);
$allPhrasesArr = json_decode($allPhrases, true);
$phrases = $allPhrasesArr['phrases'];

include_once('settings.php');

//access existing room or create a new one as performer
//all IDs generated randomly for demonstrative purposes; on integrations should be from database

$roomID = intval($_GET['r']);

if (!$roomID) 
{
$roomID = rand(9000, 9999);
$isPerformer = 1;
$userID = 10000 + $roomID;
}
else
{
$userID = rand(9000, 9999);
$isPerformer = 0;
}

$sessionID = $userID;
$sessionKey = $userID;

//setcookie('userID', $userID); 


//embed the app: all integrations should contain this part
$dataCode .= "window.VideoWhisper = {userID: $userID, sessionID: $sessionID, sessionKey: '$sessionKey', roomID: $roomID, performer: $isPerformer, serverURL: '" . VW_H5V_CALL . "'}";

$bodyCode .= <<<HTMLCODE
<!--VideoWhisper.com - HTML5 Videochat web app - uid:$userID p:$isPerformer s:$sessionID-->
<noscript>You need to enable JavaScript to run this app.</noscript>
<div style=""><div style="display:block;width:100%; height:100%; position:absolute;z-index:102!important;" id="videowhisperVideochat"></div></div>
<script>$dataCode;</script>
HTMLCODE;

//app requires semantic ui
$headCode .= '<link href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" rel="stylesheet" type="text/css">';

//app css & js
$CSSfiles = scandir(dirname(  __FILE__ ) . '/static/css/');
foreach($CSSfiles as $filename)
	if (strpos($filename,'.css')&&!strpos($filename,'.css.map'))
		$headCode .= '<link href="' . VW_H5V_URL . 'static/css/' . $filename . '" rel="stylesheet" type="text/css">';

$JSfiles = scandir(dirname(  __FILE__ ) . '/static/js/');
foreach ($JSfiles as $filename)
	if ( strpos($filename,'.js') && !strpos($filename,'.js.map'))
		$bodyCode .= '<script src="' . VW_H5V_URL . 'static/js/' . $filename. '" type="text/javascript"></script>';


$bodyCode .= '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>';
?>
<head>
<?php echo $headCode ?>
</head>
<body>
<?php echo $bodyCode ?>
<div class="ui form" style="z-index: 99999; width: max-content;padding: 10px;">
  <div class="field">
  	<label>Please select a phrase to signup/verify with voiceit.</label>
    <select id="selected_phrase" onchange="getPhraseVal(this);">
      <option value="">Select phrase</option>
      <?php
	  foreach($phrases as $phrase){?>
		<option value="<?php echo $phrase['text'];?>"><?php echo $phrase['text'];?></option>
	  <?php } ?>
    </select>
  </div>
</div>
<div id="verify_response" style="z-index: 99999; width: max-content;padding: 10px;text-align: initial;"></div>
</body>
<script>

$( document ).ready(function() {
	$('.actions').hide();
	$('.close1').hide();
	console.log( "ready!" );
});

function getPhraseVal(sel){
	//alert(sel.value);
}

function saveRecordedFile (record_type,filename,blob_url,blob_obj)
{
	var reader = new FileReader();
	reader.readAsDataURL(blob_obj);
	reader.onloadend = function() {
		var base64 = reader.result;
		$.ajax({
			type: "POST",
			url:"processRecordedFile.php",
			data:{
				base64:base64,
				record_type:record_type,
				filename:filename,
				blob_url:blob_url
			},
			success: function (response) {            
				console.log(response);
				$('#verify_response').html('<pre>'+response+'</pre>');
			}, 
			error: function (response) { 
				alert("there was an error!");
			} 
		});		
	}
	
	
}

function verifyRecordedFile (record_type,filename,blob_url,blob_obj)
{	
	var selected_phrase = $('#selected_phrase').val();	
	var reader = new FileReader();
	reader.readAsDataURL(blob_obj);
	reader.onloadend = function() {
		var base64 = reader.result;
		$.ajax({
			type: "POST",
			url:"verifyRecordedFile.php",
			data:{
				base64:base64,
				record_type:record_type,
				filename:filename,
				blob_url:blob_url,
				selected_phrase:selected_phrase
			},
			success: function (response) {            
				console.log(response);
				$('#verify_response').html('<pre>'+response+'</pre>');
			}, 
			error: function (response) { 
				alert("there was an error!");
			} 
		});		
	}
	
	
}
</script>