<?php

$mail = "tanichk@ukr.net";

include "mail.class.php";


	$m= new Mail('utf8');
	$m->To($mail);
	$m->Subject("Сайт Foto-clip");
	$m->Body("<br/>
	".(!empty($_POST['name'])?"<b>Ім'я</b>: ".$_POST['name']."<br/>":"")."
	".(!empty($_POST['file'])?"<b>Ім'я</b>: ".$_POST['file']."<br/>":"")."
	".(!empty($_POST['recipe'])?"<b>Ім'я</b>: ".$_POST['recipe']."<br/>":"")."
	".(!empty($_POST['email'])?"<b>E-mail</b>: ".$_POST['email']."<br/>":"")."
	".(!empty($_POST['comment'])?"<b>Запитання</b>: ".$_POST['comment']."<br/>":"")."");
	$m->Send();
	echo '<h3>Заявка отправлена.</h3>';       



?>