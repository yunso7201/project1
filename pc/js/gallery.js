$(function(){
	// gnb
	$("#GNB > .GNB_inner > ul > li").hover(
		function(){
			$("#GNB > .GNB_inner > ul").addClass("over");
		},
		function(){
			$("#GNB > .GNB_inner > ul").removeClass("over");
		}
	);

	$("#GNB > .GNB_inner > ul > li:first-child > a").focusin(function(){
		$("#GNB > .GNB_inner > ul").addClass("over");
	});
	$("#GNB li:last-child li:last-child").focusout(function(){
		$("#GNB > .GNB_inner > ul").removeClass("over");
	});

	$("#GNB > .GNB_inner > ul > li > a").focusin(function(){
		$(this).addClass("over");
	});
	$("#GNB li li:last-child").focusout(function(){
		$(this).parent().prev("a").removeClass("over");
	});

	// slide
	var keyvisual={
		key1 : "keyvisual1.jpg",
		key2 : "keyvisual2.jpg"
	}

	var dataN=0;
	// <div class="keyvisual">
	var keyContainer=document.getElementsByClassName("keyvisual")[0];

	// <div class="keyvisual_inner">
	var inner=document.createElement("div"); // 메모리에 그리기
	inner.setAttribute("class", "keyvisual_inner"); // 속성을 추가하기
	keyContainer.appendChild(inner); // appendChild() 화면 그리기

	// <div class="controlls">
	var controlls=document.createElement("div");
	controlls.setAttribute("class", "controlls");
	keyContainer.appendChild(controlls);

	var keyString="";
	var controllString="";

	keyString+='<ul class="keyimage">\n';
	controllString+='<ul>\n';


	for(key in keyvisual){ // for(키 in 오브젝트[키])
		// console.log(key+":"+keyvisual[key]);
		// <li><img src="images/keyvisual1.jpg" alt="Keyimage1"></li>
		keyString+='<li><img src="images/' + keyvisual[key] + '" alt="keyvisual'+ (dataN+1) + '"></li>\n';

		// <li class="active"><a href="">1</a></li>
		controllString+='<li><a href="">' + (dataN+1) + '</a></li>' // 추가

		// console.log("dataN:" + dataN); // for in 구문을 for처럼 사용하는 방법입니다,.
		dataN++; // 0, 1
	}

	keyString+='</ul>';
	inner.innerHTML=keyString;
	// console.log(keyString);

	controllString+='</ul>';
	controlls.innerHTML=controllString;
	console.log(controllString);

	var n1=0;

	$(".keyimage li").eq(0).addClass("on");
	$(".controlls li").eq(0).addClass("active");

	setInterval(function(){
		if(n1 < 1){
			n1=n1+1;
		}
		else{
			n1=0;
		}

		$(".keyimage li").removeClass("on");
		$(".keyimage li").eq(n1).addClass("on");
		$(".controlls li").removeClass("active");
		$(".controlls li").eq(n1).addClass("active");
	}, 7000);

	// search
	$(".campus_find dl dt a").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).parent().next("dd").slideToggle(300);
	});
	$(".campus_find .area dl dd a").click(function(e){
		e.preventDefault();
		$(".campus_find .area dl dd a").removeClass("active");
		$(this).addClass("active");

		listName=$(this).text();
		$(".campus_find .area dt a").html(listName+"<span></span>");
		$(".campus_find .area dl dd").slideUp(300);
		$(".campus_find .area dt a").removeClass("active");
	});
	$(".campus_find .store dl dd a").click(function(e){
		e.preventDefault();
		$(".campus_find .store dl dd a").removeClass("active");
		$(this).addClass("active");

		listName=$(this).text();
		$(".campus_find .store dt a").html(listName+"<span></span>");
		$(".campus_find .store dl dd").slideUp(300);
		$(".campus_find .store dt a").removeClass("active");
	});

	// banner
	var n2=0;
	var pos=0;

	$(".small_controlls li").click(function(e){
		e.preventDefault();
		n2=$(this).index();

		pos=-1*n2*368;
		$(".campus_wrap_moving ul").animate({left:pos}, 300);

		$(".small_controlls li a").removeClass("active");
		$(this).find("a").addClass("active");
	});

	var w=127;
	var amount=0;

	$(".prev").click(function(e){
		e.preventDefault();
		rightMoving();
	});
	$(".next").click(function(e){
		e.preventDefault();
		leftMoving();
	});

	function rightMoving(){
		$(".site_wrapper ul").prepend($(".site_wrapper ul li:last-child"));
		amount-=w;
		$(".site_wrapper ul").css({left:amount});
		amount+=w;
		$(".site_wrapper ul").animate({left:amount}, 500);
	}
	function leftMoving(){
		amount-=w;
		$(".site_wrapper ul").animate({left:amount}, 500, function(){
			$(this).append($(".site_wrapper ul li:first-child"));
			amount+=w;
			$(this).css({left:amount});
		});
	}
});
