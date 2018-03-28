$(function(){
	
	
	
	
	var count = 0;
	var counts = 0;
	
	var canvasLeft = document.getElementById("figure-left");
	var canvasLefts = document.getElementById("figure-lefts");
	var canvasRight = document.getElementById("figure-right");
	var canvasRights = document.getElementById("figure-rights");
	
	var canvasLeftFigure = ['1010101011110000000010110101010000000000000000000000','1010101011110000000010110101010000000000000000000000','1010101011110000000010110101010000000000000000000000','1010101011110000000010110101010000000000000000000000','1010101011110000000010110101010000000000000000000000','1010101011110000000010110101010000000000000000000000'];
	var canvasLeftsFigure = ['1010101011110000000010110101010000000000000000000000','1010101011110000000010110101010000000000000000000000','1010101011110000000010110101010000000000000000000000','1010101011110000000010110101010000000000000000000000','1010101011110000000010110101010000000000000000000000','1010101011110000000010110101010000000000000000000000'];
	var canvasRightFigure = ['1010101011110000000010110101010000000000000000000000','1010101011110000000010110101010000000000000000000000','1010101011110000000010110101010000000000000000000000','1010101011110000000010110101010000000000000000000000','1010101011110000000010110101010000000000000000000000','1010101011110000000010110101010000000000000000000000'];
	var canvasRightsFigure = ['1010101011110000000010110101010000000000000000000000','1010101011110000000010110101010000000000000000000000','1010101011110000000010110101010000000000000000000000','1010101011110000000010110101010000000000000000000000','1010101011110000000010110101010000000000000000000000','101010101111000000001011010101000000000000000000000'];
	
	var myCanvasLeft = canvasLeft.getContext("2d");
	var myCanvasLefts = canvasLefts.getContext("2d");
	var myCanvasRight = canvasRight.getContext("2d");
	var myCanvasRights = canvasRights.getContext("2d");
	
	
	function drawFigure(){
		if(count > 500){
			count = 0;  
		}

		myCanvasLeft.beginPath();
		myCanvasRight.beginPath();
	
		
		myCanvasLeft.clearRect(0,0,canvasLeft.width,canvasLeft.height);
		myCanvasRight.clearRect(0,0,canvasRight.width,canvasRight.height);
	
		myCanvasLeft.font = "15px Arial";
		myCanvasRight.font = "15px Arial";
			
		gradient = myCanvasLeft.createLinearGradient(0, 0,canvasLeft.width, 0);  
        gradient.addColorStop('0','rgba(255,255,255,0.7)');  
        gradient.addColorStop('0.3','#2fa1d8');  
        gradient.addColorStop('0.7','#c3fafa');  
        gradient.addColorStop('1','rgba(255,255,255,0.3)');  
  
			
		myCanvasLeft.fillStyle = gradient;
		myCanvasRight.fillStyle = gradient;
		
		$(canvasLeftFigure).each(function(i,msg){
			myCanvasLeft.fillText(msg,20*(1+i-count*0.05),46*(i+1));
			if(count > 100){
				canvasLeftFigure[i] = canvasLeftFigure[i]+ '10';
			}
		});
		$(canvasRightFigure).each(function(i,msg){
			myCanvasRight.fillText(msg,20*(1+i-count*0.05),45*(i+1));
			if(count > 100){
				canvasRightFigure[i] = canvasRightFigure[i]+ '10';
			}
		});
		
		
		
		count++;
		myCanvasLeft.closePath();
		myCanvasRight.closePath();
		
		setTimeout(drawFigure,25);
	} 
	
	drawFigure();
	
	
	function drawFigures(){
		
		if(counts > 500){
			counts = 0;  
		}
		
		myCanvasLefts.beginPath();
		myCanvasRights.beginPath();
		
		myCanvasLefts.clearRect(0,0,canvasLefts.width,canvasLefts.height);
		myCanvasRights.clearRect(0,0,canvasRights.width,canvasRights.height);
		
		myCanvasLefts.font = "10px Arial";
		myCanvasRights.font = "10px Arial";
		
		gradient = myCanvasLefts.createLinearGradient(0, 0,canvasLefts.width, 0);  
        gradient.addColorStop('0','rgba(255,255,255,0.7)');  
        gradient.addColorStop('0.3','#c3fafa');  
        gradient.addColorStop('0.7','#2fa1d8');  
        gradient.addColorStop('1','rgba(255,255,255,0.3)');  
		
		myCanvasLefts.fillStyle =  gradient;
		myCanvasRights.fillStyle =  gradient;
		
		$(canvasLeftsFigure).each(function(i,msg){
			myCanvasLefts.fillText(msg,20*(1+i-counts*0.05),50*(i+1));
			if(counts > 100){
				canvasLeftsFigure[i] = canvasLeftsFigure[i]+ '10';
			}
		});
		$(canvasRightsFigure).each(function(i,msg){
			myCanvasRights.fillText(msg,20*(1+i-counts*0.05),50*(i+1));
			if(counts > 100){
				canvasRightsFigure[i] = canvasRightsFigure[i]+ '10';
			}
		});
		
		
		counts++;
		
		myCanvasLefts.closePath();
		myCanvasRights.closePath();
		
		setTimeout(drawFigures,15);
		
	}
	
	drawFigures();
	
	
	
	/*
	var canvasLeft = document.getElementById("figure-left");
	var begin = 0;
	var begin5000 = 0;
	var showman = 0;
	var showmantime = 0;
	var luckys = [];
	 
	
	var canvasLeftFigure = ['1010101011110000000010110101010','1111111111111111111111000000000'];
	
	for(var i = 0; i <10;i+){
		for(var v = 0; v< 10;v++){
			canvasLeftFigure.push([canvasLeftFigure[v]]);
		}
	}
	
	function drawLeftFigure(){
		if(begin5000 > (canvasLeftFigure.length*100 - 1000)){
			begin5000 = 0;
		}
		var ctx5000 = canvasLeft.getContext("2d");
		ctx5000.clearRect(0,0,canvasLeft.width,canvasLeft.height);
		
		ctx5000.font = "15px Arial";
		
		ctx5000.fillStyle = "yellow";
		
		$(canvasLeftFigure).each(function(i,msg){
			ctx5000.fillText(msg,0,20*(1+i-begin5000*0.01));
		})
		begin5000++;
		setTimeout('drawLeftFigure()',10);
		
	}*/
	
})
