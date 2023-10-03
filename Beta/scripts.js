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
	

	



  var tileContainers = $(".tile-container");
  const visibilityCheckers = new Array(tileContainers.length);
	
	


	
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tileContainers = $(".tile-container");
  var tileEffects = $(".tile-effect");

  for (var i = 0; i < tileContainers.length; i++) {
	  
	  var tileContainer = tileContainers[i];
	  var tileEffectObject = tileEffects[i];
	  
	  function refreshIframe() {
   tileEffectObject.src = tileEffectObject.src;
}
	  x = $(tileContainer).position().bottom
	  console.log (pageTop, x);
    
    if (($(tileContainer).position().top < pageBottom) && ($(tileContainer).position().bottom > pageTop) && (visibilityCheckers[i] < 1)) {
      refreshIframe();
	  visibilityCheckers[i] = 1;
	  console.log("----------------------reload-iframe---------------------------------------")
    } else {
      visibilityCheckers[i] = 0;
		
    }
	  
	 
	  
	 
	  if (($(tileContainer).position().top >= pageBottom) || ($(tileContainer).position().bottom <= pageTop) ) {
      
	  visibilityCheckers[i] = 0;
	  console.log("iframe is not in viewport")
    } else {
      visibilityCheckers[i] = 1;
		console.log("iframe is in viewport, but has not to reload; because it was reloaded once.")
    }
	  
	  
	  
	    
  }
});
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	