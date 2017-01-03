
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
})();


