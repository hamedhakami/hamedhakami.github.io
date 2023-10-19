

$(document).ready(function(){
 



var items = $(".items");
	for (var x = 0; x < items.length; x++) {
		
		
		
		
		
	

const slider = items[x];
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
	
	
}
	
	
	
	let Scrollbar = window.Scrollbar;
	
Scrollbar.init(document.querySelector('body'));	
	
	
	
	
	
const scrollArea = document.querySelector('body')

const Scroll = Scrollbar.init(scrollArea)

Scroll.addListener((s) => {
    console.log("page top:" + s.offset.y) // returns “scrollTop” equivalent
})

	



  var tileContainers = $(".tile-container");
  const visibilityCheckers = new Array(tileContainers.length);
	
	


	
	
	var tileEffects = $(".tile-effect");
	var k;

    for (k = 0; k < tileEffects.length; k++) {
        tileEffects[k].attr('src','about:blank');
    };
	
	
	
	
	Scroll.addListener((s) => {
  var pageTop = s.offset.y;
  var pageBottom = pageTop + $(window).height();
  var tileContainers = $(".tile-container");
  var tileEffects = $(".tile-effect");
		
		console.log("Page bottom:" + pageBottom)
		var windowHeight = $(window).height();
		console.log("Viewpoert height:" + windowHeight);
		
		var tags = $(".tag");
		
  for (var i = 0; i < tileContainers.length; i++) {
	  
	  var tileContainer = tileContainers[i];
	  var tileEffectObject = tileEffects[i];
	  var scrollContainers = $(".scroll-container");
	  var mainScrollContainer = scrollContainers[0];
	  const mainScrollBar = Scrollbar.init(mainScrollContainer);
	  var isVisibleChecker = mainScrollBar.isVisible(tileEffectObject);
	  console.log ("Iframe " + i + " visibility: " + isVisibleChecker);
	  
	  function refreshIframe() {
   tileEffectObject.src = tileEffectObject.src;
}
	  function clearIframe() {
    tileEffectObject.attr('src','about:blank');
}
	  
	  
	  
	  
	  
	  console.log("Iframe" + i + " top position:" + $(tileContainer).position().top)
    
    if ((isVisibleChecker == true) && (visibilityCheckers[i] < 1)) {
      refreshIframe();
	  visibilityCheckers[i] = 1;
	  console.log("-------------------------------------------------------- Iframe " + i + " has been reloaded ---------------------------------------------------")
    } else {
      visibilityCheckers[i] = 0;
		
    }
	  
	 
	  
	  if (isVisibleChecker == false) {
      
	  visibilityCheckers[i] = 0;
	  console.log("iframe " + i +" is not in viewport");
		  clearIframe();
    } else {
      visibilityCheckers[i] = 1;
		console.log("iframe " + i +" is in viewport, but has not to be reloaded; because it was reloaded once.")
    }
	  
	  
	  
	
	}  
	  
	  
	  
	  var tags = $(".tag");
	  
	  for (var j = 0; j < tags.length; j++) {
		  
		  var tag = tags[j];
		  
		  //var scrollContainers = $(".scroll-container");
	  //var mainScrollContainer = scrollContainers[0];
	  //const mainScrollBar = Scrollbar.init(mainScrollContainer);
		  var scrollContainers = $(".scroll-container");
	  var mainScrollContainer = scrollContainers[0];
	  const mainScrollBar = Scrollbar.init(mainScrollContainer);
	  var isVisibleCheckerForTags = mainScrollBar.isVisible(tag);
	  console.log ("Tag " + j + " visibility: " + isVisibleCheckerForTags);
		  
		  
		  
		
		  
		  
		  
		  
    
    if (isVisibleCheckerForTags == true) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
	  
	  
	  
	  
	  
	  
	  
  
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	
	
	
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
	  
	  
    
    if (($(tileContainer).position().top < pageBottom) && (visibilityCheckers[i] < 1)) {
      refreshIframe();
	  visibilityCheckers[i] = 1;
	  console.log("----------------------reload-iframe---------------------------------------")
    } else {
      visibilityCheckers[i] = 0;
		
    }
	  
	 
	  
	  if ($(tileContainer).position().top >= pageBottom) {
      
	  visibilityCheckers[i] = 0;
	  console.log("iframe is not in viewport")
    } else {
      visibilityCheckers[i] = 1;
		console.log("iframe is in viewport, but has not to reload; because it was reloaded once.")
    }
	  
	  
	  
	    
  }
});



	

	
	
	*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	});
	
	
	
	
	
	
	
	
	