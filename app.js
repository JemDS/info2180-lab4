window.onload= function()
{

	var sbtn = document.getElementById('searchBtn');
	var xmlhttp;
	var form = document.getElementsByTagName('form')[0];

	sbtn.addEventListener("click", function(e){ 
		e.preventDefault();

		xmlhttp = new XMLHttpRequest();

		var url = "http://localhost/info2180-lab4/superheroes.php";
		xmlhttp.onreadystatechange = displaySuperHeroes;
		xmlhttp.open('GET', url);
		xmlhttp.send();
	});	


	function displaySuperHeroes()
	{
		if(xmlhttp.readyState === XMLHttpRequest.DONE)
		{
			if(xmlhttp.status === 200){
				var response = xmlhttp.responseText;
				var supList = document.querySelector('supLst');
				supList.textContent = response;
				supList.innerHTML = response;
			}
			else
			{
			alert("Error, Unable to generate list!");
			}
		}
	}


	function searchResult(str) 
	{
  		if (str.length == 0) 
  		{
    		document.getElementById("supLst").innerHTML = "";
    		return;
  		} 
  		else 
  		{
    		var xmlhttp = new XMLHttpRequest();
    		xmlhttp.onreadystatechange = function() 
    		{
      			if (this.readyState == 4 && this.status == 200) 
      			{
        		document.getElementById("supLst").innerHTML = this.responseText;
      			}
    		}
    	}
    	xmlhttp.open("GET", "http://localhost/info2180-lab4/superheroes.php" + str, true);
    	xmlhttp.send();		
  	}
};



