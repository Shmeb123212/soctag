


<? // #начало Обработчик данных
header("Content-Type: text/html; charset=UTF-8");
if( $_POST['user_name']) { $name = htmlspecialchars ( $_POST['user_name']); }
if($_POST['user_phone']) { $phone = htmlspecialchars ($_POST['user_phone']); }
if($_POST['user_email']) { $mail = htmlspecialchars ($_POST['user_email']); }
if($_POST['user_item']) { $item = htmlspecialchars ($_POST['user_item']); }

// $name = $_POST['user_name'];
// $phone = $_POST['user_phone'];
// $email = $_POST['user_email'];
// $title = $_POST['user_item'];

$site = $_SERVER['SERVER_NAME'];

$token = "5451738053:AAFGDGOFbcQwZaWkPQrPyhN3Sj3WSHnA1ng";
$chat_id = "-761043071";
$date = date('d.m.Y H:i');

$arr = array(
	'Заявка с сайта: ' => $site,
	'Имя: ' => $name,
    'Телефон: ' => $phone,
	'Почта: ' => $main,
	'Услуга: ' => $item,
	'Дата: ' => $date
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");



?>

<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8" />
	<meta name='robots' content='noindex,follow' />
	<title>Ваш заказ принят!</title>
	<link rel="stylesheet" href="cssl/style.css" />
	<style>
		#senks_block {color: #313E47;text-align: center;position: fixed;top: 10%;width: 100%;}
		#senks_block img {width: 185px;margin-bottom: 10px;}
		#senks_block h1 {font-size: 36px;font-weight: 700;text-transform: uppercase;color: rgba(9, 14, 100, 0.7);}
		.senks_text {line-height: 1.2;font-size: 18px;margin: 25px auto;}
		.senks_red {color: #fff;font-size: 19px;font-weight: bold;background: rgba(9, 14, 100, 0.7);height: 45px;line-height: 45px;}
	</style>
 
</head>
<body style="background-size: 100% 100%;">
	<div id="senks_block">
		<img src="index.png" alt="">
		<h1><? if(isset($name)){echo $name;} ?><br>Ваш заказ принят!</h1>
	
		<p class='senks_red'>Пожалуйста<? if(isset($name)){echo " ".$name;} ?>, дождитесь звонка </p>
	</div>
</body>
</html>