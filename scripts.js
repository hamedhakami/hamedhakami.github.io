

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
	
	var options = {
	'damping': 0.08,
	'alwaysShowTracks': true,
		
}
	
Scrollbar.init(document.querySelector('body'), options);
	
	function ScrollToAboutMe () {
	Scrollbar.addMomentum(0, 100);
		
	};
	
	
	
	

  
	
	
	
	
const scrollArea = document.querySelector('body')

const Scroll = Scrollbar.init(scrollArea)

Scroll.addListener((s) => {
    //console.log("page top:" + s.offset.y) // returns “scrollTop” equivalent
})

	



  var tileContainers = $(".tile-container");
  const visibilityCheckers = new Array(tileContainers.length);
	
	


	
	
	
	
	
	
	
	
	Scroll.addListener((s) => {
		
		
	  
	  
	  
	  
  
	  
	  
  
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
	
	
	
	
	// Set up the throttler 
const throttle = (fn, delay) => { 
  // Capture the current time 
  let time = Date.now(); 
 
  // Here's our logic 
  return () => { 
    if((time + delay - Date.now()) <= 0) { 
      // Run the function we've passed to our throttler, 
      // and reset the `time` variable (so we can check again). 
      fn(); 
      time = Date.now(); 
    } 
  } 
} 
 
// Here's a dummy function that we want to throttle 
function runOnScroll(){ 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
			 
			 
  var pageTop = Scroll.offset.y;
  var pageBottom = pageTop + $(window).height();
  var tileContainers = $(".tile-container");
  var tileEffects = $(".tile-effect");
		
		//console.log("Page bottom:" + pageBottom)
		var windowHeight = $(window).height();
		//console.log("Viewpoert height:" + windowHeight);
		
		var tags = $(".tag");
		
  for (var i = 0; i < tileContainers.length; i++) {
	  
	  var tileContainer = tileContainers[i];
	  var tileEffectObject = tileEffects[i];
	  var scrollContainers = $(".scroll-container");
	  var mainScrollContainer = scrollContainers[0];
	  const mainScrollBar = Scrollbar.init(mainScrollContainer);
	  var isVisibleChecker = mainScrollBar.isVisible(tileEffectObject);
	  //console.log ("Iframe " + i + " visibility: " + isVisibleChecker);
	  
	  
	  
	  
	  
	  
	  
	  
	  
	   var arrayOfFunction = [
			 
			  function() {
                tileEffectObject.src = "iframes/Introduction Text/1.html";
            },
		    function() {
                tileEffectObject.src = "iframes/Nowruz/Describtions/1.html";
            },
		    function() {
                tileEffectObject.src = "iframes/Nowruz/Visuals/1.html";
            },
		    function() {
                tileEffectObject.src = "iframes/Nowruz/Sliders/1.html";
            },
		    function() {
                tileEffectObject.src = "iframes/Get Your Money Back/Describtion/1.html";
            },
		    function() {
                tileEffectObject.src = "iframes/Get Your Money Back/Visual/1 v6.html";
            },
		    function() {
                tileEffectObject.src = "iframes/Mini-Campaigns/Describtions/1.html";
            },
		   function() {
                tileEffectObject.src = "iframes/Mini-Campaigns/Visual/1 v6.html";
            },
		   function() {
                tileEffectObject.src = "iframes/As Vast As Iran/Describtion/1.html";
            },
		   function() {
                tileEffectObject.src = "iframes/As Vast As Iran/Visual/1.html";
            },
		   function() {
                tileEffectObject.src = "iframes/Web Sliders/Describtion/1.html";
            },
		   function() {
                tileEffectObject.src = "iframes/Web Sliders/Visual/1.html";
            },
		   function() {
                tileEffectObject.src = "iframes/Charity/Describtions/1.html";
            },
		   function() {
                tileEffectObject.src = "iframes/Charity/Visuals/1.html";
            },
			 function() {
                tileEffectObject.src = "iframes/The Trace of Brightness/Describtions/1.html";
            },
		    function() {
                tileEffectObject.src = "iframes/The Trace of Brightness/Visuals/1.html";
            },
		    function() {
                tileEffectObject.src = "iframes/The Trace of Brightness/Visuals2/1.html";
            },
		   function() {
                tileEffectObject.src = "iframes/Derby/Describtions/1.html";
            },
		    function() {
                tileEffectObject.src = "iframes/Derby/Visuals/1.html";
            },
		    function() {
                tileEffectObject.src = "iframes/Chess/Visuals/1.html";
            },
			 function() {
                tileEffectObject.src = "iframes/Marhaba/Describtions/1.html";
            },
		    function() {
                tileEffectObject.src = "iframes/Marhaba/Visuals/1.html";
            },
		    function() {
                tileEffectObject.src = "iframes/Taaghche/Describtions/1.html";
            },
		    function() {
                tileEffectObject.src = "iframes/Taaghche/Visuals/1.html";
            },
		   function() {
                tileEffectObject.src = "iframes/Live Wallpapers 4K/Describtion/1.html";
            },
		    function() {
                tileEffectObject.src = "iframes/Live Wallpapers 4K/Visual/1.html";
            },
		   function() {
                tileEffectObject.src = "iframes/Live Wallpapers 4K/Visual2/1.html";
            },
		   function() {
                tileEffectObject.src = "iframes/Yalda99/Describtion/1.html";
            },
		   function() {
                tileEffectObject.src = "iframes/Yalda99/Visual/slider.html";
            },
		   function() {
                tileEffectObject.src = "iframes/Puzzle/Visuals/1.html";
            },
		   function() {
                tileEffectObject.src = "iframes/Sibche Design System/Describtion/1.html";
            },
		   function() {
                tileEffectObject.src = "iframes/Sibche Design System/Visuals/1.html";
            },
		   function() {
                tileEffectObject.src = "iframes/Sibche Social Media Contents/Describtion/1.html";
            },
		   function() {
                tileEffectObject.src = "iframes/Sibche Social Media Contents/Visual/1.html";
            },
		   function() {
                tileEffectObject.src = "iframes/Sibche HTML Ads/Describtion/1.html";
            },
		   function() {
                tileEffectObject.src = "iframes/Sibche HTML Ads/sibche1401/wheel.html";
            },
		   function() {
                tileEffectObject.src = "iframes/Sibche HTML Ads/sibchehtmlads/300X250.html";
            },
			 ]
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  function refreshIframe() {
   tileEffectObject.src = tileEffectObject.src;
}
	  function loadIframe () {
		  
		  arrayOfFunction[i](); 
	  }
	  
	  function clearIframe () {
		  
		  tileEffectObject.src = "blank.html";
	  }
	  
	  //console.log("Iframe" + i + " top position:" + $(tileContainer).position().top)
    
    if ((isVisibleChecker == true) && (visibilityCheckers[i] < 1)) {
      loadIframe();
	  visibilityCheckers[i] = 1;
	  //console.log("-------------------------------------------------------- Iframe " + i + " has been reloaded ---------------------------------------------------")
    } else {
     
		
		
    }
	  
	 
	  
	  if ((isVisibleChecker == false) && (visibilityCheckers[i] == 1)) {
      
	  visibilityCheckers[i] = 0;
	  clearIframe ();
	  //console.log("iframe " + i +" has gone out from the viewport and therefore has been cleared")
    } else {
      visibilityCheckers[i] = 1;
		
		//console.log("iframe " + i +" is in viewport, but has not to be reloaded; because it was reloaded once.")
    }
	  
	  
	  
	  
	  if (isVisibleChecker == false) {
      
	  visibilityCheckers[i] = 0;
	  
    } else {
     };  
	  
  };
	  
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
	  //console.log ("Tag " + j + " visibility: " + isVisibleCheckerForTags);
		  
		  
		  
		
		  
		  
		  
		  
    
    if (isVisibleCheckerForTags == true) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  };
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
  console.log('onscroll function fired.'); 
} 
 
// We can use this like so: 
Scroll.addListener(throttle(runOnScroll, 100)); 
// This will run `runOnScroll` at most once per second. 
	
	
	
	
	

	
	

	
	
	
	
	
	
	
	
	
	});
	
	
	function refreshIframe1() {
    var ifr = document.getElementsByName('Sibche_yalda_slider')[0];
    ifr.src = ifr.src;
}
	function refreshIframe2() {
    var ifr = document.getElementsByName('sibche_html_ads1')[0];
    ifr.src = ifr.src;
}
	function refreshIframe3() {
    var ifr = document.getElementsByName('sibche_html_ads2')[0];
    ifr.src = ifr.src;
}
	
	
	
	
	
	
	