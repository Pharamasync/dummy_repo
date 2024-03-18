function ShowHideFiles()
{
	if (document.getElementById("all_file_checked").checked) 
	{
		document.getElementById('All_datasets_div').style.display = "flex";
		document.getElementById('Train_datasets_div').style.display = "none";
		document.getElementById('Test_datasets_div').style.display = "none";
	}
	if (document.getElementById("train_file_checked").checked) 
	{
		document.getElementById('All_datasets_div').style.display = "none";
		document.getElementById('Train_datasets_div').style.display = "flex";
		document.getElementById('Test_datasets_div').style.display = "none";
	}
	if (document.getElementById("all_file_checked").checked) 
	{
		document.getElementById('All_datasets_div').style.display = "none";
		document.getElementById('Train_datasets_div').style.display = "none";
		document.getElementById('Test_datasets_div').style.display = "flex";
	}	
}