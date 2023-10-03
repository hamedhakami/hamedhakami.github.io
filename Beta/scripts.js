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
	

	



  var tags = $(".tag");
  const visibilityCheckers = new Array(tags.length);
	
	


	
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");
  

  for (var i = 0; i < tags.length; i++) {
	  
	  var tag = tags[i];
	  
	  
	  function refreshIframe() {
   tag.src = tag.src;
}
	  
	  
    
    if (($(tag).position().top < pageBottom) && (visibilityCheckers[i] < 1)) {
      refreshIframe();
	  visibilityCheckers[i] = 1;
	  console.log("----------------------reload-iframe---------------------------------------")
    } else {
      visibilityCheckers[i] = 0;
		
    }
	  
	 
	  
	  if ($(tag).position().top >= pageBottom) {
      
	  visibilityCheckers[i] = 0;
	  console.log("iframe is not in viewport")
    } else {
      visibilityCheckers[i] = 1;
		console.log("iframe is in viewport, but has not to reload; because it was reloaded once.")
    }
	  
	  
	  
	    
  }
});
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	