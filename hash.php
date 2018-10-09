<?php

$hash = ["19760", "19720", "19730", "19700", "19771", "19800", "19600", "19610", "19680", "19701", "19650", "19840"];

for ($i=0; $i < count($hash) ; $i++) {
  $tes = password_hash($hash[$i], PASSWORD_DEFAULT);
  echo $tes."<br>";
}

?>
