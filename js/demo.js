
(function(){
	var aBtnMenu=document.querySelectorAll('.js-btn-menu');
	for(var i=0;i<aBtnMenu.length;i++){
		aBtnMenu[i].count=0;
		aBtnMenu[i].children[0].children[0].addEventListener('animationend',function(){
			this.parentNode.classList.remove('tap-feedback-anim');
		});
		aBtnMenu[i].addEventListener('click',function(){
			var oIcon=this.children[0];
			this.count++;
			oIcon.style.transform='rotate('+this.count*180+'deg)';
			oIcon.classList.toggle('icon-menu-on');
			oIcon.classList.add('tap-feedback-anim');
		});


	}

	
	function autoPlay(){
		for(var j=0;j<aBtnMenu.length;j++){
			aBtnMenu[j].count=0;
			var oIcon=aBtnMenu[j].children[0];
			oIcon.classList.remove('icon-menu-on');
			oIcon.classList.remove('icon-menu-transition');
			oIcon.classList.add('icon-menu-anim');
			oIcon.classList.add('tap-feedback-anim');
			oIcon.style.transform='none';
		}
	}

	function stopPlay(){
		for(var j=0;j<aBtnMenu.length;j++){
			var oIcon=aBtnMenu[j].children[0];
			oIcon.classList.add('icon-menu-transition');
			oIcon.classList.remove('icon-menu-anim');
			oIcon.classList.remove('tap-feedback-anim');
		}
	}
	
	autoPlay();

	var oDemoBox1=document.querySelector('.demo-box1');
	oDemoBox1.onmouseenter=function(){
		stopPlay();
	}
	oDemoBox1.onmouseleave=function(){
		autoPlay();
	}
})();


