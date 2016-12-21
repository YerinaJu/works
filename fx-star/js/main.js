$(function() { 
		$(".h_srch input").focus(function(){
				$(".h_srch label").remove();
			});
		var gnbMenu = $(".h_menu a").mouseover(function(){
			$(this).addClass('hover');
		});
		gnbMenu.mouseout(function(){
			$(this).removeClass('hover');
		});
		var snbMenu = $(".snb_menu li a").mouseover(function(){
			$(this).addClass('hover');
		});
		snbMenu.mouseout(function(){
			$(this).removeClass('hover');
		});
		snbMenu.mousedown(function(){
			$(this).addClass('onclick');
		});
		snbMenu.mouseup(function(){
			$(this).removeClass('onclick');
		});
		$(".songlist input").click(function(){
			$(this).next().find('>a').addClass("selected");
		});
});