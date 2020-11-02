window.onload = () => {
	//获取dom元素
	let arrowEl = document.querySelector('#head .headMain > .arrow');
	let navLiEl = document.querySelectorAll('#head .headMain > .nav > .list > li');
	let upEls = document.querySelectorAll('#head .headMain > .nav > .list > li .up');
	let firstliEl = navLiEl[0];
	let upEl = firstliEl.querySelector('.up');
	let head = document.querySelector('#head');
	let content = document.querySelector('#content');
	let contentLi = document.querySelectorAll('#content .list > li');
	let contentList = document.querySelector('#content .list');

	let home2LiNodes = document.querySelectorAll('#content > .list > .home .home2 > li');
	let home1LiNodes = document.querySelectorAll('#content > .list > .home .home1 > li');
	let home1 = document.querySelector('#content > .list > .home > section');

	let aboutUls = document.querySelectorAll('#content > .list > .about .about3 > .item > ul');

	let dotLis = document.querySelectorAll('#content > .dot > li');

	let team3Lis = document.querySelectorAll('#content > .list > .team .team3 > ul > li');
	let team3Ul = document.querySelector('#content > .list > .team .team3');

	let music = document.querySelector('#head > .headMain .music');
	let audio = document.querySelector('#head > .headMain .music audio');

	let mask = document.querySelector('#mask');
	let line = document.querySelector('#mask > .line');
	let upUi = document.querySelector('#mask > .up');
	let downUi = document.querySelector('#mask > .down');
	//开机动画
	loadingAn();
	function loadingAn(){
		let arr = ['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','about1.jpg','about2.jpg','about3.jpg','about4.jpg','worksimg1.jpg','worksimg2.jpg','worksimg3.jpg','worksimg4.jpg','team.png','greenLine.png'];
		let flag = 0;
		for (let i = 0,len = arr.length; i < len; i++) {
			let img = new Image();
			img.src = `img/${arr[i]}`;
			img.onload = () => {
				flag++;
				line.style.width = flag * 100/arr.length + '%';
			};
		}
		line.addEventListener('transitionend',function(){
			if(flag === arr.length){
				this.style.display = 'none';
				upUi.style.height = 0;
				downUi.style.height = 0;
			}
		});
		upUi.addEventListener('transitionend',() => {
			anArr[0].inAn();
			mask.remove();
			audio.play();
			home3D();
		});
	}
	//音频
	music.addEventListener('click',function(){
		if(audio.paused){
			audio.play();
			this.style.background = 'url(img/musicon.gif) no-repeat';
		}else{
			audio.pause();
			this.style.background = 'url(img/musicoff.gif) no-repeat';
		}
	});
	//出入场
	var anArr = [
		{
			inAn:() => {
				let home1 = document.querySelector('#content > .list > .home .home1');
				let home2 = document.querySelector('#content > .list > .home .home2');
				home1.style.transform = 'translateY(0)';
				home2.style.transform = 'translateY(0)';
				home1.style.opacity = 1;
				home2.style.opacity = 1;
			},
			outAn:() => {
				let home1 = document.querySelector('#content > .list > .home .home1');
				let home2 = document.querySelector('#content > .list > .home .home2');
				home1.style.transform = 'translateY(-400px)';
				home2.style.transform = 'translateY(100px)';
				home1.style.opacity = 0;
				home2.style.opacity = 0;
			}
		},
		{
			inAn:() => {
				let plane1 = document.querySelector('#content > .list > .course .plane1');
				let plane2 = document.querySelector('#content > .list > .course .plane2');
				let plane3 = document.querySelector('#content > .list > .course .plane3');
				plane1.style.transform = 'translate(0,0)';
				plane2.style.transform = 'translate(0,0)';
				plane3.style.transform = 'translate(0,0)';
			},
			outAn:() => {
				let plane1 = document.querySelector('#content > .list > .course .plane1');
				let plane2 = document.querySelector('#content > .list > .course .plane2');
				let plane3 = document.querySelector('#content > .list > .course .plane3');
				plane1.style.transform = 'translate(-200px,-200px)';
				plane2.style.transform = 'translate(-200px,200px)';
				plane3.style.transform = 'translate(200px,-200px)';
			}
		},
		{
			inAn:() => {
				let pencel1 = document.querySelector('#content > .list > .works .pencel1');
				let pencel2 = document.querySelector('#content > .list > .works .pencel2');
				let pencel3 = document.querySelector('#content > .list > .works .pencel3');
				pencel1.style.transform = 'translateY(0)';
				pencel2.style.transform = 'translateY(0)';
				pencel3.style.transform = 'translateY(0)';
			},
			outAn:() => {
				let pencel1 = document.querySelector('#content > .list > .works .pencel1');
				let pencel2 = document.querySelector('#content > .list > .works .pencel2');
				let pencel3 = document.querySelector('#content > .list > .works .pencel3');
				pencel1.style.transform = 'translateY(-100px)';
				pencel2.style.transform = 'translateY(100px)';
				pencel3.style.transform = 'translateY(100px)';
			}
		},
		{
			inAn:() => {
				let rect1 = document.querySelector('#content > .list > .about .about3 > .item:nth-child(1)');
				let rect2 = document.querySelector('#content > .list > .about .about3 > .item:nth-child(2)');
				rect1.style.transform = 'rotate(0)';
				rect2.style.transform = 'rotate(0)';
			},
			outAn:() => {
				let rect1 = document.querySelector('#content > .list > .about .about3 > .item:nth-child(1)');
				let rect2 = document.querySelector('#content > .list > .about .about3 > .item:nth-child(2)');
				rect1.style.transform = 'rotate(45deg)';
				rect2.style.transform = 'rotate(-45deg)';
			}
		},
		{
			inAn:() => {
				let team1 = document.querySelector('#content > .list > .team .team1');
				let team2 = document.querySelector('#content > .list > .team .team2');
				team1.style.transform = 'translateX(0)';
				team2.style.transform = 'translateX(0)';
			},
			outAn:() => {
				let team1 = document.querySelector('#content > .list > .team .team1');
				let team2 = document.querySelector('#content > .list > .team .team2');
				team1.style.transform = 'translateX(-200px)';
				team2.style.transform = 'translateX(200px)';
			}
		},
	];
	for (let i = 0,len = anArr.length; i < len; i++) {
		anArr[i].outAn();
	}
	//第五屏气泡效果
	biubiu();
	function biubiu(){
		let oc = null;
		let timer1 = 0;
		let timer2 = 0;
		for (let i = 0,len = team3Lis.length; i < len; i++) {
			team3Lis[i].onmouseenter = function(){
				for (let i = 0,len = team3Lis.length; i < len; i++) {
					team3Lis[i].style.opacity = .5;
				}
				this.style.opacity = 1;
				addCanvas();
				oc.style.left = this.offsetLeft + 'px';
			}
		}
		function addCanvas(){
			if(!oc){
				oc = document.createElement('canvas');
				oc.width = team3Lis[0].offsetWidth;
				oc.height = team3Lis[0].offsetHeight * 2 / 3;
				team3Ul.appendChild(oc);
				team3Ul.onmouseleave = function(){
					for (let i = 0,len = team3Lis.length; i < len; i++) {
						team3Lis[i].style.opacity = 1;
					}
					clearInterval(timer1);
					clearInterval(timer2);
					oc.remove();
					oc = null;
				}
				qipao();
			}
		}
		//气泡
		function qipao(){
			let arr = [];
			let ctx = oc.getContext('2d');
			timer1 = setInterval(() => {
				ctx.clearRect(0,0,oc.width,oc.height);
				for (let i = 0,len = arr.length; i < len; i++) {
					let d = arr[i];
					ctx.save();
					ctx.fillStyle = `rgba(${d.r},${d.g},${d.b},${d.a})`;
					ctx.beginPath();
					let rad = d.deg * Math.PI / 180;
					d.x = d.startX + Math.sin(rad) * d.step * 2;
					d.y = d.startY - rad * d.step;
					d.deg+=10;
					ctx.arc(d.x,d.y,d.z,0,2 * Math.PI);
					ctx.fill();
					ctx.restore();
					if(d.y <= 50){
						arr.splice(i,1);
						len--;
						i--;
					}
				}
			},100/6);
			timer2 = setInterval(() => {
				let x = (Math.random() * oc.width) >> 0;
				let z = ((Math.random() * 6) + 2) >> 0;
				let y = oc.height - z;
				arr.push({
					x:x,
					y:y,
					z:z,
					r:(Math.random() * 255) >> 0,
					g:(Math.random() * 255) >> 0,
					b:(Math.random() * 255) >> 0,
					a:1,
					deg:0,
					step:((Math.random() * 20) + 10) >> 0,
					startX:x,
					startY:y
				});
			},50);
		}
	}

	//第四屏图片炸裂效果
	picBoom();
	function picBoom(){
		for (let i = 0,len = aboutUls.length; i < len; i++) {
			change(aboutUls[i]);
		}
		function change(ul){
			let src = ul.dataset.src;
			let w = ul.offsetWidth / 2;
			let h = ul.offsetHeight / 2;
			for (let i = 0; i < 4; i++) {
				let liNode = document.createElement('li');
				liNode.style.width = w + 'px';
				liNode.style.height = h + 'px';
				let imgNode = document.createElement('img');
				imgNode.src = src;
				//left top
				//0	0
				//-1 0
				//0 -1
				//-1 -1
				imgNode.style.left = -(i % 2 * w) + 'px'; 
				imgNode.style.top = -(Math.floor(i / 2) * h) + 'px';
				liNode.appendChild(imgNode);
				ul.appendChild(liNode);
			}
			let imgs = ul.querySelectorAll('li > img');
			ul.addEventListener('mouseenter',() => {
				//left top
				//0	1
				//-2 0
				//1 -1
				//-1 -2
				let arrLeft = [0,-2,1,-1];
				let arrTop = [1,0,-1,-2];
				for (let i = 0,len = imgs.length; i < len; i++) {
					imgs[i].style.left = arrLeft[i] * w + 'px';
					imgs[i].style.top = arrTop[i] * h + 'px';
				}
			});
			ul.addEventListener('mouseleave',() => {
				for (let i = 0,len = imgs.length; i < len; i++) {
					imgs[i].style.left = -(i % 2 * w) + 'px'; 
					imgs[i].style.top = -(Math.floor(i / 2) * h) + 'px';
				}
			});
		}
	}
	//第一屏3D效果
	let oldIndex = 0;
	let autoIndex = 0;
	let timer3D = 0;
	function home3D(){
		for (let i = 0,len = home2LiNodes.length; i < len; i++) {
			home2LiNodes[i].index = i;
			home2LiNodes[i].onclick = function() {
				clearInterval(timer3D);
				for (let i = 0,len = home2LiNodes.length; i < len; i++) {
					home2LiNodes[i].classList.remove('active');
				}
				this.classList.add('active');
				//从左往右 当前索引大于上一次索引leftHide rightShow
				if(this.index > oldIndex){
					home1LiNodes[this.index].classList.remove('leftShow');
					home1LiNodes[this.index].classList.remove('leftHide');
					home1LiNodes[this.index].classList.remove('rightHide');
					home1LiNodes[this.index].classList.add('rightShow');
					home1LiNodes[oldIndex].classList.remove('rightShow');
					home1LiNodes[oldIndex].classList.remove('rightHide');
					home1LiNodes[oldIndex].classList.remove('leftShow');
					home1LiNodes[oldIndex].classList.add('leftHide');
				}
				//从右往左 当前索引小于上一次索引rightHide leftShow
				if(this.index < oldIndex){
					home1LiNodes[this.index].classList.remove('rightShow');
					home1LiNodes[this.index].classList.remove('leftHide');
					home1LiNodes[this.index].classList.remove('rightHide');
					home1LiNodes[this.index].classList.add('leftShow');
					home1LiNodes[oldIndex].classList.remove('rightShow');
					home1LiNodes[oldIndex].classList.remove('leftHide');
					home1LiNodes[oldIndex].classList.remove('leftShow');
					home1LiNodes[oldIndex].classList.add('rightHide');
				}
				oldIndex = this.index;
				autoIndex = this.index;
			}
		}
		move();
		function move(){
			clearInterval(timer3D);
			timer3D = setInterval(() => {
				autoIndex++;
				if(autoIndex == home1LiNodes.length){
					autoIndex = 0;
				}
				for (let i = 0,len = home2LiNodes.length; i < len; i++) {
					home2LiNodes[i].classList.remove('active');
				}
				home2LiNodes[autoIndex].classList.add('active');
				home1LiNodes[autoIndex].classList.remove('leftShow');
				home1LiNodes[autoIndex].classList.remove('leftHide');
				home1LiNodes[autoIndex].classList.remove('rightHide');
				home1LiNodes[autoIndex].classList.add('rightShow');
				home1LiNodes[oldIndex].classList.remove('rightShow');
				home1LiNodes[oldIndex].classList.remove('rightHide');
				home1LiNodes[oldIndex].classList.remove('leftShow');
				home1LiNodes[oldIndex].classList.add('leftHide');
				oldIndex = autoIndex;
			},2000);
		}
		home1.addEventListener('mouseenter',() => clearInterval(timer3D));
		home1.addEventListener('mouseleave',move);
	}

	//同步当前屏幕的索引
	let now = 0;
	//出入场上一页面索引
	let anIndex = 0;
	onresize = () => {
		contentBind();
		arrowEl.style.left = navLiEl[now].offsetLeft + navLiEl[now].offsetWidth / 2 - arrowEl.offsetWidth / 2 + 'px';
		contentList.style.top = -now * (document.documentElement.clientHeight - head.offsetHeight) + 'px';
	}
	//头部交互
	headBind();
	function headBind(){
		upEl.style.width = '100%';
		arrowEl.style.left = firstliEl.offsetLeft + firstliEl.offsetWidth / 2 - arrowEl.offsetWidth / 2 + 'px';
		for(let i = 0,len = navLiEl.length; i < len; i++){
			navLiEl[i].index = i;
			dotLis[i].index = i;
			navLiEl[i].onclick = function() {
				move(this.index);
			}
			dotLis[i].onclick = function(){
				move(this.index);
			}
		}
	}
	//动画的核心函数
	function move(index){
		now = index;
		if(anArr[anIndex] && typeof anArr[anIndex].outAn === 'function'){
			anArr[anIndex].outAn();
		}
		if(anArr[index] && typeof anArr[index].inAn === 'function'){
			anArr[index].inAn();
		}
		anIndex = index;
		for(let i = 0,len = upEls.length; i < len; i++){
			upEls[i].style.width = '';
		}
		upEls[index].style.width = '100%';
		arrowEl.style.left = navLiEl[index].offsetLeft + navLiEl[index].offsetWidth / 2 - arrowEl.offsetWidth / 2 + 'px';
		contentList.style.top = -index * (document.documentElement.clientHeight - head.offsetHeight) + 'px';
		for (let i = 0,len = dotLis.length; i < len; i++) {
			dotLis[i].className = '';
		}
		dotLis[index].className = 'active';
	}		

	//内容区交互
	if(content.addEventListener){
		content.addEventListener('DOMMouseScroll', ev => wheel(ev));
	}
	content.onmousewheel = ev => wheel(ev);
	let time = 0;
	function wheel(ev){
		ev = ev || event;
		clearTimeout(time);
		time = setTimeout(() => fn(ev),200);
	}
	function fn(ev){
		ev = ev || event;
		let dir = '';
		if(ev.wheelDelta){
			dir = ev.wheelDelta > 0 ? 'up' : 'down';
		}else if(ev.detail){
			dir = ev.detail < 0 ? 'up' : 'down';
		}
		switch (dir){
			case 'up':
				if(now > 0){
					now--;
					move(now);
				}
				break;
			case 'down':
				if(now < contentLi.length - 1){
					now++;
					move(now);
				}
				break;
		}
	}
	contentBind();
	function contentBind(){
		content.style.height = document.documentElement.clientHeight - head.offsetHeight + 'px';
		for (let i = 0,len = contentLi.length; i < len; i++){
			contentLi[i].style.height = document.documentElement.clientHeight - head.offsetHeight + 'px';
		}
	}
}