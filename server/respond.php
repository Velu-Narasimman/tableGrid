<?php
$db_conn = pg_connect("host=localhost port=5432 dbname=timesheetapproval user=postgres password=") or die("Unable to connect to database!");
//pg_close($db_conn);
$result = pg_query($db_conn,"select * from ticket_time_entry_mapping limit 1");
$json_data = json_encode(pg_fetch_all($result));
//var_dump(json_encode(pg_fetch_all($result)));

//echo "You got your data!";
echo $json_data;

?>
