(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.k1 = function() {
	this.initialize(img.k1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1650,540);


(lib.k2 = function() {
	this.initialize(img.k2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1650,540);


(lib.k3 = function() {
	this.initialize(img.k3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1650,540);


(lib.k4 = function() {
	this.initialize(img.k4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1650,540);


(lib.k5 = function() {
	this.initialize(img.k5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1650,540);


(lib.k6 = function() {
	this.initialize(img.k6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1650,540);


(lib.ImagesGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.k4();
	this.instance.setTransform(1399,469,0.8382,0.8381);

	this.instance_1 = new lib.k3();
	this.instance_1.setTransform(1399,0,0.8382,0.8381);

	this.instance_2 = new lib.k2();
	this.instance_2.setTransform(0,469,0.8382,0.8381);

	this.instance_3 = new lib.k1();
	this.instance_3.setTransform(0,0,0.8382,0.838);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2782,921.6);


(lib.MovingImages = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ImagesGroup("synched",0);
	this.instance.setTransform(1754.3,460.8,1,1,0,0,0,1391,460.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1391,alpha:1},29,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3145.3,921.6);


// stage content:
(lib._1v3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [50];
	// timeline functions:
	this.frame_50 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(1));

	// Slider_6
	this.instance = new lib.MovingImages("synched",29,false);
	this.instance.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);

	this.instance_1 = new lib.k6();
	this.instance_1.setTransform(2798,469,0.8382,0.8381);

	this.instance_2 = new lib.k5();
	this.instance_2.setTransform(2798,0,0.8382,0.8381);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},50).wait(1));

	// Mask_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgY/BUYMAAAiovMAx/AAAMAAACovg");
	mask.setTransform(1760,540);

	// Slider_6
	this.instance_3 = new lib.MovingImages("synched",0,false);
	this.instance_3.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);

	this.instance_4 = new lib.k6();
	this.instance_4.setTransform(2798,469,0.4191,0.4191);

	this.instance_5 = new lib.k5();
	this.instance_5.setTransform(2798,0,0.4191,0.4191);

	var maskedShapeInstanceList = [this.instance_3,this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},14).to({state:[]},36).wait(1));

	// Mask_5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgY/BUYMAAAiovMAx/AAAMAAACovg");
	mask_1.setTransform(1440,540);

	// Slider_5
	this.instance_6 = new lib.MovingImages("synched",0,false);
	this.instance_6.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);

	this.instance_7 = new lib.k6();
	this.instance_7.setTransform(2798,469,0.4191,0.4191);

	this.instance_8 = new lib.k5();
	this.instance_8.setTransform(2798,0,0.4191,0.4191);

	var maskedShapeInstanceList = [this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},12).to({state:[]},38).wait(1));

	// Mask_4 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EgY/BUYMAAAiovMAx/AAAMAAACovg");
	mask_2.setTransform(1120,540);

	// Slider_4
	this.instance_9 = new lib.MovingImages("synched",0,false);
	this.instance_9.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);

	this.instance_10 = new lib.k6();
	this.instance_10.setTransform(2798,469,0.4191,0.4191);

	this.instance_11 = new lib.k5();
	this.instance_11.setTransform(2798,0,0.4191,0.4191);

	var maskedShapeInstanceList = [this.instance_9,this.instance_10,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},10).to({state:[]},40).wait(1));

	// Mask_3 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EgY/BUYMAAAiovMAx/AAAMAAACovg");
	mask_3.setTransform(800,540);

	// Slider_3
	this.instance_12 = new lib.MovingImages("synched",0,false);
	this.instance_12.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);

	this.instance_13 = new lib.k6();
	this.instance_13.setTransform(2798,469,0.4191,0.4191);

	this.instance_14 = new lib.k5();
	this.instance_14.setTransform(2798,0,0.4191,0.4191);

	var maskedShapeInstanceList = [this.instance_12,this.instance_13,this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]},8).to({state:[]},42).wait(1));

	// Mask_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("EgY/BUYMAAAiovMAx/AAAMAAACovg");
	mask_4.setTransform(480,540);

	// Slider_2
	this.instance_15 = new lib.MovingImages("synched",0,false);
	this.instance_15.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);

	this.instance_16 = new lib.k6();
	this.instance_16.setTransform(2798,469,0.4191,0.4191);

	this.instance_17 = new lib.k5();
	this.instance_17.setTransform(2798,0,0.4191,0.4191);

	var maskedShapeInstanceList = [this.instance_15,this.instance_16,this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]},6).to({state:[]},44).wait(1));

	// Mask1 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("EgY/BUYMAAAiovMAx/AAAMAAACovg");
	mask_5.setTransform(160,540);

	// Slider
	this.instance_18 = new lib.MovingImages("synched",0,false);
	this.instance_18.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(4).to({_off:false},0).to({_off:true},46).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4181,921.6);
// library properties:
lib.properties = {
	id: 'F4B9FF46F9F8BF45AF45F2A472091E15',
	width: 4181,
	height: 922,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/k1.jpg", id:"k1"},
		{src:"images/k2.jpg", id:"k2"},
		{src:"images/k3.jpg", id:"k3"},
		{src:"images/k4.jpg", id:"k4"},
		{src:"images/k5.jpg", id:"k5"},
		{src:"images/k6.jpg", id:"k6"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F4B9FF46F9F8BF45AF45F2A472091E15'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;