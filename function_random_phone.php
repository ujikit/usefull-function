<!-- PHP -->
<?php

for ($i=0; $i < 12 ; $i++) {

  $front = "081";
  $middle = random_int(100000000, 999999999);
  $fix = $front."".$middle;
  echo $fix."<br>";

}

?>
