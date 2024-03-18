
$(document).mouseup(function(e) 
{
    var container = $("#file_filter_div");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});

function get_selected_file()
{
	return ($('select[id="file_select"]').val());
}

function show_file_filters()
{
	console.log("in show file filters");
	var pos = $('#file_filter_icon').offset();
	console.log("Pos top" + pos.top);
	$("#file_filter_div").css({
			position: "absolute",
			top: (pos.top -100) + "px",
			left: (pos.left + 20) + "px"
		}).show();
}

function update_files()
{
	$('#file_select').empty();
	$('#file_select').append(new Option ('','',false,false));
	
	if (document.getElementById("all_file_checked").checked) 
	{
		myfilelist = all_filelist;
		filter_label = "Showing All";
	}
	if (document.getElementById("train_file_checked").checked) 
	{
		myfilelist = train_filelist;
		filter_label = "Showing Train";
	}
		if (document.getElementById("test_file_checked").checked) 
	{
		myfilelist = test_filelist;
		filter_label = "Showing Test";		
	}
	for (var i=0, len=myfilelist.length; i<len;i++) 
	{
				$('#file_select').append( new Option (myfilelist[i], myfilelist[i],false, false));
	}
	$('#file_filter_label').html(filter_label);
}

	$(document).ready(function () {
		$('#file_select').select2({
			placeholder: "Select Dataset",
			allowClear: true
		});
		});