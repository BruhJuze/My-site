
    function bruh()
	{
	  var nyDiv = document.createElement('div');
      nyDiv.id = 'content';
	  document.body.appendChild(nyDiv);

      var min_div = document.getElementById("bbox");
      newContent = document.createTextNode("test");
  document.body.insertBefore(nyDiv, min_div);

      var music = new Audio('assets/boom.mp3');
      music.play();
    }