$(function(){
	$(".tab").click(function(){
		$("#GNB").addClass("active");
		$(".dim").addClass("active");
		$("body").addClass("static");
	});
	$(".close").click(function(){
		$("#GNB").removeClass("active");
		$(".dim").removeClass("active");
		$("body").removeClass("static");
	});

	$("#GNB > ul > li > a").click(function(e){
		e.preventDefault();

		if($(this).parent().hasClass("active") == false){
			$("#GNB > ul > li").removeClass("active");
			$(this).parent().addClass("active");

			$(".sub").slideUp(300);
			$(this).next(".sub").slideDown(300);
		}
		else {
			$(this).parent().removeClass("active");
			$(this).next(".sub").slideUp(300);
		}
	});

	var n=0;
	var pos=0;

	setInterval(function(){
		if(n < 2){
			n=n+1;
		}
		else{
			n=0;
		}

		pos=-1*n*(100);
		$("#start .keyvisual ul").css({"left" : pos+"%"});
	}, 5000);

	// new
	var newphotoH;
	var newtotal=3;
	var newpos=0;
	var photoN=0;

	function newLayout(){
		$(".new_photo img").css({width:"100%"}); // 먼저 이미지의 가로 크기를 100%로 지정합니다.
		newphotoH=$(".new_photo img").height()+200; // 가로 크기를 100%로 지정할 경우의 세로 높이를 얻습니다. 단, 설명글 높이만큼 추가합니다.
		// console.log("photo height : "+newphotoH);

		$(".new, .new_photo").css({height:newphotoH}); // 갤러리 컨테이너를 세로 크기를 지정합니다.
	}

	setTimeout(newLayout, 30);

	setInterval(function(){
		if(photoN < (newtotal-1)){ // 0, 1, 2
			photoN+=1;
		}
		else{
			photoN=0;
		}
		newpos=(photoN*100*-1)+"%";
		$(".new_photo").animate({left:newpos}, 300, function(){
			$(".controller li a").removeClass("active");
			$(".controller li").eq(photoN).find("a").addClass("active");
		});
	}, 6000);

	$(window).resize(newLayout);

	// popup
	$(".close").click(function(e){
		e.preventDefault();
		$(".popup").fadeOut(300);
		$(".dim2").fadeOut(300);
	});

	// close button
	$(".close_check").click(function(e){
		e.preventDefault();
		$(this).toggleClass("checked");

		if($(this).hasClass("checked")){
			$(this).next("input").prop("checked", true);
		}
		else{
			$(this).next("input").prop("checked", false);
		}
	});
});
