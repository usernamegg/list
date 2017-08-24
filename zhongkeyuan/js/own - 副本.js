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
	$(".erwei").hover(function(){
		$(".erweiarea").toggle();
		})
	})
//左侧下拉菜单
$(function(){
   $(".lm dl").mouseover(function(){
	  $(this).children('dt').addClass('act_lm').end().children("dd").slideDown();
	  $(this).siblings().children('dt').removeClass("act_lm").end().end().siblings().children
	  ("dd").slideUp();
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
$(function(){
	$(".ding").click(function(){
		$(".wai").css("display","none");
		$(".fanwei").css("display","none");
		})
	})
//
$(function(){
	$(".download").click(function(){
		$(".ding").css("display","block");
		
		})
	})
$(function(){
	$(".a1").click(function(){
		$(".k1").css("display","block");
		
		})
	})
$(function(){
	$(".a2").click(function(){
		$(".k2").css("display","block");
		
		})
	})
$(function(){
	$(".a3").click(function(){
		$(".k3").css("display","block");
		
		})
	})
$(function(){
	$(".a4").click(function(){
		$(".ding").css("display","block");
		
		})
	})	
	$(function(){
	$(".a5").click(function(){
		$(".ding").css("display","block");
		
		})
	})
	$(function(){
	$(".a6").click(function(){
		$(".ding").css("display","block");
		
		})
	})
	$(function(){
	$(".a7").click(function(){
		$(".ding").css("display","block");
		
		})
	})
	$(function(){
	$(".a8").click(function(){
		$(".ding").css("display","block");
		
		})
	})
	$(function(){
	$(".a9").click(function(){
		$(".ding").css("display","block");
		
		})
	})
	$(function(){
	$(".a10").click(function(){
		$(".ding").css("display","block");
		
		})
	})
	$(function(){
	$(".p11").click(function(){
		$(".a11").css("display","block");
		$(".b11").css("display","block");
		})
	})
	$(function(){
	$(".p12").click(function(){
		$(".a12").css("display","block");
		$(".b12").css("display","block");
		})
	})
	$(function(){
	$(".p13").click(function(){
		$(".a13").css("display","block");
		$(".b13").css("display","block");
		})
	})
	$(function(){
	$(".p14").click(function(){
		$(".a14").css("display","block");
		$(".b14").css("display","block");
		})
	})
	$(function(){
	$(".p15").click(function(){
		$(".a15").css("display","block");
		$(".b15").css("display","block");
		})
	})
	$(function(){
	$(".p16").click(function(){
		$(".a16").css("display","block");
		$(".b16").css("display","block");
		})
	})
	$(function(){
	$(".p17").click(function(){
		$(".a17").css("display","block");
		$(".b17").css("display","block");
		})
	})
	$(function(){
	$(".p18").click(function(){
		$(".a18").css("display","block");
		$(".b18").css("display","block");
		})
	})
	$(function(){
	$(".p19").click(function(){
		$(".a19").css("display","block");
		$(".b19").css("display","block");
		})
	})
	$(function(){
	$(".p20").click(function(){
		$(".a20").css("display","block");
		$(".b20").css("display","block");
		})
	})
	$(function(){
	$(".p21").click(function(){
		$(".a21").css("display","block");
		$(".b21").css("display","block");
		})
	})
	
	$(function(){
	$(".p22").click(function(){
		$(".a22").css("display","block");
		$(".b22").css("display","block");
		})
	})
	$(function(){
	$(".p23").click(function(){
		$(".a23").css("display","block");
		$(".b23").css("display","block");
		})
	})
	$(function(){
	$(".green").click(function(){
		$(".ding").css("display","block");
		
		})
	})
	
	$(function(){
	$(".fg").click(function(){
		$(".journal").css("display","block");
		
		})
	})

$(function(){
	$(".piliang").click(function(){
		$(".christ").css("display","block");
		
		})
	})
$(function(){
	$(".d1").click(function(){
		$(this).parent().parent().parent().siblings().find(".journal").css("display","block");
		
		})
	})
	$(function(){
	$(".d2").click(function(){
		$(".journal").css("display","block");
		
		})
	})
$(function(){
	$(".g1").click(function(){
		$(".sky").css("display","block");
		
		})
	})