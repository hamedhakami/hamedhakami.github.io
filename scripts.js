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


            function refreshIframe() {
                iframeTarget.src = iframeTarget.src;
            }

            function loadIframe() {

                arrayOfFunction[i]();
				arrayOfFunction[i+1]();
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


        console.log('onscroll function fired.');
    }


    Scroll.addListener(throttle(runOnScroll, 100));


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
