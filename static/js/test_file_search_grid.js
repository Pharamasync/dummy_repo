	$(document).ready(function () {
		$('#test_file_select').select2({
			placeholder: "Select Test Dataset",
			allowClear: true
		});
		});
		
function show_test_file_filters()
{
	console.log("in show test file filters");
	var pos = $('#test_file_filter_icon').offset();
	console.log("Pos top" + pos.top);
	$("#test_file_filter_div").css({
			position: "absolute",
			top: (pos.top -100) + "px",
			left: (pos.left + 20) + "px"
		}).show();
}	

function update_test_files()
{
	$('#test_file_select').empty();
	$('#test_file_select').append(new Option ('','',false,false));
	
	if (document.getElementById("te_all_file_checked").checked) 
	{
		myfilelist = all_filelist;
		test_filter_label = "Showing All";
	}

		if (document.getElementById("te_test_file_checked").checked) 
	{
		myfilelist = test_filelist;
		test_filter_label = "Showing Test";		
	}
	for (var i=0, len=myfilelist.length; i<len;i++) 
	{
				$('#test_file_select').append( new Option (myfilelist[i], myfilelist[i],false, false));
	}
	$('#test_file_filter_label').html(test_filter_label);
}

$(document).mouseup(function(e) 
{
    var container = $("#test_file_filter_div");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});