document.oncontextmenu = contextmenu;
function contextmenu(e) {
	e.preventDefault();
}

$(window).on('load', function(){
  $('#loading').fadeOut(500);
});