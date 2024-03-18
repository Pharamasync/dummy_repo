function get_selected_model()
{
	return ($('select[id="model_list"]').val());
}

function show_model_parameters()
{
		var el = document.getElementById("model_list");
		var value = el.options[el.selectedIndex].value;
		
		
			if(value == 'Logistic Regression')
			{
				console.log("LR");	
				document.getElementById("lr_model_configuration").style.display = "block";
				disable_search_elements(true);
			}				
			if(value == 'Decision Tree')
			{
				console.log("DT");
				document.getElementById("dt_model_configuration").style.display = "block";
				disable_search_elements(true);
			}
			if(value == 'Random Forest')
			{
				console.log("RF");			
				document.getElementById("rf_model_configuration").style.display = "block";
				disable_search_elements(true);
			}	
}

	function closeForm() {
		console.log("Close Form Clicked");
		var el = document.getElementById("model_list");
		var value = el.options[el.selectedIndex].value;	
		
		if(value == 'Logistic Regression')
		{			
			document.getElementById("lr_model_configuration").style.display = "none";
			disable_search_elements(false);
		}
		if(value == 'Decision Tree')
		{			
			document.getElementById("dt_model_configuration").style.display = "none";
			disable_search_elements(false);
		}
		if(value == 'Random Forest')
		{
			document.getElementById("rf_model_configuration").style.display = "none";
			disable_search_elements(false);
		}
	}

function disable_search_elements(dis)
{
	document.getElementById("model_list").disabled = dis;
	document.getElementById("train_file_selected").disabled = dis;
	document.getElementById("test_file_selected").disabled = dis;
	document.getElementById("variable_dropdown").disabled = dis;
	document.getElementById("dependent_variable_dropdown").disabled = dis;
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
		$('#model_list').select2({
			placeholder: "Select Model",
			allowClear: true
		});
		});		