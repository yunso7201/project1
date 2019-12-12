// $(function(){
// 	// gnb
// 	$("#GNB > .GNB_inner > ul > li").hover(
// 		function(){
// 			$("#GNB > .GNB_inner > ul").addClass("over");
// 		},
// 		function(){
// 			$("#GNB > .GNB_inner > ul").removeClass("over");
// 		}
// 	);
//
// 	$("#GNB > .GNB_inner > ul > li:first-child > a").focusin(function(){
// 		$("#GNB > .GNB_inner > ul").addClass("over");
// 	});
// 	$("#GNB li:last-child li:last-child").focusout(function(){
// 		$("#GNB > .GNB_inner > ul").removeClass("over");
// 	});
//
// 	$("#GNB > .GNB_inner > ul > li > a").focusin(function(){
// 		$(this).addClass("over");
// 	});
// 	$("#GNB li li:last-child").focusout(function(){
// 		$(this).parent().prev("a").removeClass("over");
// 	});
// });

window.addEventListener("load", function(){
	var gnb=document.getElementById("GNB");

	for(var i=0; i<gnb.children.length; i++){
		if(gnb.children[i].className == "GNB_inner"){
			var inner=gnb.children[i];
		}
	}

	var gnbUl=inner.children[0];
	var depth1Li=inner.children[0].children;

	for(var j=0; j<depth1Li.length; j++){
		depth1Li[j].addEventListener("mouseenter", function(){
			gnbUl.classList.add("over");
		});
		depth1Li[j].addEventListener("mouseleave", function(){
			gnbUl.classList.remove("over");
		});
		depth1Li[j].children[0].addEventListener("focusin", function(e){
			e.target.classList.add("over");
		});
		depth1Li[0].children[0].addEventListener("focusin", function(){
			gnbUl.classList.add("over");
		});

		var depth2Li=depth1Li[j].children[1].children;

		if(j == 5){
			for(var k=0; k<depth2Li.length; k++){
				depth2Li[2].addEventListener("focusout", function(){
					gnbUl.classList.remove("over");
				});
				// 	$("#GNB li li:last-child").focusout(function(){
				// 		$(this).parent().prev("a").removeClass("over");
				// 	});
			}
		}
	}
});
