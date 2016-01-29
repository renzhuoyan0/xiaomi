window.onload = function(){
	var  banner = document.getElementsByClassName('banner'),
		 jtz = document.getElementById('jtz'),
		 jty = document.getElementById('jty'),
		 btns= document.getElementsByClassName('btn'),
		 timerId,
		 kaiguan = false,
		 has = false,
		 h=0,
		 fn;
	var index = 0;
	var block = banner[0];
	var i=0;
	var yuan = btns[0];
	block.style.display = 'block';
	yuan.style.background = 'white';
	fn = function(){
		block.style.display = 'none';
		if(has&& yuan == h){
			yuan.style.background = 'white';
		}
		else{yuan.style.background = '#333';};		
		index++;
		i++;
		if(index == banner.length){
			index = 0;
			i=0;
		}
		block = banner[index];
		yuan = btns[i];
		block.style.display = 'block';
		yuan.style.background = 'white';
		
		
	}
	timerId = setInterval(fn,2000);
	for(j=0;j<banner.length;j++){
		banner[j].index = j;
		banner[j].onmouseover = function(){
			clearInterval(timerId);
		}
		banner[j].onmouseout = function(){
			if(kaiguan == false){
				i = this.index;
				index = this.index;
				timerId = setInterval(fn,2000);
			}
			else{
				return;
			}
		}
	}
	for(k=0;k<btns.length;k++){
		btns[k].index = k; 
		btns[k].onclick = function(){
			block.style.display = 'none';
			yuan.style.background = '#333';
			clearInterval(timerId);
			block = banner[this.index];
			yuan = btns[this.index];
			block.style.display = 'block';
			yuan.style.background = 'white';
			kaiguan = true;

		}
	}
	jtz.onclick = function(){
		block.style.display = 'none';
		yuan.style.background = '#333';
		clearInterval(timerId);
		if(i==0){i=btns.length-1;index = banner.length-1}
		else{i--;
		index--;}
		block = banner[index];
		yuan = btns[i];
		block.style.display = 'block';
		yuan.style.background = 'white';
		kaiguan = true;
	}
	jty.onclick = function(){
		block.style.display = 'none';
		yuan.style.background = '#333';
		clearInterval(timerId);	
		if(i==btns.length-1){i=0;index=0;}
		else{i++;
		index++;}	
		block = banner[index];
		yuan = btns[i];
		block.style.display = 'block';
		yuan.style.background = 'white';
		kaiguan = true;
		
	}

	jty.onmouseover = function(e){
		jty.style.opacity = '0.5';
	}
	jtz.onmouseover = function(e){
		jtz.style.opacity = '0.5';
	}
	jty.onmouseout = function(e){
		jty.style.opacity = '0';
	}
	jtz.onmouseout = function(e){
		jtz.style.opacity = '0';
	}
	
	














}