$(document).ready(function(){
 





const slider = document.querySelector('.items');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    cancelMomentumTracking();
  });
  
  
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  
  
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
    beginMomentumTracking();
  });
  
  
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    var prevScrollLeft = slider.scrollLeft;
    slider.scrollLeft = scrollLeft - walk;
    velX = slider.scrollLeft - prevScrollLeft;
  });
  
  // Momentum 
  
  var velX = 0;
  var momentumID;
  
  slider.addEventListener('wheel', (e) => {
    cancelMomentumTracking();
  });  
  
  function beginMomentumTracking(){
    cancelMomentumTracking();
    momentumID = requestAnimationFrame(momentumLoop);
  }
  function cancelMomentumTracking(){
    cancelAnimationFrame(momentumID);
  }
  function momentumLoop(){
    slider.scrollLeft += velX;
    velX *= 0.95; 
    if (Math.abs(velX) > 0.5){
      momentumID = requestAnimationFrame(momentumLoop);
    }
  }
	
	
	
	
	
	});
	

	



function refreshIframe1() {
    var ifr = document.getElementsByName('getyourmoneyback')[0];
    ifr.src = ifr.src;
}
	
	
	
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if (($(tag).position().top < pageBottom) && (visibility < 1)) {
      refreshIframe1();
	  visibility = 1;
	  console.log("----------------------reload-iframe---------------------------------------")
    } else {
      visibility = 0;
		
    }
	  
	 
	  
	  if ($(tag).position().top >= pageBottom ) {
      
	  visibility = 0;
	  console.log("iframe is not in viewport")
    } else {
      visibility = 1;
		console.log("iframe is in viewport, but has not to reload; because it was reloaded once.")
    }
	  
	  
	  
	  
	  
	  
	  
	  
  }
});
	
	
	
	/*
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var j = 0; j < tags.length; j++) {
    var tag = tags[j];
    if (($(tag).position().top > pageBottom) || ($(tag).position().bottom < pageTop) ) {
	  var aa = 0;
    } else {
      
    }
  }
});

	*/
	
	
	
	
	
	
	
	
	
	
	
	
	