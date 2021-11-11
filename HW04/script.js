$(window).load(function(){
	var supportCanvas = 'getContext' in document.createElement('canvas');
	var slides = $('#slideshow li'),
		current = 0,
		slideshow = {width:0,height:0};
		if(supportCanvas){
			$('#slideshow img').each(function(){
				if(!slideshow.width){
					slideshow.width = this.width;
					slideshow.height = this.height;
				}
				createCanvasOverlay(this);
			});
		}
		
		$('#slideshow .arrow').click(function(){
			   var li = slides.eq(current),
			   canvas = li.find('canvas'),
			   nextIndex = 0;
			if($(this).hasClass('next')){
				nextIndex = current >= slides.length-1 ? 0 : current+1;
			}
			else {
				nextIndex = current <= 0 ? slides.length-1 : current-1;
			}

			var next = slides.eq(nextIndex);
			
			if(supportCanvas){

				canvas.fadeIn(function(){
					next.show();
					current = nextIndex;
					li.fadeOut(function(){
						li.removeClass('slideActive');
						canvas.hide();
						next.addClass('slideActive');
					});
				});
			}
			else {				
				current=nextIndex;
				next.addClass('slideActive').show();
				li.removeClass('slideActive').hide();
			}
		});
	
	function createCanvasOverlay(image){
		var canvas = document.createElement('canvas'),
		canvasContext = canvas.getContext("2d");
		canvas.width = slideshow.width;
		canvas.height = slideshow.height;
		canvasContext.drawImage(image,0,0);
		image.parentNode.insertBefore(canvas,image);
	}
	
});
