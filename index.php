<?php
//index.php : embeds app

include_once 'settings.php';

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


$headCode .= '<link href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" rel="stylesheet" type="text/css">';



//room link
$roomURL = $_SERVER['REQUEST_SCHEME'] .'://'. $_SERVER['HTTP_HOST'] . explode('?', $_SERVER['REQUEST_URI'], 2)[0] . '?r=' . $roomID;
$recorderURL = $_SERVER['REQUEST_SCHEME'] .'://'. $_SERVER['HTTP_HOST'] . explode('?', $_SERVER['REQUEST_URI'], 2)[0] . 'recorder.php?r=' . $roomID;

$bodyCode .= '<div class="ui segment"><div class="ui header">Cam Recorder HTML5</div><a class="ui button" href="'.$recorderURL.'">Video &amp; Audio Recorder</a><br> <small>Open Recorder: Enable webcam/microphone, Start recording and Send to upload.</small></div>';
$bodyCode .= '<div class="ui segment"><h4 class="ui header">Recording Booth URL</h4>Record and review video/audio at this recording room address:<br>' . $roomURL .'</div>';



		
		
$directory = 'uploads/Room' . $roomID;
if (file_exists($directory))
{

		function path2url($file)
		{
			$url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
			return dirname($url) . '/' . str_replace( dirname(__FILE__) , '', $file);
		}
		
	$files = array_diff(scandir($directory), array('..', '.'));

	if (count($files))
	{
		$bodyCode .= '<div class="ui segment"><h4 class="ui header">Videos</h4>'  ;
		foreach ($files as $file) 
		{
			$ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));

			$url = path2url($directory . '/' .  $file);
			
			$bodyCode .=  '<div class="ui segment">';
			
			if (in_array( $ext, array('mp4', 'webm'))) $bodyCode .='<video style="width: 320px" src="' . $url . '" controls></video>';
			if (in_array( $ext, array('mp3', 'ogg', 'opus'))) $bodyCode .='<audio style="max-width: 320px" src="' . $url . '" controls></audio>';
	
			$bodyCode .=  '<br><a class="ui button tiny" href="' . $url. '"> <i class="download icon"></i> Open ' . $file . '</a></div>';
		}
		$bodyCode .='</div>';

	}

}

?>
<head>
<?php echo $headCode ?>
</head>
<body>
<?php echo $bodyCode ?>

<?php
//include_once 'clean_older.php'?>
</body>