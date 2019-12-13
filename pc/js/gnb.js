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
		console.log(depth2Li);

		if(j == 5){
			for(var k=0; k<depth2Li.length; k++){
				depth2Li[2].addEventListener("focusout", function(){
					gnbUl.classList.remove("over");
				});
			}
		}

		for(var h=0; h<depth2Li.length; h++){
			if(h == (depth2Li.length-1)){
				depth2Li[h].addEventListener("focusout", function(e){
					// console.log("focusout!!");
					console.log(e.currentTarget);
					var link=e.currentTarget.parentElement.previousElementSibling;
					link.classList.remove("over");
				});
			}
		}
	}
});
