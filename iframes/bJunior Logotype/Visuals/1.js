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



(lib.LogotypeRedesign01min = function() {
	this.initialize(img.LogotypeRedesign01min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,1080);


(lib.LogotypeRedesign02min = function() {
	this.initialize(img.LogotypeRedesign02min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,1080);


(lib.LogotypeRedesign03min = function() {
	this.initialize(img.LogotypeRedesign03min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,1080);


(lib.LogotypeRedesign04min = function() {
	this.initialize(img.LogotypeRedesign04min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,1080);


(lib.LogotypeRedesign05min = function() {
	this.initialize(img.LogotypeRedesign05min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,1080);


(lib.LogotypeRedesign06min = function() {
	this.initialize(img.LogotypeRedesign06min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,1080);


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
	this.instance = new lib.LogotypeRedesign06min();
	this.instance.setTransform(4813,0,0.8796,0.8796);

	this.instance_1 = new lib.LogotypeRedesign05min();
	this.instance_1.setTransform(3850,0,0.8796,0.8796);

	this.instance_2 = new lib.LogotypeRedesign04min();
	this.instance_2.setTransform(2888,0,0.8796,0.8796);

	this.instance_3 = new lib.LogotypeRedesign03min();
	this.instance_3.setTransform(1925,0,0.8796,0.8796);

	this.instance_4 = new lib.LogotypeRedesign02min();
	this.instance_4.setTransform(963,0,0.8796,0.8796);

	this.instance_5 = new lib.LogotypeRedesign01min();
	this.instance_5.setTransform(0,0,0.8796,0.8796);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5763,950);


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
	this.instance.setTransform(1745.8,460.8,1,1,0,0,0,1391,460.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1391,alpha:1},19,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6117.8,950);


// stage content:
(lib._1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [44];
	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Slider_3_copy_copy_copy_copy_copy_copy_copy_copy_copy
	this.instance = new lib.MovingImages("synched",19,false);
	this.instance.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).wait(1));

	// Mask_3_copy_copy_copy_copy_copy_copy_copy_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgniBUYMAAAiovMBPFAAAMAAACovg");
	mask.setTransform(5751.1,540);

	// Slider_3_copy_copy_copy_copy_copy_copy_copy_copy
	this.instance_1 = new lib.MovingImages("synched",0,false);
	this.instance_1.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(37));

	// Mask_3_copy_copy_copy_copy_copy_copy_copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgniBUYMAAAiovMBPFAAAMAAACovg");
	mask_1.setTransform(5246.5,540);

	// Slider_3_copy_copy_copy_copy_copy_copy_copy
	this.instance_2 = new lib.MovingImages("synched",0,false);
	this.instance_2.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(41));

	// Mask_3_copy_copy_copy_copy_copy_copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("EgniBUYMAAAiovMBPFAAAMAAACovg");
	mask_2.setTransform(4741.9,540);

	// Slider_3_copy_copy_copy_copy_copy_copy
	this.instance_3 = new lib.MovingImages("synched",0,false);
	this.instance_3.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45));

	// Mask_3_copy_copy_copy_copy_copy_copy_copy (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EgbPBUYMAAAiovMA2fAAAMAAACovg");
	mask_3.setTransform(4317.5,540);

	// Slider_3_copy_copy_copy_copy_copy_copy_copy
	this.instance_4 = new lib.MovingImages("synched",0,false);
	this.instance_4.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(41));

	// Mask_3_copy_copy_copy_copy_copy (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("EgZJBUYMAAAiovMAyTAAAMAAACovg");
	mask_4.setTransform(4002.75,540);

	// Slider_3_copy_copy_copy_copy_copy
	this.instance_5 = new lib.MovingImages("synched",0,false);
	this.instance_5.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(41));

	// Mask_3_copy_copy_copy_copy (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("EgZxBUYMAAAiovMAzjAAAMAAACovg");
	mask_5.setTransform(3683.025,540);

	// Slider_3_copy_copy_copy_copy
	this.instance_6 = new lib.MovingImages("synched",0,false);
	this.instance_6.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).wait(37));

	// Mask_3_copy_copy_copy (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("EgZOBUpMAAAipRMAydAAAMAAACpRg");
	mask_6.setTransform(3365.525,541.675);

	// Slider_3_copy_copy_copy
	this.instance_7 = new lib.MovingImages("synched",0,false);
	this.instance_7.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({_off:false},0).wait(33));

	// Mask_3_copy_copy (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("EgZOBUpMAAAipRMAydAAAMAAACpRg");
	mask_7.setTransform(3043.5,541.675);

	// Slider_3_copy_copy
	this.instance_8 = new lib.MovingImages("synched",0,false);
	this.instance_8.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({_off:false},0).wait(29));

	// Mask_3_copy (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("EgZTBUzMAAAiplMAynAAAMAAACplg");
	mask_8.setTransform(2722,543.325);

	// Slider_3_copy
	this.instance_9 = new lib.MovingImages("synched",0,false);
	this.instance_9.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20).to({_off:false},0).wait(25));

	// Mask_2_copy (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("EgZJBUYMAAAiovMAyTAAAMAAACovg");
	mask_9.setTransform(2401,540);

	// Slider_2_copy
	this.instance_10 = new lib.MovingImages("synched",0,false);
	this.instance_10.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24).to({_off:false},0).wait(21));

	// Mask1_copy (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("EgZJBUYMAAAiovMAyTAAAMAAACovg");
	mask_10.setTransform(2081,540);

	// Slider_copy
	this.instance_11 = new lib.MovingImages("synched",0,false);
	this.instance_11.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(28).to({_off:false},0).wait(17));

	// Mask_6 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	mask_11.graphics.p("EgZJBUYMAAAiovMAyTAAAMAAACovg");
	mask_11.setTransform(1761,540);

	// Slider_6
	this.instance_12 = new lib.MovingImages("synched",0,false);
	this.instance_12.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24).to({_off:false},0).wait(21));

	// Mask_5 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	mask_12.graphics.p("EgZJBUYMAAAiovMAyTAAAMAAACovg");
	mask_12.setTransform(1441,540);

	// Slider_5
	this.instance_13 = new lib.MovingImages("synched",0,false);
	this.instance_13.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(20).to({_off:false},0).wait(25));

	// Mask_4 (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	mask_13.graphics.p("EgZJBUYMAAAiovMAyTAAAMAAACovg");
	mask_13.setTransform(1121,540);

	// Slider_4
	this.instance_14 = new lib.MovingImages("synched",0,false);
	this.instance_14.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_13;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(16).to({_off:false},0).wait(29));

	// Mask_3 (mask)
	var mask_14 = new cjs.Shape();
	mask_14._off = true;
	mask_14.graphics.p("EgZJBUYMAAAiovMAyTAAAMAAACovg");
	mask_14.setTransform(801,540);

	// Slider_3
	this.instance_15 = new lib.MovingImages("synched",0,false);
	this.instance_15.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_14;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(12).to({_off:false},0).wait(33));

	// Mask_2 (mask)
	var mask_15 = new cjs.Shape();
	mask_15._off = true;
	mask_15.graphics.p("EgZJBUYMAAAiovMAyTAAAMAAACovg");
	mask_15.setTransform(481,540);

	// Slider_2
	this.instance_16 = new lib.MovingImages("synched",0,false);
	this.instance_16.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_15;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(8).to({_off:false},0).wait(37));

	// Mask1 (mask)
	var mask_16 = new cjs.Shape();
	mask_16._off = true;
	mask_16.graphics.p("EgZJBUYMAAAiovMAyTAAAMAAACovg");
	mask_16.setTransform(161,540);

	// Slider
	this.instance_17 = new lib.MovingImages("synched",0,false);
	this.instance_17.setTransform(1391,460.8,1,1,0,0,0,1391,460.8);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_16;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(4).to({_off:false},0).wait(41));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(2882,475,3122.2,475);
// library properties:
lib.properties = {
	id: 'F4B9FF46F9F8BF45AF45F2A472091E15',
	width: 5764,
	height: 950,
	fps: 35,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/LogotypeRedesign01min.jpg", id:"LogotypeRedesign01min"},
		{src:"images/LogotypeRedesign02min.jpg", id:"LogotypeRedesign02min"},
		{src:"images/LogotypeRedesign03min.jpg", id:"LogotypeRedesign03min"},
		{src:"images/LogotypeRedesign04min.jpg", id:"LogotypeRedesign04min"},
		{src:"images/LogotypeRedesign05min.jpg", id:"LogotypeRedesign05min"},
		{src:"images/LogotypeRedesign06min.jpg", id:"LogotypeRedesign06min"}
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