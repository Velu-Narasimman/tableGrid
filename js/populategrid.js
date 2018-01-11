$(document).ready(function(){
    var myobject = new Object();
    $.ajax({async:true,type:'POST',url:"server/respond.php",dataType:"json",success:function(xhr,status,result){

    constructTheEnvironment("#sample"); // constructs the table environment.
    console.log("ajax call is done... ");
    console.log(result.responseJSON);
    var record;
    for(record in result.responseJSON)
    {
        console.log(result.responseJSON[record]);

    }
    console.log("myobject");
    console.log(myobject);


    }});

});

/*
 * makes the table environment
 */
function constructTheEnvironment(tableid)
{
    $(tableid).html("<tr><td>34545</td></tr>");
}
