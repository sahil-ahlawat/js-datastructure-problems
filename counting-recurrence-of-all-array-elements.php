<?php
	$str =  "jkdfhgslkjshsslkhjslkslkjhshfljsdh";
	$acount = 0;
	$scount = 0;
	$uniqarr = [];
	
	$arr = str_split($str);
	$uniqarr[$arr[0]] = 1;
	foreach($arr as $a){ // O(n)
	  if(isset($uniqarr[$a])){
	    $uniqarr[$a] = $uniqarr[$a] + 1;
	  }
	  else{
	    $uniqarr[$a] =  1;
	  }
	}
	
	print_r($uniqarr);
?>
