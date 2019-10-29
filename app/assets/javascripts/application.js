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
//= require_tree .

$(document).ready(function() {
	$(document).on("click", "#button_for_create_todo", function(){
		$("#form_to_create_todo").submit();
	});

	$(document).on("click", "#button_for_show_form", function(){
		$("#snh_form").css("visibility", "visible");
	});

	$(document).on("click", "#button_for_hide_form", function(){
		$("#snh_form").css("visibility", "hidden");
	});
});

