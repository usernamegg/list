// JavaScript Document
//最后一个样式
$(function(){
	$(".hcul3 li:last").css("marginRight","0");
	})

//nav
$(function(){
	$(".nav li").hover(
	  function(){
		  $(".nav_dl",this).stop(false,true);
		  $(".nav_dl",this).slideDown(200);
		  },
	  function(){
		  $(".nav_dl",this).stop(false,true);
		  $(".nav_dl",this).slideUp(200);
		  }
	)
	$(".nav_dl dd").hover(
	  function(){
		  $(".subnav_dl",this).stop(false,true);
		  $(".subnav_dl",this).slideDown(200);
		  },
	  function(){
		  $(".subnav_dl",this).stop(false,true);
		  $(".subnav_dl",this).slideUp(200);
		  }
	)
	})

//侧边在线客服
$(function(){
	$(".weixin").hover(function(){
		$(".erweima").toggle();
		})
	})
//左侧下拉菜单
$(function(){
   $(".lm dl").mouseover(function(){
	  $(this).children('dt').addClass('act_lm').end().children("dd").slideDown();
	  $(this).siblings().children('dt').removeClass("act_lm").end().end().siblings().children("dd").slideUp();
   });
});

$(function(){
	$(".clockee li").hover(function(){
		$(this).find(".shade").fadeIn(200);
		},function(){
			$(this).find(".shade").fadeOut(200);
			})
	})
//
function che(){
		tt = document.getElementById("test");
		tt.style.display="block";}
//
//
$(function(){
	$(".ding").click(function(){
		$(".wai").css("display","none");
		$(".fanwei").css("display","none");
		})
	


		$(".a24").css("display","block");
		$(".b24").css("display","block");
		
	})