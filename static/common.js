<!--


//页面显示预设置

$(window).load(function (){ 


	//当存在可溢出层时重新定义这些层的高度
	

	var getObj = $('div.pdv_class');
	getObj.each(function(id) {
		
		var obj = this.id;
		if($("#s"+obj)[0].style.overflow=="visible"){
			
			
			//设置可溢出层的高度
			$("#"+obj)[0].style.height=$("#s"+obj)[0].offsetHeight +"px"; 
			//alert($("#"+obj)[0].style.height)

			var cha=0;
			var L=$("#"+obj)[0].offsetLeft;
			var T=$("#"+obj)[0].offsetTop;
			var R=$("#"+obj)[0].offsetLeft+$("#"+obj)[0].offsetWidth;
			var B=$("#"+obj)[0].offsetTop+$("#"+obj)[0].offsetHeight;
			
			var broObj=$("#"+obj).siblings(".pdv_class");  //找出可溢出层的兄弟元素
			broObj.each(function(id){
				var bro = this.id;
				var broL=$("#"+bro)[0].offsetLeft;
				var broT=$("#"+bro)[0].offsetTop;
				var broH=$("#"+bro)[0].offsetHeight;
				var broR=$("#"+bro)[0].offsetLeft+$("#"+bro)[0].offsetWidth;
				
				
				if(((broL<L && broR>L) || (broL>L && broL<R) || broL==L) && broT>T){
					$("#"+bro)[0].style.top= B + cha +10 +"px"; //设置可溢出层的top值
					cha=cha+broH+10;
				 	//$("#"+bro)[0].style.top = "0px";
				}
				
			});
			//alert($("#s"+obj)[0].width);
		}else if($("#s"+obj)[0].style.overflow=="inherit"){
				$("#s"+obj+" .pdv_border").outerHeight($(this).height());
			}else{
				
				//设置插件边框层的高度
				
				var borderH=$("#s"+obj)[0].offsetHeight;
				var bbw=$("#s"+obj).find(".pdv_border").css("borderWidth");
				var bbp=$("#s"+obj).find(".pdv_border").css("padding");
				var bbm=$("#s"+obj).find(".pdv_border").css("margin");

				if(bbm=="auto"){bbm=0}

				bbw ? borderH-=parseInt(bbw)*2 : borderH-=0 ;
				bbp ? borderH-=parseInt(bbp)*2 : borderH-=0 ;
				bbm ? borderH-=parseInt(bbm)*2 : borderH-=0 ;

				$("#s"+obj).children(".pdv_border").eq(0).css("height",borderH +"px");
			
				
		}

	});

	

	//计算三个容器的高度

	var getObj = $('div.pdv_top');
	var th=0,h=0;
	getObj.each(function(id) {
		var obj = this.id;
		h=$("#"+obj).parents()[0].offsetTop + $("#"+obj).parents()[0].offsetHeight;
		th = th>h?th:h;
	});
	$("#top")[0].style.height = th + "px";
	$("#topex").css({height: th + "px",top:$("#top")[0].offsetTop});

	

	var getObj = $('div.pdv_content');
	var ch=0,h=0;
	getObj.each(function(id) {
		var obj = this.id;

		h=$("#"+obj).parents()[0].offsetTop + $("#"+obj).parents()[0].offsetHeight;
		ch = ch>h?ch:h;
	});
	$("#content")[0].style.height = ch + "px";
	$("#contentex").css({height: ch + "px",top:$("#content")[0].offsetTop});


	var getObj = $('div.pdv_bottom');
	var bh=0,h=0;
	getObj.each(function(id) {
		var obj = this.id;
		h=$("#"+obj).parents()[0].offsetTop + $("#"+obj).parents()[0].offsetHeight;
		bh = bh>h?bh:h;
	});
	
	$("#bottom")[0].style.height = bh + "px";
	$("#bottomex").css({height: bh + "px",top:$("#bottom")[0].offsetTop});

	
	//防底部溢出
	$().setBg();
	var OST=0;
	$(window).bind("scroll", function(){ 
		if((($(window).scrollTop()-OST)>=100 && OST<1) || ($(window).scrollTop()>=$(window).height() && OST<$(window).height()) || ($(window).scrollTop()>=($(document).height()-$(window).height()-50) && OST<($(document).height()-$(window).height()-50))){
			$().setBg();
			OST=$(window).scrollTop();
		}
		
	});

});




/**
* setBg
* 当页面内容动态变动时,重新调整各层及背景高度
*/
(function($){
	$.fn.setBg = function(){
		var getDrag = $('div.pdv_class');
		getDrag.each(function(id) {
			var obj = this.id;

			if($("#s"+obj)[0].style.overflow=="visible"){
				
				//设置可溢出层的高度
				$("#"+obj)[0].style.height=$("#s"+obj)[0].offsetHeight +"px"; 
			
				var cha=0;
				var L=$("#"+obj)[0].offsetLeft;
				var T=$("#"+obj)[0].offsetTop;
				var R=$("#"+obj)[0].offsetLeft+$("#"+obj)[0].offsetWidth;
				var B=$("#"+obj)[0].offsetTop+$("#"+obj)[0].offsetHeight;
				
				var broObj=$("#"+obj).siblings(".pdv_class");  //找出可溢出层的兄弟元素
				broObj.each(function(id){
					var bro = this.id;
					var broL=$("#"+bro)[0].offsetLeft;
					var broT=$("#"+bro)[0].offsetTop;
					var broH=$("#"+bro)[0].offsetHeight;
					var broR=$("#"+bro)[0].offsetLeft+$("#"+bro)[0].offsetWidth;
					
					
					if(((broL<L && broR>L) || (broL>L && broL<R) || broL==L) && broT>T){
					
						$("#"+bro)[0].style.top= B + cha +10 +"px"; //设置可溢出层的top值
						cha=cha+broH+10;
					
					}
					
				});
			}
		});

		//计算三个容器的高度

		var isAdminmenu=$("#adminmenu").is(":visible");
		var isAdminbar=$("#adminbar").is(":visible");
		var isAdminshowme=$("#adminbar_showme").is(":visible");
		var AT=0,AH=0;
		if(isAdminmenu==true){
			if(isAdminshowme==true){
				AT=0;
			}else{
				AT=32;
			}
		}

		if(isAdminbar==true){
			if(isAdminshowme==true){
				AT=0;
				AH=2;
			}else{
				AT=288;
				AH=2;
			}
		}

		var getObj = $('div.pdv_top');
		var th=0,h=0;
		getObj.each(function(id) {
			
			var obj = this.id;
			h=$("#"+obj).parents()[0].offsetTop + $("#"+obj).parents()[0].offsetHeight;
			th = th>h?th:h;
		});
		$("#top")[0].style.height = th + "px";
		$("#topex").css({height: th+AH+ "px",top:$("#top")[0].offsetTop+AT+"px"});

		

		var getObj = $('div.pdv_content');
		var ch=0,h=0;
		getObj.each(function(id) {
			var obj = this.id;

			h=$("#"+obj).parents()[0].offsetTop + $("#"+obj).parents()[0].offsetHeight;
			ch = ch>h?ch:h;
		});
		$("#content")[0].style.height = ch + "px";
		$("#contentex").css({height: ch +AH + "px",top:$("#content")[0].offsetTop+AT+"px"});


		var getObj = $('div.pdv_bottom');
		var bh=0,h=0;
		getObj.each(function(id) {
			var obj = this.id;
			h=$("#"+obj).parents()[0].offsetTop + $("#"+obj).parents()[0].offsetHeight;
			bh = bh>h?bh:h;
		});
		
		$("#bottom")[0].style.height = bh + "px";
		$("#bottomex").css({height: bh +AH + "px",top:$("#bottom")[0].offsetTop+AT+"px"});
		
		if($("#advsex").length>0 && $("#advsexDiv").length>0){
			AOF=$("#advsexDiv").offset();
			$("#advsex").css({top:AOF.top+AT-0+"px"});
		}
		if($("#advsex1").length>0 && $("#advsexDiv1").length>0){
			AOF1=$("#advsexDiv1").offset();
			$("#advsex1").css({top:AOF1.top+AT-0+"px"});
		}
		if($("#advsex2").length>0 && $("#advsexDiv2").length>0){
			AOF2=$("#advsexDiv2").offset();
			$("#advsex2").css({top:AOF2.top+AT-0+"px"});
		}
		if($("#advsex3").length>0 && $("#advsexDiv3").length>0){
			AOF3=$("#advsexDiv3").offset();
			$("#advsex3").css({top:AOF3.top+AT-0+"px"});
		}
		if($("#advsex4").length>0 && $("#advsexDiv4").length>0){
			AOF4=$("#advsexDiv4").offset();
			$("#advsex4").css({top:AOF4.top+AT-0+"px"});
		}
		if($("#advsex5").length>0 && $("#advsexDiv5").length>0){
			AOF5=$("#advsexDiv5").offset();
			$("#advsex5").css({top:AOF5.top+AT-0+"px"});
		}
		if($("#advsex6").length>0 && $("#advsexDiv6").length>0){
			AOF6=$("#advsexDiv6").offset();
			$("#advsex6").css({top:AOF6.top+AT-0+"px"});
		}
	};
})(jQuery);






//刷新图形码
$(document).ready(function() {

	$("img#codeimg").click(function () { 
		$("img#codeimg")[0].src=PDV_RP+"codeimg.php?"+Math.round(Math.random()*1000000);
	 });

	$("#getImgCode").click(function () { 
		$("img#codeimg")[0].src=PDV_RP+"codeimg.php?"+Math.round(Math.random()*1000000);
	 });
});




//生成静态页，直接在html状态下生成静态页,在管理状态下,跳转到非静态
function BuildHtml(RP,ver,catchtime,i){
		
		$.ajax({
			type: "GET",
			url:"./index.php",
			data: i+".html&htmlversion="+ver+"&htmlcatchtime="+catchtime,
			success: function(msg){
				if(msg=="NOCATCH"){
					if(i=='index'){
						window.location='index.php';
					}else{
						window.location='./?'+i+'.html';
					}
				}
				
			}
		});
	
}


//模板内下拉菜单提交后选中
function selOption(selname,v){
	for(var i=0;i<selname.length;i++)
	{
		if(selname.options[i].value==v){
		selname.options[i].selected=true;
		}
	}
}


//获取弹出式登录框
(function($){
	$.fn.popLogin = function(act){
		
		//获取登录表单
		$.ajax({
			type: "POST",
			url:PDV_RP+"member/post.php",
			data: "act=getpoploginform&RP="+PDV_RP,
			success: function(msg){
				
				$('html').append(msg);
				$.blockUI({message: $('div#loginDialog'),css:{width:'300px'}}); 
				$('.pwClose').click(function() { 
					$.unblockUI(); 
					$('div#loginDialog').remove();
					 window.location.reload();
				}); 

				$('img#zhuce').click(function() { 
					$.unblockUI(); 
					window.location=PDV_RP+"member/reg.php";
				}); 

				$("img#fmCodeImg").click(function () { 
					$("img#fmCodeImg")[0].src=PDV_RP+"codeimg.php?"+Math.round(Math.random()*1000000);
				 });

				 $('#LoginForm').submit(function(){ 

					$('#LoginForm').ajaxSubmit({
						target: 'div#loginnotice',
						url: PDV_RP+'post.php',
						success: function(msg) {
							
							if(msg=="OK" || msg.substr(0,2)=="OK"){
								$('div#loginnotice').hide();
								$.unblockUI(); 
								$('div#loginDialog').remove();
								if(act=="1"){
									$("div#notLogin").hide();
									$("div#isLogin").show();
									$("span#username").html(getCookie("MUSER"));
								}else if(act=="2"){
									window.location.reload();
								}else{
									$().alertwindow("会员登录成功","");
								}
								
							}else{
							$("img#fmCodeImg")[0].src=PDV_RP+"codeimg.php?"+Math.round(Math.random()*1000000);
								$('div#loginnotice').show();
							}
						}
					}); 
			   
				return false; 

			 }); 


			}
		});

		
	};
})(jQuery);



//图片自适应,参数fitType=fill为填充式，fitType=auto为横竖排列自适应
(function($){
	$.fn.picFit = function(fitType){

		
		var maxHeight,maxWidth,accMax,MT,ML;
		
		$("div.picFit").each(function(){
			maxHeight=parseInt($(this).css("height"));
			maxWidth=parseInt($(this).css("width"));
			accMax=maxWidth/maxHeight;

			$(this).find("img").each(function(){
				
				$(this).css({width:"",height:""});

				if(fitType=="auto"){
						if($(this)[0].offsetHeight>=$(this)[0].offsetWidth/accMax){
							$(this).css({height:maxHeight+"px"});
						}else{
							$(this).css({width:maxWidth+"px"});
							MT = (maxHeight-$(this)[0].offsetHeight)/2 + "px";
							$(this).css({marginTop:MT});
						}

				}else if(fitType=="fill"){
						if($(this)[0].offsetHeight>=$(this)[0].offsetWidth/accMax){
							$(this).css({width:maxWidth+"px"});
							MT = (maxHeight-$(this)[0].offsetHeight)/2 + "px";
							//$(this).css({marginTop:MT});
						}else{
							$(this).css({height:maxHeight+"px"});
							ML = (maxWidth-$(this)[0].offsetWidth)/2 + "px";
							//$(this).css({marginLeft:ML});
						}
				}else{
						$(this).css({width:maxWidth+"px",height:maxHeight+"px"});
				}

			});


		});

	};

})(jQuery);



//分组标签切换
(function($){
	$.fn.switchLable = function(pdvid,lables,roll){
		
		
		//排版状态下无效
		if(getCookie("PLUSADMIN")=="SET"){return false}

		//pdvid未定义无效
		if(pdvid==""){return false}

		//获取标签的样式名称
		var GBL=$("ul#gblable_"+pdvid).children();
		var CLN=GBL[0].className;
		var CUR=CLN+"_current";
		var R,S;

		
		//清空标签,获取被控层编号,决定标签数量
		$("ul#gblable_"+pdvid).empty();
		$("#pdv_"+pdvid).css({zIndex:32});
		$("#pdv_"+pdvid)[0].title="";

		var strAry=lables.split(",");
		for(i=0;i<strAry.length;i++){
			if(strAry[i]=="" || parseInt(strAry[i])==NaN){return false}
			if($("#pdv_"+strAry[i])[0] && strAry[i]!=pdvid){
				if(i==0){
					$("#pdv_"+strAry[i]).css({zIndex:99});
					$("ul#gblable_"+pdvid).append("<li id='GBLLIST_"+i+"' class='"+CUR+"'>"+$("#pdv_"+strAry[i])[0].title+"</li>");
				}else{
					$("#pdv_"+strAry[i]).css({zIndex:31});
					$("ul#gblable_"+pdvid).append("<li id='GBLLIST_"+i+"' class='"+CLN+"'>"+$("#pdv_"+strAry[i])[0].title+"</li>");
				}
			}
			
		}
		
		R=$("ul#gblable_"+pdvid).children();
		S=R.size();
		
		
		if(roll=="click"){
			R.click(function(){
				R.each(function(){
					$(this)[0].className=CLN;
					$("#pdv_"+strAry[this.id.substr(8)]).hide();
				});
				$(this)[0].className=CUR;
				$("#pdv_"+strAry[this.id.substr(8)]).show();
				$("#pdv_"+strAry[this.id.substr(8)]).css({zIndex:99});
				
			});	
		}else{
			R.mouseover(function(){
				R.each(function(){
					$(this)[0].className=CLN;
					$("#pdv_"+strAry[this.id.substr(8)]).hide();
				});
				$(this)[0].className=CUR;
				$("#pdv_"+strAry[this.id.substr(8)]).show();
				$("#pdv_"+strAry[this.id.substr(8)]).css({zIndex:99});
			});	
		}

		//自动播放
		if(roll=="auto"){
			setInterval(function(){
				var nextId=0;
				R.each(function(id){
					if($(this)[0].className==CUR){
						nextId=id+1;
						if(nextId>=S){
							nextId=0;
						}
					}
					$(this)[0].className=CLN;
					$("#pdv_"+strAry[this.id.substr(8)]).hide();
				});
				R[nextId].className=CUR;
				$("#pdv_"+strAry[R[nextId].id.substr(8)]).show();
				$("#pdv_"+strAry[R[nextId].id.substr(8)]).css({zIndex:99});

			}, 5000);
		}
		

	};

})(jQuery);

function animate(node, config){
	var O = $(node);
	if(!O.size()) return;
	var replace = {"上": "top", "下": "bottom", "左": "left", "右": "right"};
	var css = {position: "relative"};
	var css2 = {};
	var i = $.guid++;
	
	with(config) {
		if( opacity != 1 ) {
			css['opacity'] = opacity;
			css2['opacity'] = 1;
		}
		if( distance != 0 ) {
			direction = replace[direction]||direction;
			var k = direction == 'top' || direction == 'bottom' ? "top" : "left";
			var v = direction == 'top' || direction == 'left' ? -distance : +distance;
			css[k] = v;
			css2[k] = 0;
		}
		rotation = rotation.toUpperCase();
        if(rotation == 'X' || rotation == 'Y' || rotation == 'Z'){
		//for( rotation in ['X', 'Y', 'Z'] ) {
		  //alert('123');
			css2['rotate'+rotation] = "360deg";

		}
		if( scale == '小变大' ) {
			$.Velocity && $.Velocity.hook(O, "scale", "0.5");
			css2['scale'] = 1;
		}else if( scale == '大变小' ) {
			$.Velocity && $.Velocity.hook(O, "scale", "2");
			css2['scale'] = 1;
		}
		O.css(css);
		var W = $(window).on("scroll."+i+" resize"+i, function(){
			var p = O.parent(".pdv_class");
			if( !p.size() ) p = O; 
			if(W.scrollTop()+W.height() > p.offset().top) {
				W.off("."+i);
				O.velocity(css2, {delay: delay, duration: duration, easing: easing});
			}
				
		});
		W.trigger("scroll."+i);
	}
}

-->