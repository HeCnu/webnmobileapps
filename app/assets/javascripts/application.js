// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require rails-ujs
//= require bootstrap.min
//= require icheck.min
//= require_tree .

$(document).ready(function() {
	$(document).on("click", "#button_for_create_todo", function(){
		$("#form_to_create_todo").submit();
	});

	$(document).on("click", "#button_for_show_form", function(){
		$("#snh_form").css({"display": "block"});
		$("#myModal").css("display", "block");
	});

	$(document).on("click", "#button_for_hide_form", function(){
		$("#snh_form").css({"display": "none"});
		$("#myModal").css("display", "none");
	});

	$('input').iCheck({
		checkboxClass: 'icheckbox_square-blue',
		radioClass: 'iradio_square-blue',
		increaseArea: '20%' // optional
	});

	$('input').on('ifChecked', function(event){
		var id_checker = $(this).attr('id');
		$("#form_to_update_todo_" + id_checker).submit();
	});

	$('input').on('ifUnchecked', function(event){
		var id_checker = $(this).attr('id');
		$("#form_to_update_todo_" + id_checker).submit();
	});

	$('.todo_checker').each(function() {
	    var id_checker = $(this).attr('id');
	    if($(this).prop("checked") == true){
	    	$("#todo_text_" + id_checker).css("text-decoration-line", "line-through");
	    }
	});

});