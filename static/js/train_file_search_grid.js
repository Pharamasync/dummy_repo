	$(document).ready(function () {
		$('#train_file_select').select2({
			placeholder: "Select Train Dataset",
			allowClear: true
		});
		});
		

function show_train_file_filters()
{
	console.log("in show train file filters");
	var pos = $('#train_file_filter_icon').offset();
	console.log("Pos top" + pos.top);
	$("#train_file_filter_div").css({
			position: "absolute",
			top: (pos.top -100) + "px",
			left: (pos.left + 20) + "px"
		}).show();
}	


function update_train_files()
{
	$('#train_file_select').empty();
	$('#train_file_select').append(new Option ('','',false,false));

	if (document.getElementById("tr_all_file_checked").checked) 
	{
		myfilelist = all_filelist;
		train_file_filter_label = "Showing All";
	}
	if (document.getElementById("tr_train_file_checked").checked) 
	{
		myfilelist = train_filelist;
		train_file_filter_label = "Showing Train";
	}

	for (var i=0, len=myfilelist.length; i<len;i++) 
	{
				$('#train_file_select').append( new Option (myfilelist[i], myfilelist[i],false, false));
	}
	$('#train_file_filter_label').html(train_file_filter_label);
}


$(document).mouseup(function(e) 
{
    var container = $("#train_file_filter_div");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});