<?php
 define('BASE_URL', 'localhost:63342/k2_final');
// Connection's Parameters
$db_host="http://voice.kuew.me";
$db_name="kuewDemo";
$username="kuew";
$password="Bags6044";
$db_con=mysql_connect($db_host,$username,$password);
$connection_string=mysql_select_db($db_name);
// Connection
mysql_connect($db_host,$username,$password);
mysql_select_db($db_name);
?>