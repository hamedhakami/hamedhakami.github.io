document.addEventListener("DOMContentLoaded", function () {
    const assets = [
      "iframes/bJunior Pocket/Visuals/images/TeasingV201080X1350min.jpg",
                        "iframes/bJunior Pocket/Visuals/images/Joystickmin.jpg",
                        "iframes/bJunior Pocket/Visuals/images/Scootermin.jpg",
                        "iframes/bJunior Pocket/Visuals/images/Telescopemin.jpg",
                        "iframes/bJunior Pocket/Visuals/images/Thumbnailmin.jpg",
                        "iframes/bJunior Pocket/Visuals/images/Gift_Thumbnailmin.jpg",
                        "iframes/bJunior Pocket/Visuals/videos/768-h.webm",
                        "iframes/bJunior Pocket/Visuals/videos/Steps.webm",
		  "iframes/1404 Wishes/Visuals/images/Bluecopymin.jpg",
                        "iframes/1404 Wishes/Visuals/images/Greencopymin.jpg",
                        "iframes/1404 Wishes/Visuals/images/Purplecopymin.jpg",
                        "iframes/1404 Wishes/Visuals/images/Redcopymin.jpg",
                        "iframes/1404 Wishes/Visuals/images/RoseGoldcopymin.jpg",
                        "iframes/1404 Wishes/Visuals/images/Yellowcopymin.jpg",
                        "iframes/1404 Wishes/Visuals/1.js",
		     "iframes/110 Billion/Visual/images/Bluemin.jpg",
                        "iframes/110 Billion/Visual/images/p01copymin.jpg",
                        "iframes/110 Billion/Visual/images/p03copymin.jpg",
                        "iframes/110 Billion/Visual/images/p04copymin.jpg",
                        "iframes/110 Billion/Visual/images/thefirstframemin.jpg",
                        "iframes/110 Billion/Visual/videos/Colors.webm",
                        "iframes/110 Billion/Visual/videos/Steps 10fps for video.webm",
                        "iframes/110 Billion/Visual/1 v6.js",
		           "iframes/blugraphy/Visual and Descriptions/images/blugraphymin.jpg",
                        "iframes/blugraphy/Visual and Descriptions/1.js",
		  "iframes/blu Landing Pages/Visuals/images/Mockup16X9copymin.jpg",
                        "iframes/blu Landing Pages/Visuals/1.js",
		 "iframes/blu-Chair/Visual and Descriptions/images/Chairmin.jpg",
                        "iframes/blu-Chair/Visual and Descriptions/1.js",
		                "iframes/bJunior Logotype/Visuals/images/LogotypeRedesign01min.jpg",
                        "iframes/bJunior Logotype/Visuals/images/LogotypeRedesign02min.jpg",
                        "iframes/bJunior Logotype/Visuals/images/LogotypeRedesign03min.jpg",
                        "iframes/bJunior Logotype/Visuals/images/LogotypeRedesign04min.jpg",
                        "iframes/bJunior Logotype/Visuals/images/LogotypeRedesign05min.jpg",
                        "iframes/bJunior Logotype/Visuals/images/LogotypeRedesign06min.jpg",
                        "iframes/bJunior Logotype/Visuals/1.js",
		          "iframes/Tapsi Intercity Service/Visual/images/Thumbnailmin.jpg",
                        "iframes/Tapsi Intercity Service/Visual/images/TicketwithTypoV2copymin.jpg",
                        "iframes/Tapsi Intercity Service/Visual/1.js",
                        "iframes/Tapsi Intercity Service/Visual/videos/2-Steps.webm",
		          "iframes/Ziverse Visual Identity/Visual/images/iPhoneMockupmin.jpg",
                        "iframes/Ziverse Visual Identity/Visual/images/landscape_mockup_1copymin.jpg",
                        "iframes/Ziverse Visual Identity/Visual/images/Moodboard02min.jpg",
                        "iframes/Ziverse Visual Identity/Visual/images/Moodboard03min.jpg",

                        "iframes/Ziverse Visual Identity/Products/1.js",
                        "iframes/Ziverse Visual Identity/Products/1.html",
		      "iframes/Tapsi BNPL/Visual/images/Car_Thumbnailmin.jpg",
                        "iframes/Tapsi BNPL/Visual/images/Flattenwithtypocopymin.jpg",
                        "iframes/Tapsi BNPL/Visual/1.js",
                        "iframes/Tapsi BNPL/Visual/videos/Steps (1).webm",
		   "iframes/Ziverse Catalog/Visual/images/Ziverse_Catalog01min.jpg",
                        "iframes/Ziverse Catalog/Visual/images/Ziverse_Catalog04min.jpg",
                        "iframes/Ziverse Catalog/Visual/images/Ziverse_Catalog05min.jpg",
                        "iframes/Ziverse Catalog/Visual/images/Ziverse_Catalog06min.jpg",
                        "iframes/Ziverse Catalog/Visual/images/Ziverse_Catalog07min.jpg",
                        "iframes/Ziverse Catalog/Visual/images/Ziverse_Catalog08min.jpg",
                        "iframes/Ziverse Catalog/Visual/1.js",
                        "iframes/Ziverse Catalog/Visual/1.html",
		     "iframes/Ziverse Debit Card/Visual/images/Card1.jpg",
                        "iframes/Ziverse Debit Card/Visual/images/Card2.jpg",
                        "iframes/Ziverse Debit Card/Visual/images/Card3.jpg",
                        "iframes/Ziverse Debit Card/Visual/1.js",
                        "iframes/Ziverse Debit Card/Visual/1.html",
		"iframes/Nowruz/Visuals/1.html",
                        "iframes/Nowruz/Visuals/1.js",
                        "iframes/Nowruz/Visuals/images/a1402promotion_01min.jpg",
                        "iframes/Nowruz/Visuals/images/a1402promotion_03min.jpg",
                        "iframes/Nowruz/Visuals/images/a1402promotion_05min.jpg",
                        "iframes/Nowruz/Visuals/images/a1402promotion_11min.jpg",
                        "iframes/Nowruz/Visuals/images/a1402promotion_13min.jpg",
                        "iframes/Nowruz/Visuals/images/a1402promotion_15min.jpg",
		"iframes/Nowruz/Sliders/1.html",
                        "iframes/Nowruz/Sliders/1.js",
                        "iframes/Nowruz/Sliders/images/Sliders1080v207.jpg",
                        "iframes/Nowruz/Sliders/images/Sliders1080v208.jpg",
                        "iframes/Nowruz/Sliders/images/Sliders1080v209.jpg",
                        "iframes/Nowruz/Sliders/images/Sliders1080v210.jpg",
                        "iframes/Nowruz/Sliders/images/Sliders1080v211.jpg",
                        "iframes/Nowruz/Sliders/images/Sliders1080v37201min.jpg",
		"iframes/Get Your Money Back/Visual/1 v6.html",
                        "iframes/Get Your Money Back/Visual/1 v6.js",
                        "iframes/Get Your Money Back/Visual/images/k1.jpg",
                        "iframes/Get Your Money Back/Visual/images/k2.jpg",
                        "iframes/Get Your Money Back/Visual/images/k3.jpg",
                        "iframes/Get Your Money Back/Visual/images/k4.jpg",
                        "iframes/Get Your Money Back/Visual/images/k5.jpg",
                        "iframes/Get Your Money Back/Visual/images/k6.jpg", 
		"iframes/Mini-Campaigns/Visual/1 v6.html",
                        "iframes/Mini-Campaigns/Visual/1 v6.js",
                        "iframes/Mini-Campaigns/Visual/images/a2000copymin.jpg",
                        "iframes/Mini-Campaigns/Visual/images/FathersDaycopymin.jpg",
                        "iframes/Mini-Campaigns/Visual/images/Fetrcopymin.jpg",
                        "iframes/Mini-Campaigns/Visual/images/Flightscopymin.jpg",
                        "iframes/Mini-Campaigns/Visual/images/Hotelcopymin.jpg",
                        "iframes/Mini-Campaigns/Visual/images/Merchantscopymin.jpg",
                        "iframes/Mini-Campaigns/Visual/images/MothersDaycopymin.jpg",
                        "iframes/Mini-Campaigns/Visual/images/ScalingUpcopymin.jpg",
                        "iframes/Mini-Campaigns/Visual/images/Scorescopymin.jpg",
                        "iframes/Mini-Campaigns/Visual/images/Treecopymin.jpg",
		"iframes/As Vast As Iran/Visual/1.js",
                        "iframes/As Vast As Iran/Visual/1.html",
                        "iframes/As Vast As Iran/Visual/images/Alborzcopymin.jpg",
                        "iframes/As Vast As Iran/Visual/images/Ardebilcopymin.jpg",
                        "iframes/As Vast As Iran/Visual/images/Boushehrcopymin.jpg",
                        "iframes/As Vast As Iran/Visual/images/Kermancopymin.jpg",
                        "iframes/As Vast As Iran/Visual/images/Semnancopymin.jpg",
                        "iframes/As Vast As Iran/Visual/images/Yasoujcopymin.jpg",
		"iframes/Web Sliders/Visual/1.js",
                        "iframes/Web Sliders/Visual/1.html",
                        "iframes/Web Sliders/Visual/images/AboutIranCardv3presentationcopymin.jpg",
                        "iframes/Web Sliders/Visual/images/slider1mockupcopy.jpg",
                        "iframes/Web Sliders/Visual/images/slider2mockupcopy.jpg",
                        "iframes/Web Sliders/Visual/images/slider3mockupcopy.jpg",
		"iframes/Charity/Visuals/1.js",
                        "iframes/Charity/Visuals/1.html",
                        "iframes/Charity/Visuals/images/PresentationMockupcopy.jpg",
		"iframes/The Trace of Brightness/Visuals/1.js",
                        "iframes/The Trace of Brightness/Visuals/1.html",
                        "iframes/The Trace of Brightness/Visuals2/1.js",
                        "iframes/The Trace of Brightness/Visuals2/1.html",
                        "iframes/The Trace of Brightness/Visuals/images/leyoutforpresentationcopy2min.jpg",
                        "iframes/The Trace of Brightness/Visuals2/images/Mockupcopy1080wmin.jpg",
                        "iframes/The Trace of Brightness/Visuals2/images/ShoppingBagMockup2copy1080min.jpg",
		"iframes/Abank KV/Visuals/1.js",
                        "iframes/Abank KV/Visuals/1.html",
                        "iframes/Abank KV/Visuals/images/poster90x90v12forpresentationcopymin.jpg",
		"iframes/Derby/Visuals/1.js",
                        "iframes/Derby/Visuals/1.html",
                        "iframes/Derby/Visuals/images/Derbi01min.jpg",
                        "iframes/Derby/Visuals/images/KV2copymin.jpg",
		"iframes/Chess/Visuals/1.js",
                        "iframes/Chess/Visuals/1.html",
                        "iframes/Chess/Visuals/images/TemplateV2copymin.jpg",
		"iframes/Taaghche/Visuals/1.js",
                        "iframes/Taaghche/Visuals/1.html",
                        "iframes/Taaghche/Visuals/images/Bannersresizedforportfolio01.jpg",
                        "iframes/Taaghche/Visuals/images/BestSellersv201.jpg",
                        "iframes/Taaghche/Visuals/images/TaaghcheInfinity01v201.jpg",
		"iframes/Live Wallpapers 4K/Visual/1.js",
                        "iframes/Live Wallpapers 4K/Visual/1.html",
                        "iframes/Live Wallpapers 4K/Visual2/1.js",
                        "iframes/Live Wallpapers 4K/Visual2/1.html",
                        "iframes/Live Wallpapers 4K/Visual/images/Screenshots01.jpg",
                        "iframes/Live Wallpapers 4K/Visual/images/Screenshots02.jpg",
                        "iframes/Live Wallpapers 4K/Visual/images/Screenshots03.jpg",
                        "iframes/Live Wallpapers 4K/Visual/images/Screenshots04.jpg",
                        "iframes/Live Wallpapers 4K/Visual/images/Screenshots05.jpg",
                        "iframes/Live Wallpapers 4K/Visual/images/Screenshots06.jpg",
                        "iframes/Live Wallpapers 4K/Visual/images/Screenshots07.jpg",
                        "iframes/Live Wallpapers 4K/Visual/images/Screenshots08.jpg",
                        "iframes/Live Wallpapers 4K/Visual/images/Screenshots11.jpg",
                        "iframes/Live Wallpapers 4K/Visual/images/Screenshots12.jpg",
                        "iframes/Live Wallpapers 4K/Visual/images/Screenshots13.jpg",
                        "iframes/Live Wallpapers 4K/Visual2/images/Presentation1.jpg",
		"iframes/Marhaba/Visuals/1.js",
                        "iframes/Marhaba/Visuals/1.html",
                        "iframes/Marhaba/Visuals/images/Layoutv401min.jpg",
                        "iframes/Marhaba/Visuals/images/Layoutv402min.jpg",
                        "iframes/Marhaba/Visuals/images/Layoutv403min.jpg",
                        "iframes/Marhaba/Visuals/images/Thumbmin.jpg",
                        "iframes/Marhaba/Visuals/videos/Steps.webm",
		"iframes/Yalda99/Visual/images/Yalda4_atlas_1.png",
                        "iframes/Yalda99/Visual/Yalda4.js",
                        "iframes/Yalda99/Visual/slider.html",
		"iframes/Puzzle/Visuals/images/SibcheLinkedin.jpg",
                        "iframes/Puzzle/Visuals/1.js",
                        "iframes/Puzzle/Visuals/1.html",
		"iframes/Sibche Design System/Visuals/images/Presentationmin.jpg",
                        "iframes/Sibche Design System/Visuals/1.js",
                        "iframes/Sibche Design System/Visuals/1.html",
		"iframes/Sibche Social Media Contents/Visual/images/All01.jpg",
                        "iframes/Sibche Social Media Contents/Visual/images/All02.jpg",
                        "iframes/Sibche Social Media Contents/Visual/images/All03.jpg",
                        "iframes/Sibche Social Media Contents/Visual/images/Winners01.jpg",
                        "iframes/Sibche Social Media Contents/Visual/images/Winners05.jpg",
                        "iframes/Sibche Social Media Contents/Visual/images/Winners06.jpg",
                        "iframes/Sibche Social Media Contents/Visual/images/Winners07.jpg",
		"iframes/Sibche HTML Ads/sibche1401/images/300X300_atlas_1.png",
                        "iframes/Sibche HTML Ads/sibche1401/images/300X300_atlas_2.png",
                        "iframes/Sibche HTML Ads/sibche1401/300X300.js",
                        "iframes/Sibche HTML Ads/sibche1401/wheel.html",
                        "iframes/Sibche HTML Ads/sibchehtmlads/images/300X250_atlas_1.png",
                        "iframes/Sibche HTML Ads/sibchehtmlads/300X250.js",
                        "iframes/Sibche HTML Ads/sibchehtmlads/300X250.html",
                        "iframes/Sibche HTML Ads/Banner (for presentation)-01.jpg",
		"iframes/Logos/Visuals/images/Anabel02min.jpg",
                        "iframes/Logos/Visuals/images/FinalPresentation01min.jpg",
                        "iframes/Logos/Visuals/images/KioosK704min.jpg",
                        "iframes/Logos/Visuals/images/Logo108001min.jpg",
                        "iframes/Logos/Visuals/images/Pelle01.jpg",
                        "iframes/Logos/Visuals/images/ZootLogoFinal01min.jpg",
    ];

    const preloader = document.getElementById("preloader");
    const progressText = document.getElementById("progress-text");
    const content = document.getElementById("content");

    let loaded = 0;

    function updateProgress() {
        const percent = Math.round((loaded / assets.length) * 100);
        progressText.textContent = `Loading ${percent}%`;

        if (loaded === assets.length) {
            // All assets are loaded, fade out preloader
            setTimeout(() => {
                preloader.style.opacity = "0";
                setTimeout(() => {
                    preloader.style.display = "none";
                    content.style.display = "block"; // Show the content
                }, 500);
            }, 300);
        }
    }

    function loadAsset(url) {
        return new Promise((resolve, reject) => {
            if (url.match(/\.(jpg|png|gif|webp|webm)$/)) {
                const img = new Image();
                img.src = url;
                img.onload = resolve;
                img.onerror = reject;
            } else if (url.match(/\.(css)$/)) {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = url;
                link.onload = resolve;
                link.onerror = reject;
                document.head.appendChild(link);
            }  else {
                resolve(); // Ignore unknown types
            }
        }).then(() => {
            loaded++;
            updateProgress();
        });
    }

    // Start loading all assets
    Promise.all(assets.map(loadAsset)).catch(() => {
        progressText.textContent = "Failed to load some assets!";
    });
});















$(document).ready(function () {


    var carousels = $(".grabbing-effect-caousel");
    for (var x = 0; x < carousels.length; x++) {


        const carousel = carousels[x];
        let isDown = false;
        let startX;
        let scrollLeft;

        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.classList.add('active');
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
            cancelMomentumTracking();
        });


        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.classList.remove('active');
        });


        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.classList.remove('active');
            beginMomentumTracking();
        });


        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 1; //scroll-fast
            var prevScrollLeft = carousel.scrollLeft;
            carousel.scrollLeft = scrollLeft - walk;
            velX = carousel.scrollLeft - prevScrollLeft;
        });

        // Momentum 

        var velX = 0;
        var momentumID;

        carousel.addEventListener('wheel', (e) => {
            cancelMomentumTracking();
        });

        function beginMomentumTracking() {
            cancelMomentumTracking();
            momentumID = requestAnimationFrame(momentumLoop);
        }

        function cancelMomentumTracking() {
            cancelAnimationFrame(momentumID);
        }

        function momentumLoop() {
            carousel.scrollLeft += velX;
            velX *= 0.95;
            if (Math.abs(velX) > 0.5) {
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

    function ScrollToAboutMe() {
        Scrollbar.addMomentum(0, 100);

    };


    const scrollArea = document.querySelector('body')

    const Scroll = Scrollbar.init(scrollArea)

    Scroll.addListener((s) => {
        //console.log("page top:" + s.offset.y) // returns “scrollTop” equivalent
    })


    var iframeContainers = $(".html-container");
    const reloadIframeCounter = new Array(iframeContainers.length);


    Scroll.addListener((s) => {


    });


    // Set up the throttler 
    const throttle = (fn, delay) => {
        // Capture the current time 
        let time = Date.now();

        // Here's our logic 
        return () => {
            if ((time + delay - Date.now()) <= 0) {
                // Run the function we've passed to our throttler, 
                // and reset the `time` variable (so we can check again). 
                fn();
                time = Date.now();
            }
        }
    }

    function runOnScroll() {


        var pageTop = Scroll.offset.y;
        var pageBottom = pageTop + $(window).height();
        var iframeContainers = $(".html-container");
        var iframes = $(".html-canvas");

        //console.log("Page bottom:" + pageBottom)
        var windowHeight = $(window).height();
        //console.log("Viewpoert height:" + windowHeight);

        var opacityEffectObjects = $(".opacity-effect");

        for (var i = 0; i < iframeContainers.length; i++) {

            var iframeContainer = iframeContainers[i];
            var iframeTarget = iframes[i];

            /*if (i < (iframes.length - 3)) {
  var GostIframe = iframes[i+3];
} else {
  var GostIframe = iframes[i];
};
			
			
			if (i < (iframes.length - 4)) {
  var GostIframe2 = iframes[i+4];
} else {
  var GostIframe = iframes[i];
};
		*/


            var scrollContainers = $(".scroll-container");
            var mainScrollContainer = scrollContainers[0];
            const mainScrollBar = Scrollbar.init(mainScrollContainer);
            var isVisibleCheckerForIframes = mainScrollBar.isVisible(iframeTarget);
            //console.log ("Iframe " + i + " visibility: " + isVisibleCheckerForIframes);


            var arrayOfFunction = [


                function () {
                    iframeTarget.src = "iframes/Introduction Text/1.html";
                },


                function () {
                    iframeTarget.src = "iframes/bJunior Pocket/Describtions/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/bJunior Pocket/Visuals/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/1404 Wishes/Describtions/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/1404 Wishes/Visuals/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/110 Billion/Describtion/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/110 Billion/Visual/1 v6.html";
                },
                function () {
                    iframeTarget.src = "iframes/blugraphy/Visual and Descriptions/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/blu Landing Pages/Describtions/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/blu Landing Pages/Visuals/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/blu-Chair/Visual and Descriptions/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/bJunior Logotype/Describtions/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/bJunior Logotype/Visuals/1.html";
                },


                function () {
                    iframeTarget.src = "iframes/Tapsi Intercity Service/Describtion/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Tapsi Intercity Service/Visual/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Tapsi BNPL/Describtion/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Tapsi BNPL/Visual/1.html";
                },


                function () {
                    iframeTarget.src = "iframes/Ziverse Visual Identity/Describtion/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Ziverse Visual Identity/Visual/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Ziverse Visual Identity/Products/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Ziverse Catalog/Describtion/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Ziverse Catalog/Visual/1.html";
					
					
					
					
					
               
               
					
					
					
					
					
					
		
					
                },
                function () {
                    iframeTarget.src = "iframes/Ziverse Animated Logo/Descriptions/1.html";
					
                },
                function () {
                    iframeTarget.src = "iframes/Ziverse Debit Card/Describtion/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Ziverse Debit Card/Visual/1.html";
					
                },


                function () {
                    iframeTarget.src = "iframes/Nowruz/Describtions/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Nowruz/Visuals/1.html";
					
					 
                },
                function () {
                    iframeTarget.src = "iframes/Nowruz/Sliders/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Get Your Money Back/Describtion/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Get Your Money Back/Visual/1 v6.html";
					
                },
                function () {
                    iframeTarget.src = "iframes/Mini-Campaigns/Describtions/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Mini-Campaigns/Visual/1 v6.html";
					
					
                },
                function () {
                    iframeTarget.src = "iframes/As Vast As Iran/Describtion/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/As Vast As Iran/Visual/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Web Sliders/Describtion/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Web Sliders/Visual/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Charity/Describtions/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Charity/Visuals/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/The Trace of Brightness/Describtions/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/The Trace of Brightness/Visuals/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/The Trace of Brightness/Visuals2/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Derby/Describtions/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Derby/Visuals/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Chess/Visuals/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Marhaba/Describtions/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Marhaba/Visuals/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Abank KV/Visuals/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Taaghche/Describtions/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Taaghche/Visuals/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Live Wallpapers 4K/Describtion/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Live Wallpapers 4K/Visual/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Live Wallpapers 4K/Visual2/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Yalda99/Describtion/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Yalda99/Visual/slider.html";
                },
                function () {
                    iframeTarget.src = "iframes/Puzzle/Visuals/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Sibche Design System/Describtion/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Sibche Design System/Visuals/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Sibche Social Media Contents/Describtion/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Sibche Social Media Contents/Visual/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Sibche HTML Ads/Describtion/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Sibche HTML Ads/sibche1401/wheel.html";
                },
                function () {
                    iframeTarget.src = "iframes/Sibche HTML Ads/sibchehtmlads/300X250.html";
                },
                function () {
                    iframeTarget.src = "iframes/Logos/Describtions/1.html";
                },
                function () {
                    iframeTarget.src = "iframes/Logos/Visuals/1.html";
                },


            ]


            var arrayOfPreloadFunction = [


                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload(
                  
                    )
                },


                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload(
                      
                    )
                },


                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload(
                   
                    )
                },


                function () {},


                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload(
             

                    )
                },


                function () {},


                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload(
                      

                    )
                },


                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload(
                       

                    )
                },


                function () {},


                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload(
        

                    )
                },


                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload(
              

                    )
                },


                function () {},


                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload(
                  


                    )
                },


                function () {},


                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload(
              

                    )

                },


                function () {},


                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload(
                     
                    )

                },
                function () {

                },
                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload(
                   

                    )

                },


                function () {

                },


                function () {

                },


                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload( )
                },

                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload( )
                },


                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload()
                },
                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload()
                },
               
                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload( )
                },
               
                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload( )
                },
               
                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload( )
                },
                
                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload( )
                },
               
                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload( )
                },
                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload( )
                },
                function () {

                },
      
                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload(
                    )
                },
                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload( )
                },
                
                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload( )
                },
                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload( )
                },
                
                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload( )
                },
                
                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload( )
                },
               
               
                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload( )
                },
                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload( )
                },
                
                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload( )
                },
               
                function () {
                    var images = [];

                    function preload() {
                        for (var i = 0; i < arguments.length; i++) {
                            images[i] = new Image();
                            images[i].src = preload.arguments[i];
                        }
                    }
                    preload( )
                },


                function () {

                },
                function () { //html descriptions

                },
                function () {

                    //1st htmlads
                },
				
 function () {

                },
				 function () {

                },
				 function () {

                },
				 function () {

                },
				 function () {

                },
				 function () {

                },
				 function () {

                },
				 function () {

                },
				 function () {

                },
				 function () {

                },
				 function () {

                },
				 function () {

                },
				 function () {

                },
				 function () {

                },
				 function () {

                },
				 function () {

                },
				 function () {

                },
				 function () {

                },
				 function () {

                },
				 function () {

                },
				 function () {

                }, function () {

                },
				
                function () {

                },
                function () {

                },
                function () {

                },
                function () {

                },
                function () {

                },

                function () {

                },
                function () {

                },
                function () {

                },
				function () {

                },function () {

                },
				function () {

                },
				function () {

                },
				function () {

                },
				function () {

                },
				function () {

                },
				function () {

                },
					function () {

                },
					function () {

                },
					function () {

                },
					function () {

                },
					function () {

                },
					function () {

                },
					function () {

                },
					function () {

                },
					function () {

                },
					function () {

                },
					function () {

                },
					function () {

                },
					function () {

                },
					function () {

                },
					function () {

                },
					function () {

                },	function () {

                },
				
				
				
            ]


            function refreshIframe() {
                iframeTarget.src = iframeTarget.src;
            }

            function loadIframe() {

                arrayOfFunction[i]();

                arrayOfPreloadFunction[i]();

            }

            function clearIframe() {

                iframeTarget.src = "blank.html";
            }

            //console.log("Iframe" + i + " top position:" + $(iframeContainer).position().top)

            if ((isVisibleCheckerForIframes == true) && (reloadIframeCounter[i] < 1)) {
                loadIframe();
                reloadIframeCounter[i] = 1;
                //console.log("-------------------------------------------------------- Iframe " + i + " has been reloaded ---------------------------------------------------")
            } else {


            }


            if ((isVisibleCheckerForIframes == false) && (reloadIframeCounter[i] == 1)) {

                reloadIframeCounter[i] = 0;
                clearIframe();
                //console.log("iframe " + i +" has gone out from the viewport and therefore has been cleared")
            } else {
                reloadIframeCounter[i] = 1;

                //console.log("iframe " + i +" is in viewport, but has not to be reloaded; because it was reloaded once.")
            }


            if (isVisibleCheckerForIframes == false) {

                reloadIframeCounter[i] = 0;

            } else {};

        };

        var opacityEffectObjects = $(".opacity-effect");

        for (var j = 0; j < opacityEffectObjects.length; j++) {

            var OpacityEffectTarget = opacityEffectObjects[j];

            //var scrollContainers = $(".scroll-container");
            //var mainScrollContainer = scrollContainers[0];
            //const mainScrollBar = Scrollbar.init(mainScrollContainer);
            var scrollContainers = $(".scroll-container");
            var mainScrollContainer = scrollContainers[0];
            const mainScrollBar = Scrollbar.init(mainScrollContainer);
            var isVisibleCheckerForOpacityEffect = mainScrollBar.isVisible(OpacityEffectTarget);
            //console.log ("Object " + j + " visibility: " + isVisibleCheckerForOpacityEffect);


            if (isVisibleCheckerForOpacityEffect == true) {
                $(OpacityEffectTarget).addClass("visible");
            } else {
                $(OpacityEffectTarget).removeClass("visible");
            }
        };


        //console.log('onscroll function fired.');
    }


    Scroll.addListener(throttle(runOnScroll, 100));


    var images = [];

    function preload() {
        for (var i = 0; i < arguments.length; i++) {
            images[i] = new Image();
            images[i].src = preload.arguments[i];
        }
    }
    preload("iframes/bJunior Pocket/Visuals/images/TeasingV201080X1350min.jpg",
        "iframes/bJunior Pocket/Visuals/images/Joystickmin.jpg",
        "iframes/bJunior Pocket/Visuals/images/Scootermin.jpg",
        "iframes/bJunior Pocket/Visuals/images/Telescopemin.jpg",
        "iframes/bJunior Pocket/Visuals/images/Thumbnailmin.jpg",
        "iframes/bJunior Pocket/Visuals/images/Gift_Thumbnailmin.jpg",
        "iframes/bJunior Pocket/Visuals/videos/768-h.webm",
        "iframes/bJunior Pocket/Visuals/videos/Steps.webm", )


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


var parentWidth = window.innerWidth;
