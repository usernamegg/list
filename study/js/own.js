// JavaScript Document
//最后一个样式
$(function(){
	$(".h_solu .hsarea:last").css("background","none");
	$(".h_asseul li:last").css("marginRight","0");
	$(".hiul li:nth-child(3n)").css("marginRight","0");
	$(".sort .sortlist:last").css("border","0");
	$(".tuiul li:nth-child(4n)").css("marginRight","0");
	
	})

//首页行业解读
$(function(){
	$(".hiul li").hover(function(){
		$(this).find(".shade").fadeIn();
		},function(){
			$(this).find(".shade").fadeOut();
			})
	})

//返回顶部
$(function(){
	$(".gotop").click(function(){
		$('html,body').animate({'scrollTop':0},500);
	});
});
//
//侧边联系我们
$(function(){
		$(".ns_tit span").hover(function(){
			$(this).addClass("act_ns");
			$(this).siblings().removeClass("act_ns");
			var _index=$(this).index();
			$(".nsbox").eq(_index).show();
			$(".nsbox").eq(_index).siblings().hide();
		})
	});
//
//02专题解读4
$(function(){
	$(".tc_tit span").hover(function(){
		$(this).addClass("act_tc");
		$(this).siblings().removeClass("act_tc");
		var _index=$(this).index();
		$(".tcbox").eq(_index).show();
		$(".tcbox").eq(_index).siblings().hide();
	})
});

//
//
//
//
//





